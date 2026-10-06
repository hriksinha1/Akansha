import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { EditorialImage } from '../ui/EditorialImage';
import { Lightbox } from '../ui/Lightbox';
import { galleryItems } from '../../data/gallery';
import { Maximize2 } from 'lucide-react';

export const EditorialGallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-24 md:py-36 bg-[#F4EFEA] border-b border-[#DDD8D0]">
      <div className="editorial-container">
        <SectionHeading
          eyebrow="Visual Record"
          title="Curated Gallery"
          subtitle="An editorial collection celebrating presence, architectural light, and documented public moments."
        />

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Item 1: Large Feature Portrait (Col 1-7, Akansha Blue Outfit) */}
          <div
            className="md:col-span-7 bg-white p-3 border border-[#DDD8D0] group cursor-pointer transition-all duration-300 hover:border-[#171717]"
            onClick={() => openLightbox(0)}
          >
            <div className="relative overflow-hidden">
              <EditorialImage
                src={galleryItems[0].image}
                alt={galleryItems[0].altText}
                fallbackType="portrait"
                aspectRatioClass="aspect-[4/5]"
                className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3 bg-white/90 text-[#171717] rounded-none text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                  View Full
                </span>
              </div>
            </div>
            <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#6F6A64]">
              <span className="font-serif text-base text-[#171717]">{galleryItems[0].title}</span>
              <span className="text-[10px] uppercase tracking-wider text-[#7A2032] font-semibold">
                {galleryItems[0].category}
              </span>
            </div>
          </div>

          {/* Item 2: Tall Summit Appearance (Col 8-12, Ideas of India 3.0) */}
          <div
            className="md:col-span-5 bg-white p-3 border border-[#DDD8D0] group cursor-pointer transition-all duration-300 hover:border-[#171717]"
            onClick={() => openLightbox(1)}
          >
            <div className="relative overflow-hidden">
              <EditorialImage
                src={galleryItems[1].image}
                alt={galleryItems[1].altText}
                fallbackType="summit"
                aspectRatioClass="aspect-[3/4]"
                className="w-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3 bg-white/90 text-[#171717] rounded-none text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                  View Full
                </span>
              </div>
            </div>
            <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#6F6A64]">
              <span className="font-serif text-base text-[#171717]">{galleryItems[1].title}</span>
              <span className="text-[10px] uppercase tracking-wider text-[#7A2032] font-semibold">
                {galleryItems[1].category}
              </span>
            </div>
          </div>

          {/* Item 3: Landscape Architectural Light (Col 1-6) */}
          <div
            className="md:col-span-6 bg-white p-3 border border-[#DDD8D0] group cursor-pointer transition-all duration-300 hover:border-[#171717]"
            onClick={() => openLightbox(2)}
          >
            <div className="relative overflow-hidden">
              <EditorialImage
                src={galleryItems[2].image}
                alt={galleryItems[2].altText}
                fallbackType="studio"
                aspectRatioClass="aspect-[16/10]"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3 bg-white/90 text-[#171717] rounded-none text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                  View Full
                </span>
              </div>
            </div>
            <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#6F6A64]">
              <span className="font-serif text-base text-[#171717]">{galleryItems[2].title}</span>
              <span className="text-[10px] uppercase tracking-wider text-[#7A2032] font-semibold">
                {galleryItems[2].category}
              </span>
            </div>
          </div>

          {/* Item 4: Square Media Soundstage (Col 7-9) */}
          <div
            className="md:col-span-3 bg-white p-3 border border-[#DDD8D0] group cursor-pointer transition-all duration-300 hover:border-[#171717]"
            onClick={() => openLightbox(3)}
          >
            <div className="relative overflow-hidden">
              <EditorialImage
                src={galleryItems[3].image}
                alt={galleryItems[3].altText}
                fallbackType="studio"
                aspectRatioClass="aspect-square"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-2.5 bg-white/90 text-[#171717] rounded-none text-[11px] uppercase tracking-widest font-semibold flex items-center gap-1 shadow-md">
                  <Maximize2 className="w-3 h-3" />
                  View
                </span>
              </div>
            </div>
            <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#6F6A64]">
              <span className="font-serif text-sm text-[#171717] truncate">{galleryItems[3].title}</span>
              <span className="text-[9px] uppercase tracking-wider text-[#7A2032] font-semibold ml-2">
                {galleryItems[3].category}
              </span>
            </div>
          </div>

          {/* Item 5: Square Still Life (Col 10-12) */}
          <div
            className="md:col-span-3 bg-white p-3 border border-[#DDD8D0] group cursor-pointer transition-all duration-300 hover:border-[#171717]"
            onClick={() => openLightbox(4)}
          >
            <div className="relative overflow-hidden">
              <EditorialImage
                src={galleryItems[4].image}
                alt={galleryItems[4].altText}
                fallbackType="studio"
                aspectRatioClass="aspect-square"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-2.5 bg-white/90 text-[#171717] rounded-none text-[11px] uppercase tracking-widest font-semibold flex items-center gap-1 shadow-md">
                  <Maximize2 className="w-3 h-3" />
                  View
                </span>
              </div>
            </div>
            <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#6F6A64]">
              <span className="font-serif text-sm text-[#171717] truncate">{galleryItems[4].title}</span>
              <span className="text-[9px] uppercase tracking-wider text-[#7A2032] font-semibold ml-2">
                {galleryItems[4].category}
              </span>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          items={galleryItems}
          currentIndex={selectedIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </section>
  );
};
