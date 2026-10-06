import React from 'react';
import { profile } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { EditorialImage } from '../ui/EditorialImage';
import { useMedia } from '../../context/MediaContext';
import { ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  const { images } = useMedia();

  return (
    <section id="about" className="py-24 md:py-36 bg-[#F7F4EF] border-b border-[#DDD8D0]">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Real Photograph (Akansha's Blue Outfit in Wood-Panel Setting) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="p-3 bg-white border border-[#DDD8D0] shadow-sm">
                <EditorialImage
                  src={images.portrait}
                  alt="Akansha Sharad Renuse in a royal blue collared peplum top in a modern wood-paneled interior"
                  fallbackType="portrait"
                  badge="Profile"
                  aspectRatioClass="aspect-[3/4]"
                  className="w-full object-cover object-top"
                />
                <div className="pt-3 px-1 flex items-center justify-between text-[11px] text-[#6F6A64]">
                  <span className="font-serif italic text-[#171717]">{profile.fullName}</span>
                  <span className="uppercase tracking-widest text-[9px] text-[#8C8379]">
                    {profile.location}
                  </span>
                </div>
              </div>

              {/* Offset border accent */}
              <div
                className="hidden sm:block absolute -top-4 -left-4 w-full h-full border border-[#DDD8D0] pointer-events-none -z-10"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Metadata */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              eyebrow="About"
              title="Beyond the frame."
              subtitle="An authentic digital identity rooted in poise, modern style, and deliberate collaboration."
            />

            <div className="space-y-6 text-base md:text-lg text-[#6F6A64] font-light leading-relaxed mb-10">
              <p className="text-[#171717] font-normal">
                {profile.bioIntro}
              </p>
              <p>
                {profile.bioParagraph1}
              </p>
              <p>
                {profile.bioParagraph2}
              </p>
            </div>

            {/* Structured Metadata Blocks (Zero-Pills Discipline) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#DDD8D0]">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#7A2032] font-semibold block mb-2">
                  Location
                </span>
                <span className="text-sm text-[#171717] font-medium block">
                  {profile.location}
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#7A2032] font-semibold block mb-2">
                  Focus
                </span>
                <span className="text-sm text-[#171717] font-medium block">
                  Creative / Media / Professional Projects
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#7A2032] font-semibold block mb-2">
                  Available For
                </span>
                <span className="text-sm text-[#171717] font-medium block">
                  Collaborations / Campaigns / Events / Partnerships
                </span>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#collaborate"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#171717] hover:text-[#7A2032] transition-colors group"
              >
                <span>Discuss a Collaboration</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
