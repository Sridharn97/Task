import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Package, FileText, BarChart3, Sparkles, TrendingUp, Shield } from 'lucide-react';
import { Star } from 'lucide-react';


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
              <span className="text-sm font-semibold text-blue-600">Trusted by 500+ Businesses</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
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
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto font-medium px-4"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-none transform translate-x-16 -translate-y-16 transition-transform duration-500"></div>
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
                className="relative p-10 rounded-3xl bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 border-2 border-blue-200 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
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
     

      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Store Gallery
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Take a glimpse at some of the retail stores revolutionizing their business with our solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                      <h3 className="text-2xl font-bold mb-2">{store.title}</h3>
                      <p className="text-sm font-medium">{store.location}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 bg-white">
        {/* Add these decorative circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              What Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Customers
              </span>{' '}
              Say
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Read testimonials from businesses that transformed their operations with our solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Rajesh Kumar",
                role: "Store Owner, Chennai",
                image: "https://randomuser.me/api/portraits/men/1.jpg",
                review: "The billing system has completely streamlined our operations. We've seen a 40% increase in efficiency.",
                rating: 5
              },
              {
                name: "Priya Sharma",
                role: "Department Manager, Mumbai",
                image: "https://randomuser.me/api/portraits/women/2.jpg",
                review: "Real-time inventory tracking has eliminated stockouts. Customer satisfaction is at an all-time high.",
                rating: 5
              },
              {
                name: "Amit Patel",
                role: "Retail Chain Owner, Bangalore",
                image: "https://randomuser.me/api/portraits/men/3.jpg",
                review: "Managing multiple stores became effortless. The analytics help us make data-driven decisions.",
                rating: 4.8
              },
              {
                name: "Sneha Reddy",
                role: "Operations Head, Hyderabad",
                image: "https://randomuser.me/api/portraits/women/4.jpg",
                review: "The GST compliance features save us hours of work. Best investment for our business.",
                rating: 4.9
              },
              {
                name: "Arjun Singh",
                role: "Store Manager, Delhi",
                image: "https://randomuser.me/api/portraits/men/5.jpg",
                review: "Customer support is exceptional. They're always there when we need them.",
                rating: 5
              },
              {
                name: "Maya Iyer",
                role: "Business Owner, Pune",
                image: "https://randomuser.me/api/portraits/women/6.jpg",
                review: "The AI insights have helped us optimize our inventory and increase profits significantly.",
                rating: 4.7
              },
              {
                name: "Vikram Mehta",
                role: "Retail Director, Ahmedabad",
                image: "https://randomuser.me/api/portraits/men/7.jpg",
                review: "Seamless integration with our existing systems. The transition was smooth and effective.",
                rating: 4.8
              },
              {
                name: "Anita Desai",
                role: "Finance Manager, Kolkata",
                image: "https://randomuser.me/api/portraits/women/8.jpg",
                review: "The automated reporting saves us countless hours. Reconciliation is now a breeze.",
                rating: 4.9
              },
              {
                name: "Karthik Rajan",
                role: "Store Owner, Coimbatore",
                image: "https://randomuser.me/api/portraits/men/9.jpg",
                review: "Best decision we made for our business. The ROI has been exceptional.",
                rating: 5
              },
              {
                name: "Lakshmi Menon",
                role: "Operations Director, Kochi",
                image: "https://randomuser.me/api/portraits/women/10.jpg",
                review: "The mobile app allows us to manage operations on the go. Highly recommended!",
                rating: 4.9
              }
            ].map((review, index) => (
              <motion.div
                key={review.name}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${review.name}&background=random`;
                    }}
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{review.name}</h3>
                    <p className="text-blue-600">{review.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(review.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-bold text-gray-600">
                    {review.rating}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{review.review}</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-6 rounded-full"
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
