import React from 'react';

const TechnicalSkills = () => {
  const techStack = [
    { name: 'TypeScript', icon: '/assets/skills/typescript.svg', link: 'https://www.typescriptlang.org/' },
    { name: 'JavaScript', icon: '/assets/skills/javascript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Node.js', icon: '/assets/skills/nodejs-1.svg', link: 'https://nodejs.org/' },
    { name: 'Express.js', icon: '/assets/skills/express.svg', link: 'https://expressjs.com/' },
    { name: 'Bun', icon: '/assets/skills/bun.svg', link: 'https://bun.sh/' },
    { name: 'React', icon: '/assets/skills/react.svg', link: 'https://react.dev/' },
    { name: 'Next.js', icon: '/assets/skills/nextjs.svg', link: 'https://nextjs.org/' },
    { name: 'Better-Auth', icon: '/assets/skills/better-auth.svg', link: 'https://www.better-auth.com/' },
    { name: 'TailwindCSS', icon: '/assets/skills/tailwindcss.png', link: 'https://tailwindcss.com/' },
    { name: 'shadcn/ui', icon: '/assets/skills/shadcn.svg', link: 'https://ui.shadcn.com/' },
    { name: 'Motion', icon: '/assets/skills/motion.svg', link: 'https://motion.dev/' },
    { name: 'Redux', icon: '/assets/skills/redux.svg', link: 'https://redux.js.org/' },
    { name: 'Git', icon: '/assets/skills/git.svg', link: 'https://git-scm.com/' },
    { name: 'MongoDB', icon: '/assets/skills/mongodb.svg', link: 'https://www.mongodb.com/' },
    { name: 'PostgreSQL', icon: '/assets/skills/postresql.svg', link: 'https://www.postgresql.org/' },
    { name: 'Prisma', icon: '/assets/skills/prisma.svg', link: 'https://www.prisma.io/' },
    { name: 'Supabase', icon: '/assets/skills/supabase.svg', link: 'https://supabase.com/' },
    { name: 'Figma', icon: '/assets/skills/figma.svg', link: 'https://www.figma.com/' },
  ];

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-wider uppercase mb-3">Tech Stack</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technologies I Work With</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {techStack.map((tech, idx) => (
            <a
              key={idx}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm truncate">{tech.name}</p>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;