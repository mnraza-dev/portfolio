import { useEffect, useState } from 'react';
import { Image } from 'lucide-react';

import { getAppScreenshots } from '../lib/appScreenshots';

export default function AppScreenshotSlider({ name, folder, hovered = false }) {
  const screenshots = getAppScreenshots(folder);
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
