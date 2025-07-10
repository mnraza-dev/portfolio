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
  
  const roleTexts = [
    "Full-Stack Developer",
    "UI/UX Designer", 
    "Product Builder",
    "Problem Solver"
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

  //   const x = useControls("HackerRoom", {
  //     positionX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionY: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationX: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationY: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationZ: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     scale: {
  //       value: 1,
  //       min: 0.1,
  //       max: 10,
  //     },
  //   });

  return (
    <section id="home" className="text-white min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-100 via-black-200 to-black-300 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white opacity-20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="w-full mx-auto flex flex-col sm:mt-10 mt-4 c-space gap-6">
          {/* Greeting with enhanced animation */}
          <div className="text-center space-y-2">
            <p className="sm:text-6xl text-8xl font-medium text-white font-generalsans animate-fade-in">
              Hi, I'm Noorullah Raza <span className="waving-hand">👋</span>
            </p>
           
          </div>

          {/* Dynamic role text */}
          <div className="text-center min-h-[80px] flex items-center justify-center">
            <h1 className="hero_tag">
              I'm a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
                {isTyping ? roleTexts[currentTextIndex] : ""}
              </span>
              <span className="animate-blink">|</span>
            </h1>
          </div>

          {/* Enhanced tagline */}
          <p className="text-gray_gradient font-generalsans text-center text-xl sm:text-2xl font-medium animate-fade-in-delay-2">
            Building Products & Brands that Matter
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-8 animate-fade-in-delay-3">
            <div className="text-center p-4 rounded-lg bg-black-300 bg-opacity-50 backdrop-blur-sm border border-black-500">
              <div className="text-2xl font-bold text-white">4+</div>
              <div className="text-sm text-white-600">Years Experience</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-black-300 bg-opacity-50 backdrop-blur-sm border border-black-500">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white-600">Projects</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-black-300 bg-opacity-50 backdrop-blur-sm border border-black-500">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-white-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* using threejs */}
        <Leva />
        <Canvas className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 15]} />
            <HeroCamera isMobile={isMobile}>
              {/* <HackerRoom
                //   rotation={[3.8, 0, 9.4]}
                //   position={[1.9, -10.1, 4.3]}
                //   scale={isMobile ? 0.07 : 0.1
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
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas> 
      </div>

      {/* Enhanced CTA section */}
      <div className="absolute bottom-7 z-10 w-full left-0 right-0 c-space">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a className="w-fit" href="#contact">
            <Button name={"Let's work together"} isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
          </a>
          <a className="w-fit" href="#projects">
            <Button name={"View my work"} containerClass="sm:w-fit w-full sm:min-w-48 bg-transparent border border-white-600 hover:bg-white-600 hover:text-black transition-all" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center text-white-600">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
