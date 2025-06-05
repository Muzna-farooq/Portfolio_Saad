import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  
  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-white relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 h-1 bg-accent-400 w-1/2 rounded"></span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;