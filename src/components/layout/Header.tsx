import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';

interface HeaderProps {
  onNavigateToCollaborate?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Appearances', href: '#appearances' },
    { label: 'Work', href: '#work' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Collaborate', href: '#collaborate' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          isScrolled
            ? 'bg-[#F7F4EF]/90 backdrop-blur-md border-b border-[#DDD8D0]/80 py-3.5 shadow-xs'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="editorial-container flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none"
            aria-label="Akansha Sharad Renuse Home"
          >
            <span className="font-serif text-xl sm:text-2xl font-normal tracking-wide text-[#171717] group-hover:text-[#7A2032] transition-colors">
              {profile.fullName}
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#6F6A64] -mt-0.5">
              Portfolio
            </span>
          </a>

          {/* Zone 2: Clean text navigation links (Desktop) */}
          <nav
            className="hidden lg:flex items-center gap-8 text-xs tracking-[0.16em] uppercase font-sans text-[#6F6A64]"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#171717] transition-colors duration-200 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#171717] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-4">
            <a
              href="#collaborate"
              className="hidden sm:inline-flex items-center gap-1.5 py-2.5 px-5 text-xs uppercase tracking-[0.15em] bg-[#171717] text-[#F7F4EF] hover:bg-[#7A2032] transition-colors duration-300 whitespace-nowrap"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="lg:hidden p-2 text-[#171717] hover:text-[#7A2032] transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Editorial Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 bg-[#171717] text-[#F7F4EF] flex flex-col justify-between p-6 sm:p-10 animate-fadeIn"
        >
          {/* Top Bar with Brand & Close Button */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <span className="font-serif text-2xl text-[#F7F4EF] block">
                {profile.fullName}
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#B3AAA0]">
                Personal Brand
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 border border-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto space-y-6 text-left py-8">
            {navLinks.map((link, idx) => (
              <div key={link.label} className="overflow-hidden">
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between text-3xl sm:text-4xl font-serif text-[#F7F4EF]/90 hover:text-[#F7F4EF] transition-colors"
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    {link.label}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#B3AAA0] font-sans">
                    0{idx + 1}
                  </span>
                </a>
              </div>
            ))}
          </nav>

          {/* Bottom Drawer Actions */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <a
              href="#collaborate"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-4 bg-[#F7F4EF] text-[#171717] uppercase tracking-[0.18em] text-xs font-semibold hover:bg-[#C5A059] transition-colors"
            >
              <span>Start an Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-between text-xs text-[#B3AAA0] pt-2">
              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram @{profile.instagramHandle}
              </a>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
