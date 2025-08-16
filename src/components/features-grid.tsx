import { 
  Bot, 
  BrainCircuit, 
  CheckCircle, 
  TrendingUp, 
  Volume2, 
  Smartphone 
} from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Course Generation",
    description: "Tell Pinted what you want to learn — \"Spanish for travel,\" \"Intro to coding,\" or even \"How to use a camera\" — and instantly get a structured, step-by-step course built just for you. No waiting, no endless Googling — just type it and start learning."
  },
  {
    icon: BrainCircuit,
    title: "Interactive Quizzes",
    description: "Every lesson comes alive with quizzes that test your knowledge. Answer multiple-choice questions, fill in the blanks, and practice with flashcards. Each interaction keeps you engaged and ensures the knowledge actually sticks."
  },
  {
    icon: CheckCircle,
    title: "Instant Feedback",
    description: "No more guessing if you're right or wrong. Pinted gives you instant feedback on every answer — green when you nail it, red when you miss it — plus a quick explanation so you actually understand, not just memorize."
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Stay motivated with clean, visual progress tracking. See your streaks, completion percentages, and learning stats at a glance. Watch your growth over time and never lose sight of how far you've come."
  },
  {
    icon: Volume2,
    title: "Text-to-Speech Lessons",
    description: "Prefer to listen instead of read? Pinted can read your lessons out loud in natural AI voices. Perfect for learning on the go, or for those who absorb knowledge better by hearing."
  },
  {
    icon: Smartphone,
    title: "Learn Anywhere",
    description: "Whether you're at your desk, on your phone, or curled up with a tablet, Pinted works seamlessly across devices. Your courses and progress follow you everywhere — so you can learn whenever inspiration strikes."
  }
]

export function FeaturesGrid() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything you need to learn effectively
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to make learning interactive, personalized, and fun.
          </p>
        </div>
        
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group sticky top-20 bg-card border rounded-3xl p-12 card-shadow hover:card-shadow-hover transition-smooth"
              style={{ 
                zIndex: features.length - index,
                top: `${80 + index * 20}px`
              }}
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex items-center gap-6 lg:w-2/5">
                  <div className="p-6 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-smooth">
                    <feature.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold">{feature.title}</h3>
                </div>
                <div className="lg:w-3/5">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  {/* Placeholder for future GIFs */}
                  <div className="h-64 bg-muted/50 rounded-xl flex items-center justify-center text-muted-foreground">
                    GIF placeholder - {feature.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}