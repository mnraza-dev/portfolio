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
    "Software Developer",
    "Product Builder",
    "Problem Solver",
    "Frontend Developer",
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

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="w-full mx-auto flex flex-col sm:mt-10 mt-4 c-space gap-2">
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
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-6 animate-fade-in-delay-3">
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
      <div className="absolute bottom-10 z-10 w-full left-0 right-0 c-space">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a className="w-fit group" href="#contact">
            <Button 
              name={"Let's work together"} 
              isBeam 
              containerClass="sm:w-fit w-full sm:min-w-64  hover:shadow-xl transform  transition-all duration-300" 
            />
          </a>
          <a className="w-fit group" href="#projects">
            <Button 
              name={"View my work"} 
              containerClass="sm:w-fit w-full sm:min-w-56 bg-transparent border-2 border-white-600 hover:text-purple-600 hover:border-purple-600  hover:font-medium transition-all duration-300 transform shadow-lg hover:shadow-xl" 
            />
          </a>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-20 left-[46vw] transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center text-white-600 group cursor-pointer">
          <span className="text-sm mb-3 group-hover:text-white transition-colors">Scroll to explore</span>
          <div className="w-8 h-12 border-2 border-white-600 rounded-full flex justify-center group-hover:border-white transition-colors">
            <div className="w-1 h-4 bg-white-600 rounded-full mt-2 animate-pulse group-hover:bg-white transition-colors"></div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
