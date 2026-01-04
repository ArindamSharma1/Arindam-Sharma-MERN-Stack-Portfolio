import {
    Code2,
    Database,
    Server,
    Wrench,
    Zap,
    Layers,
    Package,
    Settings,
    Shield,
    Lock,
    Activity,
    Github,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
    Terminal,
    Cpu,
    Globe,
    Layout,
    Smartphone
} from 'lucide-react';

export const SOCIALS = [
    { icon: Github, href: 'https://www.github.com/ArindamSharma1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arindam-sharma-ab4712251/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/arindam._.sharma/', label: 'Instagram' },
];

export const HERO_STATS = [
    { end: 4, label: 'Years Experience' },
    { end: 15, label: 'Projects Shipped' },
    { end: 100, label: 'Code Quality %' },
];

export const PROJECTS = [
    {
        title: 'Folio Gauge',
        role: 'Full Stack Engineer',
        context: 'Automated Portfolio Analysis System',
        image: '/projects/Folio-Gauge.png',
        tech: [
            'React',
            'FastAPI',
            'Supabase Auth',
            'RLS',
            'PostgreSQL',
        ],
        description:
            'Orchestrates AI analysis for automated student portfolio critiques. Secured recruiter/student workflows with Row Level Security.',
        outcome: 'Reduced manual review time by 60% with automated AI feedback.',
        demo: 'https://folio-gauge.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/FolioGauge',
    },
    {
        title: 'Learn Vista LMS',
        role: 'Full Stack Engineer',
        context: 'Custom Moodle Interface',
        image: '/projects/learn-vista.png',
        tech: ['React', 'Moodle API', 'JWT Auth', 'i18n'],
        description:
            'Designed a modern, accessible frontend for Moodle. Implemented strict internationalization (i18n) standards and accessibility compliance.',
        outcome: 'lowered entry barrier for non-native speakers across the university.',
        demo: 'https://learn-vista-xi.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/learn-vista',
    },
    {
        title: 'JYC Club Platform',
        role: 'Lead Developer',
        context: 'University Event Management',
        image: '/projects/jyc-juit.png',
        tech: ['React', 'REST APIs', 'RBAC', 'Tailwind'],
        description:
            'High-volume event registration platform causing zero downtime during fest surges. Built admin dashboards with Role-Based Access Control.',
        outcome: 'Handled 5,000+ concurrent requests during peak registration hours.',
        demo: 'https://jyc.co.in/',
        // repo: 'https://github.com/yourusername/jyc-juit',
    },
    {
        title: 'Quantum QR',
        role: 'Self Completed',
        context: 'Privacy-First Tooling',
        image: '/projects/Quantum-QR-1.png',
        tech: [
            'React',
            'Vite',
            'Canvas API',
        ],
        description:
            'Zero-dependency QR generator focused on client-side performance. Removed server latency entirely by processing visuals in-browser.',
        outcome: 'Achieved sub-50ms generation time with pure Canvas API.',
        demo: 'https://quantum-qr-gold.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/Quantum-QR',
    },
    // {
    //     title: 'University Portal',
    //     role: 'Maintainer & optimizer',
    //     context: 'Critical Infrastructure',
    //     image: '/projects/juit.png',
    //     tech: [
    //         'React',
    //         'Service Workers',
    //         'Caching',
    //     ],
    //     description:
    //         'Maintained core university portal. Deployed Service Workers to ensure availability during result declaration traffic spikes.',
    //     outcome: 'Ensured 99.9% uptime during high-traffic result declarations.',
    //     demo: 'https://www.juit.ac.in/',
    //     // repo: 'https://github.com/yourusername/university-site',
    // },
    {
        title: 'Portfolio Showcase',
        role: 'Design Engineer',
        context: 'Personal Branding',
        image: '/projects/framer-portfolio.png',
        tech: ['Framer Motion', 'Performance', 'React'],
        description:
            'Experimental showcase focused on rendering performance and complex orchestrations without layout thrashing.',
        outcome: 'Demonstrated complex animations while maintaining 60fps.',
        demo: 'https://arindam-sharma.framer.website/',
        // repo: 'https://github.com/yourusername/framer-portfolio',
    },
];

export const EXPERIENCES = [
    {
        company: 'ApexPlanet Technologies',
        role: 'Frontend Developer Intern',
        duration: 'June 2025 - July 2025',
        description: 'Engineered high-performance web modules. Reduced load times by optimizing bundle sizes and implementing lazy loading strategies.',
        skills: ['React', 'Next.js', 'Typescript', 'Optimization'],
    },
    {
        company: 'Technical Club JYC-JUIT',
        role: 'Frontend Developer',
        duration: 'Oct 2023 - Nov 2024',
        description: 'Led development of the university technical club platform. Established code standards and mentored junior developers in React best practices.',
        skills: ['React', 'Code Review', 'Mentorship'],
    },
    {
        company: 'Freelance',
        role: 'Full Stack Developer',
        duration: 'June 2021 - Present',
        description: 'Delivered end-to-end web solutions for diverse clients. Translated loose requirements into robust, scalable production applications.',
        skills: ['System Design', 'Client Management', 'Full Stack'],
    },
];

export const TECH_CATEGORIES = [
    {
        name: 'Build Interfaces With',
        techs: [
            { name: 'React', icon: Zap },
            { name: 'Next.js', icon: Layers },
            { name: 'TypeScript', icon: Code2 },
            { name: 'Tailwind CSS', icon: Wrench },
            { name: 'Framer Motion', icon: Activity },
        ],
    },
    {
        name: 'Backends I Ship',
        techs: [
            { name: 'Node.js', icon: Server },
            { name: 'Express', icon: Server },
            { name: 'Supabase', icon: Database },
            { name: 'PostgreSQL', icon: Database },
            { name: 'FastAPI', icon: Zap },
        ],
    },
    {
        name: 'Motion/Design Tools',
        techs: [
            { name: 'Figma', icon: Wrench },
            { name: 'Git & CI/CD', icon: Settings },
            { name: 'Vercel', icon: Globe },
            { name: 'Docker', icon: Package },
        ],
    },
];

export const SYSTEMS = [
    {
        title: 'Authentication & Identity',
        icon: <Shield className="w-6 h-6 text-txt-secondary" />,
        content: 'Engineered secure identity management using Supabase Auth and Google OAuth. Implemented rigid JWT session handling to maintain user integrity.',
    },
    {
        title: 'Access Control (RBAC)',
        icon: <Lock className="w-6 h-6 text-txt-secondary" />,
        content: 'Architected granular Row Level Security (RLS) policies. Enforced strict per-user scan limits and admin-only privileges to prevent resource abuse.',
    },
    {
        title: 'Scalable Architecture',
        icon: <Server className="w-6 h-6 text-txt-secondary" />,
        content: 'Designed decoupled microservices with protected endpoints. Separated frontend logic from backend processing to ensure scalable data orchestration.',
    },
    {
        title: 'Performance Governance',
        icon: <Activity className="w-6 h-6 text-txt-secondary" />,
        content: 'Implemented intelligent rate limiting and resource governing mechanisms. Built architecture to handle concurrent traffic spikes gracefully.',
    },
];

export const CONTACT_INFO = {
    email: 'sharmaarindam091@gmail.com',
    phone: '+91 8580705992',
    location: 'India',
};
