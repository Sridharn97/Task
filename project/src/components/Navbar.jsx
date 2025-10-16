import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg dark:bg-gray-900/90'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - Updated colors */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <img
                src="/vite.svg"
                alt="3rd Eye Solutions Logo"
                className="relative w-10 h-10 hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
            <div className="flex flex-col">
              {/* Changed from font-black to font-bold and updated gradient */}
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                3rd Eye Solutions
              </span>
              {/* Updated subtitle color */}
              <span className="text-xs text-blue-600/80 dark:text-blue-400">Innovate • Transform • Grow</span>
            </div>
          </Link>

          {/* Desktop Links - Updated text colors */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
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
                <AnimatePresence>
                  {location.pathname === link.path && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-lg`}
                      layoutId="navbar-indicator"
                      transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                </AnimatePresence>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                ></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Updated icon color */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative p-2 rounded-xl hover:bg-gray-100 transition-colors overflow-hidden"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-blue-700" />
            ) : (
              <Menu className="w-6 h-6 text-blue-700" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Updated text colors */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-blue-100 shadow-xl"
          >
            <div className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block p-3 rounded-xl text-center text-base font-medium transition-all ${
                      location.pathname === link.path
                        ? `bg-gradient-to-r ${link.color} text-white shadow-lg`
                        : 'text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
