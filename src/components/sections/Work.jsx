import React, { useRef, useState, useEffect } from 'react';
import { myProjects } from '../../constants';
import ProjectCard from '../ProjectCard';

// Reusable LazyVideo component
const LazyVideo = ({ src, poster, ...props }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef} style={{ minHeight: 200 }}>
      {isVisible && (
        <video
          src={src}
          poster={poster}
          controls
          preload="none"
          width="100%"
          height="auto"
          {...props}
        />
      )}
    </div>
  );
};

const Work = () => {
  return (
    <section id="projects" className="c-space my-20">
      <div className="text-center mb-16" style={{ opacity: 1 }}>
        <div className="inline-block" style={{ opacity: 1, transform: 'none' }}>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
            <span className="tracking-wider">FEATURED WORK</span>
          </span>
        </div>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          style={{ opacity: 1, transform: 'none' }}>
          Recent{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p
          className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed"
          style={{ opacity: 1, transform: 'none' }}>
          Showcasing my work on projects ranging from web applications to mobile solutions, with a focus on user
          experience and technical excellence.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-8" style={{ opacity: 1, transform: 'none' }}>
          <button className="px-5 py-2 rounded-full transition-all duration-300 relative bg-gray-900/80 text-emerald-300 border border-emerald-500/50">
            <span className="absolute inset-0 rounded-full bg-emerald-500/10 animate-pulse"></span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></span>
            <span className="relative z-10">All</span>
          </button>
          <button className="px-5 py-2 rounded-full transition-all duration-300 relative bg-gray-900/80 text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-gray-300">
            <span className="relative z-10">Web Development</span>
          </button>
          <button className="px-5 py-2 rounded-full transition-all duration-300 relative bg-gray-900/80 text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-gray-300">
            <span className="relative z-10">Web Application</span>
          </button>
          <button className="px-5 py-2 rounded-full transition-all duration-300 relative bg-gray-900/80 text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-gray-300">
            <span className="relative z-10">Mobile Application</span>
          </button>
        </div>
      </div>
      <div className="mt-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {myProjects.map((project, idx) => (
          <ProjectCard
            key={project.title + idx}
            title={project.title}
            description={project.desc}
            image={project.logo}
            year={project.year}
            type={project.type}
            tags={project.tags}
            href={project.href}
            repo={project.repo}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
