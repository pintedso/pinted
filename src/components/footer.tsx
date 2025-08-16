import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Pinted</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Turn Curiosity Into Mastery
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:pintedso@gmail.com" className="hover:text-foreground transition-smooth">pintedso@gmail.com</a></li>
              <li><a href="/feedback" className="hover:text-foreground transition-smooth">Feedback</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/privacy" className="hover:text-foreground transition-smooth">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-foreground transition-smooth">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:text-foreground transition-smooth">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Pinted. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}