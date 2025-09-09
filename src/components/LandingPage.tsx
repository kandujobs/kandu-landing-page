import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiX, FiHeart, FiTrendingUp, FiCheck, FiSmartphone, FiStar, FiUsers, FiAward } from 'react-icons/fi';

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
  const [showEndState, setShowEndState] = useState(false);
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
    const nextIndex = currentCardIndex + 1;
    if (nextIndex < FEATURE_CARDS.length) {
      setTimeout(() => setCurrentCardIndex(nextIndex), 50);
    } else {
      setTimeout(() => setShowEndState(true), 50);
    }
  };

  const handlePass = () => {
    setSwipeDirection('left'); // Pass swipes left
    const nextIndex = currentCardIndex + 1;
    if (nextIndex < FEATURE_CARDS.length) {
      setTimeout(() => setCurrentCardIndex(nextIndex), 50);
    } else {
      setTimeout(() => setShowEndState(true), 50);
    }
  };

  const resetCards = () => {
    setCurrentCardIndex(0);
    setShowEndState(false);
    setSwipeDirection('right');
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

      {/* Hero Section - Ultra Modern with Advanced Animations */}
      <section className="relative min-h-screen overflow-hidden w-full flex items-center">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Animated mesh gradient */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 40% 80%, #ec4899 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 60% 40%, #ec4899 0%, transparent 50%)",
                "radial-gradient(circle at 40% 80%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 60% 20%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 20% 60%, #ec4899 0%, transparent 50%)"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 opacity-60"
          />
          
          {/* Morphing blobs */}
          <MorphingBlob delay={0} size={300} color="purple" style={{ top: '10%', left: '10%' }} />
          <MorphingBlob delay={1} size={400} color="blue" style={{ top: '60%', right: '10%' }} />
          <MorphingBlob delay={2} size={250} color="pink" style={{ bottom: '20%', left: '60%' }} />
          
          {/* Floating particles */}
          <FloatingParticles />
          
          {/* Interactive cursor glow */}
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: mousePosition.x - 192,
              y: mousePosition.y - 192,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 15
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-2"
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
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold py-5 px-10 rounded-2xl hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-white/10"
              >
                <span className="relative z-10 text-lg">Sign In</span>
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

      {/* Don't Search, Swipe Section - Ultra Modern with Parallax */}
      <section className="relative py-32 overflow-hidden w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Smooth transition overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-transparent pointer-events-none" />
        
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
            
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 px-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Our AI learns your preferences with every swipe. Perfect for quick sessions 
              during your <span className="text-white font-semibold">commute, lunch break, or between meetings</span>.
            </motion.p>
            
            {/* Interactive swipe demo */}
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative max-w-md mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <motion.div
                    animate={{ x: [0, 20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center"
                  >
                    <FiX className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-white text-lg font-semibold">Swipe Left to Pass</span>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-white text-lg font-semibold">Swipe Right to Apply</span>
                  <motion.div
                    animate={{ x: [0, -20, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                  >
                    <FiHeart className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative max-w-4xl mx-auto mb-16 px-4"
            style={{ perspective: "1000px" }}
          >
            {/* 3D Card Container */}
            <motion.div
              whileHover={{ 
                rotateY: 5, 
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 p-8"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* KanduSwipe Image with glassmorphism */}
              <div className="relative">
                <img
                  src="/KanduSwipe.png"
                  alt="Kandu Swipe Interface - Don't search, swipe to find your perfect job"
                  className="w-full h-auto rounded-2xl object-cover shadow-xl"
                />
                
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
                className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center"
              >
                <FiSmartphone className="w-8 h-8 text-white" />
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
                className="absolute -bottom-6 -right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg flex items-center justify-center"
              >
                <FiHeart className="w-7 h-7 text-white" />
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
              {!showEndState ? (
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
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20 text-center overflow-hidden"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                        "linear-gradient(225deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                        "linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div 
                    className="text-8xl mb-8 relative z-10"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    🎉
                  </motion.div>
                  
                  <motion.h3 
                    className="text-4xl font-bold text-white mb-6 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    What are you waiting for?
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-200 mb-10 text-xl leading-relaxed relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    You've seen how easy it is to find great jobs. Now it's time to start your journey!
                  </motion.p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGetStarted}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-5 px-10 rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 flex items-center space-x-3 mx-auto shadow-lg hover:shadow-purple-500/25 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {isLoading ? (
                      <>
                        <motion.div 
                          className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Redirecting...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Started</span>
                      </>
                    )}
                  </motion.button>
                  
                  <motion.button
                    onClick={resetCards}
                    className="mt-6 text-purple-300 hover:text-purple-200 font-medium transition-colors relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Try again
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>



      {/* Now in Beta Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 w-full">
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
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Beta Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full shadow-md">
              <span className="font-semibold text-sm">Now in Beta</span>
            </div>
          </motion.div>

          {/* Animated Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-6"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Effortless
              </span>
              <br />
              <span className="text-gray-900">cover letters and resumes
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Let us do the work and create professional, tailored application materials in seconds.
            </motion.p>
          </motion.div>

          {/* Animated Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* AI-Generated Resume */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-6 shadow-md">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">AI-Generated Resume</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Simplify the process with resumes tailored to <strong className="text-purple-600">showcase your skills</strong> and <strong className="text-blue-600">match job requirements</strong>, all in just a few clicks.
                </p>
              </div>
            </motion.div>

            {/* AI-Generated Cover Letter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mr-6 shadow-md">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">AI-Generated Cover Letter</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Easily create personalized <strong className="text-blue-600">cover letters</strong> that <strong className="text-indigo-600">highlight your value</strong> and make every application stand out.
                </p>
              </div>
            </motion.div>
          </div>


        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="relative py-16 overflow-hidden w-full" style={{ backgroundColor: '#f0f4ff' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-indigo-200 rounded-full blur-2xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Everything you need to know about Kandu's AI-powered job search platform.
            </p>
          </motion.div>

          {/* FAQ Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                question: "How does Kandu's AI job matching work?",
                preview: "Our AI learns your preferences through your swipes and interactions..."
              },
              {
                question: "Is the auto-apply feature really automatic?",
                preview: "Yes! Once you set up your preferences and resume, our AI can automatically apply..."
              },
              {
                question: "How much does Kandu cost?",
                preview: "Kandu is currently free for all users. Our premium plans will launch soon..."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
                onClick={() => window.location.href = '/blog'}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.preview}</p>
                <div className="mt-4 flex items-center text-purple-600 font-semibold text-sm">
                  <span>Read full answer</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View All FAQ Button */}
          <div className="text-center">
            <motion.button
              onClick={() => window.location.href = '/blog'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View All FAQ Articles
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
