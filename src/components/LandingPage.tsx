import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiPlay, FiX, FiHeart } from 'react-icons/fi';

// Mock job data for the interactive cards
const MOCK_JOBS = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: "$120k - $180k",
    description: "Build scalable applications and lead technical initiatives in a fast-growing startup environment.",
    tags: ["React", "Node.js", "AWS", "Remote"]
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateLab",
    location: "New York, NY",
    salary: "$100k - $150k",
    description: "Drive product strategy and work with cross-functional teams to deliver exceptional user experiences.",
    tags: ["Product Strategy", "Agile", "User Research", "Analytics"]
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "DataFlow",
    location: "Austin, TX",
    salary: "$110k - $160k",
    description: "Develop machine learning models and analyze complex datasets to drive business decisions.",
    tags: ["Python", "Machine Learning", "SQL", "Statistics"]
  },
  {
    id: 4,
    title: "UX Designer",
    company: "DesignStudio",
    location: "Seattle, WA",
    salary: "$90k - $140k",
    description: "Create beautiful, intuitive user experiences and conduct user research to inform design decisions.",
    tags: ["Figma", "User Research", "Prototyping", "Design Systems"]
  }
];

const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [showEndState, setShowEndState] = useState(false);

  const handleGetStarted = () => {
    setIsLoading(true);
    // Redirect to the main app
    window.location.href = 'https://app.kandujobs.com';
  };

  const handleSignIn = () => {
    setIsLoading(true);
    // Redirect to the main app sign in
    window.location.href = 'https://app.kandujobs.com';
  };

  const handleApply = () => {
    if (currentJobIndex < MOCK_JOBS.length - 1) {
      setCurrentJobIndex(currentJobIndex + 1);
    } else {
      setShowEndState(true);
    }
  };

  const handlePass = () => {
    if (currentJobIndex < MOCK_JOBS.length - 1) {
      setCurrentJobIndex(currentJobIndex + 1);
    } else {
      setShowEndState(true);
    }
  };

  const resetCards = () => {
    setCurrentJobIndex(0);
    setShowEndState(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🚀</div>
            <span className="text-xl font-bold text-gray-900">Kandu</span>
          </div>
          <button
            onClick={handleSignIn}
            disabled={isLoading}
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section - Compact with Animated Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-purple-300/30 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-40 right-20 w-32 h-32 bg-blue-300/30 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-40 left-1/4 w-16 h-16 bg-indigo-300/30 rounded-full blur-xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Your AI-powered
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                job search assistant
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Apply to hundreds of jobs automatically. Track your applications. 
              Get smart recommendations. Land your dream job faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleGetStarted}
                disabled={isLoading}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Redirecting...</span>
                  </>
                ) : (
                  <>
                    <span>Get Started Free</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              
              <button
                onClick={handleSignIn}
                disabled={isLoading}
                className="bg-white/90 backdrop-blur-sm text-purple-600 font-semibold py-4 px-8 rounded-2xl border-2 border-purple-600 hover:bg-purple-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Don't Search, Swipe Section - Compact with Dynamic Background */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-blue-50">
          {/* Moving Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 1px, transparent 1px), radial-gradient(circle at 75% 75%, #3b82f6 1px, transparent 1px)`,
                backgroundSize: '50px 50px, 50px 50px',
              }}
            />
          </div>
          
          {/* Floating Particles */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-indigo-400 rounded-full"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Don't search, <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">swipe</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Our AI learns your preferences with every swipe. The more you interact, 
              the smarter it gets at finding your perfect job matches.
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-4xl mx-auto mb-12"
          >
            {/* Video Placeholder */}
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl overflow-hidden shadow-2xl border border-purple-200/50">
              <div className="aspect-video bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center relative">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="w-full h-full"
                    style={{
                      backgroundImage: `conic-gradient(from 0deg, #8b5cf6, #3b82f6, #8b5cf6)`,
                    }}
                  />
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group backdrop-blur-sm"
                  >
                    <FiPlay className="w-8 h-8 text-purple-600 ml-1 group-hover:scale-110 transition-transform" />
                  </motion.div>
                </div>
                
                {/* Video Placeholder Content */}
                <div className="text-center text-gray-500 relative z-10">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-lg font-medium">Demo Video</p>
                  <p className="text-sm">Swipe interface in action</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full opacity-20"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full opacity-20"
            />
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                number: "1",
                title: "Swipe Right",
                description: "Like jobs that interest you. Our AI learns your preferences instantly."
              },
              {
                number: "2", 
                title: "AI Learns",
                description: "With every swipe, our algorithm gets smarter about what you want."
              },
              {
                number: "3",
                title: "Perfect Matches", 
                description: "Get increasingly better job recommendations tailored to your preferences."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-200"
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Job Cards Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
          {/* Floating Bubbles */}
          <motion.div
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-1/4 w-16 h-16 bg-purple-300/40 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 60, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-blue-300/40 rounded-full blur-sm"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Try it yourself
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience how easy it is to find your next job. Click apply or pass on these sample jobs.
            </p>
          </motion.div>

          {/* Job Card Container */}
          <div className="relative max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {!showEndState ? (
                <motion.div
                  key={currentJobIndex}
                  initial={{ opacity: 0, x: 300, rotate: 15 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  exit={{ opacity: 0, x: -300, rotate: -15 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
                >
                  {/* Job Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {MOCK_JOBS[currentJobIndex].title}
                    </h3>
                    <p className="text-lg text-purple-600 font-semibold mb-1">
                      {MOCK_JOBS[currentJobIndex].company}
                    </p>
                    <p className="text-gray-600 mb-2">
                      📍 {MOCK_JOBS[currentJobIndex].location}
                    </p>
                    <p className="text-green-600 font-semibold">
                      💰 {MOCK_JOBS[currentJobIndex].salary}
                    </p>
                  </div>

                  {/* Job Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {MOCK_JOBS[currentJobIndex].description}
                  </p>

                  {/* Job Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {MOCK_JOBS[currentJobIndex].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePass}
                      className="flex-1 bg-gray-100 text-gray-700 font-semibold py-4 px-6 rounded-2xl hover:bg-gray-200 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <FiX className="w-5 h-5" />
                      <span>Pass</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleApply}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <FiHeart className="w-5 h-5" />
                      <span>Apply</span>
                    </motion.button>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                      {currentJobIndex + 1} of {MOCK_JOBS.length}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 text-center"
                >
                  <div className="text-6xl mb-6">🎉</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    What are you waiting for?
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    You've seen how easy it is to find great jobs. Now it's time to start your journey!
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGetStarted}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2 mx-auto shadow-lg"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Redirecting...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign Up Free</span>
                        <FiArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                  <button
                    onClick={resetCards}
                    className="mt-4 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    Try again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section - Compact with Dynamic Background */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600">
          {/* Moving Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 50 - 25, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-blue-600/90 to-indigo-600/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Ready to transform your job search?
            </h2>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Join thousands of job seekers who are already using Kandu to land their dream jobs.
            </p>
            <motion.button
              onClick={handleGetStarted}
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 font-semibold py-4 px-8 rounded-2xl hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
                  <span>Redirecting...</span>
                </>
              ) : (
                <>
                  <span>Start Your Free Trial</span>
                  <FiArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="text-2xl">🚀</div>
            <span className="text-xl font-bold">Kandu</span>
          </div>
          <p className="text-gray-400">
            © 2024 Kandu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
