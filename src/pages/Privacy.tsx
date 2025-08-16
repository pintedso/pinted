import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: 16 August 2025</p>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Pinted ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you use our app and services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Information:</strong> Email, username, and password.</li>
                <li><strong>Course Data:</strong> Prompts you enter and generated course content.</li>
                <li><strong>Usage Data:</strong> Quiz results, progress tracking, IP address, device information.</li>
                <li><strong>Payment Data:</strong> Handled securely by Stripe (we do not store your full card details).</li>
                <li><strong>Cookies:</strong> Used to remember preferences (e.g., dark/light mode, login session).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Data</h2>
              <p className="mb-4">We use your data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve the app's functionality.</li>
                <li>Generate personalized courses and quizzes.</li>
                <li>Track learning progress and maintain account limits (e.g., free plan restrictions).</li>
                <li>Prevent abuse (multiple free accounts, fraud, spam).</li>
                <li>Process payments (Pro plan).</li>
                <li>Communicate important updates.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Data Sharing</h2>
              <p className="mb-4">We share limited information with trusted providers:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>OpenAI API</strong> → for generating content from your prompts.</li>
                <li><strong>Stripe</strong> → for payment processing.</li>
                <li><strong>Supabase (or similar)</strong> → for secure storage of accounts and progress.</li>
              </ul>
              <p className="font-semibold">We never sell your personal data.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
              <p>We keep your data as long as you have an account. You may request deletion at any time.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Security</h2>
              <p>We use industry-standard security to protect your data, but no system is 100% secure.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have rights to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, update, or delete your personal data.</li>
                <li>Restrict or object to processing.</li>
                <li>Request data portability.</li>
              </ul>
              <p>Contact us at <a href="mailto:pintedso@gmail.com" className="text-primary hover:underline">pintedso@gmail.com</a> to exercise your rights.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
              <p>Pinted is not intended for users under 13.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Changes to Policy</h2>
              <p>We may update this policy occasionally. Updates will be posted here with a new "Last updated" date.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p>📧 <a href="mailto:pintedso@gmail.com" className="text-primary hover:underline">pintedso@gmail.com</a></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;