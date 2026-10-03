import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Experience from "./components/sections/Experience";
import Work from "./components/sections/Work";
import TechnicalSkills from "./components/sections/TechnicalSkills";
import SkillPill from "./components/SkillPill";
import ProjectCard from "./components/ProjectCard";
export default function App() {
  return (
    <main className="max-w-7xl mx-auto pt-16">
      <Navbar />
      <Hero/>
      <About/>
      <TechnicalSkills/>
      <Work/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
  );
}
