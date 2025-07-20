import React, { useState, memo } from 'react';

const SkillPill = memo(
  ({ skill, index, colors, isDragging, hasImageError, onDragStart, onDragOver, onDrop, onDragEnd, onImageError }) => {
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
        }`}>
        {showImage ? (
          <div className={`${colors.icon} transition-colors`}>
            <img
              src={skill.image}
              alt={skill.name}
              height="20"
              width="20"
              className="rounded-sm"
              draggable={false}
              onError={handleImageError}
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className={`${colors.icon} transition-colors w-5 h-5 rounded-full bg-current opacity-20 flex items-center justify-center`}>
            <span className="text-xs text-gray-500">{skill.name.charAt(0)}</span>
          </div>
        )}
        <span className="text-sm font-medium text-white group-hover:text-gray-100 transition-colors">{skill.name}</span>
      </div>
    );
  },
);

export default SkillPill; 