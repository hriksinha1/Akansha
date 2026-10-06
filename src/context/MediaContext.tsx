import React, { createContext, useContext, useState } from 'react';

interface MediaSlotMap {
  hero: string;
  portrait: string;
  event: string;
  gallery01: string;
  gallery02: string;
  gallery03: string;
}

interface MediaContextType {
  images: MediaSlotMap;
  updateImageSlot: (slot: keyof MediaSlotMap, url: string) => void;
  resetToDefaults: () => void;
}

const defaultMedia: MediaSlotMap = {
  hero: '/images/akansha/hero.jpg',
  portrait: '/images/akansha/portrait.jpg',
  event: '/images/akansha/ideas-of-india.jpg',
  gallery01: '/images/akansha/gallery-01.jpg',
  gallery02: '/images/akansha/gallery-02.jpg',
  gallery03: '/images/akansha/gallery-03.jpg',
};

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const MediaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<MediaSlotMap>(() => {
    try {
      const saved = sessionStorage.getItem('akansha_custom_images');
      if (saved) return { ...defaultMedia, ...JSON.parse(saved) };
    } catch {
      // ignore
    }
    return defaultMedia;
  });

  const updateImageSlot = (slot: keyof MediaSlotMap, url: string) => {
    setImages((prev) => {
      const updated = { ...prev, [slot]: url };
      try {
        sessionStorage.setItem('akansha_custom_images', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const resetToDefaults = () => {
    setImages(defaultMedia);
    try {
      sessionStorage.removeItem('akansha_custom_images');
    } catch {
      // ignore
    }
  };

  return (
    <MediaContext.Provider value={{ images, updateImageSlot, resetToDefaults }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const ctx = useContext(MediaContext);
  if (!ctx) throw new Error('useMedia must be used within MediaProvider');
  return ctx;
};
