import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Package, FileText, BarChart3, Sparkles, TrendingUp, Shield } from 'lucide-react';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    {
      icon: Zap,
      title: 'Fast Billing',
      description: 'Lightning-fast checkout experience for your customers with our optimized billing system.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Package,
      title: 'Real-Time Inventory',
      description: 'Track your stock levels in real-time and never run out of products again.',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: FileText,
      title: 'GST-Ready Invoices',
      description: 'Automatically generate GST-compliant invoices with every transaction.',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Get intelligent insights about your business with AI-powered analytics.',
      gradient: 'from-purple-400 to-pink-500',
    },
  ];

  const stats = [
    { icon: TrendingUp, value: '500+', label: 'Active Clients' },
    { icon: Shield, value: '99.9%', label: 'Uptime' },
    { icon: Sparkles, value: '50K+', label: 'Transactions Daily' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100"></div>

        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          />
          <motion.div
            className="absolute top-40 right-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
          />
          <motion.div
            className="absolute -bottom-20 left-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
          />
        </div>

        <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-blue-200 mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-600">Trusted by 500+ Businesses</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-6 leading-tight">
              Smart Billing.{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Smarter Business.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto font-medium"
          >
            Empowering departmental stores with AI-powered billing and inventory systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Link
              to="/products"
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50"
            >
              <span className="relative z-10">Explore Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/contact"
              className="group px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-2xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative animate-float"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-30"></div>
            <img
              src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern POS System"
              className="relative mx-auto rounded-3xl shadow-2xl max-w-5xl w-full border-4 border-white/50"
              onError={(e) => {
                e.target.src = 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=1200';
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                <stat.icon className="w-12 h-12 text-blue-600 mb-4" />
                <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                3rd Eye Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              3rd Eye Solutions is a tech-driven company helping retail stores simplify billing,
              automate reports, and grow effortlessly with cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {['Mission', 'Vision', 'Values'].map((item, index) => (
              <motion.div
                key={item}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative p-10 rounded-3xl bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-black text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-black text-blue-600 mb-4">{item}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item === 'Mission' && 'To empower retail businesses with intelligent technology that simplifies operations and drives growth.'}
                    {item === 'Vision' && 'To become the leading provider of retail management solutions across India and beyond.'}
                    {item === 'Values' && 'Innovation, integrity, and customer success drive everything we do at 3rd Eye Solutions.'}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything you need to run your retail business efficiently
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                ></div>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className={`h-1 bg-gradient-to-r ${feature.gradient} mt-6 rounded-full`}
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
