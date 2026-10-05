import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, Github, Mail, Sun, Moon, Search, X, MapPin, ChevronDown, Linkedin, Quote, Sparkles, Image, FileText } from 'lucide-react';
import { myProjects, workExperiences } from './constants';
import { testimonials } from './constants/testimonials';
import XFeed from './components/XFeed';
import AppsCarousel from './components/AppsCarousel';

const email = 'noorullahraza007@gmail.com';
const navigation = [['Home', 'home'], ['Projects', 'projects'], ['Apps', 'apps'], ['Experience', 'experience'], ['Stack', 'skills'], ['Testimonials', 'testimonials'], ['Posts', 'posts'], ['Connect', 'contact']];
function XLogo({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
}
function PlayStoreLogo({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 3.5v17l16-8.5Z"/><path d="m4 3.5 11 11M4 20.5l11-11"/></svg>;
}
function PeerlistLogo({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="6"/><path d="M8 17V7h5a3 3 0 0 1 0 6H8"/></svg>;
}
const socials = [
  ['Email', `mailto:${email}`, Mail],
  ['GitHub', 'https://github.com/mnraza-dev', Github],
  ['Twitter/ X', 'https://x.com/mnraza1907', XLogo],
  ['Play Store', 'https://play.google.com/store/apps/developer?id=RazaTech+Labs', PlayStoreLogo],
  ['Peerlist', 'https://peerlist.io/mnraza_dev', PeerlistLogo],
  ['LinkedIn', 'https://www.linkedin.com/in/mnraza1907/', Linkedin],
];
const apps = [
  { name: 'InstantDoc', folder: 'instant-docs', category: 'Android app', description: 'Explore InstantDoc on Google Play.', href: 'https://play.google.com/store/apps/details?id=com.instantdoc.app', linkLabel: 'View on Google Play', logo: '/assets/projects/apps/instant-docs/logo-icon.png', Icon: FileText, color: 'blue' },
  { name: 'Namma Notes', folder: 'namma-notes', category: 'Notes app', description: 'Keep your notes together with Namma Notes.', href: 'https://play.google.com/store/apps/details?id=com.razatechlabs.nammanotes', linkLabel: 'View on Google Play', logo: '/assets/projects/apps/namma-notes/logo.png', Icon: FileText, color: 'violet' },
  { name: 'PixelRevive', folder: 'pixelrevive', category: 'AI photo enhancer', description: 'Enhance image clarity, sharpness, and quality with AI.', href: 'https://play.google.com/store/apps/details?id=com.razatechlabs.pixelrevive.ai.photo.enhancer', linkLabel: 'View on Google Play', logo: '/assets/projects/apps/pixelrevive/logo.png', Icon: Sparkles, color: 'violet' },
  { name: 'ScreenMe AI', folder: 'screen-me', category: 'AI wallpapers', description: 'Turn your ideas into AI-generated wallpapers for your screen.', href: 'https://play.google.com/store/apps/details?id=com.razatechlabs.screenme.ai.app', linkLabel: 'View on Google Play', logo: '/assets/projects/apps/screen-me/logo.png', Icon: Image, color: 'blue' },
];
const skillLinks = {
  TypeScript: 'https://www.typescriptlang.org/', JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  React: 'https://react.dev/', 'Node.js': 'https://nodejs.org/', Express: 'https://expressjs.com/',
  'Tailwind CSS': 'https://tailwindcss.com/', Redux: 'https://redux.js.org/', MongoDB: 'https://www.mongodb.com/',
  PostgreSQL: 'https://www.postgresql.org/', Git: 'https://git-scm.com/', Docker: 'https://www.docker.com/',
  AWS: 'https://aws.amazon.com/', Figma: 'https://www.figma.com/', 'React Native': 'https://reactnative.dev/',
};
const stack = [
  ['TypeScript', 'typescript.svg'], ['JavaScript', 'javascript.svg'],
  ['React', 'react.svg'], ['Node.js', 'nodejs-1.svg'],
  ['Express', 'express.svg'], ['Tailwind CSS', 'tailwindcss.png'],
  ['Redux', 'redux.svg'], ['MongoDB', 'mongodb.svg'],
  ['PostgreSQL', 'postresql.svg'], ['Git', 'git.svg'],
  ['Docker', 'docker.svg'], ['AWS', 'aws.svg'],
  ['Figma', '../figma.svg'], ['React Native', 'react.svg'],
];

const designations = ['Full Stack AI Engineer', 'Software Engineer', 'React Native Developer', 'Full Stack Developer'];

function RotatingDesignation() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    const update = () => {
      clearInterval(timer);
      if (!preference.matches) timer = setInterval(() => setIndex(current => (current + 1) % designations.length), 3600);
    };
    update();
    preference.addEventListener('change', update);
    return () => { clearInterval(timer); preference.removeEventListener('change', update); };
  }, []);
  return <span className="designation-slot" aria-label={designations.join(', ')}><span key={index} className="designation-text" aria-hidden="true">{designations[index]}</span></span>;
}

