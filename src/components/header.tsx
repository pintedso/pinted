import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Pinted</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-smooth">
            How it Works
          </a>
          <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-smooth">
            Pricing
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-smooth">
            FAQ
          </a>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="cta">
            Try Pinted Now
          </Button>
        </div>
      </div>
    </header>
  )
}