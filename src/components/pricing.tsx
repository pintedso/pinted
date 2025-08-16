import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Best for trying it out, casual learners. Generate 2 courses total • Basic interactive quizzes (MCQ, blanks, flashcards) • Progress tracking (per course) • Light/Dark mode toggle",
    features: [],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Super",
    price: "$19.99",
    period: "/month",
    description: "Best for regular learners, professionals. Unlimited course generation • All quiz types (MCQ, blanks, flashcards, True/False) • Progress tracking + analytics • Text-to-speech for lessons • Priority AI responses (faster) • Early access to new features",
    yearlyPrice: "$199/year",
    features: [],
    cta: "Try Super Today",
    popular: true
  }
]

const featureComparison = [
  { feature: "Course Generation", free: "2 total", pro: "Unlimited" },
  { feature: "Quiz Types", free: "MCQ, Blanks, Flashcards", pro: "All (MCQ, Blanks, Flashcards, True/False)" },
  { feature: "Progress Tracking", free: "Basic (per course)", pro: "Advanced (analytics & history)" },
  { feature: "Text-to-Speech", free: "Not included", pro: "Included" },
  { feature: "Dark/Light Mode", free: "Included", pro: "Included" },
  { feature: "AI Response Speed", free: "Normal", pro: "Priority (faster)" },
  { feature: "New Feature Access", free: "Standard", pro: "Early access" }
]

export function Pricing() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-muted/30 to-muted/60" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>
        
        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''} card-shadow hover:card-shadow-hover transition-smooth`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.yearlyPrice && (
                    <div className="text-sm text-muted-foreground">
                      or {plan.yearlyPrice} (save 30%)
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg font-medium mb-2">Start free today. Upgrade to Super anytime.</p>
          <p className="text-muted-foreground">No setup fees • Cancel anytime • 30-day money-back guarantee</p>
        </div>
      </div>
    </section>
  )
}