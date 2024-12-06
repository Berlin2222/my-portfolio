import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Palette } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-6"
        >
          <div className="flex items-center gap-3">
            <Palette className="text-purple-600" size={32} />
            <h1 className="text-5xl font-bold leading-tight">
              UI/UX Designer
              <span className="block text-purple-600">& Frontend Developer</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            I craft beautiful, user-centered digital experiences and bring them to life with modern web technologies. Passionate about creating intuitive interfaces that make a difference.
          </p>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              View My Work
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1"
        >
          <img 
            src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=600&q=80" 
            alt="UI/UX Design Workspace"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}