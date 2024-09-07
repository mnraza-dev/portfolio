import React from "react";

const About = () => {
  return (
    <section className="c-space my-20 ">
      <div className="grid  xl:grid-cols-3 xxl:grid-cols-6 md:grid-cols-2 grid-cols-1 h-full ">
        <div className="col-spa-1 xl:col-span-3 ">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="Grid container image"
              className="w-full sm:h-[276px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">Hi, I am MN Raza</p>
              <p className="grid-subtext">
                with 3+ years of experience in web development, I have honed my
                skills in Frontend & backend development , with a focus on
                animated 3D websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="Grid container image"
              className="w-full sm:h-[276px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript with a focus on React & Next.js
                ecosysytems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="Grid container image"
              className="w-full sm:h-[276px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript with a focus on React & Next.js
                ecosysytems.
              </p>
            </div>
          </div>
        </div>
           <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="Grid container image"
              className="w-full sm:h-[276px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript with a focus on React & Next.js
                ecosysytems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
