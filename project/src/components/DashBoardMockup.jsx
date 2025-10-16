import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  BarChart3,
  Package,
  Activity,
  Clock,
  CreditCard,
  Layers,
  CheckCircle,
  List,
  Bell
} from 'lucide-react';

const DashboardMockup = () => {
  const stats = [
    { icon: Users, label: 'Customers', value: '3,782', change: '+11.01%', color: 'from-blue-500 to-cyan-500' },
    { icon: ShoppingCart, label: 'Orders', value: '5,359', change: '+9.05%', color: 'from-purple-500 to-pink-500' },
    { icon: DollarSign, label: 'Revenue', value: '$16K', change: '+12.5%', color: 'from-green-500 to-emerald-500' },
    { icon: CreditCard, label: 'Avg. Order', value: '$42.50', change: '+3.2%', color: 'from-yellow-400 to-orange-400' },
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

  const recentTransactions = [
    { id: 'TXN-0012', customer: 'Acme Corp', amount: '$1,200', status: 'Paid', method: 'Card', time: '2h ago' },
    { id: 'TXN-0011', customer: 'Beta Ltd', amount: '$320', status: 'Pending', method: 'UPI', time: '5h ago' },
    { id: 'TXN-0010', customer: 'Gamma LLC', amount: '$4,500', status: 'Paid', method: 'Card', time: '1d ago' },
  ];

  const topProducts = [
    { name: 'Product A', sold: 1250, share: 45 },
    { name: 'Product B', sold: 820, share: 30 },
    { name: 'Product C', sold: 430, share: 15 },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6"
    >
      {/* Decorative background - behind card */}
      <div className="absolute -inset-y-8 -inset-x-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl blur-3xl opacity-40 pointer-events-none -z-10 hidden md:block" />

      <motion.div
        className="relative z-10 bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100 overflow-hidden"
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-2xl font-extrabold text-gray-900">Real-Time Analytics</h3>
              <p className="text-xs md:text-sm text-gray-600">Live business insights • Updated every minute</p>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <div className="hidden sm:flex items-center gap-2 p-2 rounded-md bg-gray-50 border border-gray-100">
              <Bell className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600">3 alerts</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-gray-600">Live</span>
            </div>
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="p-4 rounded-2xl bg-white border border-gray-200 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">{stat.label}</p>
                <p className="text-2xl font-extrabold text-gray-900">{stat.value}</p>
                <div className="flex items-center gap-2 mt-1">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-semibold text-green-500">{stat.change}</span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color} text-white shadow-md`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Main content: chart + targets + lists */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
          {/* Chart + small summary (larger area) */}
          <div className="lg:col-span-2 p-4 rounded-2xl bg-white border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-900">Monthly Sales</h4>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock className="w-4 h-4" /> Updated 2m ago
              </div>
            </div>

            <div className="flex items-end justify-between h-44 gap-2">
              {chartData.map((data, idx) => (
                <div key={data.month} className="flex-1 flex flex-col items-center">
                  <div
                    style={{ height: `${(data.value / maxValue) * 100}%` }}
                    className={`w-full rounded-t-xl transition-all duration-300 ${idx === 3 ? 'bg-gradient-to-t from-blue-600 to-cyan-500' : 'bg-gray-200'}`}
                  />
                  <p className="text-xs text-gray-600 mt-2">{data.month}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="text-sm text-gray-600">
                <p className="font-semibold text-gray-900">Total Sales</p>
                <p className="text-lg font-bold">$42,320</p>
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-semibold text-gray-900">New Customers</p>
                <p className="text-lg font-bold">1,152</p>
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-semibold text-gray-900">Conversion</p>
                <p className="text-lg font-bold">4.8%</p>
              </div>
            </div>
          </div>

          {/* Right column: target + top products + transactions */}
          <div className="p-4 rounded-2xl bg-white border border-gray-200 flex flex-col gap-3">
            <div className="text-center">
              <h5 className="text-sm font-semibold text-gray-700">Monthly Target</h5>
              <div className="relative my-3">
                <svg className="mx-auto w-28 h-28 -rotate-90" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="80" cy="80" r="70" stroke="#eef2ff" strokeWidth="12" fill="transparent" />
                  <motion.circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="url(#g2)"
                    strokeWidth="12"
                    fill="transparent"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: '0 440' }}
                    animate={{ strokeDasharray: '333 440' }}
                    transition={{ delay: 0.4, duration: 0.9 }}
                  />
                  <defs>
                    <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-xl font-extrabold">75.5%</span>
                  <span className="text-xs text-gray-500">Complete</span>
                </div>
              </div>
            </div>

            <div>
              <h6 className="text-sm font-semibold text-gray-700 mb-2">Top Products</h6>
              <div className="space-y-3">
                {topProducts.map(prod => (
                  <div key={prod.name} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-800">{prod.name}</p>
                      <p className="text-xs text-gray-500">{prod.sold} sold</p>
                    </div>
                    <div className="w-24 h-2 bg-gray-100 rounded overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400" style={{ width: `${prod.share}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h6 className="text-sm font-semibold text-gray-700 mb-2">Recent Transactions</h6>
              <div className="space-y-2">
                {recentTransactions.map(tx => (
                  <div key={tx.id} className="flex items-center justify-between px-3 py-2 rounded-md bg-gray-50 border border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">{tx.customer}</span>
                      <span className="text-xs text-gray-500">{tx.id} • {tx.method}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold">{tx.amount}</span>
                      <span className={`text-xs font-medium ${tx.status === 'Paid' ? 'text-green-600' : 'text-yellow-600'}`}>{tx.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <button className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm">
                View Full Report
              </button>
            </div>
          </div>
        </div>

        {/* Activity feed */}
        <div className="mt-5 p-3 rounded-2xl bg-gray-50 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <h6 className="text-sm font-semibold text-gray-700">Activity Feed</h6>
            <span className="text-xs text-gray-500">Last 24h</span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <div className="mt-1 text-green-500"><CheckCircle className="w-5 h-5" /></div>
              <div className="flex-1 text-sm text-gray-700">
                Invoice <span className="font-semibold">#INV-1023</span> paid by <span className="font-medium">Omega Inc</span>.
                <div className="text-xs text-gray-500">3 hours ago</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 text-blue-500"><List className="w-5 h-5" /></div>
              <div className="flex-1 text-sm text-gray-700">
                120 new orders received.
                <div className="text-xs text-gray-500">6 hours ago</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 text-yellow-500"><Clock className="w-5 h-5" /></div>
              <div className="flex-1 text-sm text-gray-700">
                Scheduled maintenance at 02:00 AM UTC.
                <div className="text-xs text-gray-500">9 hours ago</div>
              </div>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardMockup;
