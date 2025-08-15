import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiCheck, FiTrendingUp, FiClock, FiUsers, FiAward, FiArrowRight, FiPlay } from 'react-icons/fi';
import SEO from './SEO';

const AIJobApplicationTool: React.FC = () => {
  return (
    <>
      <SEO 
        title="AI Job Application Tool - Apply to Hundreds of Jobs Automatically | Kandu"
        description="The most advanced AI job application tool that automatically applies to hundreds of jobs while you focus on what matters. Save 10+ hours per week with intelligent job matching and instant applications."
        keywords="AI job application tool, automated job applications, AI apply, instant job applications, AI job automation, smart job matching, automated job search"
        url="https://kandujobs.com/ai-job-application-tool"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Kandu AI Job Application Tool",
          "description": "AI-powered job application tool that automatically applies to hundreds of jobs with intelligent matching and instant applications.",
          "url": "https://kandujobs.com/ai-job-application-tool",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free AI job application tool"
          },
          "featureList": [
            "AI-powered job matching",
            "Automatic job applications",
            "Instant apply technology",
            "Smart resume optimization",
            "Application tracking",
            "Real-time job alerts"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1247"
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
                The Most Advanced{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AI Job Application Tool
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Apply to hundreds of jobs automatically with our intelligent AI job application tool. 
                Save 10+ hours per week while our AI handles the tedious application process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
                >
                  <span>Start Free Trial</span>
                  <FiArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-purple-200 hover:border-purple-300 transition-all duration-200 flex items-center space-x-2"
                >
                  <FiPlay className="w-5 h-5" />
                  <span>Watch Demo</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Job Application Tool?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI job application tool combines cutting-edge technology with user-friendly design 
                to revolutionize your job search process.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FiZap className="w-8 h-8" />,
                  title: "Instant AI Applications",
                  description: "Apply to hundreds of jobs in minutes, not hours. Our AI job application tool automatically fills forms and submits applications."
                },
                {
                  icon: <FiTrendingUp className="w-8 h-8" />,
                  title: "Smart Job Matching",
                  description: "AI-powered algorithms match you with the perfect jobs based on your skills, experience, and preferences."
                },
                {
                  icon: <FiCheck className="w-8 h-8" />,
                  title: "Resume Optimization",
                  description: "Our AI automatically optimizes your resume for each job application to maximize your chances of success."
                },
                {
                  icon: <FiClock className="w-8 h-8" />,
                  title: "Time-Saving Automation",
                  description: "Save 10+ hours per week by automating repetitive job application tasks with our AI job application tool."
                },
                {
                  icon: <FiUsers className="w-8 h-8" />,
                  title: "Application Tracking",
                  description: "Track all your applications in one place with detailed analytics and response monitoring."
                },
                {
                  icon: <FiAward className="w-8 h-8" />,
                  title: "Proven Results",
                  description: "Join thousands of users who have landed their dream jobs using our AI job application tool."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-purple-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How Our AI Job Application Tool Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started with our AI job application tool in just 3 simple steps
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Connect Your Profile",
                  description: "Link your LinkedIn profile and upload your resume. Our AI job application tool analyzes your experience and preferences."
                },
                {
                  step: "2",
                  title: "Set Your Preferences",
                  description: "Define your job criteria, salary expectations, and preferred locations. Our AI will find the perfect matches."
                },
                {
                  step: "3",
                  title: "Watch AI Apply",
                  description: "Sit back and watch as our AI job application tool automatically applies to hundreds of relevant jobs for you."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
                Ready to Transform Your Job Search?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join thousands of job seekers who are already using our AI job application tool 
                to land their dream jobs faster than ever before.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2 mx-auto"
              >
                <span>Get Started Free</span>
                <FiArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIJobApplicationTool;
