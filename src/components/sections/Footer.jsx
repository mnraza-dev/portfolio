import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-100 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p className="cursor-pointer">Terms & Conditions</p>
        <p>|</p>
        <p className="cursor-pointer">Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="cursor-pointer social-icon">
          <a
            target="_blank"
            className="flex items-center justify-center"
            href="https://github.com/mnraza-dev"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="cursor-pointer social-icon">
          <a
            target="_blank"
            className="flex items-center justify-center"
            href="https://x.com/mnraza1907"
          >
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
       /*
         <div className="cursor-pointer social-icon">
          <a
            target="_blank"
            className="flex items-center justify-center"
            href="https://www.instagram.com/mnraza_/"
          >
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        */
      </div>
      <p className="text-white-500 flex items-center">
        &copy; {new Date().getFullYear()} MN Raza. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
