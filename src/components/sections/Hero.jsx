import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState, useEffect } from "react";
import HackerRoom from "../HackerRoom";
import CanvasLoader from "../CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../../constants/index.js";
import Target from "../Target.jsx";
import ReactLogo from "../ReactLogo.jsx";
import Cube from "../Cube.jsx";
import Rings from "../Rings.jsx";
import HeroCamera from "../HeroCamera.jsx";
import Button from "../Button.jsx";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const roleTexts = [
    "Full-Stack Developer",
    "Product Builder",
    "Problem Solver",
    "Creative Thinker",
    "Tech Enthusiast"
  ];

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
    <section id="home" className="text-white min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-100 via-black-200 to-black-300 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="w-full mx-auto flex flex-col sm:mt-10 mt-4 c-space gap-8">
          {/* Enhanced greeting with better name styling */}
          <div className="text-center space-y-4">
            <p className="sm:text-4xl text-6xl font-medium text-white font-generalsans animate-fade-in drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Hi, I'm <span className="italic font-thin text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">Noorullah Raza</span> <span className="waving-hand">👋</span>
            </p>
          </div>

          {/* Enhanced dynamic role text with better styling */}
          <div className="text-center min-h-[100px] flex items-center justify-center">
            <h1 className="hero_tag">
              I'm a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]">
                {isTyping ? roleTexts[currentTextIndex] : ""}
              </span>
              <span className="animate-blink text-white">|</span>
            </h1>
          </div>

          {/* Enhanced tagline with glow */}
          <p className="text-gray_gradient font-generalsans text-center text-2xl sm:text-3xl font-medium animate-fade-in-delay-2 drop-shadow-[0_0_15px_rgba(190,193,207,0.4)]">
            Building Products & Brands that Matter
          </p>

          {/* Enhanced stats with hover effects */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-12 animate-fade-in-delay-3">
            <div className="text-center p-6 rounded-xl bg-black-300 bg-opacity-30 backdrop-blur-md border border-black-500 hover:bg-opacity-50 hover:scale-105 transition-all duration-300 group">
              <div className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">4+</div>
              <div className="text-sm text-white-600 group-hover:text-white-500 transition-colors">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-black-300 bg-opacity-30 backdrop-blur-md border border-black-500 hover:bg-opacity-50 hover:scale-105 transition-all duration-300 group">
              <div className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">50+</div>
              <div className="text-sm text-white-600 group-hover:text-white-500 transition-colors">Projects</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-black-300 bg-opacity-30 backdrop-blur-md border border-black-500 hover:bg-opacity-50 hover:scale-105 transition-all duration-300 group">
              <div className="text-3xl font-bold text-white group-hover:text-pink-400 transition-colors">100%</div>
              <div className="text-sm text-white-600 group-hover:text-white-500 transition-colors">Satisfaction</div>
            </div>
          </div>

          {/* Enhanced Tech stack preview */}
          <div className="mt-12 animate-fade-in-delay-3">
            <p className="text-center text-white-600 text-sm font-medium mb-6 tracking-wider uppercase">
              Tech Stack
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 max-w-2xl mx-auto">
              {[
                { name: 'React', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
                { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-500' },
                { name: 'TypeScript', icon: '🔷', color: 'from-blue-600 to-indigo-600' },
                { name: 'Three.js', icon: '🎨', color: 'from-purple-500 to-pink-500' },
                { name: 'Next.js', icon: '⚡', color: 'from-gray-700 to-black' },
                { name: 'Tailwind', icon: '🎨', color: 'from-cyan-400 to-blue-500' },
                { name: 'MongoDB', icon: '🍃', color: 'from-green-400 to-emerald-400' },
                { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-400 to-indigo-400' }
              ].map((tech, index) => (
                <div 
                  key={tech.name}
                  className="group relative"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="px-4 py-3 rounded-xl bg-black-300 bg-opacity-40 backdrop-blur-md border border-black-500 hover:bg-opacity-60 hover:scale-110 transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-lg hover:shadow-xl">
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-white-600 text-sm font-medium group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                  {/* Gradient border effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm"
                       style={{
                         background: `linear-gradient(to right, ${tech.color.includes('from-') ? tech.color.split(' ')[0].replace('from-', '') : tech.color}, ${tech.color.includes('to-') ? tech.color.split(' ')[1].replace('to-', '') : tech.color})`
                       }}>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional tech categories */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="text-center p-4 rounded-lg bg-black-300 bg-opacity-20 backdrop-blur-sm border border-black-500">
                <h4 className="text-white font-medium mb-2">Frontend</h4>
                <p className="text-white-600 text-xs">React, Next.js, TypeScript, Tailwind</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-black-300 bg-opacity-20 backdrop-blur-sm border border-black-500">
                <h4 className="text-white font-medium mb-2">Backend</h4>
                <p className="text-white-600 text-xs">Node.js, Express, MongoDB, PostgreSQL</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-black-300 bg-opacity-20 backdrop-blur-sm border border-black-500">
                <h4 className="text-white font-medium mb-2">3D & Graphics</h4>
                <p className="text-white-600 text-xs">Three.js, WebGL, Blender, Unity</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* Enhanced 3D scene */}
        <Leva />
        <Canvas className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 15]} />
            <HeroCamera isMobile={isMobile}>
              {/* <HackerRoom
                rotation={[3.8, 0, 9.4]}
                position={sizes.deskPosition}
                scale={sizes.deskScale}
              /> */}
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 10, 10]} intensity={0.8} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
            <pointLight position={[10, -10, 10]} intensity={0.5} color="#8b5cf6" />
          </Suspense>
        </Canvas> 
      </div>

      {/* Enhanced CTA section with better styling */}
      <div className="absolute bottom-7 z-10 w-full left-0 right-0 c-space">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a className="w-fit group" href="#contact">
            <Button 
              name={"Let's work together"} 
              isBeam 
              containerClass="sm:w-fit w-full sm:min-w-96 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" 
            />
          </a>
          <a className="w-fit group" href="#projects">
            <Button 
              name={"View my work"} 
              containerClass="sm:w-fit w-full sm:min-w-48 bg-transparent border-2 border-white-600 hover:bg-white-600 hover:text-black hover:border-white-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" 
            />
          </a>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center text-white-600 group cursor-pointer">
          <span className="text-sm mb-3 group-hover:text-white transition-colors">Scroll to explore</span>
          <div className="w-8 h-12 border-2 border-white-600 rounded-full flex justify-center group-hover:border-white transition-colors">
            <div className="w-1 h-4 bg-white-600 rounded-full mt-2 animate-pulse group-hover:bg-white transition-colors"></div>
          </div>
        </div>
      </div>

      {/* Floating action buttons */}
      <div className="absolute top-8 right-8 z-10 flex flex-col gap-4">
        <button className="w-12 h-12 rounded-full bg-black-300 bg-opacity-50 backdrop-blur-sm border border-black-500 flex items-center justify-center hover:bg-opacity-70 hover:scale-110 transition-all duration-300 group">
          <span className="text-white-600 group-hover:text-white transition-colors">📧</span>
        </button>
        <button className="w-12 h-12 rounded-full bg-black-300 bg-opacity-50 backdrop-blur-sm border border-black-500 flex items-center justify-center hover:bg-opacity-70 hover:scale-110 transition-all duration-300 group">
          <span className="text-white-600 group-hover:text-white transition-colors">💼</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
