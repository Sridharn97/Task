import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { MapPin, Mail, Phone, Globe, Sparkles, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbxTBed1NEcIrkbls35lG_1tnlHSP8DeCET6O0zmthNVJ8cNvVK9IUBxV4l1K_9J9yR9/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.success("Message sent successfully! We will get back to you soon.", {
        duration: 4000,
        style: {
          background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
          color: "#fff",
          padding: "20px",
          borderRadius: "16px",
          fontSize: "16px",
          fontWeight: "600",
        },
        icon: "✨",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending data:", error);
      toast.error("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Coimbatore, Tamil Nadu, India',
      gradient: 'from-red-500 to-orange-500',
      delay: 0.2,
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@3rdeyesolutions.com',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.3,
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98765 43210',
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.4,
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'www.3rdeyesolutions.com',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.5,
    },
  ];

  const floatingShapes = [
    { top: '10%', left: '5%', delay: 0, duration: 8 },
    { top: '60%', left: '80%', delay: 2, duration: 10 },
    { top: '30%', left: '70%', delay: 4, duration: 12 },
    { top: '80%', left: '10%', delay: 6, duration: 9 },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 overflow-hidden relative">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 -z-20"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={`absolute w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl`}
            style={{
              top: shape.top,
              left: shape.left,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-100/50 shadow-lg mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mr-3"
            />
            <span className="text-sm font-semibold text-blue-600 tracking-wide">LET'S CONNECT</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-6 tracking-tight"
          >
            Get in{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Touch
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Have a question or want to learn more about our solutions? We'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 sm:p-12 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl text-gray-900 mb-10 relative font-semibold tracking-tight"
              >
                Send us a message
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-8 relative">
                {['name', 'email', 'subject', 'message'].map((field, index) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative"
                  >
                    {field !== 'message' ? (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField('')}
                        required
                        className="w-full px-6 py-5 bg-white/50 border-2 border-gray-100 rounded-2xl focus:border-blue-500/50 focus:bg-white/80 transition-all duration-500 outline-none text-lg placeholder-transparent peer backdrop-blur-sm"
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                      />
                    ) : (
                      <textarea
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField('')}
                        required
                        rows="5"
                        className="w-full px-6 py-5 bg-white/50 border-2 border-gray-100 rounded-2xl focus:border-blue-500/50 focus:bg-white/80 transition-all duration-500 outline-none resize-none text-lg placeholder-transparent peer backdrop-blur-sm"
                        placeholder="Your Message"
                      />
                    )}
                    
                    <label
                      className={`absolute left-6 transition-all duration-300 pointer-events-none font-medium tracking-wide ${
                        formData[field] || focusedField === field
                          ? '-top-3 text-sm bg-white px-2 text-blue-600'
                          : 'top-5 text-gray-500'
                      }`}
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                    </label>

                    <AnimatePresence>
                      {focusedField === field && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 to-cyan-500/5 -z-10 border border-blue-500/20"
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg rounded-2xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group font-semibold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="w-5 h-5 mr-3 transition-transform group-hover:translate-x-1" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  
                  <motion.div
                    initial={{ x: '-100%', rotate: -45 }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl sm:text-4xl text-gray-900 mb-10 relative font-semibold tracking-tight"
              >
                Contact Information
              </motion.h2>

              <div className="space-y-6 relative">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: item.delay }}
                    whileHover={{ 
                      x: 8,
                      transition: { duration: 0.3 }
                    }}
                    className="flex items-start space-x-5 group cursor-pointer p-4 rounded-2xl hover:bg-white/50 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-lg font-light tracking-wide leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5 text-blue-600" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-96 group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125447.85274021048!2d76.96087!3d11.01609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8"
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ pulse: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-red-500 rounded-full"
                  />
                  <div>
                    <h3 className="text-2xl text-white mb-1 font-semibold tracking-tight">Visit Us</h3>
                    <p className="text-lg text-white/90 font-light tracking-wide">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;