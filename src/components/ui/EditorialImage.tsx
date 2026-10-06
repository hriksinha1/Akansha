import React, { useState, useEffect } from 'react';

interface EditorialImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: 'summit' | 'portrait' | 'studio' | 'general';
  caption?: string;
  badge?: string;
  aspectRatioClass?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  fallbackType = 'general',
  badge,
  aspectRatioClass = 'aspect-[3/4]',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-[#EFECE6] ${aspectRatioClass} w-full group`}>
      {!hasError && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
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

      {/* Editorial Luxury Fallback Canvas (Anti-Broken-Image Policy) */}
      {hasError && (
        <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-6 select-none transition-all duration-500">
          {fallbackType === 'summit' ? (
            // Ideas of India Summit 3.0 Editorial Scene Representation
            <div className="relative w-full h-full flex flex-col justify-between overflow-hidden rounded-sm bg-gradient-to-b from-[#2A080C] via-[#3D141A] to-[#120406] text-[#F7F4EF] p-6 border border-[#521C24]/50">
              {/* Background ambient lighting */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#E63946]/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[#F4A261]/15 blur-2xl" />

              {/* Top Bar inside Summit Card */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#F4A261]">
                  ABP Network
                </span>
                <span className="text-[9px] tracking-widest uppercase px-2 py-0.5 border border-white/20 text-white/80">
                  Summit 3.0
                </span>
              </div>

              {/* Center Graphic */}
              <div className="relative z-10 my-auto text-center py-4">
                <div className="inline-block mx-auto mb-3 px-3 py-1 bg-white/5 border border-white/10 rounded backdrop-blur-sm">
                  <span className="text-[11px] tracking-[0.25em] text-white/90 uppercase font-sans">
                    Ideas of India
                  </span>
                </div>
                <h4 className="text-2xl font-serif tracking-tight text-white mb-2">
                  Akansha Sharad Renuse
                </h4>
                <p className="text-xs text-[#F7F4EF]/70 max-w-xs mx-auto leading-relaxed font-light">
                  Yellow tailored blazer silhouette & presence at the national summit forum.
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-[10px] text-white/60">
                <span>Mumbai, India</span>
                <span className="text-[#F4A261]">National Forum</span>
              </div>
            </div>
          ) : fallbackType === 'portrait' ? (
            // Architectural Studio Wood-Panelling Editorial Scene Representation
            <div className="relative w-full h-full flex flex-col justify-between overflow-hidden rounded-sm bg-gradient-to-b from-[#1E1B18] via-[#2A2420] to-[#141210] text-[#F7F4EF] p-6 border border-[#3D352E]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-2xl" />

              {/* Top metadata */}
              <div className="relative z-10 flex items-center justify-between border-b border-[#4A3F36] pb-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A059] font-medium">
                  Studio Portrait
                </span>
                <span className="text-[9px] tracking-widest text-[#B3AAA0]">
                  ARCHIVE · 2026
                </span>
              </div>

              {/* Center branding */}
              <div className="relative z-10 my-auto text-center py-4">
                <div className="w-14 h-14 mx-auto mb-4 border border-[#C5A059]/40 flex items-center justify-center bg-[#C5A059]/10">
                  <span className="font-serif text-lg tracking-widest text-[#C5A059]">ASR</span>
                </div>
                <h4 className="text-2xl font-serif text-white tracking-wide mb-1">
                  Akansha Sharad Renuse
                </h4>
                <p className="text-xs text-[#C5A059]/80 uppercase tracking-widest font-sans">
                  Contemporary Presence
                </p>
                <p className="text-xs text-[#9E958C] mt-2 max-w-xs mx-auto leading-relaxed">
                  Architectural wood interior · Royal blue peplum blouse & lapel mic setting.
                </p>
              </div>

              {/* Bottom metadata */}
              <div className="relative z-10 flex items-center justify-between pt-3 border-t border-[#4A3F36] text-[10px] text-[#8C8379]">
                <span>On-Camera Profile</span>
                <span>Editorial Look</span>
              </div>
            </div>
          ) : (
            // General Editorial Canvas
            <div className="relative w-full h-full flex flex-col justify-between bg-[#E8E3DA] text-[#171717] p-6 border border-[#DDD8D0]">
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#6F6A64]">
                <span>Editorial Frame</span>
                <span>Curated Asset</span>
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
                <span>2026</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Optional subtle badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium bg-[#171717]/85 backdrop-blur-md text-[#F7F4EF] px-3 py-1.5 rounded-none border border-white/10">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
};
