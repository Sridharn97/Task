import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { useState } from 'react';

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
    {
      name: 'SmartPOS Pro',
      description: 'Advanced AI-driven billing software with real-time analytics and customer insights.',
      image: 'https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-blue-600 to-cyan-500',
      price: '$299/mo',
      rating: 4.9,
    },
    {
      name: 'RetailEye Cloud',
      description: 'Cloud-based sales & inventory dashboard accessible from anywhere, anytime.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-purple-600 to-pink-500',
      price: '$199/mo',
      rating: 4.8,
    },
    {
      name: 'BillEase Lite',
      description: 'Lightweight billing solution perfect for small retailers and startups.',
      image: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-green-600 to-teal-500',
      price: '$99/mo',
      rating: 4.7,
    },
    {
      name: 'StoreMaster 360',
      description: 'End-to-end store management system covering all aspects of retail operations.',
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-orange-600 to-red-500',
      price: '$399/mo',
      rating: 4.9,
    },
    {
      name: 'QuickBill Mobile',
      description: 'Android/iOS app for quick checkout and mobile point-of-sale operations.',
      image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-indigo-600 to-blue-500',
      price: '$149/mo',
      rating: 4.6,
    },
    {
      name: 'StockSense AI',
      description: 'AI-powered inventory prediction with automated restock alerts and forecasting.',
      image: 'https://images.pexels.com/photos/7641824/pexels-photo-7641824.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-pink-600 to-rose-500',
      price: '$249/mo',
      rating: 4.8,
    },
    {
      name: 'SafeLedger',
      description: 'Secure accounting and ledger system with multi-user access controls.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-cyan-600 to-blue-500',
      price: '$179/mo',
      rating: 4.7,
    },
    {
      name: 'InsightPro',
      description: 'Powerful analytics tool for tracking sales trends, profit margins, and KPIs.',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-violet-600 to-purple-500',
      price: '$279/mo',
      rating: 4.9,
    },
    {
      name: 'AutoTax',
      description: 'Automated GST calculation and tax return filing with compliance tracking.',
      image: 'https://images.pexels.com/photos/7651820/pexels-photo-7651820.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-emerald-600 to-green-500',
      price: '$129/mo',
      rating: 4.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const ProductCard = ({ product, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const springConfig = { stiffness: 300, damping: 30 };
    const rotateXSpring = useSpring(rotateX, springConfig);
    const rotateYSpring = useSpring(rotateY, springConfig);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      setIsHovered(false);
    };

    return (
      <motion.div
        variants={itemVariants}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ z: 50 }}
        className="group relative rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
      >
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.6 }}
            onError={(e) => {
              e.target.src = 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=600';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70"></div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-cyan-500/90 flex items-center justify-center"
          >
            <div className="text-center p-6">
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                  rotate: isHovered ? 360 : 0
                }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-2xl"
              >
                <ArrowRight className="w-10 h-10 text-blue-600" />
              </motion.div>
              <p className="text-white font-black text-xl">View Details</p>
            </div>
          </motion.div>

          <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-lg">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-black text-gray-900">{product.rating}</span>
            </div>
          </div>

          <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-lg">
            <span className={`text-sm font-black bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
              Featured
            </span>
          </div>
        </div>

        <div className="p-8 flex-1 flex flex-col" style={{ transform: 'translateZ(50px)' }}>
          <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed flex-1">{product.description}</p>

          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-black text-gray-900">{product.price}</span>
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-blue-600 font-bold group-hover:text-cyan-500 transition-colors"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03, duration: 0.8 }}
            className={`h-2 bg-gradient-to-r ${product.gradient} rounded-full shadow-lg`}
          ></motion.div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              opacity: isHovered ? 0.1 : 0,
              scale: isHovered ? 1.5 : 1,
            }}
            className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${product.gradient} rounded-full blur-3xl`}
          ></motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 -z-10"></div>

      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-20"
        ></motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-600">{products.length} Powerful Solutions</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Products
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of retail management solutions designed to
            transform your business operations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
          style={{ perspective: '1000px' }}
        >
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 relative overflow-hidden rounded-3xl"
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 via-purple-500 to-blue-600 bg-[length:200%_100%]"
          ></motion.div>


        </motion.div>

        {/* Professional FAQ Section with Sophisticated Animations */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          {/* Professional Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100/80"></div>

          {/* Animated Geometric Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated Grid Pattern */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `
          linear-gradient(rgba(15, 23, 42, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(15, 23, 42, 0.1) 1px, transparent 1px)
        `,
                backgroundSize: '50px 50px'
              }}
            />

            {/* Subtle Floating Shapes */}
            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/4 left-1/4 w-32 h-32 border border-slate-300/30 rounded-full"
            />

            <motion.div
              animate={{
                y: [0, 40, 0],
                x: [0, -20, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                delay: 2
              }}
              className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-slate-400/20 rounded-lg"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Elegant Header with Typography Animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-400 mx-auto mb-8 rounded-full"
              />

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight"
              >
                Frequently{' '}
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  whileInView={{ backgroundPosition: "100% 50%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-[length:200%_auto] bg-clip-text text-transparent"
                >
                  Asked Questions
                </motion.span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light"
              >
                Comprehensive insights into our services and solutions
              </motion.p>
            </motion.div>

            {/* Sophisticated FAQ Grid */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {[
                {
                  question: "What is the duration of the trial period?",
                  answer: "We provide a comprehensive 14-day trial with complete access to all platform features. No credit card information is required to begin your evaluation.",
                  category: "Account",
                  icon: "⏱️"
                },
                {
                  question: "What performance guarantees do you offer?",
                  answer: "Our service includes a 99.9% uptime SLA guarantee, complemented by real-time performance monitoring and comprehensive analytics dashboard.",
                  category: "Service",
                  icon: "⚡"
                },
                {
                  question: "What support channels are available?",
                  answer: "We offer 24/7 multilingual support through dedicated email, live chat, and telephone channels with an average response time under 2 hours.",
                  category: "Support",
                  icon: "🎯"
                },
                {
                  question: "How customizable are your solutions?",
                  answer: "Our platform supports extensive customization including white-label options, API integrations, and tailored workflow configurations to meet specific business requirements.",
                  category: "Features",
                  icon: "🛠️"
                },
                {
                  question: "What security measures are implemented?",
                  answer: "We employ bank-grade 256-bit encryption, conduct regular third-party security audits, and maintain full compliance with GDPR, CCPA, and international data protection standards.",
                  category: "Security",
                  icon: "🔐"
                },
                {
                  question: "How are updates and maintenance handled?",
                  answer: "The platform receives automatic updates, scheduled maintenance during off-peak hours, and continuous AI model enhancements—all included in your subscription.",
                  category: "Maintenance",
                  icon: "🔄"
                }
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 30,
                      scale: 0.95
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }
                    }
                  }}
                  whileHover={{
                    y: -4,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }
                  }}
                  className="group relative"
                >
                  {/* Enhanced Card with Glass Morphism */}
                  <div className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-500">
                    {/* Animated Border Gradient */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Subtle Shine Effect */}
                    <motion.div
                      initial={{ x: "-100%", opacity: 0 }}
                      whileHover={{ x: "100%", opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12"
                    />

                    <div className="relative p-8">
                      {/* Header with Elegant Icon */}
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          rotate: [0, -2, 2, 0]
                        }}
                        transition={{
                          scale: { type: "spring", stiffness: 300 },
                          rotate: { duration: 0.3 }
                        }}
                        className="flex items-center gap-4 mb-6"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-lg">{faq.icon}</span>
                        </div>
                        <div>
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                            className="text-xs font-medium text-slate-500 uppercase tracking-wider"
                          >
                            {faq.category}
                          </motion.span>
                        </div>
                      </motion.div>

                      {/* Question with Elegant Typography */}
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="text-xl font-semibold text-slate-800 mb-4 leading-tight group-hover:text-slate-900 transition-colors duration-300"
                      >
                        {faq.question}
                      </motion.h3>

                      {/* Answer with Staggered Text Reveal */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                        className="space-y-3"
                      >
                        <p className="text-slate-600 leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </motion.div>

                      {/* Sophisticated Progress Indicator */}
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "100%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + 0.8,
                          duration: 1,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                        className="relative mt-6 pt-4"
                      >
                        <div className="h-px bg-slate-200/60">
                          <motion.div
                            whileHover={{ width: "100%" }}
                            initial={{ width: "0%" }}
                            className="h-px bg-gradient-to-r from-slate-600 to-slate-400 relative overflow-hidden"
                          >
                            <motion.div
                              animate={{
                                x: ["-100%", "100%"],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.2
                              }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2"
                            />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Hover Action Indicator */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="absolute top-6 right-6 w-2 h-2 bg-slate-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-16"
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <span>Explore Full Documentation</span>
                <motion.svg
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-slate-500 text-sm mt-4"
              >
                Can't find what you're looking for?{" "}
                <motion.span
                  whileHover={{ color: "#475569" }}
                  className="text-slate-600 font-medium cursor-pointer transition-colors duration-300"
                >
                  Contact our team
                </motion.span>
              </motion.p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
