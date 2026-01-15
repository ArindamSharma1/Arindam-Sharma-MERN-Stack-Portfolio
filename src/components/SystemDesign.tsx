import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SYSTEMS } from '../constants';

const systems = SYSTEMS;

const SystemCard = ({ system }: { system: (typeof systems)[0] }) => {
    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-primary-surface border border-secondary/10 hover:border-accent/20 hover:shadow-sm transition-all duration-300 group"
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg shadow-sm group-hover:bg-accent/10 transition-colors">
                    <div className="text-accent">
                        {system.icon}
                    </div>
                </div>
                <h3 className="text-xl font-bold text-txt-primary">{system.title}</h3>
            </div>
            <p className="text-txt-secondary leading-relaxed text-sm md:text-base">
                {system.content}
            </p>
        </motion.div>
    );
};

export const SystemDesign = () => {
    const { ref, inView } = useInView({
        threshold: 0.1, // Lower threshold for earlier trigger
        triggerOnce: true,
    });

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

    // Specific variants for the grid to ensuring staggering flows correctly
    const gridVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    const headerVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section
            id="system-design"
            className="section-padding bg-primary"
            ref={ref}
        >
            <div className="section-max-width">
                <motion.div
                    className="space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={headerVariants} className="max-w-3xl pl-6 border-l-2 border-accent relative space-y-4">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-txt-primary mb-2">
                                System Design & Security
                            </h2>
                        </div>
                        <p className="text-lg text-txt-secondary leading-relaxed">
                            Architecting secure, production-grade systems that scale.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 gap-6"
                        variants={gridVariants}
                    >
                        {systems.map((system) => (
                            <SystemCard key={system.title} system={system} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
