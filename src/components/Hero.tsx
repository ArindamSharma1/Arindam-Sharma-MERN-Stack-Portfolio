import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_STATS } from '../constants';

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const wordVariants: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1], // Custom easing for "heavy/expensive" feel
    },
  },
};

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.2, // Slight delay after text
    },
  },
};

const buttonVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

const statVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
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
      variants={statVariants}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300 } }}
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
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const headline = "Engineering Scalable Web Ecosystems";
  const words = headline.split(" ");

  return (
    <section
      ref={targetRef}
      id="home"
      data-section="home"
      className="pt-24 pb-20 min-h-screen flex items-start relative overflow-hidden"
    >
      {/* Background Parallax Elements */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* Visual Signature: Vertical Accent Line */}
        <div className="absolute left-[8%] top-0 w-px h-[60vh] bg-accent/20 hidden md:block"></div>
      </motion.div>

      <div className="section-max-width w-full section-padding relative z-10">
        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: yText }} // Subtle paralax on the whole text block
        >
          <div className="space-y-6 max-w-4xl relative">
            <div className="overflow-hidden flex flex-wrap gap-x-4 gap-y-2">
              {/* Visual Signature Accent for Title */}
              <span className="absolute -left-6 md:-left-12 top-2 w-1 h-24 bg-accent hidden md:block" />

              {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-txt-primary tracking-tight"
                    variants={wordVariants}
                  >
                    {word === "Web" || word === "Ecosystems" ? (
                      <span className="text-accent relative inline-block">
                        {word}
                        {word === "Ecosystems" && <span className="absolute bottom-2 left-0 w-full h-2 bg-accent/20 -z-10"></span>}
                      </span>
                    ) : (
                      word
                    )}
                  </motion.h1>
                </span>
              ))}
            </div>

            <motion.p
              className="text-lg md:text-xl text-txt-secondary max-w-2xl leading-relaxed font-medium"
              variants={fadeVariants}
            >
              Full-stack web development focused on <span className="text-txt-primary">performance, maintainability,</span> and <span className="text-txt-primary">scale.</span>
            </motion.p>

            <motion.div variants={buttonVariants} className="pt-4">
              <motion.a
                className="button-primary flex items-center gap-2 group w-fit text-sm tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
            className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-8 border-t border-primary-surface/30 w-full md:w-fit"
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
