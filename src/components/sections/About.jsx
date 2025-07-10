import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../Button";
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("noorullahraza007@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section id="about" className="c-space my-20 ">
      <div className="w-full textwhite-600 mb-10">
        <h3 className="head-text">About Me</h3>
      </div>
      <div className="grid  xl:grid-cols-3 grid-cols-1 h-full ">
        <div className="col-spa-1 xl:row-span-3 ">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="Grid container image"
              className="w-full sm:h-[276px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">Hi, I am Noorullah Raza</p>
              <p className="grid-subtext">
                with 4+ years of experience in web development, I have honed my
                skills in Frontend & backend development , with a focus on
                animated 3D websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/* <img
              src="/assets/grid2.png"
              alt="Grid container image"
              className="w-full sm:h-[276px] h-fit object-contain "
            /> */}
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript and TypeScript with a focus on React
                & Next.js ecosysytems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones{" "}
              </p>
              <p className="grid-subtext">
                I am based in India, with remote work available.
              </p>
              <a className="w-fit" href="#contact">
                <Button
                  containerClass={"w-full mt-10 "}
                  name={"Contact Me"}
                  isBeam
                />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="Grid container 3 image"
              className="w-full sm:h-[266px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">My Passion for coding and design</p>
              <p className="grid-subtext">
                I ❤️ solving problems and building things through code. Coding
                isn't just my profession - it is my passion 🚀
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
              <img
                src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                alt=""
              />
              {hasCopied ? <p>Copied Email</p> : <p>Copy Email</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
