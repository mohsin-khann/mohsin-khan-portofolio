'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-24"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <div className="relative group w-56 sm:w-64 md:w-72">
            <div className="absolute inset-0 rounded-2xl bg-blue-600 opacity-20 blur-lg group-hover:opacity-30 transition duration-300"></div>
        <Image
  src="/mohsin-about.png"
  alt="Mohsin Khan - About Image"
  width={400}
  height={400}
  className="rounded-xl object-cover shadow-lg"
/>

          </div>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I am Mohsin Khan, a Computer Science graduate from University of Engineering and Technology (UET) Peshawar, with experience as
a Full-Stack MERN Developer.I build efficient, scalable web applications with a focus on strong backend design and smooth user
interaction
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            My interests include Distributed Systems, Software Architecture, and System Optimization, and I aim to strengthen my
expertise in creating reliable, high-performance computing solutions. Motivated by continuous learning, I am committed to growing
as a researcher and technology professional.
          </p>

          <a
            href="mailto:mohsin.codes1@gmail.com"
            className="inline-block px-6 py-3 mt-4 font-medium text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
