import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState, useEffect } from 'react';

import { useMediaQuery } from 'react-responsive';
import { calculateSizes, skills } from '../../constants/index.js';
import Button from '../Button.jsx';
import { IconArrowRight } from '@tabler/icons-react';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roleTexts = ['Product Builder', 'Software Developer', 'Frontend Developer', 'Tech Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % roleTexts.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="text-white min-h-screen w-full flex flex-col relative overflow-hidden bg-black">
      {/* Main hero content block and profile card only, backgrounds removed */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row gap-8 gap-y-12 items-stretch justify-center">
        {/* Main hero content block */}
        <div className="w-full max-w-2xl mx-auto flex flex-col sm:mt-10 mt-4 c-space gap-2">
          {/* Main hero content block, refactored to match reference */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-sm shadow-emerald-500/50"></div>
                <span
                  className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-cyan-400 bg-clip-text text-transparent font-semibold tracking-wide text-sm"
                  style={{ textShadow: 'rgba(16, 185, 129, 0.318) 0px 0px 5.45364px' }}>
                  Available for opportunities
                </span>
              </div>
            </div>
            {/* Headline and subheadline */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                  <span className="block text-gray-300 font-light">Welcome, I'm</span>
                  <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent font-bold">
                    Noorullah Raza
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-400 tracking-wide">
                  {roleTexts[currentTextIndex]}
                </h2>
              </div>
            </div>
            {/* Description */}
            <div>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl font-light">
                I craft exceptional digital experiences with modern technologies. Specializing in
                <span className="text-emerald-400 font-medium"> React applications</span>,
                <span className="text-cyan-400 font-medium"> mobile development</span>, and
                <span className="text-teal-400 font-medium"> secure systems</span>.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 w-fit mx-auto">
              <span className="w-fit px-4 py-2 border rounded-full text-sm font-medium backdrop-blur-sm shadow-sm transition-all duration-300 cursor-default flex items-center gap-2 bg-emerald-900/20 border-emerald-500/30 text-emerald-300 hover:border-emerald-400/60 hover:shadow-emerald-500/20">
                <img src={skills.frontend[2].image} alt="React" className="w-4 h-4" loading="lazy" />
                <span>{skills.frontend[2].name}</span>
              </span>
              <span className="w-fit px-4 py-2 border rounded-full text-sm font-medium backdrop-blur-sm shadow-sm transition-all duration-300 cursor-default flex items-center gap-2 bg-cyan-900/20 border-cyan-500/30 text-cyan-300 hover:border-cyan-400/60 hover:shadow-cyan-500/20">
                <img src={skills.frontend[1].image} alt="TypeScript" className="w-4 h-4" loading="lazy" />
                <span>{skills.frontend[1].name}</span>
              </span>
              <span className="w-fit px-4 py-2 border rounded-full text-sm font-medium backdrop-blur-sm shadow-sm transition-all duration-300 cursor-default flex items-center gap-2 bg-cyan-900/20 border-cyan-500/30 text-cyan-300 hover:border-cyan-400/60 hover:shadow-cyan-500/20">
                <img src={skills.backend[0].image} alt="Node.js" className="w-4 h-4" loading="lazy" />
                <span>{skills.backend[0].name}</span>
              </span>
              <span className="w-fit px-4 py-2 border rounded-full text-sm font-medium backdrop-blur-sm shadow-sm transition-all duration-300 cursor-default flex items-center gap-2 bg-emerald-900/20 border-emerald-500/30 text-emerald-300 hover:border-emerald-400/60 hover:shadow-emerald-500/20">
                <img src={skills.backend[2].image} alt="MongoDB" className="w-4 h-4" loading="lazy" />
                <span>{skills.backend[2].name}</span>
              </span>
            </div>

            {/* CTA buttons */}
            <div>
              <div className="w-full c-space">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <a className="w-fit group" href="#contact">
                    <Button
                      name={"Let's work together"}
                      isBeam
                      containerClass="sm:w-fit w-full sm:min-w-64  hover:shadow-xl transform  transition-all duration-300"
                    />
                  </a>
                  <a className="w-fit group" href="#projects">
                    <button className="w-full px-8 py-3 cursor-pointer border rounded-full text-sm font-medium backdrop-blur-sm shadow-sm transition-all duration-300 flex items-center gap-2 bg-emerald-900/20 border-emerald-500/30 text-emerald-300 hover:border-emerald-400/60 hover:shadow-emerald-500/20">
                      View my work <IconArrowRight />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right-side developer profile card */}
        <div className="w-full max-w-xl mx-auto mt-0 flex-shrink-0 flex justify-center items-start lg:mt-0">
          <div className="bg-gray-950/80 backdrop-blur-md rounded-2xl border border-emerald-900/30 px-10 py-4 font-mono text-sm shadow-2xl w-full max-w-xl flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-0 pb-4 border-b border-gray-800/80">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm shadow-red-500/20"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm shadow-yellow-500/20"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm shadow-green-500/20"></div>
              </div>
              <span className="text-emerald-300/70 ml-4 text-xs font-medium">~/portfolio/developer.ts</span>
            </div>
            <div className="space-y-4 text-sm">
              <div className="text-gray-500">// Professional Developer Profile</div>
              <div>
                <span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> = {'{'}
              </div>
              <div className="ml-4">
                <span className="text-emerald-400">name</span>:{' '}
                <span className="text-yellow-300">"Md Noorullah Raza"</span>,
              </div>
              <div className="ml-4">
                <span className="text-emerald-400">role</span>:{' '}
                <span className="text-yellow-300">"Frontend Developer"</span>,
              </div>
              <div className="ml-4">
                <span className="text-emerald-400">experience</span>: <span className="text-cyan-400">4</span>{' '}
                <span className="text-gray-500">// years</span>,
              </div>
              <div className="ml-4">
                <span className="text-emerald-400">technologies</span>: [
              </div>
              <div className='ml-8'>
              <span className="text-yellow-300">"JavaScript"</span>,{' '}
              <span className="text-yellow-300">"TypeScript"</span>,{' '}
              </div>
              <div className="ml-8">

                <span className="text-yellow-300">"React.js"</span>,{' '}
                <span className="text-yellow-300">"Next.js"</span>,{' '}
              </div>
              <div className="ml-8">
                <span className="text-yellow-300">"Node.js"</span>, {' '}
                <span className="text-yellow-300">"Express"</span>,
              </div>
              <div className="ml-8">
                <span className="text-yellow-300">"MongoDB"</span> {' '}
                <span className="text-yellow-300">"PostgreSQL"</span>
              </div>
              <div className="ml-4">],</div>
              <div className="ml-4">
                <span className="text-emerald-400">passion</span>:{' '}
                <span className="text-yellow-300">"Building innovative solutions"</span>,
              </div>
              <div className="ml-4">
                <span className="text-emerald-400">currentStatus</span>:{' '}
                <span className="text-green-400">"Available for projects"</span>
              </div>
              <div>{'}'};</div>
              <div className="mt-4 text-gray-500">// Let's build something amazing together!</div>
            </div>
            {/* Social links */}
            <div style={{ opacity: 1, transform: 'none' }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-5">
                <span
                  className="text-emerald-300/80 text-sm font-medium flex items-center gap-2"
                  style={{ color: 'rgba(110, 231, 183, 0.694)' }}>
                  <div className="h-px w-5 bg-emerald-500/50"></div>Connect with me
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://twitter.com/noorullahraza1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-gray-400 transition-all duration-300 rounded-lg flex items-center justify-center relative overflow-hidden group"
                    tabIndex={0}
                    style={{
                      background: 'rgba(10, 10, 15, 0.5)',
                      boxShadow: 'rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.2) 0px 0px 10px',
                      opacity: 1,
                      transform: 'none',
                    }}>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"
                      style={{
                        boxShadow: 'inset 0 0 15px #1DA1F240, 0 0 20px #1DA1F220',
                        background: 'radial-gradient(circle at center, #1DA1F210 0%, transparent 70%)',
                      }}></div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 relative z-10 transition-all duration-300 group-hover:text-white"
                      style={{ filter: 'drop-shadow(0 0 2px transparent)' }}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{ border: '1px solid rgba(255, 255, 255, 0.133)' }}></div>
                  </a>
                  <a
                    href="https://linkedin.com/in/mnraza1907"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-gray-400 transition-all duration-300 rounded-lg flex items-center justify-center relative overflow-hidden group"
                    tabIndex={0}
                    style={{
                      background: 'rgba(10, 10, 15, 0.5)',
                      boxShadow: 'rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.2) 0px 0px 10px',
                      opacity: 1,
                      transform: 'none',
                    }}>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"
                      style={{
                        boxShadow: 'inset 0 0 15px #0077B540, 0 0 20px #0077B520',
                        background: 'radial-gradient(circle at center, #0077B510 0%, transparent 70%)',
                      }}></div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="w-5 h-5 relative z-10 transition-all duration-300 group-hover:text-white"
                      style={{ filter: 'drop-shadow(0 0 2px transparent)' }}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{ border: '1px solid rgba(255, 255, 255, 0.133)' }}></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
