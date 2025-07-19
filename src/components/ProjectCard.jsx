import React from 'react';

const ProjectCard = ({ title, image, description, year, type = 'Web Development', tags = [], index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className={`mb-12 flex items-start justify-center  group`} style={{ opacity: 1, transform: 'none' }}>
      <div
        className={`flex-grow max-w-2xl w-full ${isEven ? 'md:mr-8' : 'md:ml-8'} rounded-xl bg-gradient-to-br from-gray-900/60 via-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/30 overflow-hidden transition-all duration-300 relative shadow-lg group-hover:scale-[1.025] group-hover:shadow-cyan-500/10 mx-auto`}
        style={{ transform: 'none' }}>
        <div className="flex-none size-14 md:size-20 relative">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gray-900 border-2 border-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 z-10">
            <span className="text-xs font-bold text-emerald-400">{year}</span>
          </div>
        </div>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-24 h-24 object-cover rounded-lg shadow-md mx-auto mt-6 mb-4 border-2 border-gray-800 bg-gray-900"
            style={{ maxWidth: '96px' }}
          />
        )}
        <div className="h-0.5 w-full bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-cyan-500/10"></div>
        <div className="p-5 border-b border-gray-800/50">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="px-2 py-1 text-xs rounded-md bg-gray-800/80 backdrop-blur-sm text-cyan-400 border border-cyan-500/30">
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
            <button className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              View Details
            </button>
            <div className="flex space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-500 cursor-not-allowed">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="14"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-500 cursor-not-allowed">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="14"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500/10 via-teal-500/20 to-emerald-500/30"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
