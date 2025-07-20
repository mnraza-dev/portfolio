import React from 'react';
import { FloatingDock } from '../ui/FloatingDock';
import { IconBrandGithub, IconBrandLinkedin, IconBrandLinkedinFilled, IconBrandX, IconExchange, IconHome, IconNewSection } from '@tabler/icons-react';
const Footer = () => {
  return (
    <>
      <section className="c-space pt-4 pb-2 border-t border-black-100 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p className="cursor-pointer">Terms & Conditions</p>
          <p>|</p>
          <p className="cursor-pointer">Privacy Policy</p>
        </div>
        <div className="flex gap-3">
          {/* <div className="cursor-pointer social-icon">
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
          </div> */}
        </div>
        <p className="text-white-500 flex items-center">
          &copy; {new Date().getFullYear()} MN Raza. All rights reserved.
        </p>
      </section>
      {/* Blurred gradient bar behind the dock */}
      <div className="fixed bottom-0 inset-x-0 h-16 w-full pointer-events-none bg-gradient-to-t from-background/40 via-background/25 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:from-black/30 dark:via-black/20 z-20"></div>
      <FloatingDock
        items={[
          {
            title: 'Home',
            icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: '#',
          },
          {
            title: 'Twitter',
            icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: 'https://x.com/mnraza1907',
          },
          {
            title: 'LinkedIn',
            icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: 'https://linkedin.com/mnraza1907',
          },
          {
            title: 'GitHub',
            icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: 'https://github.com/mnraza-dev',
          },
          {
            title: 'Instagram',
            icon: <img src="/assets/instagram.svg" alt="Instagram" className="w-6 h-6" loading="lazy" />,
            href: 'https://www.instagram.com/mnraza_/',
          },
        ]}
        desktopClassName="fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex flex-row items-center justify-center gap-x-2"
        mobileClassName="fixed bottom-4 right-4 z-50"
      />
    </>
  );
};

export default Footer;
