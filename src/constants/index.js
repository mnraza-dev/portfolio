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
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Work Experience',
    href: '#experience',
  },
  {
    id: 5,
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
      'Working with MN RAZA was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      "MN RAZA's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about MN RAZA. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'MN RAZA was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
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
    spotlight: '/assets/spotlight-blyzr.png',
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
    spotlight: '/assets/spotlight-tesla.png',
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
    spotlight: '/assets/spotlight-quicklink.png',
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

  // {
  //   title: 'SkillForge – Interactive Learning Platform',
  //   desc: 'SkillForge is a gamified developer learning platform with live coding, real-time chat, and GitHub-integrated project submissions. Built to enhance coding education with AI-powered feedback and progress tracking.',
  //   subdesc:
  //     'Crafted using Angular 16, RxJS, Node.js, and WebSockets, SkillForge delivers a modern learning experience featuring the Monaco Editor, GitHub OAuth, and OpenAI Codex-powered hints. Fully responsive and hosted via Netlify and Railway.',
  //   href: 'https://www.youtube.com/watch?v=skillforge_demo',
  //   repo: 'https://github.com/yourusername/skillforge',
  //   texture: '/textures/project/skillforge.mp4',
  //   logo: '/assets/project-logo2.png',
  //   logoStyle: {
  //     backgroundColor: '#0C223D',
  //     border: '0.2px solid #13355A',
  //     boxShadow: '0px 0px 60px 0px #2C9AFF4D',
  //   },
  //   spotlight: '/assets/spotlight-skillforge.png',
  //   tags: [
  //     { id: 1, name: 'Angular 16', path: '/assets/skills/angular.svg' },
  //     { id: 2, name: 'RxJS', path: '/assets/skills/rxjs.png' },
  //     { id: 3, name: 'SCSS', path: '/assets/skills/scss.svg' },
  //     { id: 4, name: 'Monaco Editor', path: '/assets/skills/monaco.png' },
  //     { id: 5, name: 'Node.js', path: '/assets/skills/nodejs-1.svg' },
  //     { id: 6, name: 'Express.js', path: '/assets/skills/express.svg' },
  //     { id: 7, name: 'MongoDB', path: '/assets/skills/mongodb.svg' },
  //     { id: 8, name: 'WebSocket', path: '/assets/skills/websocket.png' },
  //     { id: 9, name: 'JWT', path: '/assets/skills/jwt.png' },
  //     { id: 10, name: 'GitHub OAuth', path: '/assets/skills/github.svg' },
  //     { id: 11, name: 'OpenAI Codex', path: '/assets/skills/openai.png' },
  //     { id: 12, name: 'Netlify', path: '/assets/skills/netlify.png' },
  //     { id: 13, name: 'Railway', path: '/assets/skills/railway.png' },
  //   ],
  //   year: '2025',
  // },
  // {
  //   title: 'ClientHub - CRM & Customer Support Platform',
  //   desc: 'ClientHub is a CRM and customer support platform designed to manage client data, sales pipelines, and deliver real-time support with AI-powered automation and communication tools.',
  //   subdesc:
  //     'Built with ReactJS, Redux Toolkit, Node.js, and WebSocket, ClientHub integrates JWT-secured authentication, AI-driven insights using TensorFlow.js, and real-time chat with Twilio. Deployed on Docker and AWS.',
  //   href: 'https://www.youtube.com/watch?v=clienthub_demo',
  //   repo: 'https://github.com/yourusername/clienthub',
  //   texture: '/textures/project/clienthub.mp4',
  //   logo: '/assets/project-logo3.png',
  //   logoStyle: {
  //     backgroundColor: '#142734',
  //     border: '0.2px solid #1D3A4F',
  //     boxShadow: '0px 0px 60px 0px #26A0DA4D',
  //   },
  //   spotlight: '/assets/spotlight-clienthub.png',
  //   tags: [
  //     { id: 1, name: 'React.js', path: '/assets/skills/react.svg' },
  //     { id: 2, name: 'Material UI', path: '/assets/skills/material-ui-svgrepo-com.svg' },
  //     { id: 3, name: 'Redux Toolkit', path: '/assets/skills/redux.svg' },
  //     { id: 4, name: 'Node.js', path: '/assets/skills/nodejs-1.svg' },
  //     { id: 5, name: 'Express.js', path: '/assets/skills/express.svg' },
  //     { id: 6, name: 'MongoDB', path: '/assets/skills/mongodb.svg' },
  //     { id: 7, name: 'TypeScript', path: '/assets/skills/typescript.svg' },
  //     { id: 8, name: 'WebSocket', path: '/assets/skills/websocket.png' },
  //     { id: 9, name: 'TensorFlow.js', path: '/assets/skills/tensorflow.svg' },
  //     { id: 10, name: 'JWT', path: '/assets/skills/jwt.png' },
  //     { id: 11, name: 'Docker', path: '/assets/skills/docker.svg' },
  //     { id: 12, name: 'AWS', path: '/assets/skills/aws.svg' },
  //     { id: 13, name: 'Twilio API', path: '/assets/skills/twilio.png' },
  //     { id: 14, name: 'Stripe API', path: '/assets/skills/stripe.svg' },
  //   ],
  //   year: '2025',
  // },
  // {
  //   title: 'Xenesis - HR Management Platform',
  //   desc: 'Xenesis is a modular HR platform for managing employee data, payroll, leave, and performance, enhanced with real-time updates and scalable Micro Frontends.',
  //   subdesc:
  //     'Built using ReactJS, Redux Toolkit, Material UI, and Micro Frontends (MFE), Xenesis improves user experience, update efficiency, and system modularity across HR operations.',
  //   href: 'https://www.youtube.com/watch?v=xenesis_demo',
  //   repo: 'https://github.com/yourusername/xenesis',
  //   texture: '/textures/project/xenesis.mp4',
  //   logo: '/assets/project-logo4.png',
  //   logoStyle: {
  //     backgroundColor: '#1A1C2F',
  //     border: '0.2px solid #2E324B',
  //     boxShadow: '0px 0px 60px 0px #7373FF4D',
  //   },
  //   spotlight: '/assets/spotlight-xenesis.png',
  //   tags: [
  //     { id: 1, name: 'React.js', path: '/assets/skills/react.svg' },
  //     { id: 2, name: 'Redux Toolkit', path: '/assets/skills/redux.svg' },
  //     { id: 3, name: 'Material UI', path: '/assets/skills/material-ui-svgrepo-com.svg' },
  //     { id: 4, name: 'TypeScript', path: '/assets/skills/typescript.svg' },
  //     { id: 5, name: 'Micro Frontends', path: '/assets/skills/mfe.png' },
  //     { id: 6, name: 'JSON', path: '/assets/skills/json.png' },
  //   ],
  //   year: '2025',
  // },
  // {
  //   title: 'Invoice Generator - Automated Billing App',
  //   desc: 'Invoice Generator is a React-based web application for generating professional invoices with automated tax, discount, and payment tracking.',
  //   subdesc:
  //     'Built with ReactJS, Redux Toolkit, and TypeScript, the app supports full CRUD operations, tax automation, and streamlined client management for billing efficiency.',
  //   href: 'https://www.youtube.com/watch?v=invoicegen_demo',
  //   repo: 'https://github.com/yourusername/invoice-generator',
  //   texture: '/textures/project/invoice-generator.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#2F1C36',
  //     border: '0.2px solid #41204A',
  //     boxShadow: '0px 0px 60px 0px #F960A74D',
  //   },
  //   spotlight: '/assets/spotlight-invoice.png',
  //   tags: [
  //     { id: 1, name: 'React.js', path: '/assets/skills/react.svg' },
  //     { id: 2, name: 'Redux Toolkit', path: '/assets/skills/redux.svg' },
  //     { id: 3, name: 'TypeScript', path: '/assets/skills/typescript.svg' },
  //     { id: 4, name: 'Material UI', path: '/assets/skills/material-ui-svgrepo-com.svg' },

  //     { id: 6, name: 'JSON', path: '/assets/skills/json.png' },
  //   ],
  //   year: '2025',
  // },
  // {
  //   title: 'SupportDesk – Real-Time Role-Based Ticketing System',
  //   desc: 'SupportDesk is a scalable, real-time support ticketing platform built for customers, agents, and administrators. It delivers dynamic ticket workflows, secure role-based access, and instant messaging powered by WebSocket and STOMP.',
  //   subdesc:
  //     'Developed using React, TypeScript, Redux Toolkit, and MUI, SupportDesk ensures modular design, responsive UI, and robust state management. It features real-time ticket updates, JWT-based authentication, form validation, protected routing, and dynamic dashboards tailored to each user role.',
  //   href: 'https://www.youtube.com/watch?v=supportdesk_demo',
  //   repo: 'https://github.com/yourusername/supportdesk',
  //   texture: '/textures/project/supportdesk.mp4',
  //   logo: '/assets/project-logo1.png',
  //   logoStyle: {
  //     backgroundColor: '#19202B',
  //     border: '0.2px solid #29394F',
  //     boxShadow: '0px 0px 60px 0px #3498DB4D',
  //   },
  //   spotlight: '/assets/spotlight-supportdesk.png',
  //   tags: [
  //     { id: 1, name: 'React.js', path: '/assets/skills/react.svg' },
  //     { id: 2, name: 'TypeScript', path: '/assets/skills/typescript.svg' },
  //     { id: 3, name: 'Redux Toolkit', path: '/assets/skills/redux.svg' },
  //     { id: 4, name: 'Material UI', path: '/assets/skills/material-ui-svgrepo-com.svg' },
  //     { id: 5, name: 'WebSocket', path: '/assets/skills/websocket.png' },
  //     { id: 6, name: 'STOMP.js', path: '/assets/skills/stomp.png' },
  //     { id: 7, name: 'JWT', path: '/assets/skills/jwt.png' },
  //     { id: 8, name: 'react-hook-form', path: '/assets/skills/rhf.png' },
  //     { id: 9, name: 'Docker', path: '/assets/skills/docker.svg' },
  //   ],
  //   year: '2025',
  // },
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
    year: '2022',
    icon: 'https://xebia.com/wp-content/uploads/2021/11/XebiaLogo-white.svg',
    company: 'Xebia',
    location: 'Chennai',
    duration: '2022 (May) - 2025 (March)',
    title: 'Software Consultant',
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
  {
    year: '2021',
    icon: 'https://xebia.com/wp-content/uploads/2021/11/XebiaLogo-white.svg',
    company: 'Netlink Digital Solutions',
    icon: 'https://netlink.com/wp-content/uploads/2023/11/Netlink-White.png',

    location: 'Chennai',
    duration: '2021 - 2022',
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

export const skills = {
  frontend: [
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
      id: 4,
      name: 'CSS3',
      image: '/assets/skills/css3.svg',
    },
    {
      id: 5,
      name: 'SCSS',
      image: '/assets/skills/scss.svg',
    },
    {
      id: 6,
      name: 'Tailwind CSS',
      image: '/assets/skills/tailwindcss.png',
    },
    {
      id: 7,
      name: 'Angular',
      image: '/assets/skills/angular.svg',
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
  ],
  backend: [
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
  ],
  devops: [
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
      id: 17,
      name: 'Ansible',
      image: '/assets/skills/ansible.svg',
    },
  ],
  mobile: [
    {
      id: 18,
      name: 'Android',
      image: '/assets/skills/android.svg',
    },
    {
      id: 19,
      name: 'React Native',
      image: '/assets/skills/react.svg',
    },
  ],
  ai_ml: [
    {
      id: 20,
      name: 'TensorFlow',
      image: '/assets/skills/tensorflow.svg',
    },
  ],
  tools: [
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
};
