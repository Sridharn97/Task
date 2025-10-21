import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaEnvelope, href: 'mailto:contact@3rdeyesolutions.com', label: 'Email' },
  ];

  const contactInfo = [
    { icon: FaPhone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: FaEnvelope, text: 'contact@3rdeyesolutions.com', href: 'mailto:contact@3rdeyesolutions.com' },
    { icon: FaMapMarkerAlt, text: '123 Business Avenue, Tech City', href: '#' },
    { icon: FaClock, text: 'Mon-Fri: 9 AM - 6 PM', href: '#' },
  ];

  const quickLinks = [
    { text: 'About Us', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Products', href: '/products' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-white py-8">
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.3),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-6">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2 text-center sm:text-left"
          >
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              3rd Eye Solutions
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering businesses with smart technology for a digital future.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center sm:text-left"
          >
            <h4 className="text-sm font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-200 text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center sm:text-left"
          >
            <h4 className="text-sm font-semibold mb-2">Contact</h4>
            <ul className="space-y-2">
              {contactInfo.map((info) => (
                <li key={info.text}>
                  <a
                    href={info.href}
                    className="flex justify-center sm:justify-start items-center space-x-2 text-gray-300 hover:text-cyan-400 text-sm transition-all"
                  >
                    <info.icon className="w-4 h-4 text-cyan-400" />
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider & Social */}
        <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex space-x-3"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xs sm:text-sm text-center"
          >
            © 2025 3rd Eye Solutions | All Rights Reserved
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
