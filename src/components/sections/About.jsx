import React, { useState } from 'react';
import Button from '../Button';
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
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent" style={{ opacity: 1, transform: 'none' }}>
          Bringing Ideas to{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Life</span>
        </h2>
        <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed" style={{ opacity: 1, transform: 'none' }}>
          I'm a full-stack developer passionate about building elegant solutions that solve real-world problems.
        </p>
      </div>
      <div className="grid  xl:grid-cols-3 grid-cols-1 h-full ">
        <div className="col-spa-1 xl:row-span-3 ">
          <div className="grid-container">
            <div className='flex flex-col items-center justify-center'>
            <img
              src="/assets/mnraza-dev.png"
              alt="Grid container image"
              className="w-44 h-auto object-cover rounded-full"
            />
             <p className="grid-headtext mb-1">Md Noorullah Raza</p>
             <p className="grid-subtext mb-4">Frontend Developer</p>
            </div>

            <div>
             
              <div className="grid grid-cols-2 gap-3 text-center mb-4">
                <div>
                  <p className="text-xl font-bold text-emerald-400">10+</p>
                  <p className="text-xs text-gray-400">Projects</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-emerald-400">4+ Years</p>
                  <p className="text-xs text-gray-400">Experience</p>
                </div>
                {/* <div>
                  <p className="text-xl font-bold text-emerald-400">10+</p>
                  <p className="text-xs text-gray-400">Clients</p>
                </div> */}
                {/* <div>
                  <p className="text-xl font-bold text-emerald-400">100%</p>
                  <p className="text-xs text-gray-400">Satisfaction</p>
                </div> */}
              </div>
              
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
       
          <div>
              <p className="grid-headtext">I work remotely across most timezones </p>
              <p className="grid-subtext">I am based in India, with remote work available.</p>
              <a className="w-fit" href="#contact">
                <Button containerClass={'w-full mt-10 '} name={'Contact Me'} isBeam />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
          <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript and TypeScript with a focus on React & Next.js ecosysytems.
              </p>
              {/* Enhanced Tech stack preview */}
              <div className="mt-6 animate-fade-in-delay-3">
                <div className="flex w-full flex-wrap justify-center items-center gap-4  max-w-2xl mx-auto">
                  {[
                    {
                      name: 'React',
                      icon: '⚛️',
                      color: 'from-blue-500 to-cyan-500',
                    },
                    {
                      name: 'Node.js',
                      icon: '🟢',
                      color: 'from-green-500 to-emerald-500',
                    },
                    {
                      name: 'TypeScript',
                      icon: '🔷',
                      color: 'from-blue-600 to-indigo-600',
                    },
                    {
                      name: 'Three.js',
                      icon: '🎨',
                      color: 'from-purple-500 to-pink-500',
                    },
                    {
                      name: 'Next.js',
                      icon: '⚡',
                      color: 'from-gray-700 to-black',
                    },
                    {
                      name: 'Tailwind',
                      icon: '🎨',
                      color: 'from-cyan-400 to-blue-500',
                    },
                    {
                      name: 'MongoDB',
                      icon: '🍃',
                      color: 'from-green-400 to-emerald-400',
                    },
                    {
                      name: 'PostgreSQL',
                      icon: '🐘',
                      color: 'from-blue-400 to-indigo-400',
                    },
                  ].map((tech, index) => (
                    <div key={tech.name} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="px-4 py-2 w-full rounded-xl bg-black-300 bg-opacity-40 backdrop-blur-md border border-black-500 hover:bg-opacity-60 hover:scale-110 transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-lg hover:shadow-xl">
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-white-600 text-sm font-medium group-hover:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                      {/* Gradient border effect on hover */}
                      <div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm"
                        style={{
                          background: `linear-gradient(to right, ${tech.color.includes('from-') ? tech.color.split(' ')[0].replace('from-', '') : tech.color}, ${tech.color.includes('to-') ? tech.color.split(' ')[1].replace('to-', '') : tech.color})`,
                        }}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
           
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
        
            <div>
              <p className="grid-headtext">My Passion for coding and design</p>
              <p className="grid-subtext">
                I ❤️ solving problems and building things through code. Coding isn't just my profession - it is my
                passion 🚀
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="Grid container 4 image"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top "
            />
            <div className="space-y-2 ">
              <p className="grid-subtext text-center">Contact Me</p>
            </div>
            <div onClick={handleCopy} className="copy-container text-white-500">
              <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="" />
              {hasCopied ? <p>Copied Email</p> : <p>Copy Email</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
