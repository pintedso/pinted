import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "What is Pinted?",
    answer: "Pinted is an AI-powered learning platform that generates personalized courses from just a short description. Simply tell us what you want to learn, and we'll create a structured course with lessons, quizzes, and interactive activities."
  },
  {
    question: "Is it free to use?",
    answer: "Yes! Pinted offers a free plan that allows you to generate 2 courses with basic features. For unlimited course generation and advanced features like text-to-speech and detailed analytics, you can upgrade to our Pro plan."
  },
  {
    question: "What kinds of things can I learn?",
    answer: "Anything! From coding and languages to history, career skills, or even niche hobbies. Our AI can create courses on virtually any topic you're interested in learning."
  },
  {
    question: "Do I need to install anything?",
    answer: "No, Pinted works entirely in your browser on desktop and mobile devices. No downloads or installations required - just visit our website and start learning."
  },
  {
    question: "Can I track my progress?",
    answer: "Absolutely! Your dashboard shows completion percentages, quiz scores, learning streaks, and detailed analytics to help you understand your learning journey."
  },
  {
    question: "Does it support speech or listening practice?",
    answer: "Yes! Pro users can listen to lessons with our text-to-speech feature. We're also working on speech recognition for pronunciation practice in upcoming updates."
  },
  {
    question: "Can I share my courses?",
    answer: "Course sharing isn't available in the current version, but we're working on collaboration features that will allow you to share courses and learn with others."
  }
]

export function FAQ() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Pinted
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg border card-shadow px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Try Pinted Now
          </Button>
        </div>
      </div>
    </section>
  )
}