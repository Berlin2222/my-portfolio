import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent('Hello Tushar,');
    const url = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=tusharvani08@gmail.com&su=${subject}&body=${body}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-100 rounded-full">
                <Mail className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">tusharvani08@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-100 rounded-full">
                <MapPin className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-gray-600">Available for Remote Work</p>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={handleSendMessage}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </motion.button>
            <a
              href="/path-to-assets/Tushar_Vani_Resume.pdf" // Replace with your actual path
              download="Tushar_Vani_Resume.pdf"
              className="block text-center bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors mt-4"
            >
              My Resume
            </a>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
