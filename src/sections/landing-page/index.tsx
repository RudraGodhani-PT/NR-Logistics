'use client';

import HeroSection from './HeroSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Navbar from '@/components/common/Navbar';

const LandingPageSection = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1">
        <HeroSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageSection;
