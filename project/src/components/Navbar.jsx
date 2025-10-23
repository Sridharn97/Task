import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useSpring,
  useMotionValueEvent 
} from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  // Scroll tracking with Framer Motion hooks
  const { scrollY, scrollYProgress } = useScroll();
  
  // Smooth spring animation for scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform scroll position to various values
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 1)']
  );

  const blurAmount = useTransform(
    scrollY,
    [0, 50, 100],
    ['blur(0px)', 'blur(8px)', 'blur(12px)']
  );

  const logoScale = useTransform(
    scrollY,
    [0, 100],
    [1, 0.85]
  );

  const shadowOpacity = useTransform(
    scrollY,
    [0, 50],
    [0, 0.1]
  );

  // Hide/show navbar based on scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Basic scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reduced motion support
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    
    if (prefersReducedMotion) {
      setScrolled(window.scrollY > 20);
    }
  }, []);

  const navLinks = [
    { 
      name: 'Home', 
      path: '/',
      color: 'from-blue-600 to-cyan-500'
    },
    { 
      name: 'Products', 
      path: '/products',
      color: 'from-purple-600 to-pink-500'
    },
    { 
      name: 'Services', 
      path: '/services',
      color: 'from-green-600 to-teal-500'
    },
    { 
      name: 'Contact', 
      path: '/contact',
      color: 'from-orange-600 to-red-500'
    },
  ];

  // Animation variants for navbar visibility
  const navVariants = {
    visible: { 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20
      }
    },
    hidden: { 
      y: '-100%',
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20
      }
    }
  };

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Item variants for menu items
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 origin-left z-[60]"
        style={{ scaleX }}
      />

      <motion.nav
        variants={navVariants}
        animate={hidden ? 'hidden' : 'visible'}
        initial="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
        style={{
          backgroundColor: scrolled ? backgroundColor : 'transparent',
          backdropFilter: scrolled ? blurAmount : 'none',
          boxShadow: scrolled ? `0 4px 30px rgba(0, 0, 0, ${shadowOpacity})` : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section - Enhanced with scroll-based scaling */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                style={{ scale: logoScale }}
                className="relative"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-md opacity-75 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <img
                  src="/vite.svg"
                  alt="3rd Eye Solutions Logo"
                  className="relative w-10 h-10 hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
              <motion.div 
                className="flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  3rd Eye Solutions
                </span>
                <motion.span 
                  className="text-xs text-blue-600/80 dark:text-blue-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Innovate • Transform • Grow
                </motion.span>
              </motion.div>
            </Link>

            {/* Desktop Links - Enhanced with scroll animations */}
            <motion.div 
              className="hidden md:flex items-center space-x-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    className="relative px-4 py-2 group"
                  >
                    <span
                      className={`relative z-10 text-base font-medium transition-colors duration-300 ${
                        location.pathname === link.path
                          ? 'text-white'
                          : 'text-blue-700 group-hover:text-white dark:text-blue-300'
                      }`}
                    >
                      {link.name}
                    </span>
                    
                    {/* Active indicator with layout animation */}
                    <AnimatePresence>
                      {location.pathname === link.path && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-lg shadow-lg`}
                          layoutId="navbar-indicator"
                          transition={{ 
                            type: 'spring', 
                            bounce: 0.3, 
                            duration: 0.6 
                          }}
                        />
                      )}
                    </AnimatePresence>
                    
                    {/* Hover effect background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-lg opacity-0`}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ zIndex: -1 }}
                    />
                    
                    {/* Ripple effect on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-lg`}
                      initial={{ scale: 0, opacity: 0.5 }}
                      whileHover={{ 
                        scale: 1.5, 
                        opacity: 0,
                        transition: { duration: 0.6 }
                      }}
                      style={{ zIndex: -2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Menu Button - Enhanced */}
            <motion.button
              whileTap={{ scale: 0.9, rotate: 90 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative p-2 rounded-xl hover:bg-gray-100 transition-colors overflow-hidden"
              aria-label="Toggle menu"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-blue-700 relative z-10" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-blue-700 relative z-10" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced with staggered animations */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-blue-100 shadow-xl overflow-hidden"
            >
              <motion.div 
                className="flex flex-col space-y-2 p-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block p-3 rounded-xl text-center text-base font-medium transition-all relative overflow-hidden ${
                        location.pathname === link.path
                          ? `bg-gradient-to-r ${link.color} text-white shadow-lg`
                          : 'text-blue-700 hover:bg-blue-50'
                      }`}
                    >
                      {/* Animated background gradient */}
                      {location.pathname === link.path && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${link.color}`}
                          animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          style={{ backgroundSize: '200% 100%' }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
