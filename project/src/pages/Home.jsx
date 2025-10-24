import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Package, FileText, BarChart3, Sparkles, TrendingUp, Shield } from 'lucide-react';
import { Star } from 'lucide-react';
import departmentalImg from '../assests/Departmental.jpg';
import demoBanner from '../assests/demo-banner.png';
import DemoPopup from '../components/DemoPopup';



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

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const floatingVariants = {
  floating: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const gradientVariants = {
  initial: { scale: 1, opacity: 0.3 },
  hover: { 
    scale: 1.2, 
    opacity: 0.6,
    transition: { duration: 0.5 }
  }
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
      <DemoPopup />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100"></div> {/* Decorative circles - removed blur and motion so dashboard stays crisp */}
        <div className="absolute inset-0 pointer-events-none"> <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full opacity-30" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-300 rounded-full opacity-30" />
          <div className="absolute -bottom-20 left-40 w-72 h-72 bg-indigo-300 rounded-full opacity-30" />
        </div>
        <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }} >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-blue-200 mb-8" >
              <Sparkles className="w-4 h-4 text-blue-600 mr-2" /> <span className="text-xs sm:text-sm md:text-base font-semibold text-blue-600"> Trusted by 500+ Businesses </span>
            </motion.div> <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight"> Smart Billing.{' '} <br className="hidden sm:block" /> <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent"> Smarter Business. </span> </h1>
          </motion.div> <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-4xl mx-auto font-medium px-4" >
            Empowering departmental stores with AI-powered billing and inventory systems.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row gap-6 justify-center mb-16" >
            <Link to="/products" className="group relative px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50" >
              <span className="relative z-10">Explore Products</span> <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> </Link>
            <Link to="/contact" className="group px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-blue-600 rounded-2xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl" >
              Contact Us
            </Link>
          </motion.div>
          {/* DASHBOARDS: expanded, 2-column grid with 4 images, no blur/hover overlays */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12" >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 p-6">
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-500 flex items-center space-x-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-white">
                </div>
                <span className="text-xs sm:text-sm font-bold text-white">LIVE</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <img
                  src="https://cdn.boldbi.com/wp/pages/dashboards/retail/retail-stores-performance.png"
                  alt="Retail performance dashboard"
                  className="w-full h-80 md:h-96 object-cover rounded-xl border"
                  onError={(e) => {
                    e.target.src =
                      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1600";
                  }}
                />
                <img
                  src="https://cdn.dribbble.com/userupload/4283890/file/original-0c27ce53d8b3d913076355851bde7c8e.png?resize=1504x1128&vertical=center"
                  alt="Dashboard preview 1"
                  className="w-full h-80 md:h-96 object-cover rounded-xl border sm:block hidden"
                  onError={(e) => {
                    e.target.src =
                      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600";
                  }}
                />
                <img
                  src="https://cdn.dribbble.com/userupload/43257615/file/original-4116059e4fe03760b22419543249feb0.png?resize=1504x1128&vertical=center"
                  alt="Dashboard preview 2"
                  className="w-full h-80 md:h-96 object-cover rounded-xl border sm:block hidden"
                  onError={(e) => {
                    e.target.src =
                      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600";
                  }}
                />
                <img
                  src="https://cdn.dribbble.com/userupload/10452597/file/original-9273697fca6bacd52fa533d8003993ff.png?resize=1504x1031&vertical=center"
                  alt="Dashboard preview 3"
                  className="w-full h-80 md:h-96 object-cover rounded-xl border sm:block hidden"
                  onError={(e) => {
                    e.target.src =
                      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600";
                  }}
                />
              </div>

            </div>
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-sm sm:text-base text-gray-600 font-medium"> Trusted by
                <span className="font-bold text-blue-600">500+</span> retail businesses across India
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
     <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0">
    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
    <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Stats Section with Enhanced Animations */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={itemVariants}
          whileHover={{ 
            y: -10,
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-blue-100/50 shadow-lg shadow-blue-100/50 overflow-hidden group"
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10"
            variants={gradientVariants}
            initial="initial"
            whileHover="hover"
          />
          
          {/* Floating icon */}
          <motion.div
            variants={floatingVariants}
            animate="floating"
            className="relative"
          >
            <stat.icon className="w-14 h-14 text-blue-600 mb-4 drop-shadow-lg" />
          </motion.div>
          
          <div className="relative">
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
              className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2"
            >
              {stat.value}
            </motion.div>
            <div className="text-lg text-gray-700 font-semibold">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Main Heading with Typing Effect */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center mb-20 relative"
    >
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 opacity-10"
      >
        <div className="w-full h-full border-4 border-blue-500 rounded-full border-dashed"></div>
      </motion.div>

      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 relative">
        About{' '}
        <motion.span
          initial={{ backgroundSize: "0% 100%" }}
          whileInView={{ backgroundSize: "100% 100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent bg-[length:100%_100%]"
        >
          3rd Eye Solutions
        </motion.span>
      </h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium"
      >
        3rd Eye Solutions is a tech-driven company helping retail stores simplify billing,
        automate reports, and grow effortlessly with cutting-edge technology.
      </motion.p>
    </motion.div>

    {/* Mission, Vision, Values with Enhanced Cards */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
    >
      {['Mission', 'Vision', 'Values'].map((item, index) => (
        <motion.div
          key={item}
          variants={itemVariants}
          whileHover={{ 
            y: -15,
            scale: 1.03,
            transition: { duration: 0.3 }
          }}
          className="relative group"
        >
          {/* Card */}
          <div className="relative p-10 rounded-3xl bg-white/90 backdrop-blur-sm border-2 border-blue-200/50 shadow-2xl shadow-blue-100/30 transition-all duration-500 overflow-hidden">
            
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-0"></div>
            <div className="absolute inset-[2px] rounded-3xl bg-white"></div>
            
            <div className="relative">
              {/* Animated number badge */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30"
              >
                <span className="text-3xl font-black text-white">{index + 1}</span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                {item}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-lg text-gray-700 leading-relaxed font-medium"
              >
                {item === 'Mission' && 'To empower retail businesses with intelligent technology that simplifies operations and drives growth.'}
                {item === 'Vision' && 'To become the leading provider of retail management solutions across India and beyond.'}
                {item === 'Values' && 'Innovation, integrity, and customer success drive everything we do at 3rd Eye Solutions.'}
              </motion.p>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Additional decorative animated elements */}
    <motion.div
      animate={{ 
        y: [0, -20, 0],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute bottom-10 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-50"
    />
    <motion.div
      animate={{ 
        y: [0, 20, 0],
        opacity: [0.3, 0.7, 0.3]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
      className="absolute top-20 right-20 w-6 h-6 bg-cyan-500 rounded-full opacity-40"
    />
  </div>
</section>

      {/* Hero Section II */}

     <section className="py-4 sm:py-6 bg-white overflow-hidden flex justify-center">
  <div className="max-w-[90rem] w-full px-6 sm:px-8 lg:px-12 flex justify-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative shadow-2xl overflow-hidden rounded-2xl w-full max-w-[1200px] responsive-clip"
      style={{
        backgroundImage: `url(${departmentalImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/20 to-black/80 z-0"
        initial={{ x: '-100%' }}
        whileInView={{ x: '100%' }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
      />
      
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{ 
              x: Math.random() * 1200,
              y: Math.random() * 200,
              scale: 0
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Responsive clip-path styling */}
      <style>
        {`
          .responsive-clip {
            clip-path: polygon(0 0, calc(100% - 200px) 0, 100% 50%, calc(100% - 200px) 100%, 0 100%);
          }

          @media (max-width: 1024px) {
            .responsive-clip {
              clip-path: polygon(0 0, calc(100% - 120px) 0, 100% 50%, calc(100% - 120px) 100%, 0 100%);
            }
          }

          @media (max-width: 768px) {
            .responsive-clip {
              clip-path: none;
              border-radius: 1rem;
            }
          }
        `}
      </style>

      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content wrapper */}
      <div className="relative flex flex-col lg:grid lg:grid-cols-[400px_1fr] items-stretch min-h-[180px] z-10">
        {/* Image Section with enhanced animation */}
        <motion.div 
          className="w-full h-40 sm:h-48 lg:h-auto overflow-hidden"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={demoBanner}
            alt="Demo Banner"
            className="h-full w-full object-cover object-center"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {/* Image glow effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Text Section */}
        <div className="flex flex-col justify-center p-4 sm:p-6 lg:py-6 lg:px-10 text-white z-10">
          {/* Title with typing animation */}
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-snug max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="inline-block overflow-hidden whitespace-nowrap"
            >
              Empower your business with 3rd Eye Solutions — designed for efficiency and growth.
            </motion.span>
          </motion.h2>

          {/* Description with staggered animation */}
          <motion.p 
            className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Discover how our smart solutions simplify operations, boost productivity, and drive better results.
          </motion.p>

          {/* Stats and CTA with enhanced animations */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6">
            {/* Clients counter */}
            <motion.div 
              className="text-center sm:text-left"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div 
                className="text-2xl sm:text-3xl font-bold text-white mb-1"
                initial={{ number: 0 }}
                whileInView={{ number: 500 }}
                transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
              >
                {({ number }) => <span>{Math.floor(number)}+</span>}
              </motion.div>
              <div className="text-sm text-gray-400 font-medium">Happy Clients</div>
            </motion.div>

            {/* Rating with pulse animation */}
            <motion.div 
              className="text-center sm:text-left"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                >
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </motion.div>
                <span className="text-2xl sm:text-3xl font-bold text-white">4.9</span>
              </div>
              <div className="text-sm text-gray-400 font-medium">Google Rating</div>
            </motion.div>

            {/* Animated CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 overflow-hidden group"
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Schedule a free demo</span>
                
                {/* Floating arrow icon */}
                <motion.span
                  className="ml-2 relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-6 right-8 w-2 h-2 bg-purple-400 rounded-full"
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />
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

      {/* Client Section */}
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
