import { useEffect, useRef } from 'react';

export default function LivingBackdrop() {
  const host = useRef(null);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) return;
    let disposed = false, cleanup;
    import('three').then(THREE => {
      if (disposed || !host.current) return;
      const element = host.current;
      let renderer;
      try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); } catch { return; }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      element.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, .1, 100);
      camera.position.z = 7;
      const geometry = new THREE.IcosahedronGeometry(1.6, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x91b69a, wireframe: true, transparent: true, opacity: .18 });
      const shape = new THREE.Mesh(geometry, material);
      shape.position.x = 2.4;
      scene.add(shape);
      const pointsGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(150 * 3);
      for (let i = 0; i < positions.length; i++) positions[i] = (Math.random() - .5) * 12;
      pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const pointsMaterial = new THREE.PointsMaterial({ color: 0x91b69a, size: .025, transparent: true, opacity: .5 });
      const points = new THREE.Points(pointsGeometry, pointsMaterial);
      scene.add(points);
      const resize = new ResizeObserver(() => { const { width, height } = element.getBoundingClientRect(); renderer.setSize(width, height); camera.aspect = width / Math.max(height, 1); camera.updateProjectionMatrix(); });
      resize.observe(element);
      let visible = false;
      const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; });
      observer.observe(element);
      let pointerX = 0, pointerY = 0;
      const pointer = event => { const bounds = element.parentElement.getBoundingClientRect(); pointerX = (event.clientX - bounds.left) / bounds.width - .5; pointerY = (event.clientY - bounds.top) / bounds.height - .5; };
      const parent = element.parentElement;
      parent.addEventListener('pointermove', pointer);
      renderer.setAnimationLoop(() => {
        if (!visible || document.hidden || preference.matches) return;
        shape.rotation.y += .002;
        shape.rotation.x += .001;
        points.rotation.y += .0003;
        camera.position.x += (pointerX * .25 - camera.position.x) * .03;
        camera.position.y += (-pointerY * .25 - camera.position.y) * .03;
        renderer.render(scene, camera);
      });
      cleanup = () => { renderer.setAnimationLoop(null); resize.disconnect(); observer.disconnect(); parent.removeEventListener('pointermove', pointer); geometry.dispose(); material.dispose(); pointsGeometry.dispose(); pointsMaterial.dispose(); renderer.dispose(); renderer.domElement.remove(); };
    }).catch(() => {});
    return () => { disposed = true; cleanup?.(); };
  }, []);
  return <div ref={host} className="living-backdrop" aria-hidden="true"/>;
}
