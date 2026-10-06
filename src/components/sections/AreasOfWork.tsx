import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { areasOfWork } from '../../data/areasOfWork';
import { ArrowUpRight } from 'lucide-react';

export const AreasOfWork: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-36 bg-[#F7F4EF] border-b border-[#DDD8D0]">
      <div className="editorial-container">
        <SectionHeading
          eyebrow="Capabilities & Focus"
          title="Areas of Work"
          subtitle="A multifaceted presence spanning creative direction, public touchpoints, and business curation."
        />

        {/* Editorial Linear Rows with Large Typography */}
        <div className="border-t border-[#DDD8D0] divide-y divide-[#DDD8D0]">
          {areasOfWork.map((area) => (
            <div
              key={area.id}
              className="py-12 md:py-16 group transition-colors duration-300 hover:bg-[#FAF8F5]/80"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="font-mono text-sm md:text-base text-[#7A2032] font-medium tracking-widest">
                    {area.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="lg:col-span-5">
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#171717] group-hover:text-[#7A2032] transition-colors mb-2">
                    {area.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#8C8379] font-medium">
                    {area.subtitle}
                  </p>
                </div>

                {/* Description & Tags */}
                <div className="lg:col-span-5">
                  <p className="text-sm md:text-base text-[#6F6A64] font-light leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap text-xs text-[#8C8379]">
                    {area.tags.map((tag, idx) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {idx < area.tags.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Arrow Action */}
                <div className="lg:col-span-1 flex justify-start lg:justify-end">
                  {area.link && (
                    <a
                      href={area.link}
                      target={area.link.startsWith('http') ? '_blank' : undefined}
                      rel={area.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={`Explore ${area.title}`}
                      className="w-10 h-10 border border-[#DDD8D0] group-hover:border-[#171717] group-hover:bg-[#171717] group-hover:text-[#F7F4EF] transition-all flex items-center justify-center text-[#171717]"
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
