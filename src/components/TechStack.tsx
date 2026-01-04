import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TECH_CATEGORIES } from '../constants';

const techCategories = TECH_CATEGORIES;

const TechItem = ({ tech, index }: { tech: any; index: number }) => {
  const Icon = tech.icon;
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
      },
    },
  };

  return (
    <motion.div
      className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5 transition-colors cursor-default group"
      variants={containerVariants}
    >
      <div className="p-2 rounded-md bg-secondary/10 text-secondary group-hover:text-accent group-hover:bg-accent/10 transition-colors">
        <Icon size={20} />
      </div>
      <span className="text-sm font-medium text-txt-secondary group-hover:text-txt-primary transition-colors">
        {tech.name}
      </span>
    </motion.div>
  );
};

export const TechStack = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      className="section-padding bg-primary"
      ref={ref}
    >
      <div className="section-max-width">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={categoryVariants} className="max-w-xl pl-6 border-l-2 border-accent relative">
            <h2 className="text-4xl md:text-5xl font-bold text-txt-primary mb-2">
              Technology
            </h2>
            <p className="text-txt-secondary text-lg">
              The tools I use to build robust systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                className="space-y-6"
                variants={categoryVariants}
              >
                <h3 className="text-xl font-bold text-txt-primary border-b border-white/5 pb-2">
                  {category.name}
                </h3>
                <div className="flex flex-col gap-2">
                  {category.techs.map((tech, index) => (
                    <TechItem
                      key={tech.name}
                      tech={tech}
                      index={categoryIndex * category.techs.length + index}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
