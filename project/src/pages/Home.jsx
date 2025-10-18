import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Package, FileText, BarChart3, Sparkles, TrendingUp, Shield } from 'lucide-react';
import { Star } from 'lucide-react';
import departmentalImg from '../assests/Departmental.jpg';
import demoBanner from '../assests/demo-banner.png';



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

  const companyReviews = [
    {
      name: "D-Mart",
      type: "Supermarket Chain",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/D-Mart_Logo.png/800px-D-Mart_Logo.png",
      review: "3rd Eye Solutions transformed our billing operations across 200+ stores. The AI-driven analytics have been game-changing.",
      rating: 5
    },
    {
      name: "Reliance Smart",
      type: "Retail Chain",
      logo: "https://www.reliancesmart.in/Image/Logo.png",
      review: "Implementing this system resulted in 45% faster checkout times and significantly improved customer satisfaction.",
      rating: 4.9
    },
    {
      name: "More Retail",
      type: "Supermarket",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/More_Retail_Logo.png/800px-More_Retail_Logo.png",
      review: "The inventory management system has reduced our stockouts by 60%. Outstanding results!",
      rating: 4.8
    },
    {
      name: "Nilgiris",
      type: "Supermarket Chain",
      logo: "https://nilgiris1905.com/images/logo.png",
      review: "Excellent system for multi-store operations. Real-time analytics help us make better decisions.",
      rating: 4.9
    },
    {
      name: "Spencer's",
      type: "Retail Chain",
      logo: "https://www.spencers.in/media/logo/stores/1/spencers_logo.png",
      review: "The GST compliance features and automated reporting save us countless hours every month.",
      rating: 5
    },
    {
      name: "Big Bazaar",
      type: "Hypermarket",
      logo: "https://logos-world.net/wp-content/uploads/2021/11/Big-Bazaar-Logo.png",
      review: "Seamless integration with our existing systems. The transition was smooth across all outlets.",
      rating: 4.8
    }
  ].map((review, index) => (
    <motion.div
      key={review.name}
      variants={itemVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative p-8 rounded-3xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center mb-6">
        <div className="w-24 h-24 relative rounded-xl overflow-hidden border-2 border-blue-100 bg-white p-2">
          <img
            src={review.logo}
            alt={`${review.name} logo`}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${review.name}&size=200&background=random`;
            }}
          />
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{review.name}</h3>
          <p className="text-sm sm:text-base text-blue-600 font-medium">{review.type}</p>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < Math.floor(review.rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
                  }`}
              />
            ))}
            <span className="ml-2 text-sm font-bold text-gray-600">
              {review.rating}
            </span>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -left-2 -top-2 text-5xl text-blue-500/10 font-serif">"</div>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed relative z-10 pl-4">{review.review}</p>
      </div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.8 }}
        className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-6 rounded-full"
      ></motion.div>
    </motion.div>
  ));

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100"></div>

        {/* Decorative circles - removed blur and motion so dashboard stays crisp */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full opacity-30" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-300 rounded-full opacity-30" />
          <div className="absolute -bottom-20 left-40 w-72 h-72 bg-indigo-300 rounded-full opacity-30" />
        </div>

        <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
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
              <span className="text-xs sm:text-sm md:text-base font-semibold text-blue-600">
                Trusted by 500+ Businesses
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
              Smart Billing.{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Smarter Business.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-4xl mx-auto font-medium px-4"
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
              className="group relative px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50"
            >
              <span className="relative z-10">Explore Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/contact"
              className="group px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-blue-600 rounded-2xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* DASHBOARDS: expanded, 2-column grid with 4 images, no blur/hover overlays */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 p-6">
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-500 flex items-center space-x-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <span className="text-xs sm:text-sm font-bold text-white">LIVE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <img
                  src="https://cdn.boldbi.com/wp/pages/dashboards/retail/retail-stores-performance.png"
                  alt="Retail performance dashboard"
                  className="w-full h-80 md:h-96 object-cover rounded-xl border"
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1600';
                  }}
                />

                <img
                  src="https://cdn.dribbble.com/userupload/4283890/file/original-0c27ce53d8b3d913076355851bde7c8e.png?resize=1504x1128&vertical=center"
                  alt="Dashboard preview 1"
                  className="w-full h-80 md:h-96 object-cover rounded-xl border"
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600';
                  }}
                />

                <img
                  src="https://cdn.dribbble.com/userupload/43257615/file/original-4116059e4fe03760b22419543249feb0.png?resize=1504x1128&vertical=center"
                  alt="Dashboard preview 2"
                  className="w-full h-80 md:h-96 object-cover rounded-xl border"
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600';
                  }}
                />

                <img
                  src="https://cdn.dribbble.com/userupload/10452597/file/original-9273697fca6bacd52fa533d8003993ff.png?resize=1504x1031&vertical=center"
                  alt="Dashboard preview 3"
                  className="w-full h-80 md:h-96 object-cover rounded-xl border"
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600';
                  }}
                />
              </div>
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                Trusted by <span className="font-bold text-blue-600">500+</span> retail businesses across India
              </p>
            </div>
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-24"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-none transform translate-x-16 -translate-y-16 transition-transform duration-500"></div>
                <stat.icon className="w-12 h-12 text-blue-600 mb-4" />
                <div className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-base sm:text-lg text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {['Mission', 'Vision', 'Values'].map((item, index) => (
              <motion.div
                key={item}
                variants={itemVariants}
                className="relative p-10 rounded-3xl bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 border-2 border-blue-200 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
                    <span className="text-3xl font-black text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {item}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
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
<section className="py-4 sm:py-6 bg-white overflow-hidden flex justify-center">
  <div className="max-w-[90rem] w-full px-6 sm:px-8 lg:px-12 flex justify-center">
    {/* Main Hero Block */}
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative shadow-2xl overflow-hidden rounded-2xl w-full max-w-[1200px]"
      style={{
        backgroundImage: `url(${departmentalImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        clipPath: 'polygon(0 0, calc(100% - 300px) 0, 100% 50%, calc(100% - 300px) 100%, 0 100%)',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative flex flex-col lg:grid lg:grid-cols-[400px_1fr] items-stretch min-h-[180px]">
        {/* Left Image */}
        <div className="w-full h-32 sm:h-44 lg:h-auto">
          <img
            src={demoBanner}
            alt="Demo Banner"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center p-4 sm:p-6 lg:py-6 lg:px-10 text-white relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-snug max-w-2xl">
            Empower your business with 3rd Eye Solutions — designed for efficiency and growth.
          </h2>

          <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed max-w-xl">
            Discover how our smart solutions simplify operations, boost productivity, and drive better results.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6">
            {/* Customers */}
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-gray-400 font-medium">Happy Clients</div>
            </div>

            {/* Reviews */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-2xl sm:text-3xl font-bold text-white">4.9</span>
              </div>
              <div className="text-sm text-gray-400 font-medium">Google Rating</div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Schedule a free demo
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>




      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="relative p-8 rounded-3xl bg-white shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300"
                  style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                ></div>
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
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


      <section className="relative py-12 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Add these decorative circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-indigo-300 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Store Gallery
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Take a glimpse at some of the retail stores revolutionizing their business with our solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                image: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "Modern Supermarket",
                location: "Mumbai, India"
              },
              {
                image: "https://images.pexels.com/photos/3687999/pexels-photo-3687999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "Electronics Store",
                location: "Bangalore, India"
              },
              {
                image: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "Fashion Outlet",
                location: "Delhi, India"
              },
              {
                image: "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "Grocery Store",
                location: "Chennai, India"
              },
              {
                image: "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "Pharmacy",
                location: "Hyderabad, India"
              },
              {
                image: "https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "Department Store",
                location: "Pune, India"
              }
            ].map((store, index) => (
              <motion.div
                key={store.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-96 w-full overflow-hidden"
                >
                  <img
                    src={store.image}
                    alt={store.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">
                        {store.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium">
                        {store.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-3">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Clients
              </span>
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 mt-3 font-medium">
              Powering the world’s most innovative companies.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mt-1">
              From next-gen startups to global enterprises.
            </p>
          </motion.div>

          {/* Infinite Scrolling Logos */}
          <div className="overflow-hidden relative py-20 bg-white-50">
            {/* Top Row (moves left) */}
            <motion.div
              className="flex gap-12 mb-12"
              animate={{ x: [0, "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              style={{ width: "max-content" }}
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-12">
                  {[
                    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968854.png", name: "Google" },
                    { src: "https://cdn-icons-png.flaticon.com/512/733/733579.png", name: "Twitter" },
                    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png", name: "LinkedIn" },
                    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968773.png", name: "YouTube" },
                    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968899.png", name: "Instagram" },
                  ].map((item, i) => (
                    <motion.div
                      key={`${setIndex}-${i}`}
                      className="flex-shrink-0 w-40 md:w-48 flex flex-col items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        y: -8,
                        transition: { duration: 0.4, ease: "easeInOut" },
                      }}
                    >
                      <div className="bg-white rounded-2xl p-6 shadow-lg w-full h-32 flex items-center justify-center hover:shadow-2xl transition-all duration-500">
                        <img
                          src={item.src}
                          alt={item.name}
                          className="max-h-20 object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        />
                      </div>
                      <p className="text-center text-gray-700 font-medium mt-3 text-sm">
                        {item.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Bottom Row (moves right to left) */}
            <motion.div
              className="flex gap-12"
              animate={{ x: ["-50%", 0] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              style={{ width: "max-content" }}
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-12">
                  {[
                    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968841.png", name: "Amazon" },
                    { src: "https://cdn-icons-png.flaticon.com/512/732/732221.png", name: "Adobe" },
                    { src: "https://cdn-icons-png.flaticon.com/512/174/174872.png", name: "Dribbble" },
                    { src: "https://cdn-icons-png.flaticon.com/512/174/174857.png", name: "Behance" },
                    { src: "https://cdn-icons-png.flaticon.com/512/733/733547.png", name: "Facebook" },
                  ].map((item, i) => (
                    <motion.div
                      key={`${setIndex}-${i}`}
                      className="flex-shrink-0 w-40 md:w-48 flex flex-col items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        y: -8,
                        transition: { duration: 0.4, ease: "easeInOut" },
                      }}
                    >
                      <div className="bg-white rounded-2xl p-6 shadow-lg w-full h-32 flex items-center justify-center hover:shadow-2xl transition-all duration-500">
                        <img
                          src={item.src}
                          alt={item.name}
                          className="max-h-20 object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        />
                      </div>
                      <p className="text-center text-gray-700 font-medium mt-3 text-sm">
                        {item.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>


          {/* Text Below Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 space-y-3 text-gray-700"
          >
            <p className="text-lg font-medium">
              Trusted by industry leaders across retail, technology, and innovation.
            </p>
            <p className="text-base text-gray-600">
              Empowering businesses to achieve excellence through collaboration.
            </p>
            <p className="text-base text-gray-600">
              Together, we’re building the future — one partnership at a time.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="relative py-12 sm:py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('https://bcposgroup.com/wp-content/uploads/2021/08/pos-supermarket-.jpg')`,
        }}
      >
        {/* Decorative circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
              What Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Customers
              </span>{' '}
              Say
            </h2>
            <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Read testimonials from businesses that transformed their operations with our solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {companyReviews}
          </motion.div>
        </div>
      </section>



    </div>
  );
};

export default Home;
