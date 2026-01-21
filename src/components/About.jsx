'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="py-10 sm:py-14 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 lg:gap-10 items-start">


        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">


        <div className="relative group w-55 lg:w-86 animate-[float_4.5s_ease-in-out_infinite]">


            <div className="absolute inset-0 rounded-2xl bg-blue-600/15 blur-xl group-hover:bg-blue-600/25 transition duration-300" />
            <div className="relative rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-800 shadow-lg">
              <Image
                src="/mohsin-about.png"
                alt="Mohsin Khan"
                width={520}
                height={520}
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-blue-600 dark:text-blue-400 mb-3">
            
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>

         <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
  I’m Mohsin Khan, a Computer Science graduate from UET Peshawar and a Full-Stack MERN Developer. I build efficient, scalable web
  applications with strong backend foundations—and I also integrate practical AI features (LLM-powered workflows, intelligent search,
  and automation) through clean, secure APIs.
</p>


          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
  My interests include Distributed Systems, Software Architecture, System Optimization, and applied AI. I’m preparing for a
  research-focused Master’s in AI/Computer Science and aim to contribute to reliable, high-performance systems where AI improves real
  product outcomes.
</p>


          {/* HIGHLIGHTS */}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
  <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-4">
    <p className="text-sm font-semibold text-gray-900 dark:text-white">
      Modern Web Development Stack
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
      JavaScript,React, Next.js, Node.js,  Git, Vercel.
    </p>
  </div>

  <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-4">
    <p className="text-sm font-semibold text-gray-900 dark:text-white">
      AI-Integrated Web Systems
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
      LLM/API integrations, intelligent search, workflow automation.
    </p>
  </div>

  <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-4">
    <p className="text-sm font-semibold text-gray-900 dark:text-white">
      Professional Strengths
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
      Problem-solving, teamwork, communication, ownership.
    </p>
  </div>

  <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-4">
    <p className="text-sm font-semibold text-gray-900 dark:text-white">
      Open to Opportunities
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
      Research-focused Master’s, internships, and impactful projects.
    </p>
  </div>
</div>


          {/* CTA */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Contact
            </a>

            <a
              href="/MohsinKhan_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
