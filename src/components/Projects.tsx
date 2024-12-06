import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Figma, Layout, Code, Monitor, Palette } from 'lucide-react';

const projects = [
  {
    category: 'UI/UX',
    items: [
      {
        title: 'E-commerce Dashboard',
        description: 'Modern dashboard design with intuitive analytics visualization',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80',
        technologies: ['Figma', 'UI Design', 'User Research'],
        icon: <Monitor className="text-purple-600" size={24} />,
        liveLink: '#'
      },
      {
        title: 'Mobile App Design',
        description: 'Clean and minimal fitness tracking app interface',
        image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=600&q=80',
        technologies: ['Adobe XD', 'Prototyping', 'UI/UX'],
        icon: <Figma className="text-purple-600" size={24} />,
        liveLink: '#'
      },
      {
        title: 'Brand Identity',
        description: 'Complete visual identity system for a tech startup',
        image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=600&q=80',
        technologies: ['Branding', 'Visual Design', 'Typography'],
        icon: <Palette className="text-purple-600" size={24} />,
        liveLink: '#'
      }
    ]
  },
  {
    category: 'Development',
    items: [
      {
        title: 'React Weather App',
        description: 'Real-time weather application with dynamic updates',
        image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&w=600&q=80',
        technologies: ['React', 'TypeScript', 'API Integration'],
        icon: <Code className="text-purple-600" size={24} />,
        liveLink: '#'
      },
      {
        title: 'Portfolio Website',
        description: 'Responsive personal portfolio with modern animations',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
        icon: <Layout className="text-purple-600" size={24} />,
        liveLink: '#'
      },
      {
        title: 'Task Management App',
        description: 'Full-stack application for project management',
        image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=600&q=80',
        technologies: ['Next.js', 'Node.js', 'MongoDB'],
        icon: <Code className="text-purple-600" size={24} />,
        liveLink: '#'
      }
    ]
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('UI/UX');

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 mb-8">Showcasing my best work in design and development</p>
          
          <div className="flex justify-center gap-4 mb-12">
            {projects.map(({ category }) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects
              .find(cat => cat.category === activeCategory)
              ?.items.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                      <div className="text-white">
                        {project.icon}
                      </div>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.liveLink}
                        className="p-2 bg-white rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="text-gray-900" size={20} />
                      </motion.a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}