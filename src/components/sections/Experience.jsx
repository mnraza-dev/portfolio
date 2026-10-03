import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Collab Vision Infosolutions',
      companyLink: 'https://collabvision.in',
      logo: '/assets/collab-vision.svg',
      location: 'Remote',
      roles: [
        {
          title: 'Frontend Developer',
          duration: 'Oct 2025 - Jun 2026',
          description: 'Jewellery Management System, Redux Toolkit, real-time alerts, PDF invoices, PWA features.',
          technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'shadcn/ui', 'Redux'],
        },
        {
          title: 'Backend Developer & UI/UX Intern',
          duration: 'Jun 2025 - Aug 2025',
          description: 'Mobile app UI/UX, RESTful API with Node/Express, OTP auth, Brevo emails, Cloudinary, Render deployment.',
          technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Figma'],
        },
      ],
    },
    {
      company: 'Netlink Digital Solutions (Part of Xebia)',
      companyLink: 'https://netlink.com',
      logo: '/assets/xebia.svg',
      location: 'Remote',
      roles: [
        {
          title: 'Software Engineer',
          duration: '2021 - 2025',
          description: 'Leading development of enterprise-level web applications and implementing cutting-edge solutions.',
          technologies: ['Next.js', 'React', 'Node.js', 'TypeScript', 'TailwindCSS', 'Redux Toolkit', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-black">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-wider uppercase mb-3">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, expIdx) => (
            <div key={expIdx} className="space-y-4">
              {/* Company header */}
              <div className="flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <img src={exp.logo} alt={exp.company} className="w-8 h-8 object-contain" onError={(e) => e.target.style.display = 'none'} />
                </div>
                <div>
                  <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-violet-400 transition-colors">
                    {exp.company}
                  </a>
                  <p className="text-gray-500 text-sm">{exp.location}</p>
                </div>
              </div>

              {/* Roles */}
              <div className="ml-4 border-l border-white/10 pl-6 space-y-6">
                {exp.roles.map((role, roleIdx) => (
                  <div key={roleIdx} className="relative before:absolute before:left-[-6px] before:top-0 before:w-3 before:h-3 before:rounded-full before:bg-violet-500">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                      <span className="text-gray-500 text-sm whitespace-nowrap">{role.duration}</span>
                    </div>
                    <p className="text-gray-400 mb-3 leading-relaxed">{role.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {role.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;