import { MessageSquare, Bot, Play } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Describe your goal",
    description: "Enter what you want to learn in simple words.",
    example: "\"Spanish for travel in 2 weeks\""
  },
  {
    icon: Bot,
    title: "AI builds your course",
    description: "Lessons, quizzes, flashcards, and activities generated instantly.",
    example: "Structured curriculum with interactive content"
  },
  {
    icon: Play,
    title: "Start learning interactively",
    description: "Take quizzes, practice with TTS and speech, track your progress.",
    example: "Personalized learning experience"
  }
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Pinted Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to start your personalized learning journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 bg-card rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center border-2 border-primary/20">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center">
                  <step.icon className="h-6 w-6" />
                </div>
              </div>
              
              <div className="mb-2">
                <span className="text-sm font-medium text-primary">Step {index + 1}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {step.description}
              </p>
              
              <div className="bg-accent/50 rounded-lg p-3 text-sm text-muted-foreground italic">
                {step.example}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}