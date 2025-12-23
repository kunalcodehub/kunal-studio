import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-[#0a0a0f] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              KS.
            </motion.a>
            <p className="text-gray-500 text-sm flex items-center gap-1 justify-center md:justify-start">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Kunal Sharma
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            {['Home', 'About', 'Skills', 'Projects', 'Blogs', 'Games', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kunal Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
