import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaEnvelope, href: 'mailto:contact@3rdeyesolutions.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-white py-12 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.3),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-300"
          >
            © 2025 3rd Eye Solutions | All Rights Reserved
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
