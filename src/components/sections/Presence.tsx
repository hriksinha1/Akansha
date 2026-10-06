import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { EditorialImage } from '../ui/EditorialImage';
import { Building2, Calendar, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { appearances } from '../../data/appearances';

export const Presence: React.FC = () => {
  const item = appearances[0];

  return (
    <section id="presence" className="py-24 md:py-36 bg-[#F4EFEA] border-b border-[#DDD8D0]">
      <div className="editorial-container">
        <SectionHeading
          eyebrow="Public Presence"
          title={item.headline}
          subtitle={item.subheading}
        />

        {/* Editorial Feature Story Card */}
        <div className="bg-[#FAF8F5] border border-[#DDD8D0] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Frame: ABP Network / Ideas of India Summit 3.0 Photo */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="p-3 bg-white border border-[#DDD8D0]">
                  <EditorialImage
                    src="/images/akansha/ideas-of-india.jpg"
                    alt={item.altText}
                    fallbackType="summit"
                    badge="Ideas of India Summit 3.0"
                    aspectRatioClass="aspect-[4/5] sm:aspect-[3/4]"
                    className="w-full object-cover object-center"
                  />
                  <div className="pt-3 px-1 flex items-center justify-between text-[11px] text-[#6F6A64]">
                    <span className="font-medium text-[#171717]">ABP Network · Summit 3.0</span>
                    <span className="uppercase tracking-widest text-[9px] text-[#7A2032] font-semibold">
                      Ideas of India
                    </span>
                  </div>
                </div>

                {/* Subtle decorative offset framing */}
                <div
                  className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full border border-[#DDD8D0] pointer-events-none -z-10"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Editorial Content & Neutral Context */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#7A2032] font-semibold mb-3">
                <Building2 className="w-4 h-4" />
                <span>{item.organization}</span>
                <span aria-hidden="true">·</span>
                <span>{item.edition}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717] font-normal tracking-tight mb-4 text-balance-custom">
                At the Ideas of India Summit
              </h3>

              <p className="text-base sm:text-lg text-[#6F6A64] font-light leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Verified Context Details */}
              <div className="space-y-3 pt-6 border-t border-[#DDD8D0] mb-8">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3 text-sm text-[#171717]">
                    <CheckCircle2 className="w-4 h-4 text-[#7A2032] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Event Metadata (No Pills) */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#DDD8D0] text-xs text-[#6F6A64] mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8C8379]" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#8C8379]" />
                  <span>{item.date}</span>
                </div>
              </div>

              <div>
                <a
                  href="#collaborate"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#171717] hover:text-[#7A2032] transition-colors"
                >
                  <span>Inquire for Event Appearances</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
