import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiZap, FiTrendingUp, FiBell, FiPlay } from 'react-icons/fi';

const FEATURES = [
  { 
    icon: <FiZap className="w-6 h-6" />, 
    title: "Auto-apply to jobs",
    description: "Let AI apply to hundreds of jobs automatically while you focus on what matters."
  },
  { 
    icon: <FiTrendingUp className="w-6 h-6" />, 
    title: "Track your applications",
    description: "Monitor your application status, responses, and interviews in one place."
  },
  { 
    icon: <FiCheck className="w-6 h-6" />, 
    title: "Smart job recommendations",
    description: "Get personalized job suggestions based on your skills and preferences."
  },
  { 
    icon: <FiBell className="w-6 h-6" />, 
    title: "Search notifications",
    description: "Never miss the perfect opportunity with intelligent job alerts."
  },
];

const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

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

      {/* Hero Section - Full Screen with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 px-6 py-20 text-center">
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

      {/* Don't Search, Swipe Section - Full Screen with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Don't search, <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">swipe</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Our AI learns your preferences with every swipe. The more you interact, 
              the smarter it gets at finding your perfect job matches.
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-4xl mx-auto mb-16"
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

      {/* Features Section - Full Screen with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
          {/* Wave Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                x: [0, -100, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-full h-full opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 25 50 50 T100 50' stroke='%238b5cf6' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px',
              }}
            />
          </div>
          
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
        <div className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Applying to jobs is hard, we make it easy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stop spending hours on applications. Let AI do the heavy lifting while you focus on what matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-100/50 hover:shadow-xl transition-all duration-300 hover:border-purple-200"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Screen with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 px-6 py-20 max-w-4xl mx-auto text-center">
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
