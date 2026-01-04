import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_STATS } from '../constants';

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
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const StatCard = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / 50;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div
      className="text-left"
      variants={itemVariants}
      whileHover={{ x: 5 }}
    >
      <div className="text-3xl font-bold text-accent mb-1">
        {count}
        {label === 'Completed Projects' && '+'}
        {label === 'Years Experience' && '+'}
        {label === 'Code Quality %' && '%'}
      </div>
      <p className="text-txt-secondary text-sm font-medium tracking-wide uppercase">{label}</p>
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section
      id="home"
      data-section="home"
      className="pt-32 pb-20 min-h-screen flex items-center relative"
    >
      <div className="section-max-width w-full section-padding relative z-10">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6 max-w-4xl relative">
            {/* Visual Signature: Vertical Accent Line */}
            <div className="absolute -left-6 md:-left-12 top-2 w-1 h-32 bg-accent/50 hidden md:block"></div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-txt-primary tracking-tight"
              variants={itemVariants}
            >
              Engineering Scalable <span className="text-accent relative inline-block">Web Ecosystems<span className="absolute bottom-2 left-0 w-full h-2 bg-accent/20 -z-10"></span></span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-txt-secondary max-w-2xl leading-relaxed font-medium"
              variants={itemVariants}
            >
              Full Stack Engineer focused on <span className="text-txt-primary">performance, security,</span> and <span className="text-txt-primary">design systems.</span> I build resilient applications that scale with your business.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <motion.a
                className="button-primary flex items-center gap-2 group w-fit text-sm tracking-wide"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                href="/projects/Arindam_Sharma_Resume_C.pdf"
                download="Arindam_Sharma_Resume_C.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
              >
                View Resume
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-12 border-t border-primary-surface/30 w-full md:w-fit"
            variants={containerVariants}
          >
            {HERO_STATS.map((stat) => (
              <StatCard key={stat.label} end={stat.end} label={stat.label} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
