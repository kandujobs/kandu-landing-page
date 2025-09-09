import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
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

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// Morphing blob component
const MorphingBlob = ({ delay = 0, size = 200, color = "purple", style = {} }) => {
  const [path, setPath] = useState("M0,0 C50,0 50,100 0,100 C-50,100 -50,0 0,0");
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newPath = `M0,0 C${50 + Math.random() * 50},0 ${50 + Math.random() * 50},${100 + Math.random() * 50} 0,${100 + Math.random() * 50} C${-50 - Math.random() * 50},${100 + Math.random() * 50} ${-50 - Math.random() * 50},0 0,0`;
      setPath(newPath);
    }, 3000 + Math.random() * 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.1, scale: 1 }}
      transition={{ duration: 2, delay }}
      className="absolute"
      style={{
        width: size,
        height: size,
        filter: 'blur(40px)',
        ...style
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        className={`text-${color}-500`}
      >
        <motion.path
          d={path}
          fill="currentColor"
          animate={{ d: path }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
};

// FAQ Item Component


const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right'>('right');
  const [showFloatingHeader, setShowFloatingHeader] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll();
  
  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



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
            {/* Simple badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full mb-8"
            >
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-2" />
              <span className="text-sm font-medium">Now in Beta</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              More interviews,
              <span className="block text-gray-300">
                less effort
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Apply to jobs in 5-minute sessions. 
              <span className="text-white font-semibold"> Perfect for young professionals</span> juggling work, life, and everything in between.
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 backdrop-blur-xl text-white font-semibold py-5 px-10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3"
              >
                <span className="text-lg">
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
                Trusted by <span className="text-white font-semibold">thousands of young professionals</span> worldwide
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
              { name: "Google", color: "from-gray-600 to-gray-700" },
              { name: "Microsoft", color: "from-gray-500 to-gray-600" },
              { name: "Apple", color: "from-gray-700 to-gray-800" },
              { name: "Amazon", color: "from-gray-600 to-gray-700" },
              { name: "Meta", color: "from-gray-500 to-gray-600" },
              { name: "Netflix", color: "from-gray-600 to-gray-700" },
              { name: "Spotify", color: "from-gray-500 to-gray-600" },
              { name: "Uber", color: "from-gray-700 to-gray-800" },
              { name: "Airbnb", color: "from-gray-600 to-gray-700" },
              { name: "Tesla", color: "from-gray-500 to-gray-600" },
              { name: "Stripe", color: "from-gray-600 to-gray-700" },
              { name: "Shopify", color: "from-gray-500 to-gray-600" },
              { name: "Slack", color: "from-gray-600 to-gray-700" },
              { name: "Zoom", color: "from-gray-500 to-gray-600" },
              { name: "Dropbox", color: "from-gray-600 to-gray-700" },
              { name: "GitHub", color: "from-gray-700 to-gray-800" }
            ].map((company) => (
              <div
                key={`first-${company.name}`}
                className="flex-shrink-0"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${company.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">
                    {company.name.charAt(0)}
                  </span>
          </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {[
              { name: "Google", color: "from-gray-600 to-gray-700" },
              { name: "Microsoft", color: "from-gray-500 to-gray-600" },
              { name: "Apple", color: "from-gray-700 to-gray-800" },
              { name: "Amazon", color: "from-gray-600 to-gray-700" },
              { name: "Meta", color: "from-gray-500 to-gray-600" },
              { name: "Netflix", color: "from-gray-600 to-gray-700" },
              { name: "Spotify", color: "from-gray-500 to-gray-600" },
              { name: "Uber", color: "from-gray-700 to-gray-800" },
              { name: "Airbnb", color: "from-gray-600 to-gray-700" },
              { name: "Tesla", color: "from-gray-500 to-gray-600" },
              { name: "Stripe", color: "from-gray-600 to-gray-700" },
              { name: "Shopify", color: "from-gray-500 to-gray-600" },
              { name: "Slack", color: "from-gray-600 to-gray-700" },
              { name: "Zoom", color: "from-gray-500 to-gray-600" },
              { name: "Dropbox", color: "from-gray-600 to-gray-700" },
              { name: "GitHub", color: "from-gray-700 to-gray-800" }
            ].map((company) => (
              <div
                key={`second-${company.name}`}
                className="flex-shrink-0"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${company.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">
                    {company.name.charAt(0)}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Don't Search, Swipe Section - Ultra Modern with Parallax */}
      <section className="relative py-32 overflow-hidden w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Enhanced smooth transition overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-800/20 pointer-events-none" />
        
        {/* Parallax background layers */}
        <motion.div
          className="absolute inset-0"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />
        </motion.div>
        
        {/* Animated mesh gradient */}
          <motion.div
            animate={{
            background: [
              "radial-gradient(circle at 30% 40%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 70% 60%, #3b82f6 0%, transparent 50%)",
              "radial-gradient(circle at 70% 40%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 30% 60%, #3b82f6 0%, transparent 50%)"
            ]
            }}
            transition={{
            duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          className="absolute inset-0 opacity-30"
          />
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
          <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
            animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
            }}
            transition={{
                duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Morphing blobs */}
        <MorphingBlob delay={0} size={400} color="purple" style={{ top: '20%', left: '5%' }} />
        <MorphingBlob delay={1.5} size={300} color="blue" style={{ bottom: '20%', right: '5%' }} />

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

      {/* Interactive Feature Cards Section - Ultra Modern */}
      <section className="relative py-32 overflow-hidden w-full bg-gradient-to-b from-slate-800 to-slate-900">
        {/* Dynamic background with particles */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 25% 25%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)",
                "radial-gradient(circle at 75% 25%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 25% 75%, #3b82f6 0%, transparent 50%)"
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 opacity-20"
          />
          
          {/* Floating particles */}
          <FloatingParticles />
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
              Mobile-first job search{' '}
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
                made simple
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



        
      {/* FAQ Section - Modern Dark Styling */}
      <section id="faq-section" className="relative py-24 overflow-hidden w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background Elements */}
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
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)`,
              backgroundSize: '100% 100%',
            }}
          />
        </div>

        {/* Floating Particles */}
        <FloatingParticles />

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
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${faq.gradient} opacity-10`}
                  animate={{
                    background: [
                      `linear-gradient(45deg, ${faq.gradient.split(' ')[1]}, ${faq.gradient.split(' ')[3]})`,
                      `linear-gradient(225deg, ${faq.gradient.split(' ')[1]}, ${faq.gradient.split(' ')[3]})`,
                      `linear-gradient(45deg, ${faq.gradient.split(' ')[1]}, ${faq.gradient.split(' ')[3]})`
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
              <span className="relative z-10">View All FAQ Articles</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* CTA Section - Moved to Bottom */}
      <section className="relative py-16 overflow-hidden w-full">
        {/* Smooth transition overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-50/40 via-transparent to-transparent pointer-events-none" />
        
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

