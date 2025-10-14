import { motion } from 'framer-motion';
import { TrendingUp, Users, ShoppingCart, DollarSign, BarChart3, Package, Activity } from 'lucide-react';

const DashboardMockup = () => {
  const stats = [
    { icon: Users, label: 'Customers', value: '3,782', change: '+11.01%', color: 'from-blue-500 to-cyan-500' },
    { icon: ShoppingCart, label: 'Orders', value: '5,359', change: '+9.05%', color: 'from-purple-500 to-pink-500' },
    { icon: DollarSign, label: 'Revenue', value: '$16K', change: '+12.5%', color: 'from-green-500 to-emerald-500' },
  ];

  const chartData = [
    { month: 'Jan', value: 300 },
    { month: 'Feb', value: 350 },
    { month: 'Mar', value: 400 },
    { month: 'Apr', value: 500 },
    { month: 'May', value: 380 },
    { month: 'Jun', value: 450 },
    { month: 'Jul', value: 520 },
    { month: 'Aug', value: 480 },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full max-w-full mx-auto px-4 sm:px-6"
    >
      {/* Decorative background - hidden on small screens for clarity */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-16 animate-pulse pointer-events-none hidden sm:block"></div>

      <motion.div
        className="relative bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-white/50 overflow-hidden"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.25 }}
      >
        {/* Top-right decorative blob - hidden on small screens */}
        <div className="absolute top-0 right-0 w-40 h-40 md:w-96 md:h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-40 -translate-y-28 translate-x-28 hidden md:block"></div>

        <div className="relative">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-black text-gray-900">Real-Time Analytics</h3>
                <p className="text-xs sm:text-sm text-gray-500">Live business insights</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs sm:text-sm font-semibold text-gray-600">Live</span>
            </div>
          </div>

          {/* Stats - stack on small, inline on md+ */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.08 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 overflow-hidden group cursor-pointer"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl transform translate-x-12 -translate-y-12 group-hover:scale-125 transition-transform duration-500 hidden sm:block`}></div>

                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
                      <span className="text-xs sm:text-sm font-bold text-green-500">{stat.change}</span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${stat.color} flex items-center justify-center shadow-lg`}
                  >
                    <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Bar chart column */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base sm:text-lg font-bold text-gray-900">Monthly Sales</h4>
                <Activity className="w-4 h-4 text-gray-400" />
              </div>

              <div className="flex items-end justify-between h-36 sm:h-44 md:h-48 gap-2">
                {chartData.map((data, index) => (
                  <motion.div
                    key={data.month}
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.value / maxValue) * 100}%` }}
                    transition={{ delay: 1 + index * 0.06, duration: 0.45 }}
                    className="flex-1 group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`w-full h-full rounded-t-xl ${
                        index === 3
                          ? 'bg-gradient-to-t from-blue-600 to-cyan-500'
                          : 'bg-gradient-to-t from-gray-300 to-gray-400'
                      } group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300 relative`}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
                          ${data.value}
                        </div>
                      </div>
                    </motion.div>
                    <p className="text-xs text-gray-600 text-center mt-2 font-medium">{data.month}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Monthly target column */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 relative overflow-hidden"
            >
              {/* small decorative circle hidden on xs */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400 rounded-full blur-3xl opacity-20 hidden sm:block"></div>

              <div className="relative">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4">Monthly Target</h4>

                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                    <svg className="transform -rotate-90 w-32 h-32 sm:w-40 sm:h-40" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        className="text-gray-200"
                      />
                      <motion.circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="url(#gradient)"
                        strokeWidth="12"
                        fill="transparent"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: '0 440' }}
                        animate={{ strokeDasharray: '333 440' }}
                        transition={{ delay: 1.1, duration: 1.2, ease: 'easeOut' }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#2563EB" />
                          <stop offset="100%" stopColor="#06B6D4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.6 }}
                        className="text-2xl sm:text-4xl font-black text-gray-900"
                      >
                        75.5%
                      </motion.span>
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">Complete</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center p-2 sm:p-3 rounded-xl bg-white/50">
                    <p className="text-xs text-gray-600 mb-1">Target</p>
                    <p className="text-base sm:text-lg font-black text-gray-900">$20K</p>
                  </div>
                  <div className="text-center p-2 sm:p-3 rounded-xl bg-white/50">
                    <p className="text-xs text-gray-600 mb-1">Revenue</p>
                    <p className="text-base sm:text-lg font-black text-gray-900">$16K</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-4 p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center text-sm sm:text-base"
          >
            <p className="font-semibold flex items-center justify-center gap-2">
              <Package className="w-4 h-4 inline" />
              Real-time inventory tracking • Automated reports • AI-powered insights
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardMockup;
