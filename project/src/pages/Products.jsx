import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Cloud,
  FileText,
  BarChart3,
  Shield,
  Wrench,
  CreditCard,
  Package,
  Smartphone,
  Users,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Target
} from 'lucide-react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Brain,
      title: 'Custom Billing Solutions',
      description: 'Tailored billing software designed for your specific business workflows and requirements.',
      features: ['Custom workflows', 'Multi-location support', 'Real-time reporting', 'API integrations'],
      caseStudy: 'Increased efficiency by 40% for retail chain',
      color: 'blue'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless transition of your retail systems to secure, scalable cloud infrastructure.',
      features: ['Zero downtime migration', 'AWS/Azure certified', 'Data security compliance', '24/7 monitoring'],
      caseStudy: 'Reduced costs by 35% for e-commerce platform',
      color: 'cyan'
    },
    {
      icon: FileText,
      title: 'Tax Compliance',
      description: 'Automated GST and tax compliance management with real-time filing capabilities.',
      features: ['Auto-filing', 'Audit trails', 'Multi-state compliance', 'Real-time updates'],
      caseStudy: '100% compliance rate for 50+ clients',
      color: 'green'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable insights with custom analytics dashboards.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom KPIs', 'Export capabilities'],
      caseStudy: 'Improved decision making by 60%',
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Enterprise-grade security audits and implementation for retail data protection.',
      features: ['PCI DSS compliance', 'Data encryption', 'Security audits', 'Incident response'],
      caseStudy: 'Zero security breaches in 3 years',
      color: 'indigo'
    },
    {
      icon: Wrench,
      title: 'POS Systems',
      description: 'Complete POS hardware and software setup with ongoing support and maintenance.',
      features: ['Hardware installation', 'Software configuration', 'Staff training', 'Ongoing support'],
      caseStudy: '300+ successful deployments',
      color: 'teal'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Target },
    { number: '50+', label: 'Enterprise Clients', icon: Users }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardHoverVariants = {
    initial: {
      scale: 1,
      y: 0,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
    },
    hover: {
      scale: 1.02,
      y: -8,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const handleContactNavigation = (service = null) => {
    navigate('/contact', { state: { service } });
  };

  const ServiceCard = ({ service, index }) => {
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true, margin: "-50px" });

    const colorClasses = {
      blue: {
        gradient: 'from-blue-500 to-blue-600',
        light: 'from-blue-50 to-blue-100',
        border: 'border-blue-100',
        text: 'text-blue-600'
      },
      cyan: {
        gradient: 'from-cyan-500 to-cyan-600',
        light: 'from-cyan-50 to-cyan-100',
        border: 'border-cyan-100',
        text: 'text-cyan-600'
      },
      green: {
        gradient: 'from-green-500 to-green-600',
        light: 'from-green-50 to-green-100',
        border: 'border-green-100',
        text: 'text-green-600'
      },
      orange: {
        gradient: 'from-orange-500 to-orange-600',
        light: 'from-orange-50 to-orange-100',
        border: 'border-orange-100',
        text: 'text-orange-600'
      },
      indigo: {
        gradient: 'from-indigo-500 to-indigo-600',
        light: 'from-indigo-50 to-indigo-100',
        border: 'border-indigo-100',
        text: 'text-indigo-600'
      },
      teal: {
        gradient: 'from-teal-500 to-teal-600',
        light: 'from-teal-50 to-teal-100',
        border: 'border-teal-100',
        text: 'text-teal-600'
      }
    };

    const colors = colorClasses[service.color];

    return (
      <motion.div
        ref={cardRef}
        variants={itemVariants}
        initial="hidden"
        animate={cardInView ? "visible" : "hidden"}
        whileHover="hover"
        className="relative group cursor-pointer"
      >
        {/* Enhanced Background with Gradient Border */}
        <motion.div
          variants={cardHoverVariants}
          className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
          }}
        >
          {/* Animated Gradient Border */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${colors.gradient.split(' ')[0].replace('from-', '#')}00, ${colors.gradient.split(' ')[1].replace('to-', '#')}00)`
            }}
            initial={false}
            animate={{
              background: hoveredCard === index ? [
                `linear-gradient(135deg, ${colors.gradient.split(' ')[0].replace('from-', '#')}20, ${colors.gradient.split(' ')[1].replace('to-', '#')}20)`,
                `linear-gradient(135deg, ${colors.gradient.split(' ')[0].replace('from-', '#')}40, ${colors.gradient.split(' ')[1].replace('to-', '#')}40)`,
                `linear-gradient(135deg, ${colors.gradient.split(' ')[0].replace('from-', '#')}20, ${colors.gradient.split(' ')[1].replace('to-', '#')}20)`
              ] : `linear-gradient(135deg, ${colors.gradient.split(' ')[0].replace('from-', '#')}00, ${colors.gradient.split(' ')[1].replace('to-', '#')}00)`
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Floating Particles */}
          <AnimatePresence>
            {hoveredCard === index && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: colors.gradient.split(' ')[0].replace('from-', '#'),
                      top: `${20 + i * 20}%`,
                      right: `${10 + i * 10}%`,
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          <div className="p-8 relative z-10">
            {/* Enhanced Animated Icon */}
            <motion.div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${colors.gradient} flex items-center justify-center mb-6 relative overflow-hidden group/icon`}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Icon Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              {/* Pulsing Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover/icon:opacity-100"
                style={{
                  background: `radial-gradient(circle at center, ${colors.gradient.split(' ')[0].replace('from-', '#')}40, transparent 70%)`
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <service.icon className="w-7 h-7 text-white relative z-10" />
            </motion.div>

            {/* Enhanced Content */}
            <motion.h3
              className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              {service.title}
            </motion.h3>

            <motion.p
              className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300"
              initial={false}
            >
              {service.description}
            </motion.p>

            {/* Enhanced Features with Staggered Animation */}
            <ul className="space-y-3 mb-6">
              {service.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={cardInView ? {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.2 + idx * 0.1,
                      duration: 0.5
                    }
                  } : {}}
                  whileHover={{
                    x: 5,
                    color: colors.text,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="mr-3"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  </motion.div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Enhanced Case Study */}
            <motion.div
              className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200 group-hover:border-gray-300 transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={cardInView ? {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.6,
                  duration: 0.5
                }
              } : {}}
              whileHover={{
                scale: 1.02,
                borderColor: colors.border,
                transition: { duration: 0.3 }
              }}
            >
              <motion.p
                className="text-sm text-gray-600 italic group-hover:text-gray-700 transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                "{service.caseStudy}"
              </motion.p>
            </motion.div>
          </div>

          {/* Enhanced Animated CTA */}
          <div className="px-8 pb-8 relative z-10">
            <motion.button
              onClick={() => handleContactNavigation(service.title)}
              className="w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold group-hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group/btn relative overflow-hidden"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              {/* Button Background Gradient on Hover */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${colors.gradient})`
                }}
                initial={false}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Get Quote</span>
              <motion.div
                animate={hoveredCard === index ? { x: [0, 5, 0] } : {}}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white" ref={sectionRef}>
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
        {/* Background animations remain the same */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-200/20"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Header content remains the same */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? {
                opacity: 1,
                scale: 1,
                y: 0,
                ...floatingAnimation
              } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
              </motion.div>
              <span className="text-sm font-semibold text-gray-700">Trusted by 50+ Enterprise Clients</span>
            </motion.div>

            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
              >
                Professional
                <motion.span
                  className="block text-blue-600 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? {
                    opacity: 1,
                    x: 0,
                    ...pulseAnimation
                  } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  Services
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
              >
                Comprehensive technology solutions designed to drive growth, ensure compliance,
                and transform your business operations with enterprise-grade expertise.
              </motion.p>
            </div>

            {/* CTA buttons remain the same */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.button
                onClick={() => handleContactNavigation('free-demo')}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center group shadow-lg relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Get Free Demo</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Play className="w-4 h-4 ml-2 relative z-10" />
                </motion.div>
              </motion.button>

              <motion.button
                onClick={() => handleContactNavigation()}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-lg relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-blue-600"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Contact Our Team</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats section remains the same */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 1.3 + index * 0.1
                  }
                } : {}}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }
                  }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-3 relative z-10 group-hover:bg-blue-200 transition-colors duration-300"
                >
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </motion.div>
                <motion.div
                  className="text-2xl font-bold text-gray-900 mb-1 relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600 font-medium relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Grid Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Our Core Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              End-to-end technology solutions designed to address the unique challenges
              of modern retail businesses.
            </motion.p>
          </motion.div>

          {/* Enhanced Services Grid with Better Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                service={service} 
                index={index}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rest of the sections (Process, CTA) remain the same */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-lg text-gray-600">
              A structured approach to ensure successful project delivery and maximum ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep dive into your business requirements and challenges' },
              { step: '02', title: 'Planning', desc: 'Detailed project roadmap with timelines and deliverables' },
              { step: '03', title: 'Execution', desc: 'Agile development with regular progress updates' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and optimization services' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5
                }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-200 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto relative z-10"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  animate={floatingAnimation}
                >
                  {process.step}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 relative z-10">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Schedule a free consultation with our experts to discuss your project requirements and get a customized solution proposal.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={() => handleContactNavigation('free-consultation')}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center shadow-lg relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Book Free Consultation</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ChevronRight className="w-4 h-4 ml-2 relative z-10" />
                </motion.div>
              </motion.button>
              <motion.button
                onClick={() => handleContactNavigation('sales')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Contact Sales Team</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;