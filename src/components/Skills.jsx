import { FiCode, FiLayout, FiDatabase, FiUsers } from 'react-icons/fi';

export default function Skills() {
  const skillGroups = [
    {
      title: 'Languages & Core Web',
      icon: <FiCode className="w-6 h-6 text-blue-500" />,
      description:
        'Strong foundation in programming and core web technologies used to build reliable, maintainable applications.',
      skills: [
        'C++',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'Python',
        'PHP',
        'Dart'
      ]
    },
    {
      title: 'Frontend & UI Development',
      icon: <FiLayout className="w-6 h-6 text-emerald-500" />,
      description:
        'Building responsive, modern user interfaces with a focus on clean architecture and good user experience.',
      skills: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Bootstrap',
        'Component-based Architecture',
        'Responsive Design',
        'AI-powered UI features (integration)'
      ]
    },
    {
      title: 'Backend, Databases & AI Integration',
      icon: <FiDatabase className="w-6 h-6 text-purple-500" />,
      description:
        'Designing backend services, working with databases, and integrating AI and external services into web apps.',
      skills: [
        'Node.js & Express.js',
        'REST APIs & API Integration',
        'MongoDB & Mongoose',
        'MySQL',
        'Firebase',
        'Authentication & Authorization',
        'Web Troubleshooting & API Support',
        'Server Maintenance & Bug Fixing',
        'Database Setup & Hosting / Deployment',
        'AI Feature / AI API Integration'
      ]
    },
    {
      title: 'Soft Skills',
      icon: <FiUsers className="w-6 h-6 text-amber-500" />,
      description:
        'Skills that help in working effectively in teams, research environments, and professional software projects.',
      skills: [
        'Analytical Reasoning',
        'Critical Thinking',
        'Problem-Solving',
        'Time Management',
        'Team Collaboration'
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Stack
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Technical and soft skills developed through MERN stack projects,
            professional experience, and continuous learning in web and AI
            development.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-800">
                  {group.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {group.title}
                </h3>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {group.description}
              </p>

              <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-200">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
