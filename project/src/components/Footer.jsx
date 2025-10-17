import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaEnvelope, href: 'mailto:contact@3rdeyesolutions.com', label: 'Email' },
  ];

  const contactInfo = [
    { icon: FaPhone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: FaEnvelope, text: 'contact@3rdeyesolutions.com', href: 'mailto:contact@3rdeyesolutions.com' },
    { icon: FaMapMarkerAlt, text: '123 Business Avenue, Tech City, TC 12345', href: '#' },
    { icon: FaClock, text: 'Mon-Fri: 9:00 AM - 6:00 PM', href: '#' },
  ];

  const quickLinks = [
    { text: 'About Us', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Products', href: '/products' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-white py-10">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.3),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              3rd Eye Solutions
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering businesses with innovative technology solutions for a digital future.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-200 flex items-center space-x-2"
                  >
                    <span className="h-px w-4 bg-cyan-400"></span>
                    <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.text}>
                  <a
                    href={info.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-all duration-200 text-sm"
                  >
                    <info.icon className="w-4 h-4 text-cyan-400" />
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-gray-300 text-sm">Stay updated with our latest news and updates.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all duration-200 text-sm"
              />
              <button className="w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-md transition-all duration-200 font-medium text-sm">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-5 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex space-x-3"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center text-gray-400 text-sm"
            >
              © 2025 3rd Eye Solutions | All Rights Reserved
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
