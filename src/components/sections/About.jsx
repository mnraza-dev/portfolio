import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-emerald-500/30 rounded-full blur-2xl" />
              <img
                src="/assets/mnraza.png"
                alt="Noorullah Raza"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-white/10"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-violet-400 text-sm font-medium tracking-wider uppercase">About</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">I am Noorullah Raza</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate frontend developer with 4+ years of experience building modern,
              scalable web applications. My expertise spans frontend technologies like React and
              React Native, and backend systems using Node.js, PostgreSQL, and MongoDB.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I enjoy transforming complex ideas into intuitive, high-performance digital products.
              Over the years, I have worked on diverse projects ranging from consumer-facing mobile
              apps to enterprise web platforms, consistently delivering clean code and smooth user
              experiences.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <div>
                <p className="text-3xl font-bold text-white">4+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">20+</p>
                <p className="text-gray-400 text-sm">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;