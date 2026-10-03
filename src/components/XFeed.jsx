import { useEffect, useRef, useState } from 'react';

let widgetLoader;
function loadWidgets() {
  if (window.twttr?.widgets) return Promise.resolve(window.twttr);
  if (!widgetLoader) widgetLoader = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.onload = () => window.twttr?.ready(resolve);
    script.onerror = () => reject(new Error('X widgets unavailable'));
    document.head.appendChild(script);
  });
  return widgetLoader;
}

export default function XFeed({ theme, postId }) {
  const container = useRef(null);
  const [status, setStatus] = useState('loading');
  useEffect(() => {
    let cancelled = false;
    const target = document.createElement('div');
    container.current.replaceChildren(target);
    const resize = () => {
      const available = container.current?.clientWidth || 300;
      const embedWidth = Math.max(300, available);
      target.style.width = `${embedWidth}px`;
      target.style.zoom = String(available / embedWidth);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container.current);
    resize();
    setStatus('loading');
    const timeout = setTimeout(() => { if (!cancelled) setStatus('unavailable'); }, 12000);
    loadWidgets().then(api => {
      if (cancelled) return;
      return api.widgets.createTweet(postId, target, {
        theme, align: 'center', dnt: true,
      });
    }).then(widget => {
      if (cancelled) return;
      clearTimeout(timeout);
      setStatus(widget ? 'loaded' : 'unavailable');
    }).catch(() => { if (!cancelled) { clearTimeout(timeout); setStatus('unavailable'); } });
    return () => { cancelled = true; clearTimeout(timeout); observer.disconnect(); target.remove(); };
  }, [theme, postId]);
  return (
    <div className="x-feed-panel">
      <div className="x-embed-container" ref={container}/>
      {status !== 'loaded' && <p className="x-feed-status" role="status">{status === 'loading' ? 'Loading featured post…' : 'This post couldn’t load here. Open it on X instead.'}</p>}
      <a className="x-feed-link" href={`https://x.com/mnraza_codes/status/${postId}`} target="_blank" rel="noopener noreferrer">View post on Twitter/ X</a>
    </div>
  );
}