function VisitorCounter() {
  const [failed, setFailed] = useState(false);
  const hostname = window.location.hostname;
  const isLocal = ['localhost', '127.0.0.1', '::1', '[::1]', ''].includes(hostname);
  return <div className="visitor-counter">{isLocal ? <span>Visitor count appears on the live site</span> : failed ? <span>Visitor count unavailable</span> : <img src={`https://hits.sh/${encodeURIComponent(hostname)}/portfolio.svg?label=Visitors&color=607963&labelColor=242421`} alt="Portfolio visitor count" width="110" height="20" onError={() => setFailed(true)}/>}</div>;
}

export default function App() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('portfolio-theme') || 'dark'; } catch { return 'dark'; } });
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [graphFailed, setGraphFailed] = useState(false);
  const dialog = useRef(null);
  const searchInput = useRef(null);
  const openSearch = () => { dialog.current.showModal(); searchInput.current?.focus(); };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Storage can be disabled. */ }
  }, [theme]);
  useEffect(() => {
    const keydown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (dialog.current.open) dialog.current.close(); else { dialog.current.showModal(); searchInput.current?.focus(); }
      }
    };
    window.addEventListener('keydown', keydown);
    return () => { window.removeEventListener('keydown', keydown); };
  }, []);

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Md Noorullah Raza home">nr<span>.</span></a>
        <nav aria-label="Main navigation">{navigation.slice(0, 4).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <div className="header-actions">
          <button onClick={openSearch} aria-label="Search portfolio" className="search-trigger"><Search size={15}/><span>Search</span><kbd>⌘ K</kbd></button>
          <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</button>
        </div>
      </header>

      <main id="main">
        <section id="home" className="intro">
          <div className="profile-line">
            <img className="avatar" src="/assets/mnraza.png" alt="Md Noorullah Raza"/>
            <div className="profile-details">
              <h1>Md Noorullah Raza<span className="name-dot">.</span></h1>
              <div className="role-line"><RotatingDesignation/></div>
            </div>
            <span className="availability profile-availability"><i/>Available for opportunities</span>
          </div>
          <div className="intro-copy">
            <p>I’m a software engineer with 4+ years of experience turning ideas into clean, scalable web products.</p>
            <p>I work with <strong>React, Next.js, and Node.js</strong> to build thoughtful interfaces and reliable applications. From AI experiences to enterprise platforms, I enjoy making complex things feel simple.</p>
            <p>Explore my work below, find my code on <a href="https://github.com/mnraza-dev" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a>, or <a href={`mailto:${email}`}>say hello <ArrowUpRight size={13}/></a>.</p>
          </div>
          <div className="intro-bottom"><span><MapPin size={14}/>Bengaluru, KA, India</span><a href="#projects">Explore my work <ArrowRight size={14}/></a></div>
        </section>

        <section id="projects" className="content-section">
          <div className="section-heading"><h2>Projects</h2><span>A few things I’ve built</span></div>
          <div className="project-grid">{myProjects.slice(0, showAll ? myProjects.length : 3).map((project, index) => (
            <article className="project-card" key={project.title}>
              <a className="project-preview" href={project.href.replace('http:', 'https:')} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}><img src={project.logo} alt={`${project.title.split(' – ')[0]} preview`} loading="lazy"/><span className="preview-open"><ArrowUpRight size={16}/></span></a>
              <div className="project-body"><div className="project-number">0{index + 1}<span>{project.year}</span></div><h3><a href={project.href.replace('http:', 'https:')} target="_blank" rel="noreferrer">{project.title.split(' – ')[0].split(' (')[0]}<ArrowUpRight size={15}/></a></h3><p>{project.desc}</p><div className="project-tags">{project.tags.slice(0, 3).map(tag => <span key={tag.name}>{tag.name}</span>)}</div><div className="project-links"><a href={project.href.replace('http:', 'https:')} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={13}/></a>{!project.repo.includes('yourusername') && <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}><Github size={15}/></a>}</div></div>
            </article>
          ))}</div>
          <button className="text-button" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show featured projects' : `View all ${myProjects.length} projects`}<ArrowRight size={14}/></button>
        </section>

        <section id="apps" className="content-section">
          <div className="section-heading"><h2>Apps</h2><a href="https://play.google.com/store/apps/developer?id=RazaTech+Labs" target="_blank" rel="noopener noreferrer">RazaTech Labs on Play Store <ArrowUpRight size={14}/></a></div>
          <AppsCarousel apps={apps}/>
        </section>

        <section id="experience" className="content-section">
          <div className="section-heading"><h2>Experience</h2><span>Where I’ve worked</span></div>
          {workExperiences.map(job => (
            <article className="experience" key={job.company}>
              <div className="company-mark"><img src="/assets/companies/xebia_logo.jpeg" alt="Xebia logo" loading="lazy"/></div>
              <div className="experience-body">
                <div className="job-top">
                  <h3>{job.company}</h3>
                  <a className="company-website" href="https://xebia.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Xebia website" title="Visit Xebia website"><ArrowUpRight size={16}/></a>
                </div>
                <details className="role-accordion" open>
                  <summary>
                    <div><span className="role-title">{job.title}</span><span className="role-meta">{job.duration} · {job.location}</span></div>
                    <ChevronDown size={16} className="accordion-chevron"/>
                  </summary>
                  <div className="role-content">
                    <ul>
                      {[job.description, ...job.responsibilities].map(item => <li key={item}>{item}</li>)}
                    </ul>
                    <div className="tag-list">{job.technologies.slice(0, 10).map(tech => <span key={tech.name}>{tech.name}</span>)}</div>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </section>

        <section id="testimonials" className="content-section">
          <div className="section-heading"><h2>Testimonials</h2><span>Words from people I’ve worked with</span></div>
          {testimonials.length ? (
            <div className="testimonial-grid">
              {testimonials.map(review => (
                <figure className="testimonial-card" key={`${review.name}-${review.company}`}>
                  <Quote size={20} className="testimonial-quote-icon" aria-hidden="true"/>
                  {review.rating && <div className="testimonial-rating" aria-label={`${review.rating} out of 5 stars`}><span aria-hidden="true">{'★'.repeat(review.rating)}</span><span>{review.rating}/5</span></div>}
                  <blockquote>{review.quote}</blockquote>
                  <figcaption>
                    <span className="testimonial-avatar" aria-hidden="true">{review.name.split(' ').map(part => part[0]).slice(0, 2).join('')}</span>
                    <div><span className="testimonial-name">{review.name}</span><span className="testimonial-role">{[review.role, review.company].filter(Boolean).join(' · ')}</span></div>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="testimonial-placeholder">
              <Quote size={22} aria-hidden="true"/>
              <div><h3>Client stories, coming soon.</h3><p>Feedback from the people behind the projects.</p></div>
            </div>
          )}
        </section>

        <section id="skills" className="content-section">
          <div className="section-heading"><h2>Tech stack</h2><span>Tools of the trade</span></div>
          <div className="skill-pills">{stack.map(([name, icon]) => <a href={skillLinks[name]} target="_blank" rel="noreferrer" className="skill-pill flex items-center gap-2 rounded-lg bg-muted px-2 py-1 font-geist-mono text-muted-foreground shadow-[inset_0_0.7px_0_0_rgba(255,255,255,0.8)] ring-1 ring-border/80 transition-colors duration-300 hover:bg-muted/80 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none dark:shadow-[inset_0_0.7px_0_0_rgba(255,255,255,0.2)]" key={name}><img src={`/assets/skills/${icon}`} alt="" loading="lazy"/><span>{name}</span></a>)}</div>
        </section>

        <section className="content-section contributions">
          <div className="section-heading"><h2>GitHub Contributions</h2><a href="https://github.com/mnraza-dev" target="_blank" rel="noreferrer">@mnraza-dev <ArrowUpRight size={14}/></a></div>
          <a className="contribution-panel" href="https://github.com/mnraza-dev" target="_blank" rel="noreferrer">{graphFailed ? <span>Explore my latest contributions on GitHub <ArrowUpRight size={15}/></span> : <img src={`https://ghchart.rshah.org/${theme === 'dark' ? '8fbd9f' : '408655'}/mnraza-dev?date=${new Date().toISOString().slice(0, 10)}`} alt="Md Noorullah Raza’s GitHub contribution calendar" loading="lazy" onError={() => setGraphFailed(true)}/>}</a>
          <p className="small-note">Open source, side projects, and a little progress every day.</p>
        </section>

        <section id="posts" className="content-section">
          <div className="section-heading"><h2>Featured posts</h2><a href="https://x.com/mnraza_codes/status/2104631676362191329" target="_blank" rel="noreferrer">@mnraza_codes</a></div>
          <div className="featured-posts">
            {['2104631676362191329', '2097988941022634336', '2008976864912793826'].map(postId => <XFeed key={postId} theme={theme} postId={postId}/>)}
          </div>
        </section>

        <section id="contact" className="content-section">
          <div className="section-heading"><h2>Connect with me</h2><span>Let’s make something useful</span></div>
          <div className="skill-pills">{socials.map(([label, href, Icon]) => <a className="skill-pill flex items-center gap-2 rounded-lg bg-muted px-2 py-1 font-geist-mono text-muted-foreground shadow-[inset_0_0.7px_0_0_rgba(255,255,255,0.8)] ring-1 ring-border/80 transition-colors duration-300 hover:bg-muted/80 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none dark:shadow-[inset_0_0.7px_0_0_rgba(255,255,255,0.2)]" key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer"><Icon size={16}/><span>{label}</span></a>)}</div>
          <div className="talk-card"><div><span className="eyebrow">HAVE SOMETHING IN MIND?</span><h2>Let’s talk.</h2><p>A new product, an interesting role, or just a hello.<br/>My inbox is always open.</p></div><div className="contact-actions"><a className="primary-button" href="https://cal.com/md-noorullah-raza/30min" target="_blank" rel="noopener noreferrer">Book Call <ArrowUpRight size={16}/></a></div></div>
        </section>
      </main>
      <VisitorCounter/>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Md Noorullah Raza</span><span>Made with Love <span className="footer-heart" role="img" aria-label="red heart">♥</span></span><a href="#home">Back to top ↑</a></footer>
      <dialog ref={dialog} className="command-dialog" onClick={event => { if (event.target === dialog.current) dialog.current.close(); }} onClose={() => setQuery('')}><div className="command-top"><Search size={18}/><input ref={searchInput} value={query} onChange={event => setQuery(event.target.value)} placeholder="Where would you like to go?" aria-label="Search sections"/><button className="icon-button" onClick={() => dialog.current.close()} aria-label="Close search"><X size={18}/></button></div><div className="command-results">{navigation.filter(([label]) => label.toLowerCase().includes(query.toLowerCase())).map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => dialog.current.close()}>{label}<ArrowRight size={15}/></a>)}{!navigation.some(([label]) => label.toLowerCase().includes(query.toLowerCase())) && <p>No sections found. Try “Projects” or “Connect”.</p>}</div><div className="command-footer">Jump to a section<span>esc to close</span></div></dialog>
    </div>
  );
}
