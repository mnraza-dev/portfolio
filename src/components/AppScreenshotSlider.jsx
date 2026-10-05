import { useEffect, useState } from 'react';
import { Image } from 'lucide-react';

const files = import.meta.glob('/public/assets/projects/apps/**/*.{png,jpg,jpeg,webp,avif}', { eager: true, query: '?url', import: 'default' });
const instantDocOrder = ['id-featured.webp', 'pdf-lib.webp', '01.webp'];

export default function AppScreenshotSlider({ name, folder, hovered = false }) {
  const screenshots = Object.entries(files)
    .filter(([path]) => !/\/logo(?:[-_][^/]*)?\./i.test(path))
    .filter(([path]) => path.startsWith(`/public/assets/projects/apps/${folder}/`) ||
      (folder === 'instantdoc' && instantDocOrder.some((file) => path === `/public/assets/projects/apps/${file}`)))
    .sort(([a], [b]) => {
      const aFeatured = /\/[^/]*featured\./i.test(a);
      const bFeatured = /\/[^/]*featured\./i.test(b);
      if (aFeatured !== bFeatured) return aFeatured ? -1 : 1;
      const first = instantDocOrder.indexOf(a.split('/').pop());
      const second = instantDocOrder.indexOf(b.split('/').pop());
      if ((folder === 'instantdoc' || folder === 'instant-docs') && first !== -1 && second !== -1) return first - second;
      return a.localeCompare(b, undefined, { numeric: true });
    })
    .map(([path, url]) => ({ url, featured: /\/[^/]*featured\./i.test(path) }));
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (!hovered || screenshots.length < 2) {
      setActive(0);
      return;
    }
    const timer = window.setInterval(() => setActive((index) => (index + 1) % screenshots.length), 1400);
    return () => window.clearInterval(timer);
  }, [hovered, screenshots.length]);

  if (!screenshots.length) return (
    <div className="app-screenshots-empty"><Image size={24} aria-hidden="true"/><span>Screenshots coming soon</span></div>
  );

  return (
    <div className="app-screenshots" role="region" aria-roledescription="carousel" aria-label={`${name} screenshots`}>
      <div className="app-screenshot-frame">
        <img className={screenshots[active].featured ? 'app-featured-image' : undefined} src={screenshots[active].url} alt={`${name} screenshot ${active + 1} of ${screenshots.length}`} loading="lazy" draggable="false"/>
      </div>
    </div>
  );
}
