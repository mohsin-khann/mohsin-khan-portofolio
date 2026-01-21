'use client';
import { useState } from 'react';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Full Stack', 'Frontend', 'Platform'];

  const projects = [
    {
  title: 'UET University Website',
  subtitle: 'Academic Practice Project (React)',
  description:
    'A modern and responsive university website built as a practice project for my university (University of engineering and technology peshawar), focusing on clean UI, component structure, and real-world frontend layout patterns using React.',
  role: 'Frontend Developer (React)',
  businessImpact:
    'Strengthened practical understanding of React components, JavaScript logic, responsive design, and professional UI structuring for real-world web projects.',
  image: '/uet-project.png',
  technologies: ['React.js', 'JavaScript', 'Bootstrap', 'HTML5', 'CSS3'],
  category: 'Frontend',
  github: 'https://github.com/mohsin-khann/uet-peshawar-react-website',
  live: 'https://mohsin-uet-react-website.vercel.app/',
},
{
      title: 'Mechmaven - Automotive Service Platform',
      subtitle: 'Modern Business Website',
      description:
        'Customer-facing platform for an automotive service business with booking flows, service listings and contact forms.',
      role: 'Frontend Developer',
      businessImpact:
        'Helped the business present services clearly online and enabled customers to request services more easily.',
      image:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&h=600&fit=crop&crop=center',
      technologies: ['React', 'JavaScript', 'CSS3', 'Tailwind CSS'],
      category: 'Frontend',
      github: 'https://github.com/mohsin-khann/mechmaven',
      live: 'https://mechmaven-git-main-rahimshahs-projects.vercel.app/home',
    },
     {
      title: 'Doordars - Advanced React Application',
      subtitle: 'Modern Component Architecture',
      description:
        'A React application exploring reusable components, state management and clean UI patterns suitable for production dashboards.',
      role: 'Frontend / UI Engineer',
      businessImpact:
        'Used as a playground to experiment with modern React patterns, performance optimisation and accessibility.',
      image:
        'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&h=600&fit=crop&crop=center',
      technologies: ['React', 'Redux Toolkit', 'JavaScript ES6+', 'CSS3'],
      category: 'Platform',
      github: 'https://github.com/mohsin-khann/react-project02',
      live: 'https://mohsin-khan-react-project-ivory.vercel.app/',
    },

    {
      title: 'Vehicle FIR Verification System',
      subtitle: 'Enterprise Law Enforcement Solution',
      description:
        'Full-stack web platform for verifying vehicle FIR and theft records, designed for law-enforcement workflows with secure access control and dashboards.',
      role: 'Full Stack MERN Developer',
      businessImpact:
        'Helped automate manual verification and reduce paperwork by digitising the process and centralising records.',
      image:
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&h=600&fit=crop&crop=center',
      technologies: [
        'React',
        'Next.js',
        'Node.js',
        'TypeScript',
        'PostgreSQL',
        'REST APIs',
        'Authentication',
      ],
      category: 'Full Stack',
      github: 'https://github.com/mohsin-khann/FYP',
      live: 'https://rahimshah-fyp.vercel.app/home',
    },
    {
      title: 'Glow Natural — E-commerce Frontend',
      subtitle: 'Production-style Store UI (Responsive & Scalable)',
      description:
        'A production-style ecommerce frontend inspired by GlowNatural.pk, built during my remote role with DevAvrion Solution(Pvt Company Lahore). Designed with clean UI/UX, reusable product cards, structured layouts, and category-ready flows. Backend integration is in progress.',
      role: 'Frontend Developer',
      businessImpact:
        'Created a scalable ecommerce UI foundation with reusable components and consistent layout patterns, ready for API-driven catalog, filters, and checkout flows.',
      image: '/hero.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'Github','Vercel'],
      category: 'Frontend',
      github: 'https://github.com/mohsin-khann/https://github.com/mohsin-khann/glow-natural-clone', 
      live: 'https://mohsin-glow-natural.vercel.app/',
    },
{
  title: 'Hyper Market Web App',
  subtitle: 'Full Stack MERN E-commerce Platform',
  description:
    'A full-stack e-commerce web application developed as a Software House project over a 1-month Task using React, Node.js, Express, and MongoDB. The project focuses on real-world features, clean architecture, performance, and practical development workflow.',
  role: 'MERN Stack Developer',
  businessImpact:
    'Demonstrates real-world full stack development experience and provides a strong foundation for scalable e-commerce solutions.',
  image: '/hyper-market.png',
  technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript',],
  category: 'Full Stack',
  github: 'https://github.com/mohsin-khann/hyper-market',
  live: 'https://hyper-market-eight.vercel.app/product',
},

    {
      title: 'StoryPulse - Content Management Platform',
      subtitle: 'Scalable Publishing Dashboard',
      description:
        'Admin dashboard for managing digital content, analytics and user roles with a responsive, data-driven interface.',
      role: 'Full Stack Web Developer',
      businessImpact:
        'Improved editorial workflow and made it easier to track content performance and user activity.',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=600&fit=crop&crop=center',
      technologies: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'JWT',
        'Chart.js',
        'Tailwind CSS',
      ],
      category: 'Full Stack',
      github: 'https://github.com/mohsin-khann/StoryPulse',
      live: 'https://story-pulse-two.vercel.app/login',
    },

    {
  title: 'EasyShoppe E-commerce App',
  subtitle: 'Client Project (Fiverr)',
  description:
    'A Fiverr client project where I fixed bugs, completed missing features, improved backend APIs, and handled database integration using Node.js, Express, and MongoDB. Project deployed successfully.',
  role: 'MERN Stack Developer',
  businessImpact:
    'Delivered a real client project demonstrating backend APIs, database integration, and production deployment.',
  image: '/easyshoppe.png',
  technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
  category: 'Full Stack',
  github: 'https://github.com/mohsin-khann/EasyShoppe',
  live: 'https://easy-shoppe.vercel.app/collection',
},
   
    {
  title: 'Mohsin Gym & Fitness',
  subtitle: 'Responsive Multi-page Gym Website',
  description:
    'A modern and fully responsive gym website built for fitness trainers and businesses, featuring structured pages for services, courses, pricing, gallery, and blog with strong focus on UI, layout, and user experience.',
  role: 'Frontend Developer — 3-week Software House project',
  businessImpact:
    'Helps fitness businesses present their services professionally, build credibility, and attract potential clients through a clean and user-friendly web presence.',
  image: '/gym-project.png',
  technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
  category: 'Frontend',
  github: 'https://github.com/mohsin-khann/mohsin-gym-fitness',
  live: 'https://mohsin-gym-fitness.vercel.app/',
},
  ];

  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Selected Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            A snapshot of web and MERN stack projects, focusing on real workflows,
            dashboards and platforms where I worked on both frontend and backend
            integration.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <FiFilter />
            <span>Filter by focus</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm border transition-all ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {visibleProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              <div className="relative h-30 sm:h-39 overflow-hidden">

                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>

              <div className="flex-1 p-4 flex flex-col">

                <div className="mb-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
                  {project.description}
                </p>

                <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-3">
                  Role:{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {project.role}
                  </span>
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  {project.businessImpact}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project?.technologies ?? []).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[11px] bg-blue-50 dark:bg-gray-900 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
<div className="flex items-center justify-between">
  <div className="flex gap-4">
    {!!project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
      >
        <FiGithub className="w-4 h-4" />
        <span>Code</span>
      </a>
    )}

    {!!project.live && (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
      >
        <FiExternalLink className="w-4 h-4" />
        <span>Live</span>
      </a>
    )}
  </div>

  <p className="text-[11px] text-gray-500 dark:text-gray-400">
    Built with modern web tools
  </p>
</div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
