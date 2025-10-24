import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaChevronDown,
} from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const socialLinks = [
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    {
      icon: FaEnvelope,
      href: "mailto:contact@3rdeyesolutions.com",
      label: "Email",
    },
  ];

  const contactInfo = [
    { icon: FaPhone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    {
      icon: FaEnvelope,
      text: "contact@3rdeyesolutions.com",
      href: "mailto:contact@3rdeyesolutions.com",
    },
    { icon: FaMapMarkerAlt, text: "123 Business Avenue, Tech City", href: "#" },
    { icon: FaClock, text: "Mon-Fri: 9 AM - 6 PM", href: "#" },
  ];

  const quickLinks = [
    { text: "About Us", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Products", href: "/products" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-white">
      {/* Subtle Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.3),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Accordion */}
        <div className="lg:hidden">
          {/* Company Info - Always Visible */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-6 text-center border-b border-white/10"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              3rd Eye Solutions
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed px-4">
              Empowering businesses with smart technology for a digital future.
            </p>
            
            {/* Social Icons - Mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-3 mt-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links Accordion */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection('links')}
              className="w-full py-4 px-4 flex justify-between items-center text-left"
            >
              <h4 className="text-sm font-semibold text-cyan-300">
                Quick Links
              </h4>
              <motion.div
                animate={{ rotate: openSection === 'links' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="w-3 h-3 text-cyan-300" />
              </motion.div>
            </button>
            <motion.div
              initial={false}
              animate={{ 
                height: openSection === 'links' ? 'auto' : 0,
                opacity: openSection === 'links' ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="pb-4 px-4 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 text-sm transition-colors block py-1"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info Accordion */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection('contact')}
              className="w-full py-4 px-4 flex justify-between items-center text-left"
            >
              <h4 className="text-sm font-semibold text-cyan-300">
                Contact Info
              </h4>
              <motion.div
                animate={{ rotate: openSection === 'contact' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="w-3 h-3 text-cyan-300" />
              </motion.div>
            </button>
            <motion.div
              initial={false}
              animate={{ 
                height: openSection === 'contact' ? 'auto' : 0,
                opacity: openSection === 'contact' ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="pb-4 px-4 space-y-3">
                {contactInfo.map((info) => (
                  <li key={info.text}>
                    <a
                      href={info.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                    >
                      <info.icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="break-words">{info.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              3rd Eye Solutions
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Empowering businesses with smart technology for a digital future.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h4 className="text-sm font-semibold mb-4 text-cyan-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
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
            className="text-center md:text-left"
          >
            <h4 className="text-sm font-semibold mb-4 text-cyan-300">
              Contact
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.text}>
                  <a
                    href={info.href}
                    className="flex justify-center md:justify-start items-center space-x-3 text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
                    <info.icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Social Icons - Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex space-x-3"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xs sm:text-sm text-center order-first lg:order-none"
          >
            © 2025 3rd Eye Solutions | All Rights Reserved
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;