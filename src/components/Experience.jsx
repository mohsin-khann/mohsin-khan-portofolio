import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Experience() {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'NGEN Circle',
      period: '6 months',
      location: 'Peshawar, Pakistan · On-site',
      description: [
        'Developed responsive frontend interfaces using JavaScript, React, Tailwind CSS and Bootstrap.',
        'Integrated REST APIs and connected frontend with Node.js backend services for production features.',
        'Collaborated with backend and design teams to deliver clean, maintainable and reusable UI components.',
        'Contributed to integrating AI-powered features into web applications to enhance user experience.'
      ],
      tech: [
        'JavaScript',
        'React',
        'Node.js',
        'Tailwind CSS',
        'Bootstrap',
        'REST APIs',
        'AI Integration'
      ]
    },
    /*{
      title: 'Full Stack Web & AI Developer',
      company: 'The Nerd Camp',
      period: '14 months',
      location: 'Software House · Full Stack & AI',
      description: [
        'Built end-to-end MERN stack applications, from database design to deployment and maintenance.',
        'Implemented scalable REST APIs and reusable backend modules using Node.js and Express.',
        'Integrated AI models and external AI APIs into web platforms to deliver intelligent, data-driven features.',
        'Worked closely with teams to design clean architectures, improve performance and ensure reliability in production.'
      ],
      tech: [
        'MongoDB',
        'Express.js',
        'React',
        'Node.js',
        'MERN Stack',
        'AI Integration'
      ]
    },*/
    {
      title: 'Freelance Full Stack Developer',
      company: 'WhatsApp · Facebook · Fiverr',
      period: 'Ongoing',
      location: 'Remote · Client Projects',
      description: [
        'Leading freelance projects end-to-end — from client requirements and planning to final deployment.',
        'Developed custom websites, dashboards and landing pages for different business domains.',
        'Integrated APIs, authentication and AI-powered features where needed by clients.',
        'Communicated with clients regularly, refined requirements and delivered on time with proper handover.'
      ],
      tech: [
        'React',
        'Next.js',
        'Node.js',
        'MongoDB',
        'REST APIs',
        'Deployment'
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="inline-flex items-center gap-2 text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <FiBriefcase className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <span>Work Experience</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6 rounded-full" />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Professional experience as a full stack and AI-focused web developer, including
            software house roles and freelance projects delivering real-world solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 sm:pl-10 mb-12 last:mb-0"
            >
              {/* Vertical line */}
              {index !== experiences.length - 1 && (
                <span className="absolute left-3 sm:left-4 top-4 bottom-0 w-px bg-gradient-to-b from-blue-500/80 to-transparent" />
              )}

              {/* Dot */}
              <span className="absolute left-1.5 sm:left-3 top-3 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 shadow" />

              <div className="bg-white/95 dark:bg-gray-950/90 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 p-5 sm:p-6 hover:shadow-lg hover:border-blue-500/70 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex flex-col items-start sm:items-end">
                    <span className="inline-flex items-center gap-1">
                      <FiCalendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 mt-1">
                      <FiMapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description bullets */}
                <ul className="mt-3 space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                {exp.tech && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs sm:text-[11px] rounded-full bg-blue-50 dark:bg-gray-800 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
