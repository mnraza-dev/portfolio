import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../HackerRoom";
import CanvasLoader from "../CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../../constants/index.js";
import Target from "../Target.jsx";
import ReactLogo from "../ReactLogo.jsx";
const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

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
    <section className="text-white min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-10 mt-4 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans ">
          Hi, I am MN RAZA <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient font-generalsans text-center">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* using threejs */}
        <Leva />
        <Canvas className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 15]} />
            <HackerRoom
              //   rotation={[3.8, 0, 9.4]}
              //   position={[1.9, -10.1, 4.3]}
              //   scale={isMobile ? 0.07 : 0.1
              rotation={[3.8, 0, 9.4]}
              position={sizes.deskPosition}
              scale={sizes.deskScale}
            />
            <group>
                <Target position={sizes.targetPosition}/>
                <ReactLogo position={sizes.reactLogoPosition}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
