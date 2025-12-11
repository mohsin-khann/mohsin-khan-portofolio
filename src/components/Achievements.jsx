import { FiAward, FiCpu, FiBookOpen, FiUsers } from 'react-icons/fi';

export default function Achievements() {
  const achievements = [
    {
      title: 'Industry Experience in Web & AI',
      icon: <FiAward className="w-6 h-6 text-blue-500" />,
      highlight:
        '20+ months of combined experience as a frontend and full stack developer in software houses.',
      details: [
        'Worked as a Frontend Developer at NGEN Circle and as a Full Stack Web & AI Developer at The Nerd Camp.',
        'Built production features, fixed real-world bugs and understood how professional teams ship software.'
      ]
    },
    {
      title: 'MERN & AI-Enabled Projects',
      icon: <FiCpu className="w-6 h-6 text-emerald-500" />,
      highlight:
        'Developed multiple MERN stack applications with API and AI feature integration.',
      details: [
        'Delivered dashboards, admin panels and customer-facing platforms using React, Node.js, MongoDB and REST APIs.',
        'Integrated AI features and external AI APIs into web apps to add intelligent behaviour and automation.'
      ]
    },
    {
      title: 'Academic & Independent Learning',
      icon: <FiBookOpen className="w-6 h-6 text-purple-500" />,
      highlight:
        'Computer Science graduate from UET Peshawar with a focus on systems and software design.',
      details: [
        'Explored topics like distributed systems, software architecture and system optimisation.',
        'Actively keeps learning through documentation, courses and building side projects in web and AI.'
      ]
    },
    {
      title: 'Mentoring & Team Collaboration',
      icon: <FiUsers className="w-6 h-6 text-amber-500" />,
      highlight:
        'Experience working in teams and helping juniors and interns get started with modern web tools.',
      details: [
        'Guided peers and interns on Git/GitHub, React basics, API integration and debugging best practices.',
        'Comfortable collaborating with designers, backend engineers and non-technical stakeholders.'
      ]
    }
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Highlights & Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            A brief overview of the practical experience, projects and learning
            that shape me as a MERN stack and AI-focused developer.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-800">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-3">
                {item.highlight}
              </p>

              <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                {item.details.map((line, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{line}</span>
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
