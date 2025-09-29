import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"; 
import { PROTECTED_ROUTES } from "@/routes/common/routePath"; 

const Payment = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    toast.success("💳 Payment Successful!", {
      duration: 2000,
    });

    setTimeout(() => {
      navigate(PROTECTED_ROUTES.OVERVIEW); // ✅ redirect to dashboard
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
          <RadioGroup defaultValue="card" className="space-y-4">
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

          <Button className="w-full" onClick={handlePayment}>
            Proceed to Pay
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;
