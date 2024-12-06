import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Tushar Vani
            </span>
            <motion.div 
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <span className="text-gray-800 font-medium">{item}</span>
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-purple-600"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.a 
              whileHover={{ y: -2 }}
              href="https://www.linkedin.com/in/tushar-vani/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Linkedin className="text-gray-700 hover:text-purple-600" size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -2 }}
              href="mailto:tusharvani08@gmail.com"
              className="p-2 bg-gray-100 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Mail className="text-gray-700 hover:text-purple-600" size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col gap-4 bg-white rounded-lg p-4">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-800 hover:text-purple-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="flex gap-4 pt-4 border-t">
                  <a 
                    href="https://www.linkedin.com/in/tushar-vani-a93938169/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    <Linkedin className="text-gray-700 hover:text-purple-600" size={20} />
                  </a>
                  <a 
                    href="mailto:tusharvani08@gmail.com"
                    className="p-2 bg-gray-100 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    <Mail className="text-gray-700 hover:text-purple-600" size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}