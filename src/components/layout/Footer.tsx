import React from 'react';
import { ArrowUp, Instagram, Mail, Linkedin } from 'lucide-react';
import { profile } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171717] text-[#F7F4EF] pt-20 pb-12 border-t border-[#2A2A2A]">
      <div className="editorial-container">
        {/* Top Segment: Editorial Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] block mb-3 font-medium">
              Digital Identity & Media Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#F7F4EF] leading-[1.1] text-balance-custom">
              Presence that leaves an impression.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-6">
            <a
              href="#collaborate"
              className="py-3.5 px-7 bg-[#F7F4EF] text-[#171717] hover:bg-[#C5A059] transition-colors uppercase tracking-[0.16em] text-xs font-semibold"
            >
              Start a Conversation
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B3AAA0] hover:text-[#F7F4EF] transition-colors cursor-pointer group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Middle Segment: Navigation & Social */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-b border-white/10 text-sm">
          <div>
            <h3 className="font-serif text-xl text-white mb-2">{profile.fullName}</h3>
            <p className="text-xs text-[#B3AAA0] leading-relaxed max-w-xs">
              Conversations, appearances, creative work, and meaningful brand collaborations.
            </p>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] block mb-3 font-medium">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-[#DDD8D0]/80">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#appearances" className="hover:text-white transition-colors">
                  Appearances & Summit
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Curated Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] block mb-3 font-medium">
              Direct Contact
            </span>
            <ul className="space-y-2 text-xs text-[#DDD8D0]/80">
              <li>
                <a
                  href={`mailto:${profile.contactEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {profile.contactEmail}
                </a>
              </li>
              <li>
                <span className="text-[#8C8379]">{profile.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] block mb-3 font-medium">
              Connect
            </span>
            <div className="flex items-center gap-3">
              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.contactEmail}`}
                aria-label="Send Email"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-xs text-[#C5A059] hover:underline"
            >
              @{profile.instagramHandle}
            </a>
          </div>
        </div>

        {/* Bottom Segment: Copyright & Quiet Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C8379] gap-4">
          <p>© 2026 {profile.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] tracking-wider uppercase">
            <span>Mumbai · Pune</span>
            <span aria-hidden="true">·</span>
            <span>Editorial Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
