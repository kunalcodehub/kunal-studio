import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for building large-scale React applications with proper state management and code organization.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
    date: 'Dec 15, 2025',
    readTime: '8 min read',
    category: 'React',
    href: '#',
  },
  {
    title: 'Mastering TypeScript for Modern Development',
    excerpt: 'A comprehensive guide to TypeScript features that will boost your productivity and code quality.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop',
    date: 'Dec 10, 2025',
    readTime: '6 min read',
    category: 'TypeScript',
    href: '#',
  },
  {
    title: 'The Future of Web Development with AI',
    excerpt: 'Exploring how artificial intelligence is reshaping the landscape of web development and what it means for developers.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    date: 'Dec 5, 2025',
    readTime: '10 min read',
    category: 'AI/ML',
    href: '#',
  },
];

export default function Blogs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blogs" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16 lg:mb-20"
        >
          <span className="text-cyan-400 font-medium mb-4 block">MY WRITINGS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Latest <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Blogs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Sharing my thoughts, experiences, and insights on web development, technology, and more.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <a href={blog.href} className="block">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white text-xs font-medium">
                      {blog.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {blog.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all">
                      Read More <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 sm:mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-semibold hover:bg-white/10 hover:border-cyan-500/50 transition-all group"
          >
            View All Posts
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
