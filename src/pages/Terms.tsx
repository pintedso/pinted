import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: 16 August 2025</p>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Welcome to Pinted! These Terms of Service ("Terms") govern your use of our app, website, and services ("Services"). By signing up or using Pinted, you agree to these Terms and our Privacy Policy. If you don't agree, please don't use Pinted.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1. Eligibility</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must be at least 13 years old to use Pinted.</li>
                <li>If you're under 18, you need permission from a parent or guardian.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Accounts</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are responsible for your account and keeping your login details safe.</li>
                <li>Don't share your account or try to bypass limits (like creating multiple free accounts).</li>
                <li>We may suspend or terminate accounts if we detect abuse, fraud, or violations of these Terms.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Free and Pro Plans</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Free Plan:</strong> Limited to 2 course generations per month.</li>
                <li><strong>Pro Plan:</strong> Paid subscription with expanded features.</li>
                <li>Payments are processed securely via Stripe.</li>
                <li>Subscriptions renew automatically unless canceled before renewal.</li>
                <li>Features and pricing may change with notice.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use Pinted for illegal, harmful, or abusive purposes.</li>
                <li>Attempt to hack, overload, or disrupt our systems.</li>
                <li>Generate offensive, harmful, or unlawful content.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Pinted platform, branding, and technology belong to us.</li>
                <li>AI-generated course content is for your personal learning use — you may study, share, or adapt it, but not resell it as a competing product.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. No Guarantees</h2>
              <p className="mb-4">Pinted is provided "as is." We aim for high quality, but we can't guarantee that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI-generated content will always be accurate, complete, or reliable.</li>
                <li>The service will always be error-free or uninterrupted.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p>To the maximum extent allowed by law, we are not responsible for any damages or losses caused by your use of Pinted.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p>We may suspend or terminate your access if you violate these Terms, abuse the service, or harm the platform or other users.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Changes to These Terms</h2>
              <p>We may update these Terms from time to time. If changes are significant, we'll notify you in-app or by email. Continued use of Pinted means you accept the updated Terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
              <p>These Terms are governed by the laws of the United States.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
              <p>If you have questions about these Terms, contact us at:</p>
              <p>📧 <a href="mailto:pintedso@gmail.com" className="text-primary hover:underline">pintedso@gmail.com</a></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;