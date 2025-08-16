import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="hero-gradient py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-accent px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            AI-Powered Learning
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Learn anything.{" "}
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Instantly.
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Describe what you want to learn, and Pinted creates a personalized course for you in seconds.
          Interactive quizzes, progress tracking, and AI-powered lessons tailored just for you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" className="group">
            Start Learning
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="text-base px-8 py-3 rounded-lg">
            See How It Works
          </Button>
        </div>
        
        <div className="mt-12 text-sm text-muted-foreground">
          ✨ No setup required • 🎯 Personalized to you • 🚀 Start learning immediately
        </div>
      </div>
    </section>
  )
}