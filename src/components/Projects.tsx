import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

import { PROJECTS } from '../constants';

const projects = PROJECTS;

const ProjectCard = ({
	project,
	index,
}: {
	project: (typeof projects)[0];
	index: number;
}) => {
	const containerVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay: index * 0.1,
			},
		},
	};

	return (
		<motion.div
			className="group flex flex-col h-full bg-primary-surface border border-white/5 hover:border-accent/20 transition-colors rounded-lg overflow-hidden"
			variants={containerVariants}
			whileHover={{ y: -4 }}
		>
			<div className="relative aspect-video overflow-hidden">
				<img
					src={project.image}
					alt={project.title}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
				/>
				<div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
			</div>

			<div className="p-6 flex flex-col flex-grow relative">
				{/* Context Line */}
				<div className="flex items-center justify-between mb-3">
					<span className="text-xs font-medium text-accent uppercase tracking-wider">
						{project.context}
					</span>
					<span className="text-xs text-txt-secondary/60">
						{project.role}
					</span>
				</div>

				<h3 className="text-2xl font-bold text-txt-primary mb-3 group-hover:text-accent transition-colors flex items-center gap-2">
					{project.title}
					<ArrowUpRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
				</h3>

				<p className="text-txt-secondary text-sm leading-relaxed mb-4 flex-grow">
					{project.description}
				</p>

				<div className="mb-6">
					<p className="text-sm font-medium text-txt-primary border-l-2 border-accent pl-3 py-1 bg-accent/5">
						<span className="opacity-70 text-xs uppercase block mb-1">Outcome</span>
						{project.outcome}
					</p>
				</div>

				<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
					<div className="flex flex-wrap gap-2">
						{project.tech.slice(0, 3).map((tech) => (
							<span
								key={tech}
								className="text-xs text-txt-secondary font-medium"
							>
								{tech}
							</span>
						))}
						{project.tech.length > 3 && (
							<span className="text-xs text-txt-secondary font-medium opacity-60">
								+{project.tech.length - 3} more
							</span>
						)}
					</div>
					<div className="flex items-center gap-3">
						{project.demo && (
							<a
								href={project.demo}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 -m-2 text-txt-secondary hover:text-accent transition-colors relative z-20"
								aria-label={`Open ${project.title} demo`}
							>
								<ExternalLink size={20} />
							</a>
						)}
						{project.repo && (
							<a
								href={project.repo}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 -m-2 text-txt-secondary hover:text-accent transition-colors relative z-20"
								aria-label={`Open ${project.title} repository`}
							>
								<Github size={20} />
							</a>
						)}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export const Projects = () => {
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

	const headerVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<section
			id="projects"
			data-section="projects"
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
					<motion.div variants={headerVariants} className="max-w-xl pl-6 border-l-2 border-accent relative">
						{/* Visual Signature */}
						<h2 className="text-4xl md:text-5xl font-bold text-txt-primary mb-2">
							Selected Work
						</h2>
						<p className="text-txt-secondary text-lg">
							Building products that solve real problems.
						</p>
					</motion.div>

					<motion.div
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
						variants={containerVariants}
					>
						{projects.map((project, index) => (
							<ProjectCard
								key={project.title}
								project={project}
								index={index}
							/>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};
