import { 
  Bot, 
  BrainCircuit, 
  CheckCircle, 
  TrendingUp, 
  Target, 
  Volume2, 
  Mic, 
  Smartphone, 
  Moon 
} from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI-Powered Courses",
    description: "From one sentence to a structured course with lessons and quizzes."
  },
  {
    icon: BrainCircuit,
    title: "Interactive Quizzes",
    description: "Multiple choice, fill-in-the-blanks, flashcards, and true/false questions."
  },
  {
    icon: CheckCircle,
    title: "Instant Feedback",
    description: "Know right away if you're correct or wrong with detailed explanations."
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "See completion percentage, quiz scores, and learning streaks."
  },
  {
    icon: Target,
    title: "Adaptive Learning",
    description: "Extra practice on weak spots with AI-powered recommendations."
  },
  {
    icon: Volume2,
    title: "Text-to-Speech",
    description: "Listen to lessons read out loud with natural-sounding voices."
  },
  {
    icon: Mic,
    title: "Speech Practice",
    description: "Speak your answers and get pronunciation feedback."
  },
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Works seamlessly on desktop, tablet, and mobile devices."
  },
  {
    icon: Moon,
    title: "Dark Mode Ready",
    description: "Switch seamlessly between light and dark themes."
  }
]

export function FeaturesGrid() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to learn effectively
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make learning interactive, personalized, and fun.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-lg border card-shadow hover:card-shadow-hover transition-smooth hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent rounded-lg group-hover:bg-primary/10 transition-smooth">
                  <feature.icon className="h-5 w-5 group-hover:text-primary transition-smooth" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}