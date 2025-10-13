import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { MapPin, Mail, Phone, Globe, Sparkles, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.', {
      duration: 4000,
      style: {
        background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
        color: '#fff',
        padding: '20px',
        borderRadius: '16px',
        fontSize: '16px',
        fontWeight: '600',
      },
      icon: '✨',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Coimbatore, Tamil Nadu, India',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@3rdeyesolutions.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98765 43210',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'www.3rdeyesolutions.com',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 -z-10"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-sm font-semibold text-blue-600">Let's Connect</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
            Get in{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Touch
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Have a question or want to learn more about our solutions? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>

              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8 relative">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:bg-white transition-all duration-300 outline-none peer text-lg"
                    placeholder=" "
                  />
                  <label
                    className={`absolute left-6 transition-all duration-300 pointer-events-none font-medium ${
                      formData.name || focusedField === 'name'
                        ? '-top-3 text-sm bg-white px-2 text-blue-600'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Your Name
                  </label>
                  {focusedField === 'name' && (
                    <motion.div
                      layoutId="input-glow"
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:bg-white transition-all duration-300 outline-none peer text-lg"
                    placeholder=" "
                  />
                  <label
                    className={`absolute left-6 transition-all duration-300 pointer-events-none font-medium ${
                      formData.email || focusedField === 'email'
                        ? '-top-3 text-sm bg-white px-2 text-blue-600'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Email Address
                  </label>
                  {focusedField === 'email' && (
                    <motion.div
                      layoutId="input-glow"
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:bg-white transition-all duration-300 outline-none peer text-lg"
                    placeholder=" "
                  />
                  <label
                    className={`absolute left-6 transition-all duration-300 pointer-events-none font-medium ${
                      formData.subject || focusedField === 'subject'
                        ? '-top-3 text-sm bg-white px-2 text-blue-600'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Subject
                  </label>
                  {focusedField === 'subject' && (
                    <motion.div
                      layoutId="input-glow"
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    required
                    rows="5"
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:bg-white transition-all duration-300 outline-none resize-none peer text-lg"
                    placeholder=" "
                  ></textarea>
                  <label
                    className={`absolute left-6 transition-all duration-300 pointer-events-none font-medium ${
                      formData.message || focusedField === 'message'
                        ? '-top-3 text-sm bg-white px-2 text-blue-600'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Your Message
                  </label>
                  {focusedField === 'message' && (
                    <motion.div
                      layoutId="input-glow"
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-lg rounded-2xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </span>
                  <motion.div
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  ></motion.div>
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>

              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8 relative">
                Contact Information
              </h2>

              <div className="space-y-6 relative">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start space-x-4 group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-lg">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-96 group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125447.85274021048!2d76.96087!3d11.01609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <h3 className="text-2xl font-black text-white mb-2">Visit Us</h3>
                  <p className="text-lg text-white/90 font-medium">Coimbatore, Tamil Nadu, India</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
