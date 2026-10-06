import React from 'react';
import { profile } from '../../data/profile';

export const IntroStatement: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F7F4EF] border-b border-[#DDD8D0]">
      <div className="editorial-container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7A2032] font-semibold block mb-8">
            Core Philosophy
          </span>

          <blockquote className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.2] text-balance-custom tracking-tight mb-8 whitespace-pre-line">
            “From content to conversations,
the work is about creating moments
people remember.”
          </blockquote>

          <div className="w-16 h-px bg-[#7A2032]/40 mx-auto mb-8" aria-hidden="true" />

          <p className="text-base sm:text-lg md:text-xl text-[#6F6A64] font-light leading-relaxed max-w-2xl mx-auto">
            {profile.statementSub}
          </p>
        </div>
      </div>
    </section>
  );
};
