import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { EditorialImage } from '../ui/EditorialImage';
import { ecosystemBrands } from '../../data/ecosystem';
import { Instagram, ArrowUpRight } from 'lucide-react';

export const MediaPresence: React.FC = () => {
  const media = ecosystemBrands.mediaCreative;
  const kokan = ecosystemBrands.kokanQuality;

  return (
    <section id="media-presence" className="py-24 md:py-36 bg-[#F7F4EF] border-b border-[#DDD8D0]">
      <div className="editorial-container">
        <SectionHeading
          eyebrow="Creative Ecosystem"
          title="Media & Related Initiatives"
          subtitle="Collaborative touchpoints expanding across content formats and cultural heritage."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Card 1: MediaJars (Media & Creative) */}
          <div className="lg:col-span-7 bg-white border border-[#DDD8D0] p-6 sm:p-10 flex flex-col justify-between group hover:border-[#171717] transition-all">
            <div>
              <div className="flex items-center justify-between text-xs text-[#8C8379] mb-4">
                <span className="uppercase tracking-widest text-[#7A2032] font-semibold text-[11px]">
                  {media.category}
                </span>
                <span className="font-mono">@{media.handle}</span>
              </div>

              <div className="relative overflow-hidden mb-6">
                <EditorialImage
                  src={media.image}
                  alt="Broadcast Soundstage for MediaJars"
                  fallbackType="studio"
                  aspectRatioClass="aspect-[16/10]"
                  className="w-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <h3 className="font-serif text-3xl text-[#171717] group-hover:text-[#7A2032] transition-colors mb-3">
                {media.title}
              </h3>

              <p className="text-base text-[#6F6A64] font-light leading-relaxed mb-6">
                {media.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#EFECE6] flex items-center justify-between">
              <a
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#171717] hover:text-[#7A2032] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#7A2032]" />
                <span>{media.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <span className="text-xs text-[#8C8379]">Collaborative Platform</span>
            </div>
          </div>

          {/* Card 2: Kokan Quality (Related Brand) */}
          <div className="lg:col-span-5 bg-white border border-[#DDD8D0] p-6 sm:p-10 flex flex-col justify-between group hover:border-[#171717] transition-all">
            <div>
              <div className="flex items-center justify-between text-xs text-[#8C8379] mb-4">
                <span className="uppercase tracking-widest text-[#7A2032] font-semibold text-[11px]">
                  {kokan.category}
                </span>
                <span className="font-mono">@{kokan.handle}</span>
              </div>

              <div className="relative overflow-hidden mb-6">
                <EditorialImage
                  src={kokan.image}
                  alt="Heritage products and still life for Kokan Quality"
                  fallbackType="studio"
                  aspectRatioClass="aspect-[16/10]"
                  className="w-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <h3 className="font-serif text-3xl text-[#171717] group-hover:text-[#7A2032] transition-colors mb-3">
                {kokan.title}
              </h3>

              <p className="text-base text-[#6F6A64] font-light leading-relaxed mb-6">
                {kokan.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#EFECE6] flex items-center justify-between">
              <a
                href={kokan.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#171717] hover:text-[#7A2032] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#7A2032]" />
                <span>{kokan.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <span className="text-xs text-[#8C8379]">Related Brand</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
