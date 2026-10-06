import React, { useState, useEffect } from 'react';

interface EditorialImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: 'pool' | 'summit' | 'portrait' | 'studio' | 'realestate' | 'general';
  caption?: string;
  badge?: string;
  aspectRatioClass?: string;
  objectPositionClass?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  fallbackType = 'general',
  badge,
  aspectRatioClass = 'aspect-[3/4]',
  objectPositionClass,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  // Art-directed default object-position based on subject context
  const defaultPosition =
    objectPositionClass ||
    (fallbackType === 'pool'
      ? 'object-[center_15%]'
      : fallbackType === 'summit'
      ? 'object-[center_20%]'
      : fallbackType === 'portrait'
      ? 'object-[center_15%]'
      : 'object-center');

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    // Guard against 1x1 pixel stubs: if width or height is <= 10px, treat as missing/stub
    if (img.naturalWidth <= 10 || img.naturalHeight <= 10) {
      setHasError(true);
      setIsLoaded(false);
    } else {
      setIsLoaded(true);
      setHasError(false);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#EFECE6] ${aspectRatioClass} w-full group select-none`}>
      {!hasError && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={handleImageLoad}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover ${defaultPosition} transition-all duration-700 ease-out group-hover:scale-103 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...rest}
        />
      )}

      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#E8E4DC] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-[#DDD8D0] border-t-[#7A2032] animate-spin" />
        </div>
      )}

      {/* Bespoke Editorial Luxury Fallback Canvas (Anti-Broken-Image Policy) */}
      {hasError && (
        <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-6 transition-all duration-500">
          {fallbackType === 'pool' ? (
            // Poolside Terrace Scene Representation (Photo A)
            <div className="relative w-full h-full flex flex-col justify-between overflow-hidden rounded-none bg-gradient-to-b from-[#253237] via-[#1E272C] to-[#12181B] text-[#F7F4EF] p-6 border border-[#3A4B53]/50">
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#9DA87D]/20 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-[#4A7C59]/15 blur-2xl" />

              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#C5B358]">
                  Terrace & Poolside
                </span>
                <span className="text-[9px] tracking-widest uppercase text-white/70">
                  720 × 960 Portrait
                </span>
              </div>

              <div className="relative z-10 my-auto text-center py-4">
                <div className="inline-block mx-auto mb-2 px-3 py-1 bg-white/5 border border-white/10">
                  <span className="text-[10px] tracking-[0.2em] text-[#C5B358] uppercase font-sans">
                    Akansha Sharad Renuse
                  </span>
                </div>
                <h4 className="text-2xl font-serif tracking-tight text-white mb-2">
                  Poolside Terrace
                </h4>
                <p className="text-xs text-[#F7F4EF]/70 max-w-xs mx-auto leading-relaxed font-light">
                  Light olive puff-sleeve top beside swimming pool cabanas & city skyline.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-[10px] text-white/60">
                <span>Rooftop Atmosphere</span>
                <span className="text-[#C5B358]">akansha-pool.jpg</span>
              </div>
            </div>
          ) : fallbackType === 'summit' ? (
            // Ideas of India Summit 3.0 Scene Representation (Photo B)
            <div className="relative w-full h-full flex flex-col justify-between overflow-hidden rounded-none bg-gradient-to-b from-[#2A080C] via-[#3D141A] to-[#120406] text-[#F7F4EF] p-6 border border-[#521C24]/50">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#E63946]/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[#F4A261]/15 blur-2xl" />

              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#F4A261]">
                  ABP Network
                </span>
                <span className="text-[9px] tracking-widest uppercase px-2 py-0.5 border border-white/20 text-white/80">
                  Summit 3.0
                </span>
              </div>

              <div className="relative z-10 my-auto text-center py-4">
                <div className="inline-block mx-auto mb-3 px-3 py-1 bg-white/5 border border-white/10">
                  <span className="text-[11px] tracking-[0.25em] text-white/90 uppercase font-sans">
                    Ideas of India
                  </span>
                </div>
                <h4 className="text-2xl font-serif tracking-tight text-white mb-2">
                  Akansha Sharad Renuse
                </h4>
                <p className="text-xs text-[#F7F4EF]/70 max-w-xs mx-auto leading-relaxed font-light">
                  Tailored yellow blazer & public presence at the national summit stage.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-[10px] text-white/60">
                <span>1179 × 1060 Frame</span>
                <span className="text-[#F4A261]">akansha-ideas-of-india.jpg</span>
              </div>
            </div>
          ) : fallbackType === 'portrait' ? (
            // Wood-Panel Interior Portrait Scene Representation (Photo C)
            <div className="relative w-full h-full flex flex-col justify-between overflow-hidden rounded-none bg-gradient-to-b from-[#1E1B18] via-[#2A2420] to-[#141210] text-[#F7F4EF] p-6 border border-[#3D352E]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-2xl" />

              <div className="relative z-10 flex items-center justify-between border-b border-[#4A3F36] pb-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A059] font-medium">
                  Studio Portrait
                </span>
                <span className="text-[9px] tracking-widest text-[#B3AAA0]">
                  1179 × 1323
                </span>
              </div>

              <div className="relative z-10 my-auto text-center py-4">
                <div className="w-12 h-12 mx-auto mb-3 border border-[#C5A059]/40 flex items-center justify-center bg-[#C5A059]/10">
                  <span className="font-serif text-lg tracking-widest text-[#C5A059]">ASR</span>
                </div>
                <h4 className="text-2xl font-serif text-white tracking-wide mb-1">
                  Akansha Sharad Renuse
                </h4>
                <p className="text-xs text-[#C5A059]/80 uppercase tracking-widest font-sans">
                  Contemporary Presence
                </p>
                <p className="text-xs text-[#9E958C] mt-2 max-w-xs mx-auto leading-relaxed font-light">
                  Wood-panel interior · Royal blue collared peplum top & wireless lapel mic.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between pt-3 border-t border-[#4A3F36] text-[10px] text-[#8C8379]">
                <span>On-Camera Profile</span>
                <span>akansha-blue.jpg</span>
              </div>
            </div>
          ) : fallbackType === 'realestate' ? (
            // Real Estate Architectural Spatial Representation
            <div className="relative w-full h-full flex flex-col justify-between bg-[#2B2927] text-[#F7F4EF] p-6 border border-[#3E3B38]">
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#C5A059]">
                <span>Real Estate & Spaces</span>
                <span>Architecture</span>
              </div>
              <div className="my-auto text-center">
                <span className="font-serif text-2xl text-white block mb-1">
                  Living Perspectives
                </span>
                <span className="text-xs text-[#DDD8D0]/70 uppercase tracking-wider">
                  Curated Residential Spaces
                </span>
              </div>
              <div className="text-[10px] text-[#A09A92] flex justify-between pt-3 border-t border-white/10">
                <span>@realestatewithakansha</span>
                <span>Design Curation</span>
              </div>
            </div>
          ) : fallbackType === 'studio' ? (
            // Media & Soundstage Representation
            <div className="relative w-full h-full flex flex-col justify-between bg-[#201E1D] text-[#F7F4EF] p-6 border border-[#3A3634]">
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#C5A059]">
                <span>Broadcast & Soundstage</span>
                <span>Production</span>
              </div>
              <div className="my-auto text-center">
                <span className="font-serif text-2xl text-white block mb-1">
                  Media & Creative
                </span>
                <span className="text-xs text-[#DDD8D0]/70 uppercase tracking-wider">
                  Conversations & Visual Formats
                </span>
              </div>
              <div className="text-[10px] text-[#A09A92] flex justify-between pt-3 border-t border-white/10">
                <span>@mediajars</span>
                <span>Studio Environment</span>
              </div>
            </div>
          ) : (
            // General Editorial Canvas
            <div className="relative w-full h-full flex flex-col justify-between bg-[#E8E3DA] text-[#171717] p-6 border border-[#DDD8D0]">
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#6F6A64]">
                <span>Curated Space</span>
                <span>2026</span>
              </div>
              <div className="my-auto text-center">
                <span className="font-serif text-xl italic text-[#171717] block mb-1">
                  Akansha Sharad Renuse
                </span>
                <span className="text-xs text-[#6F6A64] tracking-wider uppercase">
                  {alt || 'Visual Record'}
                </span>
              </div>
              <div className="text-[10px] text-[#8A847C] flex justify-between">
                <span>Personal Brand</span>
                <span>Mumbai / Pune</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Subtle Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium bg-[#171717]/85 backdrop-blur-md text-[#F7F4EF] px-3 py-1.5 border border-white/10">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
};
