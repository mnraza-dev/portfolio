import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Contact from "./components/sections/Contact";

export default function App() {
  // globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
  // bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero/>
      <About/>
      <Contact/>
    </main>
  );
}
