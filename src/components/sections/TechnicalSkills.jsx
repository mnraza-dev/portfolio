import React, { useState, useCallback, useMemo, memo, useRef, useEffect } from 'react';
import { skills } from '../../constants/index.js';

const COLOR_THEMES = {
  cyan: {
    title: "text-cyan-400",
    border: "hover:border-cyan-500/30",
    shadow: "hover:shadow-cyan-900/10",
    icon: "text-cyan-400 group-hover:text-cyan-300",
    underline: "bg-gradient-to-r from-transparent via-cyan-500 to-transparent",
    cssVar: "--skill-color: #06b6d4"
  },
  emerald: {
    title: "text-emerald-400",
    border: "hover:border-emerald-500/30",
    shadow: "hover:shadow-emerald-900/10",
    icon: "text-emerald-400 group-hover:text-emerald-300",
    underline: "bg-gradient-to-r from-transparent via-emerald-500 to-transparent",
    cssVar: "--skill-color: #10b981"
  },
  purple: {
    title: "text-purple-400",
    border: "hover:border-purple-500/30",
    shadow: "hover:shadow-purple-900/10",
    icon: "text-purple-400 group-hover:text-purple-300",
    underline: "bg-gradient-to-r from-transparent via-purple-500 to-transparent",
    cssVar: "--skill-color: #a855f7"
  },
  orange: {
    title: "text-orange-400",
    border: "hover:border-orange-500/30",
    shadow: "hover:shadow-orange-900/10",
    icon: "text-orange-400 group-hover:text-orange-300",
    underline: "bg-gradient-to-r from-transparent via-orange-500 to-transparent",
    cssVar: "--skill-color: #fb923c"
  },
  pink: {
    title: "text-pink-400",
    border: "hover:border-pink-500/30",
    shadow: "hover:shadow-pink-900/10",
    icon: "text-pink-400 group-hover:text-pink-300",
    underline: "bg-gradient-to-r from-transparent via-pink-500 to-transparent",
    cssVar: "--skill-color: #f472b6"
  }
};

// Optimized skill pill component
const SkillPill = memo(({ 
  skill, 
  index, 
  colors, 
  isDragging, 
  hasImageError, 
  onDragStart, 
  onDragOver, 
  onDrop, 
  onDragEnd, 
  onImageError 
}) => {
  const [imageError, setImageError] = useState(false);

  const showImage = skill.image && !imageError && !hasImageError;
  
  const handleImageError = () => {
    setImageError(true);
    onImageError();
  };
  
  return (
    <div 
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, index)}
      onDragEnd={onDragEnd}
      className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 ${colors.border} rounded-full px-4 py-2 transition-all duration-300 hover:shadow-lg ${colors.shadow} group flex items-center gap-2 cursor-grab active:cursor-grabbing select-none ${
        isDragging ? 'opacity-50 scale-95' : ''
      }`} 
    >
      {showImage ? (
        <div className={`${colors.icon} transition-colors`}>
          <img 
            src={skill.image} 
            alt={skill.name}
            height="20" 
            width="20"
            className="rounded-full"
            draggable={false}
            onError={handleImageError}
            loading="lazy"
          />
        </div>
      ) : (
        <div className={`${colors.icon} transition-colors w-5 h-5 rounded-full bg-current opacity-20 flex items-center justify-center`}>
          <span className="text-xs text-gray-500">{skill.name.charAt(0)}</span>
        </div>
      )}
      <span className="text-sm font-medium text-white group-hover:text-gray-100 transition-colors">
        {skill.name}
      </span>
    </div>
  );
});

// Optimized skill section component
const SkillSection = memo(({ title, skillsList, color = "cyan" }) => {
  const [skillItems, setSkillItems] = useState(skillsList);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [imageErrors, setImageErrors] = useState(new Set());

  const colors = useMemo(() => {
    const theme = COLOR_THEMES[color] || COLOR_THEMES.cyan;
    return theme;
  }, [color]);

  const handleDragStart = useCallback((e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.setData('text/plain', index.toString());
    e.dataTransfer.effectAllowed = 'move';
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback((e, dropIndex) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    setSkillItems(prevSkills => {
      const newSkills = [...prevSkills];
      const draggedSkill = newSkills[draggedIndex];
      
      newSkills.splice(draggedIndex, 1);
      newSkills.splice(dropIndex, 0, draggedSkill);
      
      return newSkills;
    });
    setDraggedIndex(null);
  }, [draggedIndex]);

  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null);
  }, []);

  const handleImageError = useCallback((skillId) => {
    setImageErrors(prev => new Set(prev).add(skillId));
  }, []);

  return (
    <div className="space-y-6">
      <div className="mb-12 text-center">
        <h3 className={`text-2xl font-bold ${colors.title} inline-block relative`}>
          {title}
          <div className={`absolute -bottom-2 left-0 right-0 h-0.5 ${colors.underline}`}></div>
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {skillItems.map((skill, index) => (
          <SkillPill
            key={`${skill.id}-${index}`}
            skill={skill}
            index={index}
            colors={colors}
            isDragging={draggedIndex === index}
            hasImageError={imageErrors.has(skill.id)}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnd={handleDragEnd}
            onImageError={() => handleImageError(skill.id)}
          />
        ))}
      </div>
    </div>
  );
});

const TechnicalSkills = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Memoized skill sections configuration
  const skillSections = useMemo(() => [
    { title: "Frontend Development", skillsList: skills.frontend, color: "cyan" },
    { title: "Backend Development", skillsList: skills.backend, color: "emerald" },
    { title: "DevOps & Cloud", skillsList: skills.devops, color: "purple" },
    { title: "Mobile Development", skillsList: skills.mobile, color: "orange" },
    { title: "AI & Machine Learning", skillsList: skills.ai_ml, color: "pink" },
    { title: "Tools & Platforms", skillsList: skills.tools, color: "cyan" }
  ], []);

  // Memoized header content
  const headerContent = useMemo(() => (
    <div className="text-center mb-16">
      <div className="inline-block">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
          <span className="tracking-wider">MY EXPERTISE</span>
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Technical{' '}
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
      </h2>
      <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed">
        With <b>10+</b> years of experience, I've developed a comprehensive skill set spanning frontend, backend, mobile development, cybersecurity, and server administration.
      </p>
    </div>
  ), []);

  if (!isVisible) {
    return (
      <section ref={sectionRef} className="relative min-h-[400px]">
        <div className="flex items-center justify-center h-full">
          <div className="animate-pulse text-gray-400">Loading skills...</div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative">
      {headerContent}
      
      <div className="space-y-16">
        {skillSections.map((section, index) => (
          <SkillSection
            key={`${section.title}-${index}`}
            title={section.title}
            skillsList={section.skillsList}
            color={section.color}
          />
        ))}
      </div>
    </section>
  );
});

export default TechnicalSkills;