import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiTarget, FiAward, FiHeart, FiZap, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import SEO from './SEO';

const AboutKandu: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Kandu - AI-Powered Job Search Platform | Revolutionary Job Automation"
        description="Learn about Kandu, the revolutionary AI-powered job search platform that helps job seekers find and apply to jobs automatically. Discover our mission to transform job searching."
        keywords="about kandu, kandu jobs, kandu company, kandu mission, kandu team, kandu story, kandu job platform, kandu ai technology"
        url="https://kandujobs.com/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Kandu",
          "url": "https://kandujobs.com",
          "logo": "https://kandujobs.com/logo.png",
          "description": "AI-powered job search platform that revolutionizes how people find and apply to jobs",
          "foundingDate": "2024",
          "sameAs": [
            "https://linkedin.com/company/kandu",
            "https://twitter.com/kandujobs",
            "https://facebook.com/kandujobs"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "support@kandujobs.com"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
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
                About{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Kandu
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                We're revolutionizing job search with AI-powered automation. 
                Learn about Kandu's mission to make job hunting faster, smarter, and more successful.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Kandu, we believe that finding the perfect job shouldn't be a full-time job itself. 
                  Our mission is to eliminate the frustration and inefficiency of traditional job searching 
                  by leveraging cutting-edge AI technology.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We're building the future of job search - where AI handles the tedious tasks while 
                  you focus on what matters most: your career growth and personal development.
                </p>
                <div className="flex items-center space-x-4">
                  <FiTarget className="w-8 h-8 text-purple-600" />
                  <span className="text-lg font-semibold text-gray-900">Making job search effortless</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Kandu?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <FiZap className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">AI-powered job matching that understands your career goals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FiTrendingUp className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Automated applications that save you 10+ hours per week</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FiAward className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Proven results with higher interview success rates</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FiHeart className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Built by job seekers, for job seekers</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                The Kandu Story
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How frustration with traditional job searching led to the creation of the most advanced 
                AI job platform in the world.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  year: "2023",
                  title: "The Problem",
                  description: "Our founders spent countless hours applying to jobs manually, facing the same frustrations as millions of job seekers worldwide."
                },
                {
                  year: "2024",
                  title: "The Solution",
                  description: "Kandu was born from the idea that AI could eliminate the repetitive, time-consuming aspects of job searching."
                },
                {
                  year: "2024+",
                  title: "The Future",
                  description: "Today, Kandu is helping thousands of job seekers find their dream jobs faster and more efficiently than ever before."
                }
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="text-3xl font-bold text-purple-600 mb-4">{story.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{story.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at Kandu
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FiUsers className="w-8 h-8" />,
                  title: "User-First",
                  description: "Every feature we build is designed with job seekers in mind."
                },
                {
                  icon: <FiZap className="w-8 h-8" />,
                  title: "Innovation",
                  description: "We constantly push the boundaries of what AI can do for job search."
                },
                {
                  icon: <FiHeart className="w-8 h-8" />,
                  title: "Empathy",
                  description: "We understand the challenges of job searching because we've been there."
                },
                {
                  icon: <FiAward className="w-8 h-8" />,
                  title: "Excellence",
                  description: "We're committed to delivering the best possible experience for our users."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Meet the Kandu Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A passionate team of engineers, designers, and career experts dedicated to 
                revolutionizing job search through AI technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "AI Engineers",
                  role: "Building the Future",
                  description: "Our AI team develops cutting-edge algorithms that understand job requirements and match them perfectly with candidate profiles."
                },
                {
                  name: "Product Designers",
                  role: "User Experience",
                  description: "Our design team ensures that every interaction with Kandu is intuitive, beautiful, and effective."
                },
                {
                  name: "Career Experts",
                  role: "Industry Knowledge",
                  description: "Our career specialists bring deep industry knowledge to ensure Kandu understands the nuances of different job markets."
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FiUsers className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
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
                Join the Kandu Revolution
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Experience the future of job searching with Kandu's AI-powered platform. 
                Start your journey to career success today.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2 mx-auto"
              >
                <span>Get Started with Kandu</span>
                <FiArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutKandu;
