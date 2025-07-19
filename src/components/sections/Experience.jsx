import { workExperiences } from "../../constants/index.js";
import React from 'react';


const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16" style={{ opacity: 1 }}>
        <div className="inline-block" style={{ opacity: 1, transform: 'none' }}>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
            <span className="tracking-wider">PROFESSIONAL JOURNEY</span>
          </span>
        </div>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          style={{ opacity: 1, transform: 'none' }}>
          Work{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p
          className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed"
          style={{ opacity: 1, transform: 'none' }}>
          With <span className="font-bold text-emerald-400">10+</span> years in the industry, I've contributed to
          various projects and teams, continuously building my expertise across different domains.
        </p>
      </div>
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500/70 via-teal-500/50 to-cyan-500/30 md:transform md:-translate-x-1/2"></div>
        <div className="space-y-16">
          {workExperiences.map((item, idx) => (
            <React.Fragment key={item.year}>
              <div
                className={`relative flex flex-col md:flex-row${item.reverse ? ' md:flex-row-reverse' : ''}`}
                style={{ opacity: 1, transform: 'none' }}>
                <div className={`absolute left-0 md:left-1/2 top-0 w-14 h-14 bg-gray-900 border-4 border-emerald-500 rounded-full transform -translate-x-1/2 flex items-center justify-center shadow-lg shadow-emerald-500/20 z-10${item.reverse ? ' -ml-4' : ''}`}>
                  <div
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center"
                    style={{ transform: 'none' }}>
                    <span className="text-[10px] font-bold text-white">{item.year}</span>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-teal-500/30 overflow-hidden transition-all duration-500 shadow-lg shadow-black/20">
                    <div className="h-0.5 w-full bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-cyan-500/10"></div>
                    <div className="p-6 border-b border-gray-800/50">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm">
                        <div className="flex items-center">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="mr-2 text-teal-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12-5.373 12-12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0-6.627-5.373-12-12-12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path></svg>
                          <span>{item.company}</span>
                        </div>
                        <div className="flex items-center">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="mr-2 text-emerald-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="mr-2 text-cyan-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg>
                          <span>{item.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <div className="mb-5">
                        <h4 className="text-sm font-medium text-teal-400 mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {item.responsibilities.map((resp, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-start">
                              <span className="text-emerald-500 mr-2 mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-cyan-400 flex items-center gap-2 mb-3">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg> <span>Technologies</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, i) => (
                            <span key={i} className="px-2 py-1 text-xs rounded-md bg-gray-800/80 text-gray-300 border border-gray-700/50">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500/10 via-teal-500/20 to-emerald-500/30"></div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="text-center mt-24">
        <p className="text-gray-400 mb-8">Interested in my professional background? Let's connect to discuss how my experience can benefit your projects.</p>
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-4 rounded-lg text-teal-400 bg-gray-900 border border-teal-500/50 hover:bg-teal-900/20 hover:border-teal-400 transition-all duration-300 shadow-lg shadow-teal-900/20 group font-medium relative overflow-hidden"
          tabIndex={0}
          style={{ transform: 'none' }}>
          <span className="relative z-10">Get in Touch</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform text-teal-400"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Experience;
