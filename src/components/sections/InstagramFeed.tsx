import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { EditorialImage } from '../ui/EditorialImage';
import { instagramPosts, ecosystemProfiles } from '../../data/instagram';
import { profile } from '../../data/profile';
import { Instagram, ArrowUpRight } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  return (
    <section id="instagram" className="py-24 md:py-36 bg-[#F4EFEA] border-b border-[#DDD8D0]">
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Social Curation"
            title="From Instagram"
            subtitle={`Documented moments, public updates, and on-camera snapshots shared across @${profile.instagramHandle}.`}
          />

          <div className="-mt-6 mb-8 md:mb-16">
            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3.5 px-6 border border-[#171717] bg-white text-[#171717] hover:bg-[#171717] hover:text-[#F7F4EF] transition-all duration-300 uppercase tracking-[0.16em] text-xs font-semibold"
            >
              <Instagram className="w-4 h-4 text-[#7A2032]" />
              <span>Follow on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Instagram Grid (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {instagramPosts.map((post, idx) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-3 border border-[#DDD8D0] flex flex-col hover:border-[#171717] transition-all duration-300"
            >
              <div className="relative overflow-hidden mb-3">
                <EditorialImage
                  src={post.image}
                  alt={`Instagram post ${idx + 1}`}
                  fallbackType={idx === 0 ? 'pool' : idx === 1 ? 'summit' : 'portrait'}
                  aspectRatioClass="aspect-square"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 p-1.5 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="px-1 flex flex-col flex-grow justify-between">
                <span className="text-[10px] uppercase tracking-wider text-[#7A2032] font-semibold mb-1 block">
                  {post.category || 'Editorial'}
                </span>

                <p className="text-xs text-[#6F6A64] line-clamp-2 leading-relaxed font-light mb-3">
                  {post.caption}
                </p>

                <div className="pt-2 border-t border-[#F2EFEA] flex items-center justify-between text-[11px] text-[#8C8379]">
                  <span>View Post</span>
                  <span className="text-[#7A2032] group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Visually Organized Professional Ecosystem Channels */}
        <div className="pt-12 border-t border-[#DDD8D0]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#7A2032] font-semibold block mb-1">
                Connected Profiles
              </span>
              <h3 className="font-serif text-2xl text-[#171717]">
                The Professional Ecosystem
              </h3>
            </div>
            <span className="text-xs text-[#8C8379] hidden sm:block">
              Dedicated channels across media, property & regional culture
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ecosystemProfiles.map((item) => (
              <a
                key={item.handle}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white border border-[#DDD8D0] hover:border-[#171717] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#7A2032] font-semibold">
                      {item.tag}
                    </span>
                    <Instagram className="w-3.5 h-3.5 text-[#8C8379] group-hover:text-[#171717] transition-colors" />
                  </div>
                  <h4 className="font-serif text-lg text-[#171717] mb-1 group-hover:text-[#7A2032] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs font-mono text-[#8C8379] mb-3">
                    @{item.handle}
                  </p>
                  <p className="text-xs text-[#6F6A64] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F2EFEA] flex items-center justify-between text-xs font-medium text-[#171717]">
                  <span>Visit Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
