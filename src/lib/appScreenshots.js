const files = import.meta.glob('/public/assets/projects/apps/**/*.{png,jpg,jpeg,webp,avif}', { eager: true, query: '?url', import: 'default' });
const instantDocOrder = ['id-featured.webp', 'pdf-lib.webp', '01.webp'];

export function getAppScreenshots(folder) {
  return Object.entries(files)
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
}

