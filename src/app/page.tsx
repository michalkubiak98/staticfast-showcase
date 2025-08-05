export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold mr-3">
                ⚡
              </div>
              <span className="text-lg font-bold text-gray-900">
                StaticFast
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Live Demo
              </a>
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Features
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Reviews
              </a>
              <a
                href="https://github.com/michalkubiak98/staticfast-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:scale-105 transition-all"
              >
                Get StaticFast 🚀
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - ShipFast inspired */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-yellow-50 via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              FREE while in beta • No credit card required
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Ship your{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                client websites
              </span>
              {' '}in 30 minutes
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Stop wrestling with AWS infrastructure. StaticFast gives you everything you need: 
              <span className="font-semibold text-gray-900"> Next.js + CDK + GitHub Actions</span>
              . Just copy, configure, deploy. 
              <span className="bg-yellow-200 px-1 rounded">Your clients will think you&apos;re a wizard</span> ⚡
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://github.com/michalkubiak98/staticfast-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all text-lg"
              >
                Clone StaticFast Now 🚀
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors text-lg"
              >
                See Live Demo
              </a>
            </div>
            
            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2 text-lg">★★★★★</div>
                <span>Loved by developers</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">⚡</span>
                <span>Deploy in minutes, not hours</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">💰</span>
                <span>~$2/month hosting costs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problem */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Tired of explaining AWS to clients? 😤
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">❌</span>
                  Spending days setting up S3, CloudFront, Route53, SSL certificates...
                </p>
                <p className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">❌</span>
                  Writing the same CDK infrastructure code over and over
                </p>
                <p className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">❌</span>
                  Manually configuring GitHub Actions for every project
                </p>
                <p className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">❌</span>
                  Clients asking &quot;Why does hosting cost so much?&quot; (it doesn&apos;t, but explaining takes forever)
                </p>
              </div>
            </div>
            
            {/* Solution */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Just copy, configure, deploy ✨
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✅</span>
                  Complete AWS infrastructure as code (S3 + CloudFront + Route53)
                </p>
                <p className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✅</span>
                  Professional Next.js template with environment variables for everything
                </p>
                <p className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✅</span>
                  GitHub Actions that deploy automatically on push
                </p>
                <p className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✅</span>
                  Transparent pricing: ~$2/month total. Show clients the AWS bill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              See it in action 👀
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This showcase website was built using StaticFast in under 30 minutes. 
              No joke. Here&apos;s what you get:
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm mb-8">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=675&fit=crop&crop=entropy&cs=tinysrgb" 
                alt="Professional website built with StaticFast"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Professional business website
              </h3>
              <p className="text-gray-600 mb-4">
                Responsive design, contact forms, service sections, testimonials - everything your clients need
              </p>
              <div className="flex justify-center gap-4">
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  ⚡ Fast loading
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  📱 Mobile optimized
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  🔒 HTTPS secure
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="https://github.com/michalkubiak98/staticfast-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all"
            >
              Try it yourself →
            </a>
          </div>
        </div>
      </section>

      {/* Features Section - Developer focused */}
      <section id="features" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything you need, nothing you don&apos;t 🎯
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built by developers, for developers. No bloat, no complexity, just results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 text-2xl mb-4">
                ⚡
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Deploy in 30 minutes</h3>
              <p className="text-gray-600">
                No more weekend deployments. Copy, configure .env, run deploy. Your clients get their site today, not next week.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-2xl mb-4">
                💰
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Stupidly cheap hosting</h3>
              <p className="text-gray-600">
                ~$2/month total AWS costs. Show clients the actual bill. No markup needed. They&apos;ll think you&apos;re magic.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl mb-4">
                🤖
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Claude Code integration</h3>
              <p className="text-gray-600">
                Built specifically for Claude Code. AI handles the complex stuff. You handle the creative decisions.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-4">
                🏗️
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Production-ready infrastructure</h3>
              <p className="text-gray-600">
                S3 + CloudFront + Route53 + SSL. All configured securely. No &quot;it works on my machine&quot; problems.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-2xl mb-4">
                🚀
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Auto-deploy on push</h3>
              <p className="text-gray-600">
                GitHub Actions configured. Push to main = instant deploy. Your clients see changes immediately.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 text-2xl mb-4">
                🎨
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Environment-driven design</h3>
              <p className="text-gray-600">
                Colors, content, contact info - all configurable via .env. No code changes needed for new clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Early testers are loving it 💙
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from developers using StaticFast
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">
                &ldquo;Finally! No more copying CDK files between projects. This saved me literally hours on my last client site.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">
                  A
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Alex Chen</div>
                  <div className="text-sm text-gray-500">Freelance Developer</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">
                &ldquo;My clients are amazed at how fast I can deliver. The $2/month hosting cost makes them think I&apos;m a wizard.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold mr-3">
                  S
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Kim</div>
                  <div className="text-sm text-gray-500">Agency Owner</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">
                &ldquo;Perfect for small business clients. Professional results without the enterprise complexity.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold mr-3">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Mike Johnson</div>
                  <div className="text-sm text-gray-500">Full-stack Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to ship faster? 🚀
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join developers who are already shipping client websites in minutes, not weeks. 
            <span className="font-bold">It&apos;s free while in beta</span> - no credit card, no catch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://github.com/michalkubiak98/staticfast-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all text-lg"
            >
              Clone on GitHub 🚀
            </a>
            <a
              href="https://github.com/michalkubiak98/staticfast-boilerplate/blob/master/FIRST-STEPS.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all text-lg"
            >
              Read the Docs
            </a>
          </div>
          
          <p className="text-sm text-white/80">
            ⭐ Star the repo if you find it useful • Built with ❤️ for the dev community
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold mr-3">
                  ⚡
                </div>
                <h3 className="text-lg font-bold text-white">
                  StaticFast
                </h3>
              </div>
              <p className="text-gray-400 max-w-md mx-auto">
                Ship professional client websites in 30 minutes. Built by developers, for developers.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
              <a 
                href="https://github.com/michalkubiak98/staticfast-boilerplate" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                🚀 GitHub Repository
              </a>
              <a 
                href="https://github.com/michalkubiak98/staticfast-boilerplate/blob/master/FIRST-STEPS.md" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                📚 Documentation
              </a>
              <a 
                href="https://github.com/michalkubiak98/staticfast-boilerplate/issues" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                🐛 Report Issues
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-sm text-gray-400">
              <p>&copy; 2025 StaticFast. Open source and free forever.</p>
              <p className="mt-2">
                Made with ⚡ by developers who got tired of setting up the same infrastructure over and over
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}