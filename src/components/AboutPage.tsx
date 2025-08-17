import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUsers, FiTarget, FiZap, FiAward, FiHeart, FiShield, FiTrendingUp } from 'react-icons/fi';
import SEO from './SEO';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Kandu - AI-Powered Job Search Platform | Our Mission & Story"
        description="Learn about Kandu's mission to revolutionize job searching with AI. Discover our story, values, and commitment to helping job seekers find their dream careers."
        keywords="about kandu, kandu company, AI job search platform, job search automation, kandu mission, kandu story"
        url="https://kandujobs.com/about"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Kandu",
          "description": "AI-powered job search platform helping job seekers find their dream careers",
          "url": "https://kandujobs.com",
          "logo": "https://kandujobs.com/logo.png",
          "foundingDate": "2024",
          "sameAs": [
            "https://app.kandujobs.com"
          ]
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Kandu About
                </span>
              </div>
              <a 
                href="/" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Kandu
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We're revolutionizing job searching with AI-powered automation, helping millions of 
                job seekers find their dream careers faster and more efficiently.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg text-gray-600">
                How we're transforming the job search experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem We Solved</h3>
                <p className="text-gray-700 mb-6">
                  Traditional job searching is broken. Job seekers spend 20+ hours per week manually 
                  searching job boards, writing cover letters, and submitting applications—only to 
                  receive few responses and even fewer interviews.
                </p>
                <p className="text-gray-700 mb-6">
                  We saw that the job search process was ripe for automation. With advances in AI 
                  and machine learning, we could create a platform that not only saves time but 
                  actually improves results.
                </p>
                <p className="text-gray-700">
                  That's why we built Kandu—to make job searching smarter, faster, and more effective.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-700">
                    To democratize job search automation and help every job seeker find their 
                    dream career faster than ever before.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FiHeart className="w-8 h-8" />,
                  title: "User-First",
                  description: "Every feature we build is designed with job seekers in mind, prioritizing their success above all else."
                },
                {
                  icon: <FiZap className="w-8 h-8" />,
                  title: "Innovation",
                  description: "We constantly push the boundaries of what's possible with AI and automation technology."
                },
                {
                  icon: <FiShield className="w-8 h-8" />,
                  title: "Trust & Security",
                  description: "We protect our users' data and privacy with enterprise-grade security measures."
                },
                {
                  icon: <FiTrendingUp className="w-8 h-8" />,
                  title: "Results-Driven",
                  description: "We measure success by the career outcomes and time savings our users achieve."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-purple-600 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-lg text-gray-600">
                AI-powered job search automation that actually works
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FiTarget className="w-8 h-8" />,
                  title: "Smart Job Matching",
                  description: "Our AI analyzes your skills and preferences to find the most relevant job opportunities, improving match quality by 300%."
                },
                {
                  icon: <FiZap className="w-8 h-8" />,
                  title: "Automated Applications",
                  description: "Apply to multiple jobs simultaneously with our intelligent automation, saving 20+ hours per week."
                },
                {
                  icon: <FiAward className="w-8 h-8" />,
                  title: "Resume Optimization",
                  description: "AI-powered resume enhancement that ensures your application passes ATS screening and stands out to recruiters."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
              <p className="text-purple-100">
                The numbers that show our commitment to job seeker success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "50K+", label: "Job Seekers Helped" },
                { number: "20+", label: "Hours Saved Per Week" },
                { number: "300%", label: "Better Job Matches" },
                { number: "95%", label: "User Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-purple-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600">
                Passionate experts dedicated to revolutionizing job search
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiUsers className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI & Engineering</h3>
                  <p className="text-gray-700 mb-4">
                    Our team of AI researchers and engineers are constantly innovating to make 
                    job search automation smarter and more effective.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiHeart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Success</h3>
                  <p className="text-gray-700 mb-4">
                    Our customer success team is dedicated to ensuring every user achieves 
                    their career goals with our platform.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Job Search?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of job seekers who are already using Kandu to land their dream jobs.
              </p>
              <motion.a
                href="https://app.kandujobs.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
              >
                <span>Get Started Free</span>
                <FiArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Kandu
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your AI-powered job search assistant
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-gray-500 mt-6">
              © 2025 Kandu. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutPage;
