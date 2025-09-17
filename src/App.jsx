import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Experience from "./components/sections/Experience";
import Work from "./components/sections/Work";
import { Toaster } from "sonner";
import TechnicalSkills from "./components/sections/TechnicalSkills";
export default function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Work />
      <Experience />
      <Contact />
      <Footer />
      <Toaster
        richColors
        position="top-right"
        toastOptions={{
          style: {
            background: "linear-gradient(to right, #0f172a, #1e293b)", 
            color: "#fff",
            borderRadius: "0.75rem",
            border: "1px solid rgba(16, 185, 129, 0.3)", 
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          },
          className: "font-medium tracking-wide",
        }}
      />
    </main>
  );
}
