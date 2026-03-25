'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { CustomButton } from '@/components/common/CustomButton';
import { Menu, X } from 'lucide-react';
import { IMAGES } from '@/assets';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        // 0 at top, 1 at 80px+ scroll
        const progress = Math.min(window.scrollY / 80, 1);
        setScrollProgress(progress);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToContact = () => {
    setMobileOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `rgba(3, 7, 18, ${0.9 + scrollProgress * 0.08})`,
        backdropFilter: `blur(${12 + scrollProgress * 8}px)`,
        WebkitBackdropFilter: `blur(${12 + scrollProgress * 8}px)`,
        boxShadow: `0 1px ${2 + 2 * scrollProgress}px rgba(0,0,0,${0.1 + 0.1 * scrollProgress})`,
        borderBottom: `1px solid rgba(255,255,255, ${0.05 + scrollProgress * 0.05})`,
        transition: 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Image
            src={IMAGES.NR_LOGISTICS_LOGO}
            alt="NR Logistics"
            width={120}
            height={40}
            className="h-7.5 sm:h-9 md:h-9 lg:h-10 w-auto"
          />

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <CustomButton
              size="md"
              color="primary"
              className="bg-brand-500! hover:bg-brand-600! border-none!"
              onClick={scrollToContact}
            >
              Contact Us
            </CustomButton>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden"
          style={{
            maxHeight: mobileOpen ? '80px' : '0px',
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'max-height 400ms ease-in-out, opacity 400ms ease-in-out, transform 400ms ease-in-out',
          }}
        >
          <div className="pb-4 pt-2">
            <CustomButton
              size="md"
              color="primary"
              className="bg-brand-500! hover:bg-brand-600! border-none! w-full"
              onClick={scrollToContact}
            >
              Contact Us
            </CustomButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
