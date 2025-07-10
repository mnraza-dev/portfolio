import React from 'react'

const ProjectCard = ({ title, description, image, github, demo, tags = [], texture }) => {
  return (
    <div className="bg-white dark:bg-[#18181b] rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-gray-200 dark:border-zinc-800 transition hover:scale-105 hover:shadow-lg duration-200">
      <div className="w-full h-40 flex items-center justify-center bg-gray-100 dark:bg-zinc-900 p-4">
        {texture ? (
          <video
            src={texture}
            className="w-full h-full object-contain rounded-md"
            autoPlay
            loop
            muted
            playsInline
            poster={image}
          />
        ) : (
          <img src={image} alt={title} className="max-h-24 object-contain" />
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300 flex-1">{description}</p>
        <div className="mt-4 flex gap-3">
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:underline font-medium">Live Demo</a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center" title="View source on GitHub">
              <img src="/assets/github.svg" alt="GitHub" className="w-5 h-5" />
            </a>
          )}
        </div>
        {tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag.name} className="flex items-center gap-1 bg-gray-200 dark:bg-zinc-800 text-xs px-2 py-1 rounded-full font-medium text-gray-700 dark:text-gray-200">
                {tag.path && <img src={tag.path} alt={tag.name} className="w-4 h-4" />}
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard