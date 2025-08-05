'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold mr-3 shadow-lg">
                ⚡
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                StaticFast
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium">
                Features
              </a>
              <a href="#showcase" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium">
                Showcase
              </a>
              <a href="#stack" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium">
                Tech Stack
              </a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                aria-label="Toggle dark mode"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <a
                href="https://github.com/michalkubiak98/staticfast-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Get StaticFast →
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,193,7,0.1),transparent)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,193,7,0.05),transparent)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-8 border border-green-200 dark:border-green-800">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Open Source & Free Forever
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Deploy client sites{' '}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                lightning fast
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Complete{' '}
              <span className="font-semibold text-gray-900 dark:text-white">Next.js + AWS CDK + GitHub Actions</span>
              {' '}boilerplate. No more repetitive infrastructure setup.{' '}
              <span className="bg-yellow-200 dark:bg-yellow-900/50 px-2 py-1 rounded text-gray-900 dark:text-yellow-200">
                Copy, configure, deploy.
              </span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="https://github.com/michalkubiak98/staticfast-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all text-lg"
              >
                <span>Clone Repository</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">🚀</span>
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-lg"
              >
                View Showcase
              </a>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">~30min</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Setup time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">~$2/mo</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Hosting cost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">0</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Vendor lock-in</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Stop rebuilding the same infrastructure
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every client project shouldn&apos;t require setting up AWS from scratch. 
              Focus on what makes each site unique, not the plumbing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problems */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">The usual pain 😮‍💨</h3>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-400 text-sm">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">AWS infrastructure setup</h4>
                  <p className="text-gray-600 dark:text-gray-300">S3 buckets, CloudFront distributions, SSL certificates, Route53... every single time.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-400 text-sm">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Deployment pipeline configuration</h4>
                  <p className="text-gray-600 dark:text-gray-300">GitHub Actions workflows, environment variables, build processes... copy-paste from the last project.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-400 text-sm">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Client cost explanations</h4>
                  <p className="text-gray-600 dark:text-gray-300">&quot;Why does hosting cost $50/month?&quot; Because traditional hosting is expensive and opaque.</p>
                </div>
              </div>
            </div>
            
            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">The StaticFast way ✨</h3>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Infrastructure as code, ready to go</h4>
                  <p className="text-gray-600 dark:text-gray-300">Complete AWS CDK setup. One command deploys everything securely and correctly.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Environment-driven customization</h4>
                  <p className="text-gray-600 dark:text-gray-300">Change colors, content, contact info via .env file. No code changes needed.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Transparent, minimal costs</h4>
                  <p className="text-gray-600 dark:text-gray-300">Show clients the actual AWS bill: ~$2/month. No markup needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              This site is the showcase
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              What you&apos;re looking at right now was built using StaticFast. 
              Professional design, responsive layout, dark mode support - all included.
            </p>
          </div>
          
          {/* Screenshot/Demo */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl overflow-hidden mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                    ⚡
                  </div>
                  <div className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">StaticFast</div>
                  <div className="text-gray-500 dark:text-gray-400">Professional business website template</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 text-xl mx-auto mb-3">⚡</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">Lightning Fast</div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs">Global CDN delivery</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl mx-auto mb-3">📱</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">Fully Responsive</div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs">Mobile-first design</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl mx-auto mb-3">🎨</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">Customizable</div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs">Environment-driven</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://github.com/michalkubiak98/staticfast-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
            >
              Clone this exact setup →
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Modern, proven stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built with technologies you already know and trust. No experimental frameworks or complex configurations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-6">⚛️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Next.js 15</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                React framework with static export capability. Fast, SEO-friendly, and developer-friendly.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">+ Tailwind CSS for styling</div>
            </div>
            
            {/* Infrastructure */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 text-2xl mb-6">☁️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AWS CDK</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Infrastructure as code. S3 + CloudFront + Route53 + SSL certificates, all configured securely.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">Complete TypeScript definitions</div>
            </div>
            
            {/* Deployment */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 text-2xl mb-6">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">GitHub Actions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Automated deployments on every push. Build, test, and deploy without manual intervention.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">Pre-configured workflows</div>
            </div>
            
            {/* AI Integration */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 text-2xl mb-6">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Claude Code Ready</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Designed specifically for Claude Code workflows. AI can handle deployment, customization, and troubleshooting.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">Smart prompts included</div>
            </div>
            
            {/* Configuration */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center text-yellow-600 dark:text-yellow-400 text-2xl mb-6">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Environment Driven</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Everything configurable via .env files. Colors, content, contact info - no code changes needed.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">TypeScript support included</div>
            </div>
            
            {/* Documentation */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-2xl mb-6">📚</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Complete Docs</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Step-by-step guides, troubleshooting, and examples. Get started quickly with clear instructions.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">Beginner to advanced</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Everything you need, nothing extra
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A focused toolkit for professional client websites. No bloat, no unnecessary complexity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Developer Experience</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 dark:text-yellow-400 text-sm">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Quick setup</h4>
                    <p className="text-gray-600 dark:text-gray-300">Clone, configure .env, deploy. Get a client site live in 30 minutes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-sm">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">TypeScript throughout</h4>
                    <p className="text-gray-600 dark:text-gray-300">Full type safety in frontend, infrastructure, and configuration.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 text-sm">📖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Comprehensive docs</h4>
                    <p className="text-gray-600 dark:text-gray-300">Step-by-step guides for setup, customization, and troubleshooting.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Client Benefits</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 text-sm">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Transparent costs</h4>
                    <p className="text-gray-600 dark:text-gray-300">~$2/month AWS hosting. Show clients the actual bill.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 dark:text-orange-400 text-sm">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Fast & reliable</h4>
                    <p className="text-gray-600 dark:text-gray-300">Global CDN, SSL included, 99.9% uptime backed by AWS.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                    <span className="text-red-600 dark:text-red-400 text-sm">🔒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Secure by default</h4>
                    <p className="text-gray-600 dark:text-gray-300">HTTPS everywhere, private S3 buckets, AWS security best practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to streamline your workflow?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop setting up the same infrastructure for every client. 
            <span className="font-bold"> Clone StaticFast and focus on what makes each project unique.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="https://github.com/michalkubiak98/staticfast-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all text-lg"
            >
              <span>Get StaticFast</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="https://github.com/michalkubiak98/staticfast-boilerplate/blob/master/FIRST-STEPS.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all text-lg"
            >
              Read Documentation
            </a>
          </div>
          
          <p className="text-sm text-white/80">
            ⭐ Star the repo • Open source & free forever • Built for the dev community
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold mr-4 shadow-lg">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-white">
                  StaticFast
                </h3>
              </div>
              <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
                Professional client websites deployed fast. 
                Stop rebuilding infrastructure, start shipping features.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
              <a 
                href="https://github.com/michalkubiak98/staticfast-boilerplate" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center"
              >
                <span className="mr-2">📚</span>
                Repository
              </a>
              <a 
                href="https://github.com/michalkubiak98/staticfast-boilerplate/blob/master/FIRST-STEPS.md" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center"
              >
                <span className="mr-2">📖</span>
                Documentation
              </a>
              <a 
                href="https://github.com/michalkubiak98/staticfast-boilerplate/issues" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center"
              >
                <span className="mr-2">🐛</span>
                Issues
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2025 StaticFast. Open source and free forever.</p>
              <p className="mt-4 md:mt-0">
                Made by developers who got tired of repetitive infrastructure setup
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}