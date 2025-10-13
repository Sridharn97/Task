import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'SmartPOS Pro',
      description: 'Advanced AI-driven billing software with real-time analytics and customer insights.',
      image: 'https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      name: 'RetailEye Cloud',
      description: 'Cloud-based sales & inventory dashboard accessible from anywhere, anytime.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-purple-600 to-pink-500',
    },
    {
      name: 'BillEase Lite',
      description: 'Lightweight billing solution perfect for small retailers and startups.',
      image: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-green-600 to-teal-500',
    },
    {
      name: 'StoreMaster 360',
      description: 'End-to-end store management system covering all aspects of retail operations.',
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-orange-600 to-red-500',
    },
    {
      name: 'QuickBill Mobile',
      description: 'Android/iOS app for quick checkout and mobile point-of-sale operations.',
      image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-indigo-600 to-blue-500',
    },
    {
      name: 'StockSense AI',
      description: 'AI-powered inventory prediction with automated restock alerts and forecasting.',
      image: 'https://images.pexels.com/photos/7641824/pexels-photo-7641824.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-pink-600 to-rose-500',
    },
    {
      name: 'SafeLedger',
      description: 'Secure accounting and ledger system with multi-user access controls.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-cyan-600 to-blue-500',
    },
    {
      name: 'InsightPro',
      description: 'Powerful analytics tool for tracking sales trends, profit margins, and KPIs.',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-violet-600 to-purple-500',
    },
    {
      name: 'AutoTax',
      description: 'Automated GST calculation and tax return filing with compliance tracking.',
      image: 'https://images.pexels.com/photos/7651820/pexels-photo-7651820.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-emerald-600 to-green-500',
    },
    {
      name: 'ShopSync',
      description: 'Seamlessly integrates your POS system with online sales channels.',
      image: 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-amber-600 to-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 -z-10"></div>

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
            <span className="text-sm font-semibold text-blue-600">10 Powerful Solutions</span>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.03 }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=600';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-cyan-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <div className="text-center p-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4"
                    >
                      <ArrowRight className="w-8 h-8 text-blue-600" />
                    </motion.div>
                    <p className="text-white font-bold text-lg">View Details</p>
                  </div>
                </motion.div>

                <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm">
                  <span className={`text-sm font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.8 }}
                  className={`h-1.5 bg-gradient-to-r ${product.gradient} rounded-full mb-4`}
                ></motion.div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-blue-600 font-bold group-hover:text-cyan-500 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </div>

              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 animate-gradient"></div>
          <div className="relative p-12 sm:p-16 text-center text-white">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-black mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                We offer tailor-made solutions designed specifically for your unique business needs
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-blue-600 font-black text-lg rounded-2xl hover:shadow-2xl transition-all duration-300"
              >
                Request Custom Solution
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
