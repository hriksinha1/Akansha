import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { EditorialImage } from '../ui/EditorialImage';
import { ecosystemBrands } from '../../data/ecosystem';
import { Instagram, ArrowUpRight, Compass, Home, Layers } from 'lucide-react';

export const RealEstate: React.FC = () => {
  const brand = ecosystemBrands.realEstate;

  return (
    <section id="real-estate" className="py-24 md:py-36 bg-[#FAF8F5] border-b border-[#DDD8D0]">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Specialized Dimension"
              title={brand.title}
              subtitle={brand.headline}
            />

            <p className="text-base sm:text-lg text-[#6F6A64] font-light leading-relaxed mb-8">
              {brand.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#DDD8D0] mb-10">
              <div className="space-y-1">
                <Home className="w-4 h-4 text-[#7A2032] mb-1" />
                <span className="text-xs font-semibold text-[#171717] uppercase tracking-wider block">
                  Spaces
                </span>
                <span className="text-xs text-[#8C8379]">Contemporary Living</span>
              </div>
              <div className="space-y-1">
                <Compass className="w-4 h-4 text-[#7A2032] mb-1" />
                <span className="text-xs font-semibold text-[#171717] uppercase tracking-wider block">
                  Perspectives
                </span>
                <span className="text-xs text-[#8C8379]">Architectural Light</span>
              </div>
              <div className="space-y-1">
                <Layers className="w-4 h-4 text-[#7A2032] mb-1" />
                <span className="text-xs font-semibold text-[#171717] uppercase tracking-wider block">
                  Curation
                </span>
                <span className="text-xs text-[#8C8379]">Property Walkthroughs</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-8 bg-[#171717] text-[#F7F4EF] hover:bg-[#7A2032] transition-colors uppercase tracking-[0.16em] text-xs font-semibold inline-flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4 text-[#C5A059]" />
                <span>{brand.ctaText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <span className="text-xs text-[#8C8379] text-center sm:text-left">
                @{brand.handle}
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Photography Frame */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="p-3 bg-white border border-[#DDD8D0] shadow-sm">
                <EditorialImage
                  src={brand.image}
                  alt="Architectural space for Real Estate With Akansha"
                  fallbackType="realestate"
                  badge="Architecture & Living"
                  aspectRatioClass="aspect-[16/11]"
                  className="w-full object-cover"
                />
                <div className="pt-3 px-1 flex items-center justify-between text-[11px] text-[#6F6A64]">
                  <span className="font-serif italic text-[#171717]">Real Estate with Akansha</span>
                  <span className="uppercase tracking-widest text-[9px] text-[#7A2032] font-semibold">
                    Living Spaces
                  </span>
                </div>
              </div>

              {/* Offset architectural accent */}
              <div
                className="hidden sm:block absolute -bottom-4 -left-4 w-full h-full border border-[#DDD8D0] pointer-events-none -z-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
