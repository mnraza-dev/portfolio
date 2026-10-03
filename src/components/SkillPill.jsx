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
        className={`bg-gray-900/50 border border-gray-800 rounded-full px-4 py-2 transition-all duration-300 cursor-pointer select-none ${
          isDragging ? 'opacity-50 scale-95' : ''
        } hover:bg-gray-800`}
      >
        {showImage ? (
          <div className="flex items-center gap-2">
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
            <span className="text-sm text-gray-300">{skill.name}</span>
          </div>
        ) : (
          <span className="text-sm text-gray-300">{skill.name}</span>
        )}
      </div>
    );
  },
);

export default SkillPill;