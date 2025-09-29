import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom";
import { PROTECTED_ROUTES } from "@/routes/common/routePath";


const plans = [
  {
    name: "Basic",
    price: "$9/month",
    description: "Best for individuals just getting started.",
    features: ["Access to core features", "Email support", "1 user"],
  },
  {
    name: "Pro",
    price: "$29/month",
    description: "Perfect for growing teams and small businesses.",
    features: [
      "Everything in Basic",
      "Advanced analytics",
      "Priority support",
      "Up to 5 users",
    ],
  },
  {
    name: "Enterprise",
    price: "$99/month",
    description: "For organizations that need full control & support.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "Unlimited users",
    ],
  },
]

const SubscriptionPlans = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className="shadow-sm hover:shadow-lg transition rounded-2xl border"
        >
          <CardContent className="p-6 flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-1">{plan.name}</h2>
            <p className="text-2xl font-bold text-blue-600 mb-2">
              {plan.price}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {plan.description}
            </p>
            <ul className="flex-1 mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-sm text-gray-700">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <Link to={PROTECTED_ROUTES.SETTINGS_PAYMENT} className="w-full mt-auto">
              <Button className="w-full">Subscribe</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

const Subscription = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Subscription</h3>
        <p className="text-sm text-muted-foreground">
          Choose a plan that fits your needs. You can upgrade or downgrade anytime.
        </p>
      </div>
      <Separator />
      <SubscriptionPlans />
    </div>
  )
}

export default Subscription
