import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
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
  Sparkles,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Custom Billing Software Development',
      description: 'Tailored billing solutions designed specifically for your business needs and workflows.',
      color: 'from-purple-600 to-pink-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Integration for Retail Systems',
      description: 'Seamless migration and integration of your retail systems to secure cloud infrastructure.',
      color: 'from-blue-600 to-cyan-500',
    },
    {
      icon: FileText,
      title: 'GST & Tax Compliance Automation',
      description: 'Automated tax calculation, filing, and compliance management for hassle-free operations.',
      color: 'from-green-600 to-emerald-500',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics and Insights Dashboard',
      description: 'Transform your data into actionable insights with custom analytics dashboards.',
      color: 'from-orange-600 to-red-500',
    },
    {
      icon: Shield,
      title: 'Retail Data Security Consulting',
      description: 'Comprehensive security audits and implementation to protect your business data.',
      color: 'from-indigo-600 to-purple-500',
    },
    {
      icon: Wrench,
      title: 'POS Hardware & Software Setup',
      description: 'Complete installation and configuration of point-of-sale systems for your store.',
      color: 'from-cyan-600 to-blue-500',
    },
    {
      icon: CreditCard,
      title: 'Integrated Payment Gateway Solutions',
      description: 'Multiple payment options with secure gateway integration for seamless transactions.',
      color: 'from-pink-600 to-rose-500',
    },
    {
      icon: Package,
      title: 'Inventory Management Optimization',
      description: 'Streamline your inventory processes with smart automation and real-time tracking.',
      color: 'from-teal-600 to-green-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development for Billing',
      description: 'Custom mobile applications for on-the-go billing and business management.',
      color: 'from-violet-600 to-indigo-500',
    },
    {
      icon: Users,
      title: 'Retail Business Tech Consultation',
      description: 'Expert guidance on technology strategy and digital transformation for retail.',
      color: 'from-amber-600 to-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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

  const ServiceCard = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [8, -8]);
    const rotateY = useTransform(x, [-100, 100], [-8, 8]);

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
        className="relative rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
      >
        <motion.div
          animate={{
            opacity: isHovered ? 0.1 : 0,
          }}
          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50"
        ></motion.div>

        <motion.div
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.15 : 0,
          }}
          transition={{ duration: 0.5 }}
          className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} rounded-full blur-3xl`}
        ></motion.div>

        <div className="relative p-8 flex-1 flex flex-col" style={{ transform: 'translateZ(50px)' }}>
          <motion.div
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.6, type: 'spring' }}
            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-2xl`}
          >
            <service.icon className="w-10 h-10 text-white" />
          </motion.div>

          <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6 flex-1">{service.description}</p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03, duration: 0.8 }}
            className={`h-2 bg-gradient-to-r ${service.color} rounded-full shadow-lg`}
          ></motion.div>
        </div>

        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white/95 to-transparent backdrop-blur-sm"
          style={{ transform: 'translateZ(75px)' }}
        >
          <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
            <span>Learn More</span>
            <Zap className="w-4 h-4" />
          </button>
        </motion.div>
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
            x: [0, 80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-20"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 60, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-15"
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
            <span className="text-sm font-semibold text-blue-600">Comprehensive Services</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Services
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Comprehensive retail technology services to help your business thrive in the digital age
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr"
          style={{ perspective: '1000px' }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
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
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 via-cyan-500 to-blue-600 bg-[length:200%_100%]"
          ></motion.div>

          <div className="absolute inset-0 opacity-30">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
            ></motion.div>
          </div>

          <div className="relative p-12 sm:p-20 text-center text-white">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                Need a Custom Service?
              </h2>
              <p className="text-xl sm:text-2xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
                We're here to help you with any retail technology challenge. Let's discuss your unique needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-white text-blue-600 font-black text-xl rounded-2xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Schedule a Consultation</span>
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent"
                ></motion.div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
