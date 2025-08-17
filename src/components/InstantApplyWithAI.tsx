import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiCheck, FiTrendingUp, FiClock, FiUsers, FiPlay, FiTarget } from 'react-icons/fi';
import SEO from './SEO';

const InstantApplyWithAI: React.FC = () => {
  return (
    <>
      <SEO 
        title="Instant Apply with AI - Apply to Jobs in Seconds | Kandu"
        description="Apply to jobs instantly with AI technology. No more filling out endless forms - our AI instantly applies to hundreds of jobs while you focus on your career."
        keywords="instant apply with AI, instant job applications, AI instant apply, one-click job applications, instant apply technology, AI job automation, instant job search"
        url="https://kandujobs.com/instant-apply-with-ai"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Kandu Instant Apply with AI",
          "description": "Apply to jobs instantly with AI technology. One-click applications to hundreds of jobs automatically.",
          "url": "https://kandujobs.com/instant-apply-with-ai",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free instant apply with AI"
          },
          "featureList": [
            "Instant job applications",
            "One-click apply technology",
            "AI-powered job matching",
            "Real-time application tracking",
            "Smart resume optimization",
            "Instant job notifications"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "2156"
          }
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Apply to Jobs{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Instantly with AI
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Stop wasting time on endless job applications. Our instant apply with AI technology 
                lets you apply to hundreds of jobs in seconds, not hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
                >
                  <FiTrendingUp className="w-5 h-5" />
                  <span>Start Instant Apply</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-purple-200 hover:border-purple-300 transition-all duration-200 flex items-center space-x-2"
                >
                  <FiPlay className="w-5 h-5" />
                  <span>See It in Action</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Instant Apply with AI is Revolutionary
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Traditional job applications take hours. Our instant apply with AI technology 
                reduces that to seconds while improving your success rate.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FiZap className="w-8 h-8" />,
                  title: "Lightning Fast Applications",
                  description: "Apply to jobs instantly with AI. No more filling out repetitive forms - one click and you're done."
                },
                {
                  icon: <FiTarget className="w-8 h-8" />,
                  title: "Precision Job Matching",
                  description: "Our AI instantly matches you with the perfect jobs based on your skills and preferences."
                },
                {
                  icon: <FiCheck className="w-8 h-8" />,
                  title: "Smart Form Filling",
                  description: "AI instantly fills out application forms with your optimized information for maximum impact."
                },
                {
                  icon: <FiClock className="w-8 h-8" />,
                  title: "Save Hours Daily",
                  description: "What used to take hours now takes seconds with our instant apply with AI technology."
                },
                {
                  icon: <FiTrendingUp className="w-8 h-8" />,
                  title: "Higher Success Rate",
                  description: "AI-optimized applications lead to more interviews and job offers than manual applications."
                },
                {
                  icon: <FiUsers className="w-8 h-8" />,
                  title: "Mass Application Power",
                  description: "Apply to hundreds of jobs instantly with AI while maintaining quality and personalization."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-purple-600 mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Instant Apply Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How Instant Apply with AI Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the future of job applications with our instant apply technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "AI Profile Analysis",
                      description: "Our AI instantly analyzes your resume, skills, and preferences to create your perfect job profile."
                    },
                    {
                      step: "02",
                      title: "Smart Job Discovery",
                      description: "AI instantly finds and ranks the best job opportunities that match your criteria."
                    },
                    {
                      step: "03",
                      title: "One-Click Apply",
                      description: "Click once and our AI instantly applies to multiple jobs with optimized applications."
                    },
                    {
                      step: "04",
                      title: "Real-Time Tracking",
                      description: "Track all your instant applications and responses in real-time with detailed analytics."
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiZap className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Apply Demo</h3>
                  <p className="text-gray-600 mb-6">
                    See how our instant apply with AI technology works in real-time
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2 mx-auto"
                  >
                    <FiPlay className="w-4 h-4" />
                    <span>Watch Demo</span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Instant Apply with AI Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See the incredible results our users achieve with instant apply technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "10,000+", label: "Jobs Applied Instantly" },
                { number: "95%", label: "Time Saved" },
                { number: "3.2x", label: "More Interviews" },
                { number: "2.8x", label: "Faster Job Placement" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Apply Instantly?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join thousands of job seekers who are already using instant apply with AI 
                to land their dream jobs faster than ever before.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2 mx-auto"
              >
                <FiTrendingUp className="w-5 h-5" />
                <span>Start Instant Apply Free</span>
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InstantApplyWithAI;
