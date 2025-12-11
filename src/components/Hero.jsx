'use client';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT SIDE */}
        <div className="lg:w-1/2 space-y-5">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500 dark:text-blue-400">
            Web MERN Stack Developer
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I&apos;m{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Mohsin Khan
            </span>
          </h1>

          <div className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-snug space-y-1.5">
            <p className="flex items-start gap-2">
              <span>•</span> Web MERN Stack Developer</p>
            <p className="flex items-start gap-2">
              <span>•</span> Building Efficient & Scalable Web Applications
            </p>
            <p className="flex items-start gap-2">
              <span>•</span> AI-Powered Features & API Integrations
            </p>
            <p className="flex items-start gap-2">
              <span>•</span> Leading freelance projects from requirements to deployment
            </p>
            <p className="flex items-start gap-2">
              <span>•</span>Continuous Learner with a Research Interest in Computing</p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/MohsinKhan_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white text-sm sm:text-base font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors"
            >
              <FiDownload className="w-4 h-4" />
              View Resume
            </a>

            <a
              href="mailto:mohsin.codes1@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-sm sm:text-base text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FiMail className="w-4 h-4" />
              Contact Me
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-5">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Find me on
            </span>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/mohsin-khann"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohsin-afridi-75655b210"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 p-3 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden flex items-center justify-center">
                <Image
                  src="/mohsin-hero.png"
                  alt="Mohsin Khan"
                  width={400}
                  height={400}
                  className="max-w-full max-h-full object-contain scale-110"
                  priority
                />
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl border border-white/70 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur flex flex-col items-center justify-center text-xs text-gray-700 dark:text-gray-200 shadow-lg">
              <span className="font-semibold">FULL STACK</span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400">
                Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
