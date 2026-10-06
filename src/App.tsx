import React from 'react';
import { MediaProvider } from './context/MediaContext';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { IntroStatement } from './components/sections/IntroStatement';
import { About } from './components/sections/About';
import { FeaturedAppearance } from './components/sections/FeaturedAppearance';
import { SelectedWork } from './components/sections/SelectedWork';
import { EditorialGallery } from './components/sections/EditorialGallery';
import { InstagramFeed } from './components/sections/InstagramFeed';
import { CollaborationSection } from './components/sections/CollaborationSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <MediaProvider>
      <div className="min-h-screen flex flex-col bg-[#F7F4EF] text-[#171717] selection:bg-[#7A2032] selection:text-[#F7F4EF]">
        {/* Editorial Top Bar */}
        <Header />

        {/* Main Editorial Storytelling Experience */}
        <main className="flex-grow">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Intro Statement */}
          <IntroStatement />

          {/* 3. About Section */}
          <About />

          {/* 4. Professional / Public Appearance (ABP Ideas of India Summit 3.0) */}
          <FeaturedAppearance />

          {/* 5. Selected Work */}
          <SelectedWork />

          {/* 6. Editorial Gallery with Lightbox */}
          <EditorialGallery />

          {/* 7. Instagram Feed */}
          <InstagramFeed />

          {/* 8. Collaboration Inquiry Section */}
          <CollaborationSection />

          {/* 9. Direct Reach */}
          <ContactSection />
        </main>

        {/* Editorial Footer */}
        <Footer />
      </div>
    </MediaProvider>
  );
};

export default App;

