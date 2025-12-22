import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-cyan-400 to-blue-500',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-purple-400 to-pink-500',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 82 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    title: 'Tools & Others',
    color: 'from-orange-400 to-red-500',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'Figma', level: 75 },
      { name: 'CI/CD', level: 82 },
    ],
  },
];

const technologies = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Node.js',
  'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Redis',
  'GraphQL', 'REST API', 'Docker', 'Kubernetes', 'AWS', 'GCP',
  'Git', 'GitHub', 'CI/CD', 'Tailwind', 'SASS', 'Figma',
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f172a]/50 to-[#0a0a0f]">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16 lg:mb-20"
        >
          <span className="text-cyan-400 font-medium mb-4 block">WHAT I DO</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16 lg:mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-colors"
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: catIndex * 0.2 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.2 + index * 0.1 + 0.3 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.02 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-500/30 hover:text-white transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
