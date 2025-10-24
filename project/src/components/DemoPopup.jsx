import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import billing from "../assests/billing.png";

export default function DemoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    city: '',
    consent: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxF3L99tgwNVX4EAKFx4twlaFeVTzjw0-G8Fdy6p6YZbwE39EC7hmTqnUIebLRcdMyC/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.result === "success") {
        setMessage("✅ Demo request submitted successfully!");
        setFormData({ name: '', businessName: '', phone: '', city: '', consent: false });
        setIsOpen(false);
      } else {
        setMessage("❌ Failed to submit: " + result.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Unable to connect to server. Check internet or script permissions.");
    }

    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden relative flex flex-col md:flex-row">
              
              {/* Left Section */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="md:w-1/2 bg-cover bg-center text-white flex flex-col items-center justify-center p-8 relative"
                style={{ backgroundImage: `url(${billing})`, backgroundRepeat: 'no-repeat' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-indigo-700/60" />
                <div className="relative z-10 text-center space-y-4">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-full text-sm mb-4 shadow-lg inline-block"
                  >
                    🎁 Get 1-Month Free Trial
                  </motion.div>

                  <h2 className="text-3xl font-bold tracking-tight">3rd Eye Smart Billing</h2>
                  <p className="text-sm opacity-90">Simplify your billing, grow your business effortlessly.</p>

                  <div className="mt-8 flex justify-center gap-3">
                    <div className="w-4 h-4 bg-orange-400 rounded-full shadow-md" />
                    <div className="w-4 h-4 bg-orange-500 rounded-full shadow-md" />
                    <div className="w-4 h-4 bg-orange-400 rounded-full shadow-md" />
                  </div>
                </div>
              </motion.div>

              {/* Right Section */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 transition"
                >
                  <X size={20} />
                </button>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-1">Book Your Free Demo</h3>
                  <p className="text-gray-500 text-sm">Experience the smarter way to handle billing & inventory.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />

                  <input
                    type="text"
                    name="businessName"
                    placeholder="Business Name *"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value="+91"
                      disabled
                      className="w-16 text-center border border-gray-300 rounded-lg bg-gray-100 text-sm font-medium"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Contact Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />

                  <div className="flex items-start gap-3 text-xs text-gray-600">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="w-4 h-4 mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label>
                      I agree to receive communications from 3rd Eye Solutions about offers, updates, and demos.
                    </label>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "🚀 Book Free Demo"}
                  </motion.button>

                  {message && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-4 text-center text-sm text-gray-600 bg-blue-50 py-2 rounded-lg"
                    >
                      {message}
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
