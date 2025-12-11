// src/app/projects/page.jsx
import Projects from '../../components/Projects';

export const metadata = {
  title: 'Projects | Mohsin Khan',
  description:
    'Projects by Mohsin Khan – web full stack developer focused on scalable, modern applications.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="pt-20">
        <Projects />
      </div>
    </main>
  );
}
