import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiPlay, FiX, FiHeart, FiZap, FiTrendingUp, FiCheck, FiBell, FiChevronDown } from 'react-icons/fi';

// Feature cards data for the interactive swiper
const FEATURE_CARDS = [
  {
    id: 1,
    title: "Auto-apply to jobs",
    company: "Kandu AI",
    location: "Everywhere",
    salary: "Save 10+ hours/week",
    description: "Let AI apply to hundreds of jobs automatically while you focus on what matters.",
    icon: <FiZap className="w-8 h-8" />,
    tags: ["AI-Powered", "Time-Saving", "Automatic"]
  },
  {
    id: 2,
    title: "Track your applications",
    company: "Kandu AI",
    location: "Centralized Dashboard",
    salary: "Never lose track",
    description: "Monitor your application status, responses, and interviews in one place.",
    icon: <FiTrendingUp className="w-8 h-8" />,
    tags: ["Organized", "Real-time", "Analytics"]
  },
  {
    id: 3,
    title: "Smart job recommendations",
    company: "Kandu AI",
    location: "Personalized",
    salary: "Perfect matches",
    description: "Get personalized job suggestions based on your skills and preferences.",
    icon: <FiCheck className="w-8 h-8" />,
    tags: ["AI Learning", "Personalized", "Smart"]
  },
  {
    id: 4,
    title: "Search notifications",
    company: "Kandu AI",
    location: "Instant Alerts",
    salary: "Never miss opportunities",
    description: "Never miss the perfect opportunity with intelligent job alerts.",
    icon: <FiBell className="w-8 h-8" />,
    tags: ["Instant", "Smart Alerts", "Opportunities"]
  }
];

// FAQ Item Component
const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-bold text-gray-900 pr-4">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <FiChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? "auto" : 0, 
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6">
          <p className="text-gray-700 leading-relaxed">
            {answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showEndState, setShowEndState] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right'>('right');

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
    setSwipeDirection('right'); // Apply swipes right
    if (currentCardIndex < FEATURE_CARDS.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setShowEndState(true);
    }
  };

  const handlePass = () => {
    setSwipeDirection('left'); // Pass swipes left
    if (currentCardIndex < FEATURE_CARDS.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setShowEndState(true);
    }
  };

  const resetCards = () => {
    setCurrentCardIndex(0);
    setShowEndState(false);
    setSwipeDirection('right');
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
        {/* Smooth transition overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 pointer-events-none" />
        
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

            {/* Review Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <div className="flex items-center justify-center space-x-2 mb-2">
                {/* Star Rating */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      {i < 4 ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">4.9</span>
              </div>
              <p className="text-gray-600 text-sm">
                Rated by over 2,000+ job seekers
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Don't Search, Swipe Section - Compact with Dynamic Background */}
      <section className="relative py-24 overflow-hidden">
        {/* Smooth transition overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-purple-50/30 pointer-events-none" />
        
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
        </div>
      </section>

      {/* Interactive Feature Cards Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Smooth transition overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-purple-50/50 pointer-events-none" />
        
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
              Applying is hard, we make it <span className="text-purple-600">easy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stop spending hours on applications. Let AI do the heavy lifting while you focus on what matters.
            </p>
          </motion.div>

          {/* Feature Card Container */}
          <div className="relative max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {!showEndState ? (
                <motion.div
                  key={currentCardIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ 
                    opacity: 0, 
                    x: swipeDirection === 'right' ? 300 : -300, 
                    rotate: swipeDirection === 'right' ? 15 : -15 
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
                >
                  {/* Feature Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white">
                        {FEATURE_CARDS[currentCardIndex].icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                      {FEATURE_CARDS[currentCardIndex].title}
                    </h3>
                    <p className="text-lg text-purple-600 font-semibold mb-1 text-center">
                      {FEATURE_CARDS[currentCardIndex].company}
                    </p>
                    <p className="text-gray-600 mb-2 text-center">
                      📍 {FEATURE_CARDS[currentCardIndex].location}
                    </p>
                    <p className="text-green-600 font-semibold text-center">
                      💰 {FEATURE_CARDS[currentCardIndex].salary}
                    </p>
                  </div>

                  {/* Feature Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed text-center">
                    {FEATURE_CARDS[currentCardIndex].description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    {FEATURE_CARDS[currentCardIndex].tags.map((tag, index) => (
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



      {/* Now in Beta Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        {/* Smooth transition overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/50 pointer-events-none" />
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)`,
              backgroundSize: '100% 100%',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <span className="text-purple-500 text-2xl mr-2">✨</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                Now in Beta
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Effortless cover letters and resumes with AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let us do the work and create professional, tailored application materials in seconds.
            </p>
          </motion.div>

          {/* Two Main Features */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI-Generated Resume */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mr-4">
                  ✨
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">AI-Generated Resume</h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Simplify the process with resumes tailored to <strong>showcase your skills</strong> and <strong>match job requirements</strong>, all in just a few clicks.
              </p>
            </motion.div>

            {/* AI-Generated Cover Letter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mr-4">
                  ✨
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">AI-Generated Cover Letter</h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Easily create personalized <strong>cover letters</strong> that <strong>highlight your value</strong> and make every application stand out.
              </p>
            </motion.div>
          </div>


        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 overflow-hidden bg-gray-50">
        {/* Smooth transition overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-50/50 via-transparent to-transparent pointer-events-none" />
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)`,
              backgroundSize: '100% 100%',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Kandu's AI-powered job search platform.
            </p>
          </motion.div>

          {/* FAQ Items - Two per row with dropdowns */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How does Kandu's AI job matching work?",
                answer: "Our AI learns your preferences through your swipes and interactions. The more you use the platform, the smarter it gets at finding jobs that match your skills, experience, and career goals."
              },
              {
                question: "Is the auto-apply feature really automatic?",
                answer: "Yes! Once you set up your preferences and resume, our AI can automatically apply to hundreds of jobs that match your criteria. You can review applications before they're sent or let the AI handle everything."
              },
              {
                question: "How much does Kandu cost?",
                answer: "Kandu offers a free trial to get you started. Our premium plans start at $9.99/month and include unlimited job applications, advanced AI features, and priority support."
              },
              {
                question: "Can I use Kandu for remote jobs only?",
                answer: "Absolutely! You can filter for remote, hybrid, or on-site positions. Our AI understands location preferences and will prioritize jobs that match your desired work arrangement."
              },
              {
                question: "How accurate are the AI-generated resumes and cover letters?",
                answer: "Our AI creates professional, tailored materials that highlight your specific skills and experience. Each document is optimized for the job requirements and can be customized before sending."
              },
              {
                question: "What if I'm not satisfied with the job matches?",
                answer: "You can always adjust your preferences, skills, and experience in your profile. The AI continuously learns from your feedback to provide better matches over time."
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Moved to Bottom */}
      <section className="relative py-16 overflow-hidden">
        {/* Smooth transition overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 via-transparent to-transparent pointer-events-none" />
        
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
