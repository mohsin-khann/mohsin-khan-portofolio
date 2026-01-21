import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6 md:py-7">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top row (2 columns only) */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start mb-4">
          {/* Brand */}
          <div>
            <div className="text-lg font-bold mb-2">
              Mohsin<span className="text-blue-400"> Khan</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              Full Stack developer focused on building scalable, efficient web
              applications with clean architecture and smooth user experience.
            </p>

            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <FiMail size={16} />
              <a
                href="mailto:mohsin.codes1@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                mohsin.codes1@gmail.com
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="md:justify-self-end md:text-right">
            <div className="text-base font-semibold mb-2">Connect</div>

            <p className="text-gray-400 text-sm mb-2">Peshawar, Pakistan</p>

            <div className="flex items-center gap-3 md:justify-end mb-2">
              <a
                href="https://github.com/mohsin-khann"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                <FiGithub size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohsin-afridi-75655b210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                <FiLinkedin size={17} />
              </a>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Open to MERN stack roles, freelance projects, and collaborations.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-gray-800 pt-3 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-400 text-xs">
            © {currentYear} Mohsin Khan. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs flex items-center gap-1">
            Made with <FiHeart className="text-red-500" size={14} /> using Next.js
            & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
