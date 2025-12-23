import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f172a] to-[#0a0a0f]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-6"
            >
              <span className="text-cyan-400 text-sm font-medium">
                ✨ Crafting Digital Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mb-2">
                Hi, I'm
              </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                {portfolioConfig.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mb-4 sm:mb-6"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium">
                {portfolioConfig.position}
                <span className="text-gray-500 mx-2">at</span>
                <span className="text-cyan-400 font-semibold">{portfolioConfig.company}</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              A passionate{' '}
              <span className="text-cyan-400 font-semibold">{portfolioConfig.title}</span>{' '}
              crafting beautiful digital experiences with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: portfolioConfig.social.github },
                { icon: Linkedin, href: portfolioConfig.social.linkedin },
                { icon: Twitter, href: portfolioConfig.social.twitter },
                { icon: Mail, href: portfolioConfig.social.email },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Glowing Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse" />
              
              {/* Photo Container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
              >
                <div className="absolute inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full rounded-full bg-[#0a0a0f] p-2">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                      {portfolioConfig.profilePhoto ? (
                        <img 
                          src={portfolioConfig.profilePhoto} 
                          alt={portfolioConfig.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-8xl">{portfolioConfig.profileEmoji}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full text-white text-sm font-medium shadow-lg shadow-cyan-500/30">
                    React
                  </div>
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full text-white text-sm font-medium shadow-lg shadow-purple-500/30">
                    TypeScript
                  </div>
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white text-sm font-medium shadow-lg shadow-green-500/30">
                    Node.js
                  </div>
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full text-white text-sm font-medium shadow-lg shadow-pink-500/30">
                    GraphQL
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
