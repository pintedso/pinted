import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Sparkles } from "lucide-react"
import { supabase } from "@/integrations/supabase/client"
import { useToast } from "@/hooks/use-toast"

interface SignUpDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SignUpDialog({ open, onOpenChange }: SignUpDialogProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const validateUsername = (username: string) => {
    if (username.length < 3) {
      return "Username must be at least 3 characters long"
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return "Username can only contain letters, numbers, and underscores"
    }
    return null
  }

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long"
    }
    if (!/[A-Za-z]/.test(password)) {
      return "Password must contain at least one letter"
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number"
    }
    return null
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const usernameError = validateUsername(username)
    if (usernameError) {
      toast({
        title: "Invalid username",
        description: usernameError,
        variant: "destructive"
      })
      return
    }

    const passwordError = validatePassword(password)
    if (passwordError) {
      toast({
        title: "Invalid password", 
        description: passwordError,
        variant: "destructive"
      })
      return
    }

    setLoading(true)

    try {
      // Use username as email (username@pinted.com)
      const email = `${username}@pinted.com`
      
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            username: username
          }
        }
      })
      
      if (error) {
        if (error.message.includes("already registered")) {
          toast({
            title: "Username taken",
            description: "This username is already taken. Please choose a different one.",
            variant: "destructive"
          })
        } else {
          toast({
            title: "Sign up failed",
            description: error.message,
            variant: "destructive"
          })
        }
      } else {
        toast({
          title: "Account created!",
          description: "Welcome to Pinted! You can now start creating courses.",
        })
        onOpenChange(false)
        window.location.href = "/"
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "Please try again later.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>
          <DialogTitle className="text-2xl">Create your account</DialogTitle>
          <DialogDescription>
            Choose a username and password to get started with Pinted
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">Username</label>
            <Input
              id="username"
              type="text"
              placeholder="Choose a unique username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <p className="text-xs text-muted-foreground">
              3+ characters, letters, numbers, and underscores only
            </p>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <Input
              id="password"
              type="password"
              placeholder="Create a secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-xs text-muted-foreground">
              8+ characters with letters and numbers
            </p>
          </div>
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>
        
        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href="/auth">Sign in instead</a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}