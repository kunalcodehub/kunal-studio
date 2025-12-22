import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard. Built for scale with microservices architecture.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Full Stack',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application powered by AI for smart responses and sentiment analysis. Features end-to-end encryption and voice messages.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['Next.js', 'OpenAI', 'WebSocket', 'PostgreSQL'],
    category: 'AI/ML',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Project Management Tool',
    description: 'Collaborative project management tool with Kanban boards, time tracking, and team analytics. Real-time updates and notifications.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Firebase', 'Tailwind', 'Charts.js'],
    category: 'Full Stack',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Crypto Dashboard',
    description: 'Real-time cryptocurrency tracking dashboard with portfolio management, alerts, and historical data visualization.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    tags: ['React', 'D3.js', 'WebSocket', 'API'],
    category: 'Frontend',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'Social Media Analytics',
    description: 'Analytics platform for social media managers with automated reporting, competitor analysis, and content scheduling.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['Python', 'Django', 'React', 'PostgreSQL'],
    category: 'Full Stack',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness application with workout plans, progress tracking, nutrition logging, and social features.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
    tags: ['React Native', 'Node.js', 'MongoDB', 'GraphQL'],
    category: 'Mobile',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML', 'Mobile'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="text-cyan-400 font-medium mb-4 block">MY WORK</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Here are some of my recent projects that showcase my skills and passion for building amazing digital experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white text-xs font-medium">
                    Featured
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 to-purple-600/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-cyan-400 text-sm font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 rounded-full text-gray-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-semibold hover:bg-white/10 hover:border-cyan-500/50 transition-all group"
          >
            View All Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
