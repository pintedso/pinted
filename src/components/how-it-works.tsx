import { MessageSquare, Bot, Play } from "lucide-react"
import { useState } from "react"

const steps = [
  {
    icon: MessageSquare,
    title: "Describe your goal",
    description: "Enter what you want to learn in simple words.",
    example: "\"Spanish for travel in 2 weeks\"",
    image: "step1-placeholder.gif"
  },
  {
    icon: Bot,
    title: "AI builds your course",
    description: "Lessons, quizzes, flashcards, and activities generated instantly.",
    example: "Structured curriculum with interactive content",
    image: "step2-placeholder.gif"
  },
  {
    icon: Play,
    title: "Start learning interactively",
    description: "Take quizzes, practice with TTS and speech, track your progress.",
    example: "Personalized learning experience",
    image: "step3-placeholder.gif"
  }
]

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Pinted Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to start your personalized learning journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps - Left Side */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-2xl transition-smooth cursor-pointer border-2 ${
                  activeStep === index 
                    ? 'bg-card border-primary card-shadow-hover' 
                    : 'bg-card/50 border-transparent hover:border-primary/30'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-xl transition-smooth ${
                    activeStep === index ? 'bg-primary text-primary-foreground' : 'bg-accent'
                  }`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="text-sm font-medium text-primary">Step {index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="bg-accent/50 rounded-lg p-3 text-sm text-muted-foreground italic">
                      {step.example}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Image - Right Side */}
          <div className="relative">
            <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center text-muted-foreground text-lg font-medium transition-smooth">
              {steps[activeStep].image}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}