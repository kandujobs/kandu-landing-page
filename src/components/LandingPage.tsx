import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiHeart, FiTrendingUp, FiCheck, FiSmartphone, FiUsers } from 'react-icons/fi';

// Feature cards data for the interactive swiper
const FEATURE_CARDS = [
  {
    id: 1,
    title: "Swipe on the go",
    company: "Kandu AI",
    location: "Anywhere, anytime",
    salary: "5 minutes = 5 applications",
    description: "Apply to jobs during your commute, coffee break, or whenever you have a few minutes free.",
    icon: <FiSmartphone className="w-8 h-8" />,
    tags: ["Mobile-First", "Quick Sessions", "On-the-Go"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Track your applications",
    company: "Kandu AI",
    location: "Centralized Dashboard",
    salary: "Never lose track",
    description: "Monitor your application status, responses, and interviews in one place.",
    icon: <FiTrendingUp className="w-8 h-8" />,
    tags: ["Organized", "Real-time", "Analytics"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Smart job recommendations",
    company: "Kandu AI",
    location: "Personalized",
    salary: "Perfect matches",
    description: "Get personalized job suggestions based on your skills and preferences.",
    icon: <FiCheck className="w-8 h-8" />,
    tags: ["AI Learning", "Personalized", "Smart"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Student-friendly features",
    company: "Kandu AI",
    location: "Built for young people",
    salary: "School email integration",
    description: "Sign in with your school email to unlock custom UI colors matching your school's branding.",
    icon: <FiUsers className="w-8 h-8" />,
    tags: ["Student-Focused", "School Colors", "Custom UI"],
    gradient: "from-orange-500 to-red-500"
  }
];



// FAQ Item Component


const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right'>('right');
  const [showFloatingHeader, setShowFloatingHeader] = useState(false);



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
    const nextIndex = (currentCardIndex + 1) % FEATURE_CARDS.length;
      setTimeout(() => setCurrentCardIndex(nextIndex), 50);
  };

  const handlePass = () => {
    setSwipeDirection('left'); // Pass swipes left
    const nextIndex = (currentCardIndex + 1) % FEATURE_CARDS.length;
      setTimeout(() => setCurrentCardIndex(nextIndex), 50);
  };


  // Handle scroll for floating header
  React.useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowFloatingHeader(window.scrollY > heroBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFAQ = () => {
    window.location.href = '/blog';
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Floating Header */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: showFloatingHeader ? 0 : -100, 
          opacity: showFloatingHeader ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-4 left-4 right-4 z-50 max-w-6xl mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center min-w-0">
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              {/* Custom K Logo */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                <span className="text-white font-bold text-base sm:text-lg tracking-tight">K</span>
              </div>
              <span className="hidden sm:block text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent flex-shrink-0">
                Kandu
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              <button
                onClick={scrollToFAQ}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                FAQ
              </button>
              <button
                onClick={handleSignIn}
                disabled={isLoading}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                Sign In
              </button>
              <button
                onClick={handleGetStarted}
                disabled={isLoading}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-1.5 sm:py-2 px-3 sm:px-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base whitespace-nowrap flex-shrink-0"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Subtle Dark Styling */}
      <section className="relative min-h-screen overflow-hidden w-full flex items-center">
        {/* Simple dark background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Colored badge */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full mb-8 shadow-lg"
            >
          <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 bg-white rounded-full mr-2"
              />
              <span className="text-sm font-medium">Now in Beta</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              More interviews,
              <motion.span 
                className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
                  duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                less effort
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Apply to jobs in 5-minute sessions. 
              <span className="text-white font-semibold"> Perfect for those</span> juggling work, life, and everything in between.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button
                onClick={handleGetStarted}
                disabled={isLoading}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-5 px-10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10 text-lg">
                {isLoading ? (
                  <>
                      <motion.div 
                        className="animate-spin rounded-full h-5 w-5 border-b-2 border-white inline-block mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Redirecting...
                  </>
                ) : (
                  <>
                      Get Started
                  </>
                )}
                </span>
              </motion.button>
              
              <motion.button
                onClick={handleSignIn}
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/5 backdrop-blur-xl text-white font-semibold py-5 px-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-lg">Sign In</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-16 text-center"
            >
              <div className="flex items-center justify-center space-x-4 mb-4">
                {/* Animated Star Rating */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      className="relative text-2xl"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                    >
                      {i < 4 ? (
                        <motion.span 
                          className="text-yellow-400"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.2 
                          }}
                        >
                          ★
                        </motion.span>
                      ) : (
                        <>
                          <span className="text-gray-400">★</span>
                          <motion.span 
                            className="absolute top-0 left-0 text-yellow-400 overflow-hidden"
                            initial={{ width: '0%' }}
                            animate={{ width: '75%' }}
                            transition={{ duration: 1, delay: 1.5 }}
                          >
                            ★
                          </motion.span>
                        </>
                      )}
                    </motion.span>
                  ))}
                </div>
                <motion.span 
                  className="text-white font-bold text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  4.8
                </motion.span>
              </div>
              
              <motion.p 
                className="text-gray-300 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                Trusted by <span className="text-white font-semibold">young professionals</span> worldwide
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Icons Scrolling Bar */}
      <section className="relative py-8 overflow-hidden w-full bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="flex items-center">
          {/* Scrolling Company Icons */}
            <motion.div
            className="flex items-center gap-8 whitespace-nowrap"
            animate={{ x: [0, -400] }}
              transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* First set of icons */}
            {[
              { 
                name: "Google", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                )
              },
              { 
                name: "Microsoft", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#F25022" d="M1 1h10v10H1z"/>
                    <path fill="#7FBA00" d="M13 1h10v10H13z"/>
                    <path fill="#00A4EF" d="M1 13h10v10H1z"/>
                    <path fill="#FFB900" d="M13 13h10v10H13z"/>
                  </svg>
                )
              },
              { 
                name: "Apple", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                )
              },
              { 
                name: "Airbnb", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#FF5A5F" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.568 16.432c-.624.624-1.632.624-2.256 0L12 13.12l-3.312 3.312c-.624.624-1.632.624-2.256 0-.624-.624-.624-1.632 0-2.256L9.744 10.864 6.432 7.552c-.624-.624-.624-1.632 0-2.256.624-.624 1.632-.624 2.256 0L12 8.608l3.312-3.312c.624-.624 1.632-.624 2.256 0 .624.624.624 1.632 0 2.256L14.256 10.864l3.312 3.312c.624.624.624 1.632 0 2.256z"/>
                  </svg>
                )
              },
              { 
                name: "Meta", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )
              },
              { 
                name: "Twitter", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#1DA1F2" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                )
              },
              { 
                name: "Spotify", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#1DB954" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                )
              },
              { 
                name: "LinkedIn", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#0077B5" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )
              },
              { 
                name: "Instagram", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#E4405F" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )
              },
              { 
                name: "YouTube", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                )
              },
              { 
                name: "PayPal", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <rect width="24" height="24" fill="#0070BA" rx="4"/>
                    <path fill="white" d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.543-.68c-.608-.695-1.469-1.03-2.54-1.03H8.24c-.524 0-.968.382-1.05.9L5.035 19.263h4.605l1.12-7.106c.082-.518.526-.9 1.05-.9h2.19c4.298 0 7.664-1.747 8.647-6.797.03-.149.054-.294.077-.437.292-1.867-.002-3.137-1.012-4.287z"/>
                  </svg>
                )
              },
              { 
                name: "WhatsApp", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                )
              },
              { 
                name: "Discord", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#5865F2" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                )
              },
              { 
                name: "TikTok", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#FF0050" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                )
              },
              { 
                name: "Snapchat", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#FFFC00" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                )
              },
            ].map((company) => (
              <div
                key={`first-${company.name}`}
                className="flex-shrink-0"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {company.logo}
          </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {[
              { 
                name: "Google", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                )
              },
              { 
                name: "Microsoft", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#F25022" d="M1 1h10v10H1z"/>
                    <path fill="#7FBA00" d="M13 1h10v10H13z"/>
                    <path fill="#00A4EF" d="M1 13h10v10H1z"/>
                    <path fill="#FFB900" d="M13 13h10v10H13z"/>
                  </svg>
                )
              },
              { 
                name: "Apple", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                )
              },
              { 
                name: "Airbnb", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#FF5A5F" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.568 16.432c-.624.624-1.632.624-2.256 0L12 13.12l-3.312 3.312c-.624.624-1.632.624-2.256 0-.624-.624-.624-1.632 0-2.256L9.744 10.864 6.432 7.552c-.624-.624-.624-1.632 0-2.256.624-.624 1.632-.624 2.256 0L12 8.608l3.312-3.312c.624-.624 1.632-.624 2.256 0 .624.624.624 1.632 0 2.256L14.256 10.864l3.312 3.312c.624.624.624 1.632 0 2.256z"/>
                  </svg>
                )
              },
              { 
                name: "Meta", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )
              },
              { 
                name: "Twitter", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#1DA1F2" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                )
              },
              { 
                name: "Spotify", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#1DB954" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                )
              },
              { 
                name: "LinkedIn", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#0077B5" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )
              },
              { 
                name: "Instagram", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#E4405F" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )
              },
              { 
                name: "YouTube", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                )
              },
              { 
                name: "PayPal", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <rect width="24" height="24" fill="#0070BA" rx="4"/>
                    <path fill="white" d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.543-.68c-.608-.695-1.469-1.03-2.54-1.03H8.24c-.524 0-.968.382-1.05.9L5.035 19.263h4.605l1.12-7.106c.082-.518.526-.9 1.05-.9h2.19c4.298 0 7.664-1.747 8.647-6.797.03-.149.054-.294.077-.437.292-1.867-.002-3.137-1.012-4.287z"/>
                  </svg>
                )
              },
              { 
                name: "WhatsApp", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                )
              },
              { 
                name: "Discord", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#5865F2" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                )
              },
              { 
                name: "TikTok", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#FF0050" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                )
              },
              { 
                name: "Snapchat", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#FFFC00" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                )
              }
            ].map((company) => (
              <div
                key={`second-${company.name}`}
                className="flex-shrink-0"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {company.logo}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Don't Search, Swipe Section - Consistent Background */}
      <section className="relative py-32 overflow-hidden w-full">
        {/* Simple dark background matching hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50" />
        </div>
        

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Don't search,{' '}
              <motion.span 
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
                  duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                swipe
              </motion.span>
            </motion.h2>
            
          <motion.div
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="mb-4">
                Our AI learns your preferences with every swipe.
              </p>
              <p>
                Perfect for quick sessions during your <span className="text-white font-semibold">commute, lunch break, or between meetings</span>.
            </p>
          </motion.div>

          </motion.div>

          {/* Demo Video Container - Phone Width */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative max-w-sm mx-auto mb-16 px-4"
            style={{ perspective: "1000px" }}
          >
            {/* Phone-width Video Container */}
            <motion.div
              whileHover={{ 
                rotateY: 5, 
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 p-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Video placeholder container */}
              <div className="relative w-full aspect-[9/16] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl">
                {/* Placeholder for demo video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.div>
                    <p className="text-white/70 text-sm font-medium">Demo Video</p>
                    <p className="text-white/50 text-xs mt-1">Coming Soon</p>
              </div>
            </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 rounded-2xl" />
              </div>
              
              {/* Floating UI elements */}
            <motion.div
              animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1]
              }}
              transition={{
                  duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center"
              >
                <FiSmartphone className="w-6 h-6 text-white" />
              </motion.div>
              
            <motion.div
              animate={{
                  y: [0, 15, 0],
                  rotate: [0, -10, 0],
                  scale: [1, 1.1, 1]
              }}
              transition={{
                  duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
                className="absolute -bottom-4 -right-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg flex items-center justify-center"
              >
                <FiHeart className="w-5 h-5 text-white" />
              </motion.div>
              
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl blur-xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Feature Cards Section - Consistent Background */}
      <section className="relative py-32 overflow-hidden w-full">
        {/* Simple dark background matching hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Stop filling the{' '}
              <motion.span 
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
                  duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                same form
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              No more hours at a desk. Apply to jobs whenever you have a few minutes free.
            </motion.p>
          </motion.div>

          {/* Feature Card Container - Ultra Modern */}
          <div className="relative max-w-lg mx-auto px-4">
            <AnimatePresence mode="wait">
                <motion.div
                  key={currentCardIndex}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ 
                    opacity: 0, 
                    x: swipeDirection === 'right' ? 300 : -300, 
                  rotate: swipeDirection === 'right' ? 15 : -15,
                  scale: 0.8
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20 overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${FEATURE_CARDS[currentCardIndex].gradient} opacity-20`}
                    animate={{
                      background: [
                        `linear-gradient(45deg, ${FEATURE_CARDS[currentCardIndex].gradient.split(' ')[1]}, ${FEATURE_CARDS[currentCardIndex].gradient.split(' ')[3]})`,
                        `linear-gradient(225deg, ${FEATURE_CARDS[currentCardIndex].gradient.split(' ')[1]}, ${FEATURE_CARDS[currentCardIndex].gradient.split(' ')[3]})`,
                        `linear-gradient(45deg, ${FEATURE_CARDS[currentCardIndex].gradient.split(' ')[1]}, ${FEATURE_CARDS[currentCardIndex].gradient.split(' ')[3]})`
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {/* Feature Header */}
                  <div className="relative z-10 mb-8">
                    <div className="flex items-center justify-center mb-6">
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-r ${FEATURE_CARDS[currentCardIndex].gradient} rounded-3xl flex items-center justify-center text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {FEATURE_CARDS[currentCardIndex].icon}
                      </motion.div>
                      </div>
                    
                    <motion.h3 
                      className="text-3xl font-bold text-white mb-3 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {FEATURE_CARDS[currentCardIndex].title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-lg text-purple-300 font-semibold mb-2 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {FEATURE_CARDS[currentCardIndex].company}
                    </motion.p>
                    
                    <motion.p 
                      className="text-gray-300 mb-2 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      📍 {FEATURE_CARDS[currentCardIndex].location}
                    </motion.p>
                    
                    <motion.p 
                      className="text-green-400 font-semibold text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      💰 {FEATURE_CARDS[currentCardIndex].salary}
                    </motion.p>
                  </div>

                  {/* Feature Description */}
                  <motion.p 
                    className="text-gray-200 mb-8 leading-relaxed text-center text-lg relative z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {FEATURE_CARDS[currentCardIndex].description}
                  </motion.p>

                  {/* Feature Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-3 mb-10 justify-center relative z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    {FEATURE_CARDS[currentCardIndex].tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex gap-4 relative z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePass}
                      className="flex-1 bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <FiX className="w-5 h-5" />
                      <span>Pass</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleApply}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 px-6 rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/25"
                    >
                      <FiHeart className="w-5 h-5" />
                      <span>Apply</span>
                    </motion.button>
                </motion.div>
                </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>



        
      {/* FAQ Section - Consistent Background */}
      <section id="faq-section" className="relative py-24 overflow-hidden w-full">
        {/* Simple dark background matching hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50" />
        </div>


        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              <span className="text-white">Questions</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Everything you need to know about Kandu's AI-powered job search platform.
            </motion.p>
          </motion.div>

          {/* FAQ Preview Cards - Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                question: "How does Kandu's AI job matching work?",
                preview: "Our AI learns your preferences through your swipes and interactions, creating personalized job recommendations that match your skills and interests.",
                gradient: "from-purple-500 to-blue-500"
              },
              {
                question: "Is the auto-apply feature really automatic?",
                preview: "Yes! Once you set up your preferences and resume, our AI can automatically apply to jobs that match your criteria, saving you hours of work.",
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                question: "How much does Kandu cost?",
                preview: "Kandu is currently free for all users. Our premium plans with advanced features will launch soon.",
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 overflow-hidden cursor-pointer"
                onClick={() => window.location.href = '/blog'}
              >
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  >
                    {faq.question}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  >
                    {faq.preview}
                  </motion.p>
                  <motion.div 
                    className="flex items-center text-purple-300 font-semibold text-sm group-hover:text-purple-200 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  >
                  <span>Read full answer</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View All FAQ Button - Modern Styling */}
          <div className="text-center">
            <motion.button
              onClick={() => window.location.href = '/blog'}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-white/10 backdrop-blur-xl text-white font-semibold py-4 px-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-200 shadow-lg hover:shadow-xl overflow-hidden group"
            >
              <span>View All FAQ Articles</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* CTA Section - Consistent Background */}
      <section className="relative py-16 overflow-hidden w-full">
        {/* Simple dark background matching hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Ready to transform your <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">job search?</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-purple-100 mb-8 px-4">
              Join thousands of job seekers who are already using Kandu to land their dream jobs.
            </p>
            <motion.button
              onClick={handleGetStarted}
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 opacity-20"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              />
              <div className="relative z-10 flex items-center space-x-2">
              {isLoading ? (
                <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Redirecting...</span>
                </>
              ) : (
                <>
                    <span>Get Started</span>
                </>
              )}
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Kandu
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Your AI-powered job search assistant
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <a href="/" className="hover:text-gray-100 transition-colors">Home</a>
            <a href="/blog" className="hover:text-gray-100 transition-colors">Blog</a>
            <a href="/about" className="hover:text-gray-100 transition-colors">About</a>
            <a href="/contact" className="hover:text-gray-100 transition-colors">Contact</a>
          </div>
          <p className="text-gray-500 mt-6">
            © 2025 Kandu. All rights reserved.
          </p>
        </div>
      </footer>


    </div>
  );
};

export default LandingPage;

