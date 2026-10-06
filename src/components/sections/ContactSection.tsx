import React from 'react';
import { profile } from '../../data/profile';
import { Mail, Instagram, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#DDD8D0]">
      <div className="editorial-container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7A2032] font-semibold block mb-4">
            Direct Reach
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#171717] font-normal tracking-tight mb-6">
            Have an idea or campaign in mind?
          </h2>

          <p className="text-base sm:text-lg text-[#6F6A64] font-light leading-relaxed max-w-xl mx-auto mb-10">
            Open for inquiries across brand work, digital storytelling, public forum attendance, and media features.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${profile.contactEmail}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 bg-[#171717] text-[#F7F4EF] hover:bg-[#7A2032] transition-colors uppercase tracking-[0.16em] text-xs font-semibold"
            >
              <Mail className="w-4 h-4" />
              <span>{profile.contactEmail}</span>
            </a>

            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 border border-[#171717] bg-white text-[#171717] hover:bg-[#171717] hover:text-[#F7F4EF] transition-all uppercase tracking-[0.16em] text-xs font-semibold"
            >
              <Instagram className="w-4 h-4" />
              <span>@{profile.instagramHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
