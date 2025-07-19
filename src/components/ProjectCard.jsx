import React from 'react';
import GithubIcon from '/assets/github.svg';
import LiveIcon from '/assets/live.png';

const ProjectCard = ({ title, repo, href, image, description, year, type = 'Web Dev', tags = [], index }) => {

  return (
    <div className="mb-12 flex items-start justify-center group">
      <div className="relative flex flex-col w-full max-w-2xl mx-auto">
      
        <div className="rounded-xl bg-gradient-to-br from-gray-900/60 via-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/30 overflow-hidden transition-all duration-300 relative shadow-lg group-hover:scale-[1.025] group-hover:shadow-cyan-500/10 w-full">
          {/* Optional year badge in top right */}
          {year && (
            <div className="absolute top-4 right-4 bg-gray-900 border-2 border-emerald-500 rounded-full px-3 py-1 text-xs font-bold text-emerald-400 shadow shadow-emerald-500/10 z-10">
              {year}
            </div>
          )}
          {/* Full-width project image inside card */}
          {image && (
            <div className="w-full aspect-[16/9] bg-gray-900 border-b border-gray-800 overflow-hidden">
              <img src={image} alt={title} className="w-full h-full object-cover rounded-t-xl" />
            </div>
          )}
          <div className="h-0.5 w-full bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-cyan-500/10"></div>
          <div className="p-5 border-b border-gray-800/50">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <span className="px-4 py-1 text-xs rounded-md bg-gray-800/80 backdrop-blur-sm text-cyan-400 border border-cyan-500/30 whitespace-nowrap min-w-[90px] text-center font-semibold">
                {type}
              </span>
            </div>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
          <div className="p-5">
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {tags &&
                  tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 flex items-center gap-1 py-1 rounded-md text-xs font-medium bg-gray-800/70 text-gray-300 border border-gray-700/50">
                      {tag.path && <img src={tag.path} alt={tag.name} className="w-4 h-4" />}
                      {tag.name || tag}
                    </span>
                  ))}
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-4 items-center">
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
                    <img src={LiveIcon} className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
                    Live Demo
                  </a>
                )}
                {repo && (
                  <a
                    href={repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
                    title="View source on GitHub">
                    <img src={GithubIcon} className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
                  </a>
                )}
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
