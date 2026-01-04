import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Server, Activity } from 'lucide-react';

const systems = [
    {
        title: 'Authentication & Identity',
        icon: <Shield className="w-6 h-6 text-secondary" />,
        content: 'Engineered secure identity management using Supabase Auth and Google OAuth. Implemented rigid JWT session handling to maintain user integrity across distributed client-server interactions.',
    },
    {
        title: 'Access Control & Limits',
        icon: <Lock className="w-6 h-6 text-secondary" />,
        content: 'Architected granular Row Level Security (RLS) policies and Role-Based Access Control (RBAC). Enforced strict per-user scan limits and admin-only privileges to prevent resource abuse.',
    },
    {
        title: 'Backend Architecture',
        icon: <Server className="w-6 h-6 text-secondary" />,
        content: 'Designed a decoupled FastAPI microservices layer with protected API endpoints. Separated frontend logic from backend processing to ensure scalable, secure data orchestration.',
    },
    {
        title: 'Performance & Safety',
        icon: <Activity className="w-6 h-6 text-secondary" />,
        content: 'Implemented intelligent rate limiting and resource governing mechanisms. Built the architecture to handle concurrent traffic spikes while strictly enforcing usage quotes.',
    },
];

const SystemCard = ({ system, index }: { system: (typeof systems)[0]; index: number }) => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            className="p-6 rounded-xl bg-primary-surface border border-secondary/10 hover:border-accent/20 hover:shadow-sm transition-all duration-300"
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg shadow-sm">
                    {system.icon}
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
        threshold: 0.15,
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

    const headerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
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
                    <motion.div variants={headerVariants} className="space-y-4">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-txt-primary mb-4">
                                System Design & Security
                            </h2>
                            <div className="w-24 h-1 bg-accent rounded-full"></div>
                        </div>
                        <p className="text-lg text-txt-secondary max-w-3xl leading-relaxed">
                            Architected and implemented a secure, production-grade systems. Designed to ensure data integrity, prevent abuse, and scale independently of frontend logic.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 gap-6"
                        variants={containerVariants}
                    >
                        {systems.map((system, index) => (
                            <SystemCard key={system.title} system={system} index={index} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
