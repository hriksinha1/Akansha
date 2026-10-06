import React from 'react';
import { MediaProvider } from './context/MediaContext';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { IntroStatement } from './components/sections/IntroStatement';
import { About } from './components/sections/About';
import { Presence } from './components/sections/Presence';
import { AreasOfWork } from './components/sections/AreasOfWork';
import { RealEstate } from './components/sections/RealEstate';
import { MediaPresence } from './components/sections/MediaPresence';
import { SelectedWork } from './components/sections/SelectedWork';
import { EditorialGallery } from './components/sections/EditorialGallery';
import { InstagramFeed } from './components/sections/InstagramFeed';
import { CollaborationSection } from './components/sections/CollaborationSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <MediaProvider>
      <div className="min-h-screen flex flex-col bg-[#F7F4EF] text-[#171717] selection:bg-[#7A2032] selection:text-[#F7F4EF]">
        {/* Editorial Sticky Header */}
        <Header />

        {/* Main Editorial Storytelling Experience */}
        <main className="flex-grow">
          {/* 1. Hero Section: Asymmetric Magazine Cover with Poolside Terrace Portrait */}
          <Hero />

          {/* 2. Statement Section: "From content to conversations..." */}
          <IntroStatement />

          {/* 3. About Section: "Beyond the frame." */}
          <About />

          {/* 4. Professional Presence: "Moments beyond the feed." (ABP Ideas of India Summit 3.0) */}
          <Presence />

          {/* 5. Areas of Work: 01 Content, 02 Brand, 03 Media, 04 Real Estate */}
          <AreasOfWork />

          {/* 6. Real Estate Dimension: Real Estate With Akansha */}
          <RealEstate />

          {/* 7. Media & Creative Ecosystem: MediaJars & Kokan Quality */}
          <MediaPresence />

          {/* 8. Selected Work: Editorial Project Cards */}
          <SelectedWork />

          {/* 9. Curated Gallery with Lightbox (Features all 3 Real Photographs) */}
          <EditorialGallery />

          {/* 10. From Instagram & Professional Ecosystem Channels */}
          <InstagramFeed />

          {/* 11. Collaboration & Inquiries: "Let's create something worth remembering." */}
          <CollaborationSection />
        </main>

        {/* Editorial Footer */}
        <Footer />
      </div>
    </MediaProvider>
  );
};

export default App;
