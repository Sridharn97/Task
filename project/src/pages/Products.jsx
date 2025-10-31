import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Star, Sparkles, TrendingUp, Shield, Zap, Receipt, Warehouse, Users, BarChart3, CreditCard, Settings } from 'lucide-react';
import { useRef, useState } from 'react';

const ProfessionalProductsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const products = [
    {
      name: "Smart Billing Suite",
      description: "Advanced billing automation with multi-department support, real-time invoicing, and automated payment processing for retail chains.",
      department: "Finance & Billing",
      rating: "4.9",
      gradient: "from-slate-700 to-slate-900",
      category: "Billing System",
      features: ["Multi-Store Billing", "Auto Invoicing", "Tax Compliance"],
      icon: Receipt,
      image: "https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Inventory Management Pro",
      description: "Comprehensive inventory tracking across departments with automated stock alerts, supplier management, and real-time availability.",
      department: "Inventory & Operations",
      rating: "4.8",
      gradient: "from-emerald-700 to-teal-800",
      category: "Inventory System",
      features: ["Cross-Store Inventory", "Stock Alerts", "Supplier Portal"],
      icon: Warehouse,
      image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Department Analytics",
      description: "Department-wise performance analytics with sales tracking, profitability analysis, and automated reporting for store managers.",
      department: "Analytics & Reporting",
      rating: "4.7",
      gradient: "from-violet-700 to-purple-800",
      category: "Analytics",
      features: ["Department Metrics", "Sales Reports", "Performance Insights"],
      icon: BarChart3,
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Multi-Store POS",
      description: "Unified point-of-sale system supporting multiple departments and store locations with centralized billing and inventory management.",
      department: "Store Operations",
      rating: "4.9",
      gradient: "from-blue-700 to-indigo-800",
      category: "POS System",
      features: ["Centralized Billing", "Multi-Location", "Real-time Sync"],
      icon: CreditCard,
      image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Vendor Management",
      description: "Complete vendor and supplier management system with automated purchase orders, billing reconciliation, and payment tracking.",
      department: "Procurement",
      rating: "4.6",
      gradient: "from-rose-700 to-pink-800",
      category: "Vendor System",
      features: ["Vendor Portal", "Purchase Orders", "Payment Tracking"],
      icon: Users,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Store Operations Hub",
      description: "Centralized operations management for multi-department stores with staff scheduling, task management, and performance monitoring.",
      department: "Operations",
      rating: "4.8",
      gradient: "from-amber-700 to-orange-800",
      category: "Operations",
      features: ["Staff Scheduling", "Task Management", "KPI Tracking"],
      icon: Settings,
      image: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const navigateToContact = () => {
    // Replace this with your actual navigation logic
    window.location.href = '/contact';
    // Or if using React Router:
    // navigate('/contact');
  };

  const ProductCard = ({ product, index }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]));
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]));
    
    const handleMouseMove = (event) => {
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = event.clientX - rect.left - width / 2;
      const mouseY = event.clientY - rect.top - height / 2;
      
      mouseX.set(mouseX);
      mouseY.set(mouseY);
    };
    
    const handleMouseEnter = () => {
      setIsHovered(true);
      setHoveredCard(index);
    };
    
    const handleMouseLeave = () => {
      setIsHovered(false);
      setHoveredCard(null);
      mouseX.set(0);
      mouseY.set(0);
    };

    const IconComponent = product.icon;

    return (
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ z: 30 }}
        className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
      >
        {/* Animated Background Layer */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.4 }}
          className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5`}
        />
        
        {/* Card Shine Effect */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: isHovered ? "100%" : "-100%", opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 z-20"
        />

        {/* Image Container */}
        <div className="relative h-60 overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onError={(e) => {
              e.target.src = 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=600';
            }}
          />
          
          {/* Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-br from-slate-800/95 to-slate-900/95 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center p-6"
            >
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4 shadow-2xl"
              >
                <IconComponent className="w-6 h-6 text-white" />
              </motion.div>
              <p className="text-white font-semibold text-lg">View Department Features</p>
              <p className="text-white/70 text-sm mt-2">Billing & operations details</p>
            </motion.div>
          </motion.div>

          {/* Rating Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute top-4 left-4 px-3 py-2 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg border border-slate-200/50"
          >
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-semibold text-slate-800">{product.rating}</span>
            </div>
          </motion.div>

          {/* Department Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute top-4 right-4 px-3 py-2 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg border border-slate-200/50"
          >
            <span className="text-sm font-semibold text-slate-700">{product.department}</span>
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex-1 flex flex-col" style={{ transform: 'translateZ(40px)' }}>
          {/* Category & Icon */}
          <div className="flex items-center justify-between mb-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg`}
            >
              <IconComponent className="w-6 h-6 text-white" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-lg"
            >
              {product.category}
            </motion.span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-slate-800 transition-colors duration-300">
            {product.name}
          </h3>
          
          {/* Description */}
          <p className="text-slate-600 mb-6 leading-relaxed flex-1 text-sm font-light">
            {product.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.features.map((feature, idx) => (
              <motion.span
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + idx * 0.1 }}
                className="px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-700 rounded-lg border border-slate-200/60"
              >
                {feature}
              </motion.span>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={navigateToContact}
            whileHover={{ x: 3, backgroundColor: "#1e293b" }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-4 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group/btn"
          >
            <span>Explore Department Solution</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </motion.button>
        </div>

        {/* Ambient Glow */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.8 : 0,
            scale: isHovered ? 1.2 : 0.8,
          }}
          transition={{ duration: 0.4 }}
          className={`absolute inset-0 -z-10 bg-gradient-to-br ${product.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20`}
        />
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen pt-20 pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100/80">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15, 23, 42, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15, 23, 42, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 border border-slate-300/20 rounded-full"
        />
        
        <motion.div
          animate={{
            y: [0, 60, 0],
            x: [0, -30, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 3
          }}
          className="absolute bottom-1/3 right-1/3 w-32 h-32 border border-slate-400/15 rounded-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-400 mx-auto mb-8 rounded-full"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200/60 mb-6 backdrop-blur-sm"
          >
            <Receipt className="w-4 h-4 text-slate-600 mr-2" />
            <span className="text-sm font-medium text-slate-700">Department Store Solutions</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Retail Management{' '}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-[length:200%_auto] bg-clip-text text-transparent font-semibold"
            >
              Systems
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Comprehensive suite of department store management solutions for billing, inventory, 
            and operations across multiple locations and departments.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr"
          style={{ perspective: '1200px' }}
        >
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </motion.div>

        {/* Professional FAQ Section */}
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
              <motion.button
                onClick={navigateToContact}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <span>Get In Touch With Our Team</span>
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
              </motion.button>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-slate-500 text-sm mt-4"
              >
                Can't find what you're looking for?{" "}
                <motion.span
                  onClick={navigateToContact}
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

export default ProfessionalProductsSection;