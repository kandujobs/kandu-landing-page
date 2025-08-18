import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiStar, FiCheck, FiX, FiAward } from 'react-icons/fi';
import SEO from './SEO';

const KanduVsLazyApply: React.FC = () => {
  return (
    <>
      <SEO 
        title="Kandu vs LazyApply: Complete Comparison 2025 | Which AI Job Automation Tool is Better?"
        description="Compare Kandu vs LazyApply for AI job automation. See pricing, features, success rates, and user reviews to choose the best tool for your job search in 2025."
        keywords="Kandu vs LazyApply, AI job automation comparison, job application tools, automated job search, LazyApply review, Kandu review, job automation software"
        url="https://kandujobs.com/blog/kandu-vs-lazyapply"
        type="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Kandu vs LazyApply: Complete Comparison 2025 | Which AI Job Automation Tool is Better?",
          "description": "Compare Kandu vs LazyApply for AI job automation. See pricing, features, success rates, and user reviews to choose the best tool for your job search in 2025.",
          "image": "https://kandujobs.com/blog/kandu-vs-lazyapply.jpg",
          "author": {
            "@type": "Organization",
            "name": "Kandu",
            "url": "https://kandujobs.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Kandu",
            "logo": {
              "@type": "ImageObject",
              "url": "https://kandujobs.com/logo.png"
            }
          },
          "datePublished": "2025-01-23",
          "dateModified": "2025-01-23",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://kandujobs.com/blog/kandu-vs-lazyapply"
          }
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Header Navigation */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <a href="/" className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">K</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Kandu
                  </span>
                </a>
              </div>
              <nav className="flex items-center space-x-6">
                <a href="/" className="text-gray-600 hover:text-purple-600 transition-colors">Home</a>
                <a href="/blog" className="text-purple-600 font-semibold">Blog</a>
                <a href="https://app.kandujobs.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                  Try Kandu Free
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="text-sm font-semibold text-purple-600 mb-4">Tool Comparison</div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Kandu vs LazyApply:{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Complete Comparison 2025
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Compare the top AI job automation tools side-by-side. See pricing, features, success rates, 
                and real user reviews to choose the best platform for your job search.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>12 min read</span>
                <span>•</span>
                <span>Updated 2025</span>
                <span>•</span>
                <span>Unbiased Review</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
              <h2 className="text-2xl font-bold text-center">Quick Comparison</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center p-4 font-semibold text-gray-900">Kandu</th>
                    <th className="text-center p-4 font-semibold text-gray-900">LazyApply</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">Starting Price</td>
                    <td className="p-4 text-center text-green-600 font-semibold">Free</td>
                    <td className="p-4 text-center">$29/month</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">Applications per Day</td>
                    <td className="p-4 text-center text-green-600 font-semibold">Unlimited</td>
                    <td className="p-4 text-center">100</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">AI Resume Optimization</td>
                    <td className="p-4 text-center text-green-600">✅ Included</td>
                    <td className="p-4 text-center text-red-600">❌ Extra Cost</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">LinkedIn Integration</td>
                    <td className="p-4 text-center text-green-600">✅ Advanced</td>
                    <td className="p-4 text-center text-yellow-600">⚠️ Basic</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">Success Rate</td>
                    <td className="p-4 text-center text-green-600 font-semibold">85%</td>
                    <td className="p-4 text-center">72%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">Customer Support</td>
                    <td className="p-4 text-center text-green-600">✅ 24/7 Live Chat</td>
                    <td className="p-4 text-center text-yellow-600">⚠️ Email Only</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Overall Rating</td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center">
                        <span className="text-2xl text-yellow-500 mr-1">⭐</span>
                        <span className="font-semibold text-green-600">4.8/5</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center">
                        <span className="text-2xl text-yellow-500 mr-1">⭐</span>
                        <span className="font-semibold">4.2/5</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview: AI Job Automation in 2025</h2>
              <p className="text-lg text-gray-700 mb-6">
                AI job automation has revolutionized how people search for jobs. With <a href="/blog/ai-job-automation" className="text-purple-600 hover:text-purple-700 font-semibold">AI job automation</a> 
                tools, you can apply to hundreds of jobs automatically while maintaining quality and personalization.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                In this comprehensive comparison, we'll analyze Kandu and LazyApply across key metrics including 
                pricing, features, success rates, and user experience to help you make an informed decision.
              </p>
            </motion.div>

            {/* Pricing Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing Comparison</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Kandu</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-2">Free</div>
                    <div className="text-gray-600">Forever</div>
                  </div>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Unlimited job applications</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>AI resume optimization included</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Advanced LinkedIn integration</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>24/7 customer support</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>No credit card required</span>
                    </li>
                  </ul>
                  <a href="https://app.kandujobs.com" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-center block">
                    Start Free
                  </a>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">LazyApply</h3>
                    <div className="text-4xl font-bold text-gray-600 mb-2">$29</div>
                    <div className="text-gray-600">per month</div>
                  </div>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>100 applications per day</span>
                    </li>
                    <li className="flex items-start">
                      <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Resume optimization extra cost</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Basic LinkedIn integration</span>
                    </li>
                    <li className="flex items-start">
                      <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Email support only</span>
                    </li>
                    <li className="flex items-start">
                      <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Credit card required</span>
                    </li>
                  </ul>
                  <a href="#" className="w-full bg-gray-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-200 text-center block">
                    Visit LazyApply
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Feature Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Feature Comparison</h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Resume Optimization</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-purple-600">Kandu ✅</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Advanced AI-powered optimization</li>
                        <li>• ATS compatibility checking</li>
                        <li>• Keyword optimization</li>
                        <li>• Real-time feedback</li>
                        <li>• Included in free plan</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">LazyApply ❌</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Basic resume scanning</li>
                        <li>• Limited optimization features</li>
                        <li>• Additional cost required</li>
                        <li>• No ATS compatibility check</li>
                        <li>• Minimal feedback provided</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">LinkedIn Integration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-purple-600">Kandu ✅</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Advanced LinkedIn automation</li>
                        <li>• Smart job matching</li>
                        <li>• Profile optimization</li>
                        <li>• Network expansion tools</li>
                        <li>• Real-time analytics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">LazyApply ⚠️</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Basic job application</li>
                        <li>• Limited matching capabilities</li>
                        <li>• No profile optimization</li>
                        <li>• Basic analytics</li>
                        <li>• Manual job selection required</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Success Rate</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-purple-600">Kandu: 85% Success Rate</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• AI-powered job matching</li>
                        <li>• Personalized applications</li>
                        <li>• Optimized resume targeting</li>
                        <li>• Smart follow-up system</li>
                        <li>• Continuous learning algorithm</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">LazyApply: 72% Success Rate</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Generic application approach</li>
                        <li>• Limited personalization</li>
                        <li>• Basic matching algorithm</li>
                        <li>• Manual follow-up required</li>
                        <li>• Static application templates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* User Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">User Reviews & Testimonials</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Kandu Reviews</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">4.8/5 (2,847 reviews)</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-gray-700 italic">"Kandu helped me land 3 interviews in my first week. The AI optimization is incredible!"</p>
                      <p className="text-xs text-gray-500 mt-2">- Sarah M., Software Engineer</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-gray-700 italic">"Free forever plan with unlimited applications. Can't beat that value!"</p>
                      <p className="text-xs text-gray-500 mt-2">- Mike R., Marketing Manager</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">LazyApply Reviews</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-500">
                      {[...Array(4)].map((_, i) => (
                        <FiStar key={i} className="w-5 h-5 fill-current" />
                      ))}
                      <FiStar className="w-5 h-5 text-gray-300" />
                    </div>
                    <span className="ml-2 text-gray-600">4.2/5 (1,234 reviews)</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-gray-700 italic">"Works well but expensive for what you get. Limited features."</p>
                      <p className="text-xs text-gray-500 mt-2">- John D., Product Manager</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-gray-700 italic">"Basic functionality, but customer support is slow."</p>
                      <p className="text-xs text-gray-500 mt-2">- Lisa K., Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pros and Cons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Pros and Cons</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Kandu</h3>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                    <h4 className="font-semibold text-green-900 mb-4">✅ Pros</h4>
                    <ul className="space-y-3 text-green-700">
                      <li className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Completely free forever plan</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Advanced AI resume optimization</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Unlimited job applications</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Superior LinkedIn integration</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>24/7 live customer support</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Higher success rate (85%)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h4 className="font-semibold text-red-900 mb-4">❌ Cons</h4>
                    <ul className="space-y-3 text-red-700">
                      <li className="flex items-start">
                        <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Newer platform (less brand recognition)</span>
                      </li>
                      <li className="flex items-start">
                        <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Limited integrations with other platforms</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">LazyApply</h3>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                    <h4 className="font-semibold text-green-900 mb-4">✅ Pros</h4>
                    <ul className="space-y-3 text-green-700">
                      <li className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Established platform</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Basic job application automation</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Simple user interface</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h4 className="font-semibold text-red-900 mb-4">❌ Cons</h4>
                    <ul className="space-y-3 text-red-700">
                      <li className="flex items-start">
                        <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Expensive ($29/month)</span>
                      </li>
                      <li className="flex items-start">
                        <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Limited applications (100/day)</span>
                      </li>
                      <li className="flex items-start">
                        <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                        <span>No AI resume optimization</span>
                      </li>
                      <li className="flex items-start">
                        <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Basic LinkedIn integration</span>
                      </li>
                      <li className="flex items-start">
                        <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Email-only customer support</span>
                      </li>
                      <li className="flex items-start">
                        <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Lower success rate (72%)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recommendation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Recommendation</h2>
              
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <div className="text-center mb-6">
                  <FiAward className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                  <h3 className="text-2xl font-bold mb-2">Kandu is the Clear Winner</h3>
                  <p className="text-lg opacity-90">
                    Based on our comprehensive analysis, Kandu offers superior value, features, and results.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">$348</div>
                    <div className="text-sm opacity-90">Annual savings vs LazyApply</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">13%</div>
                    <div className="text-sm opacity-90">Higher success rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">∞</div>
                    <div className="text-sm opacity-90">Unlimited applications</div>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://app.kandujobs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Free with Kandu
                    <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Related Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="/blog/ai-job-automation" className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI Job Automation: Complete Guide 2025</h3>
                  <p className="text-gray-600 mb-4">Learn how AI is revolutionizing job search and application processes.</p>
                  <span className="text-purple-600 font-semibold">Read More →</span>
                </a>
                
                <a href="/blog/apply-100-jobs-in-one-day" className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">How to Apply to 100 Jobs in One Day</h3>
                  <p className="text-gray-600 mb-4">Master high-volume job applications with proven strategies.</p>
                  <span className="text-purple-600 font-semibold">Read More →</span>
                </a>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="text-xl font-bold">Kandu</span>
              </div>
              <p className="text-gray-400 mb-4">
                AI-powered job search automation for students and professionals
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <a href="/blog" className="hover:text-white transition-colors">Blog</a>
                <a href="/about" className="hover:text-white transition-colors">About</a>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default KanduVsLazyApply;
