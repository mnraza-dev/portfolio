import React, { useState } from 'react';
import Button from '../Button';
import { skills } from '../../constants/index.js';
import TechnicalSkills from './TechnicalSkills';

// Extract SkillPill from TechnicalSkills.jsx
// (If not exported, copy the SkillPill component here)

// SkillPill UI (copied from TechnicalSkills.jsx, without drag-and-drop)
const COLOR_THEMES = {
  cyan: {
    border: 'hover:border-cyan-500/30',
    shadow: 'hover:shadow-cyan-900/10',
    icon: 'text-cyan-400 group-hover:text-cyan-300',
  },
  emerald: {
    border: 'hover:border-emerald-500/30',
    shadow: 'hover:shadow-emerald-900/10',
    icon: 'text-emerald-400 group-hover:text-emerald-300',
  },
};

const SkillPill = ({ skill, color = 'cyan' }) => {
  const [imageError, setImageError] = React.useState(false);
  const theme = COLOR_THEMES[color] || COLOR_THEMES.cyan;
  const showImage = skill.image && !imageError;
  return (
    <div
      className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 ${theme.border} rounded-full px-4 py-2 transition-all duration-300 hover:shadow-lg ${theme.shadow} group flex items-center gap-2 select-none cursor-pointer`}>
      {showImage ? (
        <div className={`${theme.icon} transition-colors`}>
          <img
            src={skill.image}
            alt={skill.name}
            height="20"
            width="20"
            className="rounded-full"
            draggable={false}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        </div>
      ) : (
        <div
          className={`${theme.icon} transition-colors w-5 h-5 rounded-full bg-current opacity-20 flex items-center justify-center`}>
          <span className="text-xs text-gray-500">{skill.name.charAt(0)}</span>
        </div>
      )}
      <span className="text-sm font-medium text-white group-hover:text-gray-100 transition-colors">{skill.name}</span>
    </div>
  );
};

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('noorullahraza007@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section id="about" className="c-space my-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="techPattern" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="rgba(16, 185, 129, 0.5)"></circle>
              <circle cx="0" cy="0" r="1" fill="rgba(16, 185, 129, 0.5)"></circle>
              <circle cx="30" cy="0" r="1" fill="rgba(16, 185, 129, 0.5)"></circle>
              <circle cx="0" cy="30" r="1" fill="rgba(16, 185, 129, 0.5)"></circle>
              <circle cx="30" cy="30" r="1" fill="rgba(16, 185, 129, 0.5)"></circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techPattern)"></rect>
        </svg>
      </div>
      <div className="text-center mb-16" style={{ opacity: 1 }}>
        <div className="inline-block" style={{ opacity: 1, transform: 'none' }}>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
            <span className="tracking-wider">ABOUT ME</span>
          </span>
        </div>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          style={{ opacity: 1, transform: 'none' }}>
          Bringing Ideas to{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Life</span>
        </h2>
        <p
          className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed"
          style={{ opacity: 1, transform: 'none' }}>
          I'm a full-stack developer passionate about building elegant solutions that solve real-world problems.
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-2 gap-6 h-full">
        {/* 1. Profile/Stats (tall left) */}
        <div className="grid-container flex flex-col items-center justify-center xl:row-span-2 bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-6">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/assets/mnraza-dev.png"
              alt="Grid container image"
              className="w-44 h-auto object-cover rounded-full"
            />
            <p className="grid-headtext mb-1">Md Noorullah Raza</p>
            <p className="grid-subtext mb-1">Frontend Developer</p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-3 text-center mt-0">
              <div>
                <p className="text-xl font-bold text-emerald-400">10+</p>
                <p className="text-xs text-gray-400">Projects</p>
              </div>
              <div>
                <p className="text-xl font-bold text-emerald-400">4+ Years</p>
                <p className="text-xs text-gray-400">Experience</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-6 mb-4">
              <p className="grid-headtext">My Passion for coding and design</p>
              <p className="grid-subtext ">
                I ❤️ solving problems and building things through code. Coding isn't just my profession - it is my
                passion 🚀
              </p>
            </div>
          </div>
        </div>
        <div className="grid-container flex flex-col items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-6">
          <p className="grid-headtext">I work remotely across most timezones</p>
          <p className="grid-subtext">I am based in India, with remote work available.</p>
          <a className="w-fit" href="#contact">
            <Button containerClass={'w-full mt-6'} name={'Contact Me'} isBeam />
          </a>
        </div>
        <div className="grid-container flex flex-col items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-6">
          <img src="/assets/grid4.png" alt="Contact" className="w-full h-32 object-cover rounded-xl mb-4" />
          <p className="grid-subtext text-center">Contact Me</p>
          <div onClick={handleCopy} className="copy-container text-white-500 cursor-pointer">
            <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="" />
            {hasCopied ? <p>Copied Email</p> : <p>Copy Email</p>}
          </div>
        </div>
        {/* 2. Frontend Tech Stack */}
        <div className="grid-container bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-6 flex flex-col justify-center">
          <p className="grid-headtext bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent text-xl font-bold mb-4 text-center">Tech Stack</p>
          <span className="mt-2 flex flex-wrap justify-start gap-3">
            {skills.frontend.map((tech) => (
              <SkillPill key={tech.id} skill={tech} color="cyan" />
            ))}
          </span>
        </div>
       
        <div className="grid-container bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-cyan-500/10">
          <div className="space-y-8">
            
            <div className="border-t border-white/10 pt-6">
              {/* <p className="grid-headtext bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent text-xl font-bold mb-2 text-center">AI & Machine Learning</p>
              <div className="mt-2 flex flex-wrap justify-center gap-3">
                {skills.ai_ml.map((ai) => (
                  <SkillPill key={ai.id} skill={ai} color="pink" />
                ))}
              </div> */}
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
