import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { getAppScreenshots } from '../lib/appScreenshots';

export default function AppGallery({ apps, initialApp, onClose }) {
  const dialog = useRef(null);
  const touch = useRef(null);
  const [appIndex, setAppIndex] = useState(initialApp);
  const [slide, setSlide] = useState(0);
  const app = apps[appIndex];
  const shots = getAppScreenshots(app.folder);
  const move = (offset) => setSlide(index => (index + offset + shots.length) % shots.length);
  useEffect(() => {
    const previousFocus = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current.showModal();
    return () => {
      document.body.style.overflow = overflow;
      previousFocus?.focus();
    };
  }, []);
  return <dialog ref={dialog} className="app-gallery-dialog" aria-labelledby="gallery-title" onCancel={event => { event.preventDefault(); onClose(); }}
    onClick={event => { if (event.target === event.currentTarget) onClose(); }}
    onKeyDown={event => { if (['ArrowLeft', 'ArrowRight'].includes(event.key) && shots.length) { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); } }}>
    <div className="app-gallery-panel">
      <header className="gallery-header"><div><span className="eyebrow">THE APP COLLECTION</span><h2 id="gallery-title">{app.name}</h2><p>{app.description}</p></div><button className="gallery-close" aria-label="Close gallery" onClick={onClose}><X size={22}/></button></header>
      <div className="gallery-app-tabs" aria-label="Choose app">{apps.map((item, index) => <button key={item.name} aria-pressed={index === appIndex} onClick={() => { setAppIndex(index); setSlide(0); }}><img src={item.logo} alt=""/>{item.name}</button>)}</div>
      <div className="gallery-stage" onTouchStart={event => { touch.current = event.touches[0].clientX; }} onTouchEnd={event => { if (touch.current !== null && shots.length) { const distance = touch.current - event.changedTouches[0].clientX; if (Math.abs(distance) > 40) move(distance > 0 ? 1 : -1); } touch.current = null; }} onTouchCancel={() => { touch.current = null; }}>
        {shots.length ? <img key={`${app.folder}-${slide}`} className="gallery-main-image" src={shots[slide].url} alt={`${app.name} screenshot ${slide + 1} of ${shots.length}`}/> : <p>Screenshots coming soon</p>}
        {shots.length > 1 && <><button className="gallery-arrow gallery-prev" aria-label="Previous screenshot" onClick={() => move(-1)}><ChevronLeft/></button><button className="gallery-arrow gallery-next" aria-label="Next screenshot" onClick={() => move(1)}><ChevronRight/></button></>}
      </div>
      <div className="gallery-thumbnails" aria-label="Choose screenshot">{shots.map((shot, index) => <button key={shot.url} aria-label={`Screenshot ${index + 1}`} aria-pressed={slide === index} onClick={() => setSlide(index)}><img src={shot.url} alt="" loading="lazy"/></button>)}</div>
      <footer className="gallery-footer"><span aria-live="polite">{shots.length ? `${slide + 1} / ${shots.length}` : 'No screenshots'}<small>Use ← → to explore · Esc to close</small></span>{app.href && <a href={app.href} target="_blank" rel="noopener noreferrer">{app.linkLabel || 'Visit app'}<ArrowUpRight size={16}/></a>}</footer>
    </div>
  </dialog>;
}
