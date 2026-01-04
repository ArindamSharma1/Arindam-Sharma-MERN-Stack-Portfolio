import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';
import { SOCIALS } from '../constants';

const socials = SOCIALS;

export const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer
      className="bg-primary-surface text-txt-primary section-padding pb-8"
      ref={ref}
    >
      <div className="section-max-width">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8">
              Let's build something <span className="text-accent">meaningful.</span>
            </h2>
            <p className="text-txt-secondary text-lg leading-relaxed max-w-lg mb-8">
              Open to new opportunities and interesting projects.
            </p>
            <div className="flex flex-wrap gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center gap-2 px-5 py-3 rounded-md bg-white/5 hover:bg-white/10 text-txt-primary border border-white/5 transition-all group"
                    whileHover={{ y: -2 }}
                  >
                    <Icon size={18} className="text-secondary group-hover:text-accent transition-colors" />
                    <span className="font-medium text-sm">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-txt-secondary text-sm"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <span>&copy; {new Date().getFullYear()} Arindam Sharma.</span>
            </div>
            <div className="flex items-center gap-6">
              {['Home', 'Projects', 'Contact'].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
