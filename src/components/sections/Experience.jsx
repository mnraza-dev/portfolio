import { Canvas } from "@react-three/fiber";
import React from "react";
import { workExperiences } from "../../constants/index.js";

const Experience = () => {
  return (
    <section className="c-space my-20">
      <div className="w-full textwhite-600">
        <h3 className="head-text">My Work Experience</h3>
      </div>
      <div className="work-container">
        <div className="work-canvas">
          <Canvas></Canvas>
        </div>
        <div className="work-content">
          <div className="sm:py-10 py-5 sm:px-5 px-2.5">
            {workExperiences.map(
              ({ classes, id, pos, icon, name, duration, title, anaimation }) => (
                <div className="work-content_container text-white-800 group" key={id}>
                  <div className="flex flex-col h-full py-2 items-center justify-start ">
                    <div className={`work-content_logo ${name==="Xebia" ?'blob-xebia':'' }`} >
                      <img src={icon} alt="Logo" className="w-full h-full" />
                    </div>
                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5 ">
                    <p className="text-white-800 font-bold">{name}</p>
                    <p className="text-sm mb-5">
                      {pos}--{duration}
                    </p>
                    <p className="group-hover:text-white transition ease-in-out duration-500 ">
{title}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
