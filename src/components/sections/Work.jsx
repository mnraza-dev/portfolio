import React from 'react';
import ProjectCard from '../ProjectCard';

const Work = () => {
  // Select 3 featured projects matching ratneshc.com
  const featuredProjects = [
    {
      title: 'Page Views API',
      desc: 'An open-source API to count visitors on any page. Simple, no setup, no dashboard.',
      href: 'https://page-views-api.ratneshc.com',
      repo: 'https://github.com/ratneshchipre/page-views-api',
      logo: '/assets/projects/page-views-api.svg',
      tags: [
        { name: 'Node.js', icon: '/assets/skills/nodejs-1.svg' },
        { name: 'Express.js', icon: '/assets/skills/express.svg' },
        { name: 'MongoDB', icon: '/assets/skills/mongodb.svg' },
      ],
      year: '',
    },
    {
      title: 'ratneshc.com',
      desc: 'A clean and minimal portfolio featuring my work, writing, and shadcn registry.',
      href: 'https://ratneshc.com',
      repo: 'https://github.com/ratneshchipre/ratneshc.com',
      logo: '/assets/projects/portfolio.svg',
      tags: [
        { name: 'Next.js', icon: '/assets/skills/nextjs.svg' },
        { name: 'TypeScript', icon: '/assets/skills/typescript.svg' },
        { name: 'TailwindCSS', icon: '/assets/skills/tailwindcss.png' },
        { name: 'shadcn/ui', icon: '/assets/skills/shadcn.svg' },
      ],
      year: '',
    },
    {
      title: 'draftlogo',
      desc: 'An AI logo generator built for founders to create professional, modern logos in seconds.',
      href: 'https://draftlogo.com',
      repo: 'https://github.com/ratneshchipre/draftlogo',
      logo: '/assets/projects/draftlogo.svg',
      tags: [
        { name: 'Next.js', icon: '/assets/skills/nextjs.svg' },
        { name: 'TypeScript', icon: '/assets/skills/typescript.svg' },
        { name: 'TailwindCSS', icon: '/assets/skills/tailwindcss.png' },
        { name: 'shadcn/ui', icon: '/assets/skills/shadcn.svg' },
        { name: 'Gemini AI', icon: '/assets/skills/gemini.svg' },
      ],
      year: '',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-wider uppercase mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of premium web applications focused on performance, clean design, and developer experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;