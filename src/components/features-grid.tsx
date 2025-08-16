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
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to learn effectively
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make learning interactive, personalized, and fun.
          </p>
        </div>
        
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group sticky top-24 bg-card border rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-smooth hover:-translate-y-2"
              style={{ zIndex: features.length - index }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex items-center gap-4 md:w-1/3">
                  <div className="p-4 bg-accent rounded-xl group-hover:bg-primary/10 transition-smooth">
                    <feature.icon className="h-8 w-8 group-hover:text-primary transition-smooth" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed md:w-2/3">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}