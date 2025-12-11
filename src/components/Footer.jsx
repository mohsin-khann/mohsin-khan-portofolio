import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Mohsin<span className="text-blue-400"> Khan</span>
            </div>
            <p className="text-gray-400 mb-4">
              Full Stack developer focused on building scalable, efficient
              web applications with clean architecture and smooth user
              experience.
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

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="text-gray-400 text-sm mb-4">
              Peshawar, Pakistan
            </p>
            <div className="flex items-center gap-4 mb-4">
              <a
                href="https://github.com/mohsin-khann"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohsin-afridi-75655b210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Open to MERN stack roles, freelance projects, and collaborations.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-sm">
            © {currentYear} Mohsin Khan. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <FiHeart className="text-red-500" size={16} /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
