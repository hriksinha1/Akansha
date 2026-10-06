import React, { useState } from 'react';
import { useMedia } from '../../context/MediaContext';
import { Camera, Check, Upload, X, RefreshCw } from 'lucide-react';

export const PhotoSyncHelper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { images, updateImageSlot, resetToDefaults } = useMedia();

  const handleFileUpload = (
    slot: 'hero' | 'ideasOfIndia' | 'about',
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      updateImageSlot(slot, url);
    }
  };

  return (
    <>
      {/* Subtle Floating Photo Manager Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Manage Original Photographs"
        className="fixed bottom-6 right-6 z-40 py-2.5 px-4 bg-[#171717] text-[#F7F4EF] hover:bg-[#7A2032] border border-white/20 shadow-xl flex items-center gap-2 text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer group"
      >
        <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
        <span>Photo Assets</span>
      </button>

      {/* Modal Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[#171717] text-[#F7F4EF] border border-white/20 p-6 sm:p-8 max-w-lg w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] block font-medium">
                  Asset Pipeline
                </span>
                <h3 className="font-serif text-2xl text-white">
                  Akansha Original Photographs
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 border border-white/20 text-white/70 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#B3AAA0] leading-relaxed mb-6 font-light">
              You can preview or sync the high-resolution original photographs directly in this browser session. Select each file from your device:
            </p>

            <div className="space-y-4 mb-6">
              {/* Slot 1: Poolside */}
              <div className="p-3 bg-white/5 border border-white/10 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold text-white block truncate">
                    Photo A: Poolside Terrace
                  </span>
                  <span className="text-[10px] font-mono text-[#8C8379] block">
                    akansha-pool.jpg (720 × 960)
                  </span>
                </div>
                <label className="py-1.5 px-3 bg-[#F7F4EF] text-[#171717] hover:bg-[#C5A059] text-[11px] uppercase tracking-wider font-semibold cursor-pointer shrink-0 transition-colors">
                  <Upload className="w-3 h-3 inline mr-1" />
                  Select File
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload('hero', e)}
                  />
                </label>
              </div>

              {/* Slot 2: Ideas of India */}
              <div className="p-3 bg-white/5 border border-white/10 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold text-white block truncate">
                    Photo B: Ideas of India Summit 3.0
                  </span>
                  <span className="text-[10px] font-mono text-[#8C8379] block">
                    akansha-ideas-of-india.jpg (1179 × 1060)
                  </span>
                </div>
                <label className="py-1.5 px-3 bg-[#F7F4EF] text-[#171717] hover:bg-[#C5A059] text-[11px] uppercase tracking-wider font-semibold cursor-pointer shrink-0 transition-colors">
                  <Upload className="w-3 h-3 inline mr-1" />
                  Select File
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload('ideasOfIndia', e)}
                  />
                </label>
              </div>

              {/* Slot 3: Blue Outfit */}
              <div className="p-3 bg-white/5 border border-white/10 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold text-white block truncate">
                    Photo C: Wood-Panel Studio
                  </span>
                  <span className="text-[10px] font-mono text-[#8C8379] block">
                    akansha-blue.jpg (1179 × 1323)
                  </span>
                </div>
                <label className="py-1.5 px-3 bg-[#F7F4EF] text-[#171717] hover:bg-[#C5A059] text-[11px] uppercase tracking-wider font-semibold cursor-pointer shrink-0 transition-colors">
                  <Upload className="w-3 h-3 inline mr-1" />
                  Select File
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload('about', e)}
                  />
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
              <button
                onClick={resetToDefaults}
                className="text-[#8C8379] hover:text-white flex items-center gap-1.5 cursor-pointer text-[11px]"
              >
                <RefreshCw className="w-3 h-3" />
                Reset Paths
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="py-2 px-5 bg-[#7A2032] text-white hover:bg-[#5C1927] uppercase tracking-wider text-[11px] font-semibold cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
