import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Sparkles, Rocket } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [topic, setTopic] = useState("")
  const [duration, setDuration] = useState("")
  const [experience, setExperience] = useState("")

  const handleGenerate = () => {
    // Direct to auth page
    window.location.href = "/auth"
  }

  return (
    <section className="hero-gradient py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-accent px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            AI-Powered Learning
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
          It's Like Duolingo.{" "}
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            But For Anything.
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          You describe what you want to learn and Pinted creates a personalized course in seconds.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" className="group" asChild>
            <a href="/auth">
              Start Learning
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" className="text-base px-8 py-3 rounded-lg" asChild>
            <a href="#how-it-works">
              See How It Works
            </a>
          </Button>
        </div>

        {/* Course Setup Widget */}
        <div className="max-w-3xl mx-auto bg-card border rounded-2xl p-10 card-shadow">
          <h3 className="text-2xl font-semibold mb-8">Create Your Course</h3>
          <div className="space-y-8">
            <div className="text-left">
              <label className="block text-base font-medium mb-3">What do you want to learn?</label>
              <Textarea 
                placeholder="e.g. guitar basics, front-end web development, Spanish..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="min-h-[160px] text-lg resize-none"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-left">
                <label className="block text-sm font-medium mb-2">Course Duration</label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-week">1 Week</SelectItem>
                    <SelectItem value="2-weeks">2 Weeks</SelectItem>
                    <SelectItem value="1-month">1 Month</SelectItem>
                    <SelectItem value="3-months">3 Months</SelectItem>
                    <SelectItem value="6-months">6 Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="text-left">
                <label className="block text-sm font-medium mb-2">Your Experience</label>
                <Select value={experience} onValueChange={setExperience}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Complete Beginner</SelectItem>
                    <SelectItem value="some-knowledge">Some Knowledge</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button 
              onClick={handleGenerate}
              className="w-full text-lg py-4"
              variant="hero"
            >
              <Rocket className="h-6 w-6 mr-2" />
              Generate My Course
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}