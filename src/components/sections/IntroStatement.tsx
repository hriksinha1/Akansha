import React from 'react';

export const IntroStatement: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F4EF] border-b border-[#DDD8D0]">
      <div className="editorial-container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7A2032] font-medium block mb-6">
            Vision & Narrative
          </span>

          <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171717] font-normal leading-[1.2] text-balance-custom tracking-tight mb-8">
            “Stories, presence & experiences that connect.”
          </blockquote>

          <div className="w-16 h-px bg-[#7A2032]/40 mx-auto mb-8" aria-hidden="true" />

          <p className="text-base sm:text-lg md:text-xl text-[#6F6A64] font-light leading-relaxed max-w-2xl mx-auto">
            From the camera lens to live conference forums, every moment is an opportunity to cultivate resonance, articulate style, and build memorable brand moments.
          </p>
        </div>
      </div>
    </section>
  );
};
