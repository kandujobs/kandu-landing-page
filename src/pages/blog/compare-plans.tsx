import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ComparePlans: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Kandu Plans Comparison: Starter vs Pro vs Premium - Which Plan is Right for You?</title>
        <meta name="description" content="Compare Kandu's three subscription plans to find the perfect fit for your job search. Detailed breakdown of features, pricing, and recommendations." />
        <meta name="keywords" content="kandu plans, pricing, comparison, job search, subscription" />
        <meta property="og:title" content="Kandu Plans Comparison: Starter vs Pro vs Premium" />
        <meta property="og:description" content="Compare Kandu's three subscription plans to find the perfect fit for your job search." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://kandujobs.com/blog/compare-plans" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <nav className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Kandu</span>
              </Link>
              <Link 
                to="/app" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Start Free Trial
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-12">
          {/* Article Header */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Kandu Plans Comparison: Starter vs Pro vs Premium
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choosing the right Kandu plan can make all the difference in your job search success. 
                In this comprehensive comparison, we'll break down each plan's features, pricing, and help you decide which one fits your needs.
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span>By Kandu Team</span>
              <span>•</span>
              <span>January 15, 2024</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>

          {/* Quick Overview Table */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Overview</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Plan</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Monthly Price</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Yearly Price</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-semibold text-gray-900">Starter</td>
                    <td className="py-4 px-4 text-gray-900">$19/month</td>
                    <td className="py-4 px-4 text-gray-900">$160/year</td>
                    <td className="py-4 px-4 text-gray-600">Students & Early Professionals</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-semibold text-gray-900">Pro ⭐</td>
                    <td className="py-4 px-4 text-gray-900">$39/month</td>
                    <td className="py-4 px-4 text-gray-900">$235/year</td>
                    <td className="py-4 px-4 text-gray-600">Serious Job Seekers</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-gray-900">Premium 🚀</td>
                    <td className="py-4 px-4 text-gray-900">$79/month</td>
                    <td className="py-4 px-4 text-gray-900">$349/year</td>
                    <td className="py-4 px-4 text-gray-600">Career Accelerators</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Starter Plan */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Starter Plan – Kickstart Your Job Hunt</h2>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="text-2xl font-bold text-gray-900">$19/month</div>
              <div className="text-lg text-gray-600">$160/year (30% off, equivalent to $13/mo)</div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Perfect For:</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li className="text-gray-700">Students entering the job market</li>
              <li className="text-gray-700">Early professionals looking for their first role</li>
              <li className="text-gray-700">Job seekers on a budget</li>
              <li className="text-gray-700">Those testing the waters with AI-powered job search</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Features:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="text-gray-700"><strong>Up to 50 auto-applies per month</strong> - Perfect for targeted applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="text-gray-700"><strong>Daily job matches</strong> - Tailored to your profile and preferences</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="text-gray-700"><strong>Save & track jobs</strong> - Keep organized with your job search</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="text-gray-700"><strong>Priority email support</strong> - Get help when you need it</span>
              </li>
            </ul>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Why Choose Starter?</h4>
              <p className="text-gray-700">
                The Starter plan is ideal if you're new to AI-powered job search or want to test Kandu's capabilities without a major investment. 
                It's perfect for students and early professionals who need a boost in their applications without breaking the bank.
              </p>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-3xl font-bold text-gray-900">Pro Plan – Land Interviews Faster</h2>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular ⭐</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="text-2xl font-bold text-gray-900">$39/month</div>
              <div className="text-lg text-gray-600">$235/year (50% off, equivalent to $19.50/mo)</div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Perfect For:</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li className="text-gray-700">Serious job seekers actively applying</li>
              <li className="text-gray-700">Professionals looking to change careers</li>
              <li className="text-gray-700">Those who want consistent application volume</li>
              <li className="text-gray-700">Job seekers who value advanced matching</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Features:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="text-gray-700"><strong>Up to 200 auto-applies per month</strong> - 4x more applications than Starter</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="text-gray-700"><strong>AI-optimized resume matching</strong> - Every application is tailored</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="text-gray-700"><strong>Daily job alerts (higher volume)</strong> - More opportunities delivered</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="text-gray-700"><strong>Track applications in real time</strong> - Monitor your progress</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="text-gray-700"><strong>Access to upcoming features first</strong> - Early access to new tools</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Why Choose Pro?</h4>
              <p className="text-gray-700">
                Pro is our most popular plan for a reason. It offers the perfect balance of features and value for serious job seekers. 
                With 4x more applications and AI-optimized matching, you'll significantly increase your chances of landing interviews.
              </p>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-3xl font-bold text-gray-900">Premium Plan – Career Accelerator</h2>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">🚀</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="text-2xl font-bold text-gray-900">$79/month</div>
              <div className="text-lg text-gray-600">$349/year (~63% off, equivalent to $29/mo)</div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Perfect For:</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li className="text-gray-700">Ambitious professionals seeking rapid career growth</li>
              <li className="text-gray-700">Senior-level job seekers</li>
              <li className="text-gray-700">Those who want the fastest route to interviews</li>
              <li className="text-gray-700">Job seekers who value personalized support</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Features:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="text-gray-700"><strong>Unlimited auto-applies</strong> - Apply to as many jobs as you want</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="text-gray-700"><strong>Everything in Pro</strong> - All Pro features included</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="text-gray-700"><strong>Personalized resume feedback</strong> - AI-driven insights to improve your resume</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="text-gray-700"><strong>Priority queue for applications</strong> - Faster processing times</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="text-gray-700"><strong>Dedicated email + chat support</strong> - Personal assistance when needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="text-gray-700"><strong>Access to premium beta features</strong> - Try cutting-edge tools first</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Why Choose Premium?</h4>
              <p className="text-gray-700">
                Premium is designed for ambitious job seekers who want the fastest route to interviews and personal support. 
                With unlimited applications and personalized feedback, you'll have every advantage in your job search.
              </p>
            </div>
          </div>

          {/* Feature Comparison Table */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Starter</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Pro</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Monthly Auto-Applies</td>
                    <td className="py-4 px-4 text-center text-gray-900">50</td>
                    <td className="py-4 px-4 text-center text-gray-900">200</td>
                    <td className="py-4 px-4 text-center font-semibold text-green-600">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">AI Resume Matching</td>
                    <td className="py-4 px-4 text-center text-gray-900">Basic</td>
                    <td className="py-4 px-4 text-center text-gray-900">Advanced</td>
                    <td className="py-4 px-4 text-center text-gray-900">Advanced</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Job Alerts</td>
                    <td className="py-4 px-4 text-center text-gray-900">Daily</td>
                    <td className="py-4 px-4 text-center text-gray-900">High Volume</td>
                    <td className="py-4 px-4 text-center text-gray-900">High Volume</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Application Tracking</td>
                    <td className="py-4 px-4 text-center text-gray-900">Basic</td>
                    <td className="py-4 px-4 text-center text-gray-900">Real-time</td>
                    <td className="py-4 px-4 text-center text-gray-900">Real-time</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Resume Feedback</td>
                    <td className="py-4 px-4 text-center text-red-500">❌</td>
                    <td className="py-4 px-4 text-center text-red-500">❌</td>
                    <td className="py-4 px-4 text-center text-green-500">✅ AI-powered</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Priority Processing</td>
                    <td className="py-4 px-4 text-center text-red-500">❌</td>
                    <td className="py-4 px-4 text-center text-red-500">❌</td>
                    <td className="py-4 px-4 text-center text-green-500">✅</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Support</td>
                    <td className="py-4 px-4 text-center text-gray-900">Email</td>
                    <td className="py-4 px-4 text-center text-gray-900">Email</td>
                    <td className="py-4 px-4 text-center text-gray-900">Email + Chat</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-gray-900">Beta Features</td>
                    <td className="py-4 px-4 text-center text-red-500">❌</td>
                    <td className="py-4 px-4 text-center text-gray-900">Early Access</td>
                    <td className="py-4 px-4 text-center text-gray-900">Premium Access</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing Analysis */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Analysis</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Monthly vs Yearly Savings</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Starter Plan</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-700">Monthly: $19 × 12 = $228</div>
                  <div className="text-gray-700">Yearly: $160</div>
                  <div className="font-semibold text-green-600">Savings: $68 (30% off)</div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Pro Plan</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-700">Monthly: $39 × 12 = $468</div>
                  <div className="text-gray-700">Yearly: $235</div>
                  <div className="font-semibold text-green-600">Savings: $233 (50% off)</div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Premium Plan</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-700">Monthly: $79 × 12 = $948</div>
                  <div className="text-gray-700">Yearly: $349</div>
                  <div className="font-semibold text-green-600">Savings: $599 (63% off)</div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Value Per Application</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$0.38</div>
                <div className="text-sm text-gray-600">Starter (monthly)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$0.20</div>
                <div className="text-sm text-gray-600">Pro (monthly)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$0.00</div>
                <div className="text-sm text-gray-600">Premium (unlimited)</div>
              </div>
            </div>
          </div>

          {/* Decision Guide */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Which Plan Should You Choose?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Starter if:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    You're a student or early professional
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    You want to test AI-powered job search
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    You're on a tight budget
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    You apply to 1-2 jobs per day
                  </li>
                </ul>
              </div>
              
              <div className="border-2 border-purple-500 rounded-lg p-6 bg-purple-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Pro if:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">•</span>
                    You're actively job searching
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">•</span>
                    You want to apply to 5-10 jobs per day
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">•</span>
                    You value AI-optimized matching
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">•</span>
                    You want the best value for money
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Premium if:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    You're ambitious about your career growth
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    You want unlimited applications
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    You value personalized support
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    You want the fastest route to interviews
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Job Search?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start your 2-day free trial today and see which plan works best for you. 
              You can upgrade or downgrade your plan at any time.
            </p>
            <Link 
              to="/app" 
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Start Free Trial
            </Link>
            <p className="text-sm opacity-75 mt-4">
              All plans come with our 2-day free trial. Cancel anytime with no questions asked.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 mt-12 text-center">
            <p className="text-gray-700">
              Still not sure which plan is right for you?{' '}
              <a href="mailto:support@kandujobs.com" className="text-purple-600 hover:text-purple-700 font-semibold">
                Contact our support team
              </a>{' '}
              and we'll help you choose the perfect plan for your job search goals.
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-100 py-12 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold">Kandu</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered job search that gets you hired faster.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-gray-100 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gray-100 transition-colors">Terms of Service</Link>
              <a href="mailto:support@kandujobs.com" className="hover:text-gray-100 transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ComparePlans;
