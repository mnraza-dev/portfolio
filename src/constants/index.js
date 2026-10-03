export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 5,
    name: 'Skills',
    href: '#skills',
  },
  {
    id: 6,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Noorullah Raza was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Noorullah Raza’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Noorullah Raza. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Noorullah Raza was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Persona AI – Custom AI Buddies',
    desc: 'Persona AI is a platform that allows users to interact with customizable AI personas for conversations, productivity, and fun.',
    subdesc:
      'Built using Next.js, TypeScript, and Tailwind CSS with GenAI integration. Features include persona selection, chat interface, API key management, and real-time AI responses.',
    href: 'https://ai-persona-mnraza.vercel.app/',
    repo: 'https://github.com/mnraza-dev/persona_ai',
    texture: '/textures/project/persona.mp4',
    logo: '/assets/persona.gif',
    logoStyle: {
      backgroundColor: '#0E0E0E',
      border: '0.2px solid #1A1A1A',
      boxShadow: '0px 0px 60px 0px #10B98130',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'TypeScript', path: '/assets/skills/typescript.svg' },
      { id: 2, name: 'Next.js', path: '/assets/skills/nextjs.svg' },
      { id: 3, name: 'Tailwind CSS', path: '/assets/skills/tailwindcss.png' },
      { id: 4, name: 'Gemini AI', path: '/assets/skills/gemini.svg' },
    ],
    year: '2025',
  },

  {
    title: 'blyzr – No-Code App Builder (Bolt.new Clone)',
    desc: 'blyzr is a modern no-code platform inspired by Bolt.new that enables users to visually build and deploy web apps without writing code.',
    subdesc:
      'Built using React.js, Tailwind CSS, and Zustand for state management. Features a drag-and-drop interface, live preview, and export-to-code capabilities.',
    href: 'https://blyzr-app.vercel.app/',
    repo: 'https://github.com/mnraza-dev/blyzr',
    texture: '/textures/project/blyzr.mp4',
    logo: '/assets/blyzr.gif',
    logoStyle: {
      backgroundColor: '#0E0E0E',
      border: '0.2px solid #1A1A1A',
      boxShadow: '0px 0px 60px 0px #10B98130',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'JavaScript', path: '/assets/skills/javascript.svg' },
      { id: 2, name: 'React.js', path: '/assets/skills/react.svg' },
      { id: 3, name: 'Tailwind CSS', path: '/assets/skills/tailwindcss.png' },
      { id: 4, name: 'Redux', path: '/assets/skills/redux.svg' },
      { id: 5, name: 'JSON', path: '/assets/skills/json.svg' },
    ],
    year: '2025',
  },

  {
    title: 'Tesla Clone – Responsive Product Landing Page',
    desc: 'A visually rich Tesla landing page clone featuring multiple car models, sleek design, and smooth transitions. Built to closely replicate the look and feel of Tesla’s official website.',
    subdesc:
      'Developed using React.js and styled with responsive design principles to ensure optimal display across all devices. Includes reusable components, dynamic car model sections, and modern UI animations.',
    href: 'http://tesla-clone-mnrazablog.vercel.app/',
    repo: 'https://github.com/mnraza-dev/tesla-clone',
    texture: '/textures/project/tesla-clone.mp4',
    logo: '/assets/tesla.gif',
    logoStyle: {
      backgroundColor: '#111111',
      border: '0.2px solid #1F1F1F',
      boxShadow: '0px 0px 60px 0px #FFFFFF1A',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/skills/react.svg' },
      { id: 2, name: 'Responsive Design', path: '/assets/skills/responsive.png' },
      { id: 3, name: 'CSS3', path: '/assets/skills/css3.svg' },
      { id: 4, name: 'JavaScript', path: '/assets/skills/javascript.svg' },
    ],
    year: '2025',
  },

  {
    title: 'URL shortener – A Smart URL Shortener',
    desc: 'URL shortener is a lightweight and fast URL shortener app designed to create, manage, and share shortened links with tracking support.',
    subdesc:
      'Developed using React.js, Node.js, Express, and MongoDB. It features link analytics, custom slugs, copy-to-clipboard, and responsive UI using Tailwind CSS.',
    href: 'https://url-shortener-zeta-flame.vercel.app/',
    repo: 'https://github.com/yourusername/quicklink',
    texture: '/textures/project/quicklink.mp4',
    logo: '/assets/url-shortener.gif',
    logoStyle: {
      backgroundColor: '#111827',
      border: '0.2px solid #1F2937',
      boxShadow: '0px 0px 60px 0px #3B82F630',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/skills/react.svg' },
      { id: 2, name: 'Tailwind CSS', path: '/assets/skills/tailwindcss.png' },
      { id: 3, name: 'Node.js', path: '/assets/skills/nodejs-1.svg' },
      { id: 4, name: 'Express.js', path: '/assets/skills/express.svg' },
      { id: 5, name: 'MongoDB', path: '/assets/skills/mongodb.svg' },
      { id: 6, name: 'JSON', path: '/assets/skills/json.svg' },
    ],
    year: '2025',
  },

  {
    title: 'Movie Ticket Booking – CineBook',
    desc: 'A responsive movie ticket booking application with real-time seat selection, theater listings, and role-based user views (Customer, Admin, and Agent). Built for fast performance and a seamless booking experience.',
    subdesc:
      'Developed using React.js and Tailwind CSS with a mobile-first design. Integrates dynamic movie schedules, booking logic, user authentication, and admin controls. Features a clean UI, animated transitions, and REST API support.',
    href: 'https://movie-booking-app-demo.vercel.app/',
    repo: 'https://github.com/mnraza-dev/movie-ticket-booking',
    texture: '/textures/project/movie-ticket-booking.mp4',
    logo: '/assets/project-logo6.png',
    logoStyle: {
      backgroundColor: '#0D0D0D',
      border: '0.2px solid #2C2C2C',
      boxShadow: '0px 0px 60px 0px #FFD70030',
    },
    spotlight: '/assets/spotlight-movie-booking.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/skills/react.svg' },
      { id: 2, name: 'Tailwind CSS', path: '/assets/skills/tailwindcss.png' },
      { id: 3, name: 'NodeJS', path: '/assets/skills/node.svg' },
      { id: 4, name: 'ExpressJS', path: '/assets/skills/express.svg' },
      { id: 5, name: 'REST API', path: '/assets/skills/restapi.svg' },
    ],
    year: '2025',
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    year: '2021',
    icon: 'https://xebia.com/wp-content/uploads/2021/11/XebiaLogo-white.svg',
    company: 'Netlink Digital Solutions, Part of Xebia',
    location: 'Remote',
    duration: '2021 - 2025',
    title: 'Software Engineer',
    description: 'Leading development of enterprise-level web applications and implementing cutting-edge solutions.',
    responsibilities: [
      'Architecting and developing scalable web applications using Next.js, React, and Node.js',
      'Implementing advanced state management and optimizing application performance',
      'Designing microservices architecture for high-traffic applications',
      'Leading development team and maintaining code quality standards',
      'Handling complex integrations and security implementations',
    ],
    technologies: [
      {
        id: 1,
        name: 'JavaScript',
        image: '/assets/skills/javascript.svg',
      },
      {
        id: 2,
        name: 'TypeScript',
        image: '/assets/skills/typescript.svg',
      },
      {
        id: 3,
        name: 'React',
        image: '/assets/skills/react.svg',
      },
      {
        id: 6,
        name: 'Tailwind CSS',
        image: '/assets/skills/tailwindcss.png',
      },
      {
        id: 8,
        name: 'Material UI',
        image: '/assets/skills/material-ui-svgrepo-com.svg',
      },
      {
        id: 9,
        name: 'Redux Toolkit',
        image: '/assets/skills/redux.svg',
      },
      {
        id: 19,
        name: 'React Native',
        image: '/assets/skills/react.svg',
      },

      {
        id: 10,
        name: 'Node.js',
        image: '/assets/skills/nodejs-1.svg',
      },
      {
        id: 11,
        name: 'Express',
        image: '/assets/skills/express.svg',
      },
      {
        id: 12,
        name: 'MongoDB',
        image: '/assets/skills/mongodb.svg',
      },
      {
        id: 13,
        name: 'PostgreSQL',
        image: '/assets/skills/postresql.svg',
      },

      {
        id: 14,
        name: 'Docker',
        image: '/assets/skills/docker.svg',
      },
      {
        id: 15,
        name: 'AWS',
        image: '/assets/skills/aws.svg',
      },
      {
        id: 16,
        name: 'Linux',
        image: '/assets/skills/linux.svg',
      },

      {
        id: 21,
        name: 'Git',
        image: '/assets/skills/git.svg',
      },
      {
        id: 22,
        name: 'GitHub',
        image: '/assets/skills/github.svg',
      },
      {
        id: 23,
        name: 'Stripe',
        image: '/assets/skills/stripe.svg',
      },
      {
        id: 24,
        name: 'JSON',
        image: '/assets/skills/json.svg',
      },
    ],
    reverse: false,
  },
];