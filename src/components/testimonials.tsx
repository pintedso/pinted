import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah M.",
    role: "Student",
    rating: 5,
    text: "I typed in 'Python for beginners' and within seconds had a whole course ready. Way better than googling random tutorials."
  },
  {
    name: "James R.",
    role: "Traveler",
    rating: 5,
    text: "I wanted to learn basic French before my trip. Pinted gave me flashcards, quizzes, and speaking practice. Loved it."
  },
  {
    name: "Aisha K.",
    role: "Professional",
    rating: 5,
    text: "Finally an AI tool that makes learning structured and fun. It feels like a private tutor built just for me."
  },
  {
    name: "Liam D.",
    role: "Tech Enthusiast",
    rating: 5,
    text: "It feels magical. I asked for a JavaScript crash course, and in 10 seconds I had one with quizzes and exercises. Insane."
  },
  {
    name: "Emma S.",
    role: "Parent",
    rating: 5,
    text: "My kid wanted to learn dinosaurs. Pinted created a mini science course that kept him hooked for hours."
  },
  {
    name: "Carlos V.",
    role: "Language Learner",
    rating: 5,
    text: "Pronunciation practice is a game changer. I can speak and instantly know if I said it right."
  },
  {
    name: "Olivia W.",
    role: "Career Changer",
    rating: 5,
    text: "I used Pinted to quickly learn Excel shortcuts for work. Way faster than YouTube tutorials."
  }
]

export function Testimonials() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by learners worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            See what people are saying about their Pinted experience
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <div className="flex gap-6 pb-4" style={{ width: 'fit-content' }}>
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="w-80 flex-shrink-0 card-shadow hover:card-shadow-hover transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}