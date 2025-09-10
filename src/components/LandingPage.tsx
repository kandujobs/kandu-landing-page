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
            animate={{ x: [0, -100] }}
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
                name: "Amazon", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M16.64 10.18c-.5-.5-1.18-.78-1.89-.78-.71 0-1.39.28-1.89.78-.5.5-.78 1.18-.78 1.89s.28 1.39.78 1.89c.5.5 1.18.78 1.89.78.71 0 1.39-.28 1.89-.78.5-.5.78-1.18.78-1.89s-.28-1.39-.78-1.89zm-1.89 4.5c-.83 0-1.61-.33-2.19-.91-.58-.58-.91-1.36-.91-2.19s.33-1.61.91-2.19c.58-.58 1.36-.91 2.19-.91s1.61.33 2.19.91c.58.58.91 1.36.91 2.19s-.33 1.61-.91 2.19c-.58.58-1.36.91-2.19.91z"/>
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path fill="currentColor" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
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
                name: "Netflix", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#E50914" d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.57.058 13.014.004 13.014.004V0H5.398zM23.76 0v24h-.004c-1.154-.003-2.26-.01-3.358-.017V0h3.362zM0 0v23.974c.004.003 1.16.01 2.318.017V0H0z"/>
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
                name: "Uber", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm5.5-1.5h3v-3h-3v3zm0 4.5h3v-3h-3v3zm4.5-4.5h3v-3h-3v3zm0 4.5h3v-3h-3v3zm4.5-4.5h3v-3h-3v3zm0 4.5h3v-3h-3v3z"/>
                  </svg>
                )
              },
              { 
                name: "Airbnb", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#FF5A5F" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm6.6 8.4c-.6 0-1.2.6-1.2 1.2s.6 1.2 1.2 1.2 1.2-.6 1.2-1.2-.6-1.2-1.2-1.2zm-13.2 0c-.6 0-1.2.6-1.2 1.2s.6 1.2 1.2 1.2 1.2-.6 1.2-1.2-.6-1.2-1.2-1.2zm6.6 13.2c-6.6 0-6.6-6.6-6.6-6.6s6.6-6.6 6.6-6.6 6.6 6.6 6.6 6.6-6.6 6.6-6.6 6.6z"/>
                  </svg>
                )
              },
              { 
                name: "Tesla", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                )
              },
              { 
                name: "Stripe", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#635BFF" d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.407-2.354 1.407-1.905 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                  </svg>
                )
              },
              { 
                name: "Shopify", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#96BF48" d="M15.337 23.979c-.35 0-.66-.19-.83-.49l-3.26-5.6-3.26 5.6c-.17.3-.48.49-.83.49-.55 0-1-.45-1-1 0-.19.05-.37.15-.52l4.26-7.33c.3-.52.98-.52 1.28 0l4.26 7.33c.1.15.15.33.15.52 0 .55-.45 1-1 1z"/>
                    <path fill="#96BF48" d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zm0 17c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z"/>
                  </svg>
                )
              },
              { 
                name: "Slack", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                  </svg>
                )
              },
              { 
                name: "Zoom", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#2D8CFF" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.105 0-.21.015-.315.045l-1.89-1.89c.03-.105.045-.21.045-.315 0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2 1.2c0 .105.015.21.045.315l-1.89 1.89c-.105-.03-.21-.045-.315-.045-.66 0-1.2.54-1.2 1.2s.54 1.2 1.2 1.2c.105 0 .21-.015.315-.045l1.89 1.89c-.03.105-.045.21-.045.315 0 .66.54 1.2 1.2 1.2s1.2-.54 1.2-1.2c0-.105-.015-.21-.045-.315l1.89-1.89c.105.03.21.045.315.045.66 0 1.2-.54 1.2-1.2s-.54-1.2-1.2-1.2z"/>
                  </svg>
                )
              },
              { 
                name: "Dropbox", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#0061FF" d="M6 2L0 7.5l6 5.5v4l6-4.5L6 2zm12 0l6 5.5-6 5.5v4l-6-4.5L18 2zM6 14l6 4.5v4l6-5.5-6-5.5v4L6 14z"/>
                  </svg>
                )
              },
              { 
                name: "GitHub", 
                logo: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                )
              }
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
              Ready to transform your job search?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-purple-100 mb-8 px-4">
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
                  <span>Get Started</span>
                </>
              )}
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

