import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';
import { EditorialImage } from '../ui/EditorialImage';
import { useMedia } from '../../context/MediaContext';

export const Hero: React.FC = () => {
  const { images } = useMedia();

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-[#DDD8D0]">
      {/* Background Subtle Editorial Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="editorial-container w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Asymmetric Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#7A2032]">
                {profile.fullName}
              </span>
              <span className="h-px w-10 bg-[#7A2032]/40" aria-hidden="true" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#6F6A64]">
                Media & Brand Portfolio
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-normal leading-[1.05] tracking-tight text-[#171717] mb-6 text-balance-custom">
              Presence that leaves an impression.
            </h1>

            {/* Supporting Editorial Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-[#6F6A64] font-light leading-relaxed max-w-xl mb-10">
              A personal space for work, stories, public appearances and meaningful collaborations. Bridging modern visual elegance with authentic human connection.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href="#work"
                className="py-4 px-8 bg-[#171717] text-[#F7F4EF] hover:bg-[#7A2032] transition-colors duration-300 uppercase tracking-[0.16em] text-xs font-semibold text-center inline-flex items-center justify-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#collaborate"
                className="py-4 px-8 bg-transparent text-[#171717] hover:bg-[#171717] hover:text-[#F7F4EF] border border-[#171717] transition-all duration-300 uppercase tracking-[0.16em] text-xs font-semibold text-center inline-flex items-center justify-center gap-2"
              >
                <span>Work With Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Editorial Metadata Footer */}
            <div className="pt-6 border-t border-[#DDD8D0] grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
              <div>
                <span className="text-[#8C8379] uppercase tracking-wider block text-[10px] mb-1">
                  Location
                </span>
                <span className="text-[#171717] font-medium">{profile.location}</span>
              </div>
              <div>
                <span className="text-[#8C8379] uppercase tracking-wider block text-[10px] mb-1">
                  Discipline
                </span>
                <span className="text-[#171717] font-medium">Media & Creative</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[#8C8379] uppercase tracking-wider block text-[10px] mb-1">
                  Status
                </span>
                <span className="text-[#7A2032] font-medium">Available for Select Projects</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Frame (Akansha's Portrait) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative framing with hairline borders */}
              <div className="relative p-2 sm:p-3 bg-white border border-[#DDD8D0] shadow-sm">
                <EditorialImage
                  src={images.hero}
                  alt="Akansha Sharad Renuse poised in a contemporary setting"
                  fallbackType="portrait"
                  badge="Editorial Portrait"
                  aspectRatioClass="aspect-[4/5] sm:aspect-[3/4]"
                  className="w-full object-cover object-top"
                />

                {/* Editorial Caption Tag */}
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-[11px] text-[#6F6A64]">
                  <span className="font-serif italic text-sm text-[#171717]">
                    Akansha Sharad Renuse
                  </span>
                  <span className="uppercase tracking-widest text-[9px] text-[#8C8379]">
                    Series · 2026
                  </span>
                </div>
              </div>

              {/* Architectural Offset Accent */}
              <div
                className="hidden md:block absolute -bottom-5 -right-5 w-full h-full border border-[#DDD8D0] pointer-events-none -z-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

