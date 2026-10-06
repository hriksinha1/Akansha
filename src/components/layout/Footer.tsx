import React from 'react';
import { ArrowUp, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { label: "Personal Instagram", handle: `@${profile.instagramHandle}`, url: profile.instagramUrl },
    { label: "Real Estate", handle: "@realestatewithakansha", url: profile.realEstateInstagram },
    { label: "MediaJars", handle: "@mediajars", url: profile.mediaInstagram },
    { label: "Kokan Quality", handle: "@kokan_quality", url: profile.kokanInstagram },
  ];

  return (
    <footer className="bg-[#171717] text-[#F7F4EF] pt-24 pb-12 border-t border-[#2A2A2A]">
      <div className="editorial-container">
        {/* Massive Editorial Brand Headline */}
        <div className="pb-16 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] block mb-3 font-medium">
                Official Digital Identity
              </span>
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-serif font-light text-[#F7F4EF] tracking-tight leading-none">
                {profile.name}
              </h2>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="self-start lg:self-end flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B3AAA0] hover:text-[#F7F4EF] transition-colors cursor-pointer group py-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>

          <p className="font-serif text-2xl sm:text-3xl text-white/80 font-light max-w-2xl leading-relaxed italic">
            “More than a presence. A point of connection.”
          </p>
        </div>

        {/* Navigation & Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-14 border-b border-white/10 text-sm">
          {/* Col 1: Bio / Location */}
          <div className="md:col-span-4">
            <h3 className="font-serif text-xl text-white mb-2">{profile.fullName}</h3>
            <p className="text-xs text-[#B3AAA0] leading-relaxed max-w-xs mb-4">
              Conversations, appearances, creative work, real estate perspectives, and meaningful brand collaborations.
            </p>
            <span className="text-xs font-mono text-[#8C8379] block">
              {profile.location}
            </span>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] block mb-4 font-semibold">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-[#DDD8D0]/80">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Areas of Work
                </a>
              </li>
              <li>
                <a href="#presence" className="hover:text-white transition-colors">
                  Public Presence
                </a>
              </li>
              <li>
                <a href="#real-estate" className="hover:text-white transition-colors">
                  Real Estate
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Curated Gallery
                </a>
              </li>
              <li>
                <a href="#collaborate" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Ecosystem Social Channels */}
          <div className="md:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] block mb-4 font-semibold">
              Ecosystem Channels
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-[#B3AAA0] uppercase tracking-wider">
                      {s.label}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-white/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <span className="text-xs font-mono text-white/90 group-hover:text-[#C5A059] transition-colors">
                    {s.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Quiet Details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C8379] gap-4">
          <p>© 2026 {profile.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] tracking-wider uppercase">
            <span>Mumbai · Pune</span>
            <span aria-hidden="true">·</span>
            <span>Editorial Personal Brand</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
