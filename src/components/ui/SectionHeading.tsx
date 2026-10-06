import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  dark = false,
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto' : 'text-left'}`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`text-xs uppercase tracking-[0.2em] font-medium ${
              dark ? 'text-[#C5A059]' : 'text-[#7A2032]'
            }`}
          >
            {eyebrow}
          </span>
          <span
            className={`h-px w-8 ${dark ? 'bg-[#C5A059]/40' : 'bg-[#7A2032]/30'}`}
            aria-hidden="true"
          />
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-balance-custom leading-[1.15] ${
          dark ? 'text-[#F7F4EF]' : 'text-[#171717]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl font-light leading-relaxed ${
            dark ? 'text-[#DDD8D0]/80' : 'text-[#6F6A64]'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
