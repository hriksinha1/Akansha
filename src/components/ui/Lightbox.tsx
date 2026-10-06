import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Tag } from 'lucide-react';
import { GalleryItem } from '../../types';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`View ${currentItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C0B0A]/95 backdrop-blur-md p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Bar with Counter and Close Button */}
      <div
        className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-5 border-b border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 text-xs tracking-widest text-[#B3AAA0] uppercase">
          <span className="font-serif text-white font-medium text-sm">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-white/30">/</span>
          <span>{String(items.length).padStart(2, '0')}</span>
          <span className="hidden sm:inline text-white/30">·</span>
          <span className="hidden sm:inline text-white/80">{currentItem.category}</span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer border border-white/10 hover:border-white/40 focus:outline-none focus:ring-1 focus:ring-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Container */}
      <div
        className="relative max-w-6xl w-full max-h-[85vh] flex flex-col md:flex-row items-center justify-center gap-6 mt-12 md:mt-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation - Left */}
        <button
          onClick={onPrev}
          aria-label="Previous image"
          className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 z-20 p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/80 md:bg-transparent transition-all border border-white/10 hover:border-white/40 cursor-pointer focus:outline-none"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div className="relative max-h-[70vh] flex items-center justify-center overflow-hidden bg-[#171514] border border-white/10 shadow-2xl">
          <img
            src={currentItem.image}
            alt={currentItem.altText}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] max-w-full object-contain"
            onError={(e) => {
              // If image URL not found, display clean editorial representation
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.fallback-msg')) {
                const div = document.createElement('div');
                div.className = 'fallback-msg p-12 text-center text-white/80';
                div.innerHTML = `
                  <div class="font-serif text-2xl text-white mb-2">${currentItem.title}</div>
                  <div class="text-xs uppercase tracking-widest text-[#C5A059] mb-4">${currentItem.category}</div>
                  <p class="text-sm text-white/60 max-w-md mx-auto">${currentItem.caption}</p>
                `;
                parent.appendChild(div);
              }
            }}
          />
        </div>

        {/* Navigation - Right */}
        <button
          onClick={onNext}
          aria-label="Next image"
          className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 z-20 p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/80 md:bg-transparent transition-all border border-white/10 hover:border-white/40 cursor-pointer focus:outline-none"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Details Pane (Sidebar / Underneath on mobile) */}
        <div className="w-full md:w-80 flex flex-col justify-center text-left text-white/90 p-2 md:p-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] mb-2 font-medium">
            <Tag className="w-3.5 h-3.5" />
            <span>{currentItem.category}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-serif text-white tracking-wide mb-3">
            {currentItem.title}
          </h3>

          <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light mb-6">
            {currentItem.caption}
          </p>

          <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-white/60">
            {currentItem.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white/40" />
                <span>{currentItem.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-white/40" />
              <span>{currentItem.year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
