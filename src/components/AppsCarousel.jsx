import { useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import AppScreenshotSlider from './AppScreenshotSlider';

export default function AppsCarousel({ apps }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const touchStart = useRef(null);
  const move = (offset) => {
    setHovered(null);
    setActive((index) => (index + offset + apps.length) % apps.length);
  };
  return (
    <div className="apps-carousel" role="region" aria-roledescription="carousel" aria-label="Mobile apps">
      <div className="apps-carousel-viewport" tabIndex={0}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
            event.preventDefault();
            move(event.key === 'ArrowLeft' ? -1 : 1);
          }
        }}
        onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = touchStart.current - event.changedTouches[0].clientX;
          if (Math.abs(distance) > 40) move(distance > 0 ? 1 : -1);
          touchStart.current = null;
        }} onTouchCancel={() => { touchStart.current = null; }}>
        {apps.map(({ name, folder, category, description, href, linkLabel = 'Privacy policy', logo, Icon, color }, index) => {
          let position = (index - active + apps.length) % apps.length;
          if (position > apps.length / 2) position -= apps.length;
          const visible = Math.abs(position) <= 1;
          return (
            <article key={name} className={`app-card app-carousel-card${position === 0 ? ' is-centered' : ''}`}
              style={{ '--position': position, visibility: visible ? 'visible' : 'hidden' }} aria-hidden={!visible} inert={!visible ? '' : undefined}
              onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(index)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setHovered(null); }}>
              {position !== 0 && visible && <button className="app-neighbor-select" aria-label={`Show ${name}`} onClick={() => { setActive(index); setHovered(null); }}/>}
              <div className="app-details">
                <div className={`app-icon app-icon-${color}`}>{logo ? <img src={logo} alt={`${name} logo`} loading="lazy"/> : <Icon size={24} aria-hidden="true"/>}</div>
                <span className="app-category">{category}</span><h3>{name}</h3><p>{description}</p>
                <a href={href} className={linkLabel === 'View on Google Play' ? 'google-play-link' : undefined} tabIndex={position === 0 ? 0 : -1} target={href.startsWith('https://') ? '_blank' : undefined} rel={href.startsWith('https://') ? 'noopener noreferrer' : undefined} aria-label={`${linkLabel} — ${name}`}>
                  {linkLabel === 'View on Google Play' ? <><img src="/assets/playstore.png" alt="" aria-hidden="true"/><span><small>GET IT ON</small><strong>Google Play</strong></span></> : <>{linkLabel}<ArrowUpRight size={13}/></>}
                </a>
              </div>
              <AppScreenshotSlider name={name} folder={folder} hovered={hovered === index && visible}/>
            </article>
          );
        })}
      </div>
      <div className="apps-carousel-controls">
        <button aria-label="Previous app" onClick={() => move(-1)}><ChevronLeft size={18}/></button>
        <span aria-live="polite" aria-atomic="true">{apps[active].name} · {active + 1} / {apps.length}</span>
        <button aria-label="Next app" onClick={() => move(1)}><ChevronRight size={18}/></button>
      </div>
    </div>
  );
}
