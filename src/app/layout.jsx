import './globals.css';

export const metadata = {
  title: 'Mohsin Khan | Web MERN Stack Developer',
  description:
    'Portfolio of Mohsin Khan — Computer Science graduate and MERN Stack Developer from UET Peshawar. Skilled in JavaScript, React, Node.js, MongoDB, API integration, distributed systems, and scalable web development.',
  keywords: [
    'Mohsin Khan',
    'MERN Stack Developer',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Portfolio',
    'Peshawar Developer',
    'Pakistan Developer'
  ],
  author: 'Mohsin Khan',
  icons: {
  icon: '/icon.png',
},
openGraph: {
  title: 'Mohsin Khan | Web MERN Stack Developer',
  description:
    'Full Stack MERN developer with experience in scalable web applications, backend design, and AI feature integration.',
  url: 'https://your-portfolio-url.com',
  siteName: 'Mohsin Portfolio',
  images: [
    {
      url: '/mohsin-hero.png',
      width: 1200,
      height: 630,
      alt: 'Mohsin Khan Portfolio',
    },
  ],
  locale: 'en_US',
  type: 'website',
},
twitter: {
  card: 'summary_large_image',
  title: 'Mohsin Khan | Web MERN Stack Developer',
  description:
    'Building scalable and efficient web applications with MERN stack and AI features.',
  images: ['/mohsin-hero.png'],
},

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
        {children}
      </body>
    </html>
  );
}
