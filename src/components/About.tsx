import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react';

const stats = [
  { number: '5+', label: 'Years Experience', icon: Briefcase },
  { number: '50+', label: 'Projects Completed', icon: Award },
  { number: '30+', label: 'Happy Clients', icon: Heart },
  { number: '10+', label: 'Certifications', icon: GraduationCap },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16 lg:mb-20"
        >
          <span className="text-cyan-400 font-medium mb-4 block">GET TO KNOW ME</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl pointer-events-none" />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="text-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Passionate Developer & Creative Problem Solver
            </h3>
            
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a full-stack developer with a passion for creating elegant, efficient, and user-friendly 
                applications. With over 5 years of experience in the industry, I've had the privilege of 
                working with startups and established companies alike.
              </p>
              <p>
                My journey in tech started with a curiosity about how things work, which led me to dive deep 
                into programming. Today, I specialize in building modern web applications using cutting-edge 
                technologies like React, Node.js, and cloud services.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through blog posts and mentoring.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4 relative z-10"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                Let's Talk
              </a>
              <a
                href="/Kunal_Sharma_CV.pdf"
                download="Kunal_Sharma_CV.pdf"
                className="px-8 py-3 border-2 border-white/20 rounded-full text-white font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
