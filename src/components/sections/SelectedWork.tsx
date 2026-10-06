import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { EditorialImage } from '../ui/EditorialImage';
import { projects } from '../../data/projects';
import { ArrowUpRight } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Campaign', 'Brand Work', 'Events', 'Media', 'Creative Direction'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 md:py-36 bg-[#F7F4EF] border-b border-[#DDD8D0]">
      <div className="editorial-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected Work"
            subtitle="Curated projects, collaborative engagements, and visual direction across media and lifestyle."
          />

          {/* Interactive Category Filter Controls (Functional Button Tabs) */}
          <div className="flex items-center flex-wrap gap-1 p-1 bg-[#EBE7E0] border border-[#DDD8D0] -mt-6 mb-8 lg:mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-2 px-3 sm:px-4 text-xs font-medium tracking-wider uppercase transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#171717] text-[#F7F4EF] shadow-xs'
                    : 'text-[#6F6A64] hover:text-[#171717]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-white border border-[#DDD8D0] p-4 transition-all duration-300 hover:border-[#171717]"
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden mb-5">
                <EditorialImage
                  src={project.image}
                  alt={project.title}
                  fallbackType="studio"
                  aspectRatioClass="aspect-[4/3]"
                  className="w-full object-cover"
                />
              </div>

              {/* Card Meta & Header */}
              <div className="flex items-center justify-between text-xs text-[#8C8379] mb-2 font-mono tabular-nums">
                <span className="uppercase tracking-widest text-[#7A2032] font-sans font-medium text-[11px]">
                  {project.category}
                </span>
                <span>{project.year}</span>
              </div>

              <h3 className="font-serif text-2xl text-[#171717] group-hover:text-[#7A2032] transition-colors mb-2">
                {project.title}
              </h3>

              <p className="text-xs uppercase tracking-wider text-[#6F6A64] mb-3 font-medium">
                {project.subtitle}
              </p>

              <p className="text-sm text-[#6F6A64] font-light leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tags / Metadata (Unboxed text with dots) */}
              <div className="pt-4 border-t border-[#EFECE6] flex items-center justify-between text-xs text-[#8C8379]">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {i < project.tags.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                <a
                  href="#collaborate"
                  aria-label={`Inquire about ${project.title}`}
                  className="text-[#171717] hover:text-[#7A2032] p-1 transition-transform group-hover:translate-x-0.5"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
