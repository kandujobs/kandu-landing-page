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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
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

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
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
                className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
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
                className="bg-white text-purple-600 font-semibold py-4 px-8 rounded-2xl border-2 border-purple-600 hover:bg-purple-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sign In
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Don't Search, Swipe Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
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
            className="relative max-w-4xl mx-auto"
          >
            {/* Video Placeholder */}
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center">
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group">
                    <FiPlay className="w-8 h-8 text-purple-600 ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                
                {/* Video Placeholder Content */}
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-lg font-medium">Demo Video</p>
                  <p className="text-sm">Swipe interface in action</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Swipe Right</h3>
              <p className="text-gray-600">
                Like jobs that interest you. Our AI learns your preferences instantly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Learns</h3>
              <p className="text-gray-600">
                With every swipe, our algorithm gets smarter about what you want.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Perfect Matches</h3>
              <p className="text-gray-600">
                Get increasingly better job recommendations tailored to your preferences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
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
                className="bg-white p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
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

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to transform your job search?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of job seekers who are already using Kandu to land their dream jobs.
            </p>
            <button
              onClick={handleGetStarted}
              disabled={isLoading}
              className="bg-white text-purple-600 font-semibold py-4 px-8 rounded-2xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
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
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
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
