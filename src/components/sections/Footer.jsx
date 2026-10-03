import React from 'react';
import { FloatingDock } from '../../components/ui/FloatingDock';
import { IconHome, IconBrandLinkedin, IconBrandX, IconBrandGithub } from '@tabler/icons-react';

const Footer = () => {
  return (
    <>
      <section className="border-t border-white/10 pt-4 pb-2 flex justify-between items-center flex-wrap gap-5">
        <div className="text-gray-400 flex gap-2">
          <p className="cursor-pointer">Terms & Conditions</p>
          <p>|</p>
          <p className="cursor-pointer">Privacy Policy</p>
        </div>
        <p className="text-gray-400 flex items-center">
          © {new Date().getFullYear()} Noorullah Raza. All rights reserved.
        </p>
      </section>

      <div className="fixed bottom-0 inset-x-0 h-16 w-full pointer-events-none bg-gradient-to-t from-gray-900/40 via-gray-900/25 to-transparent backdrop-blur-xl z-20"></div>

      <FloatingDock
        items={[
          {
            title: 'Home',
            icon: <IconHome className="h-full w-full text-gray-400 hover:text-white" />,
            href: '#',
          },
          {
            title: 'Twitter',
            icon: <IconBrandX className="h-full w-full text-gray-400 hover:text-white" />,
            href: 'https://x.com/mnraza1907',
          },
          {
            title: 'LinkedIn',
            icon: <IconBrandLinkedin className="h-full w-full text-gray-400 hover:text-white" />,
            href: 'https://linkedin.com/mnraza1907',
          },
          {
            title: 'GitHub',
            icon: <IconBrandGithub className="h-full w-full text-gray-400 hover:text-white" />,
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