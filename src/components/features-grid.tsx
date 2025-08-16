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
    icon: Smartphone,
    title: "Learn Anywhere",
    description: "Whether you're at your desk, on your phone, or curled up with a tablet, Pinted works seamlessly across devices. Your courses and progress follow you everywhere — so you can learn whenever inspiration strikes."
  },
  {
    icon: Volume2,
    title: "Text-to-Speech Lessons",
    description: "Prefer to listen instead of read? Pinted can read your lessons out loud in natural AI voices. Perfect for learning on the go, or for those who absorb knowledge better by hearing."
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Stay motivated with clean, visual progress tracking. See your streaks, completion percentages, and learning stats at a glance. Watch your growth over time and never lose sight of how far you've come."
  },
  {
    icon: CheckCircle,
    title: "Instant Feedback",
    description: "No more guessing if you're right or wrong. Pinted gives you instant feedback on every answer — green when you nail it, red when you miss it — plus a quick explanation so you actually understand, not just memorize."
  },
  {
    icon: BrainCircuit,
    title: "Interactive Quizzes",
    description: "Every lesson comes alive with quizzes that test your knowledge. Answer multiple-choice questions, fill in the blanks, and practice with flashcards. Each interaction keeps you engaged and ensures the knowledge actually sticks."
  },
  {
    icon: Bot,
    title: "AI Course Generation",
    description: "Tell Pinted what you want to learn — \"Spanish for travel,\" \"Intro to coding,\" or even \"How to use a camera\" — and instantly get a structured, step-by-step course built just for you. No waiting, no endless Googling — just type it and start learning."
  }
]

export function FeaturesGrid() {
  return (
    <section className="py-24 px-4 relative bg-gradient-to-br from-muted/30 to-muted/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need
          </h2>
        </div>
        
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group sticky bg-card border rounded-3xl p-16 card-shadow hover:card-shadow-hover transition-smooth"
              style={{ 
                zIndex: features.length - index,
                top: `${80 + index * 20}px`
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="p-6 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-smooth flex-shrink-0">
                      <feature.icon className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-6">{feature.title}</h3>
                      <p className="text-xl text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="h-96 bg-muted/50 rounded-2xl flex items-center justify-center text-muted-foreground text-lg">
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