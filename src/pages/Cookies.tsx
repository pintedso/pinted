import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: 16 August 2025</p>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Pinted ("we," "our," "us") uses cookies and similar technologies to improve your experience, remember your preferences, and help us understand how people use our app. This Cookie Policy explains what cookies are, how we use them, and your choices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
              <p>Cookies are small text files stored on your device when you visit a website or use an app. They help us remember your settings, keep you logged in, and make the service work smoothly.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">We use cookies for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies</strong> – required to log in, manage accounts, and use the service.</li>
                <li><strong>Preferences</strong> – store your chosen settings (like light/dark mode).</li>
                <li><strong>Performance & Analytics</strong> – help us understand usage patterns and improve features (e.g., page load speed, most used features).</li>
                <li><strong>Security</strong> – prevent abuse, detect fraud, and enforce account limits.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Third-Party Cookies</h2>
              <p className="mb-4">Some cookies may come from trusted third parties we work with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Stripe</strong> – for secure payment processing.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Your Choices</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You can adjust or block cookies in your browser or device settings.</li>
                <li><strong>Note:</strong> blocking essential cookies may prevent Pinted from working properly.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Updates to This Policy</h2>
              <p>We may update this Cookie Policy occasionally. Updates will be posted here with a new "Last updated" date.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p>If you have questions about this Cookie Policy, reach us at:</p>
              <p>📧 <a href="mailto:pintedso@gmail.com" className="text-primary hover:underline">pintedso@gmail.com</a></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;