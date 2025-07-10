import React from 'react'

const ProjectCard = ({ title, description, image, github, demo, tags = [], texture, index }) => {
  // Alternate layout: even index = details left, media right; odd index = media left, details right
  const isEven = index % 2 === 0;
  return (
    <div className={`animated-border bg-white dark:bg-[#18181b] rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} h-full border border-gray-200 dark:border-zinc-800 transition dark:hover:border-blue-500/30 hover:shadow-lg duration-200`}>
      {/* Media (image or video) */}
      <div className="md:w-1/2 w-full aspect-video md:aspect-auto md:h-80 flex items-center justify-center bg-gray-100 dark:bg-zinc-900 p-4">
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
          <img src={image} alt={title} className="w-full h-full object-cover rounded-lg shadow-md" />
        )}
      </div>
      {/* Details */}
      <div
        className="hover:border-1 hover:border-blue-500/30  md:w-1/2 w-full p-5 flex-1 flex flex-col justify-center"
        style={{ borderColor: 'rgb(30 41 59 / 1)' }}
      >
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