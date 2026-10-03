import React from 'react';
import LiveIcon from '/assets/live.svg';
import GithubIcon from '/assets/github.svg';

const ProjectCard = ({ project, index }) => {
  if (!project) return null;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]">
      {/* Project Image */}
      {project.logo && (
        <div className="relative aspect-video overflow-hidden">
          {project.logo.endsWith('.gif') || project.logo.endsWith('.mp4') ? (
            <img
              src={project.logo}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center p-6">
              <img
                src={project.logo}
                alt={project.title}
                className="max-h-24 max-w-24 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      <div className="p-6">
        {/* Year badge */}
        {project.year && (
          <span className="inline-block px-2.5 py-1 text-xs font-medium text-violet-400 bg-violet-500/10 rounded-full mb-3">
            {project.year}
          </span>
        )}

        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.desc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags?.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/5"
            >
              {tag.path && <img src={tag.path} alt={tag.name} className="w-3.5 h-3.5" />}
              {tag.name || tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600/10 border border-violet-500/20 text-violet-300 hover:bg-violet-600/20 transition-colors text-sm font-medium"
            >
              <img src={LiveIcon} className="h-4 w-4" alt="Live" />
              Live Demo
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition-colors text-sm font-medium"
            >
              <img src={GithubIcon} className="h-4 w-4" alt="GitHub" />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;