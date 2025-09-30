import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner"; 
import { PROTECTED_ROUTES } from "@/routes/common/routePath"; 
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // get plan from navigation state
  const plan = location.state?.plan || { name: "Basic", price: "₹9/month" };

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [open, setOpen] = useState(false);

  const handleConfirmPayment = () => {
    setOpen(false);
    toast.success("💳 Payment Successful!", { duration: 2000 });
    setTimeout(() => {
      navigate(PROTECTED_ROUTES.OVERVIEW);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Payment</h3>
        <p className="text-sm text-muted-foreground">
          Select your payment method and complete your subscription.
        </p>
      </div>
      <Separator />

      <Card className="w-full">
        <CardContent className="p-6 space-y-6">
          <RadioGroup
            defaultValue="card"
            className="space-y-4"
            onValueChange={setPaymentMethod}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">💳 Credit / Debit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi">📱 UPI / NetBanking</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal">🌍 PayPal</Label>
            </div>
          </RadioGroup>

          <Button className="w-full" onClick={() => setOpen(true)}>
            Proceed to Pay
          </Button>
        </CardContent>
      </Card>

      {/* 💡 Popup Confirmation */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Payment</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <p>
              <strong>Plan:</strong> {plan.name}
            </p>
            <p>
              <strong>Amount:</strong> {plan.price}
            </p>
            <p>
              <strong>Payment Method:</strong>{" "}
              {paymentMethod === "card"
                ? "Credit / Debit Card"
                : paymentMethod === "upi"
                ? "UPI / NetBanking"
                : "PayPal"}
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirmPayment}>Confirm & Pay</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Payment;
