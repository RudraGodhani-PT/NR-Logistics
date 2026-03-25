'use client';

import { Heading, Body } from '@/components/common/Typography';
import { CustomButton } from '@/components/common/CustomButton';
import { Mail } from 'lucide-react';
import { InstagramIcon } from '../../components/svgs/InstagramIcon';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Base background */}
      <div className="absolute inset-0 bg-white" />

      {/* Floating gradient orbs with inline animation styles */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-brand-400/30 blur-[100px]"
        style={{
          top: '-10%',
          left: '-10%',
          animation: 'orb-move-1 15s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-emerald-400/25 blur-[90px]"
        style={{
          top: '60%',
          right: '-15%',
          animation: 'orb-move-2 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[450px] h-[450px] rounded-full bg-teal-300/20 blur-[80px]"
        style={{
          bottom: '-10%',
          left: '30%',
          animation: 'orb-move-3 20s ease-in-out infinite',
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Launching Soon - animated banner */}
          <div className="relative" style={{ animation: 'badge-float 3s ease-in-out infinite' }}>
            {/* Outer pulsing rings */}
            <div
              className="absolute -inset-4 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(42,187,127,0.3) 0%, transparent 70%)',
                animation: 'badge-ring-pulse 2s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -inset-8 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(42,187,127,0.15) 0%, transparent 70%)',
                animation: 'badge-ring-pulse 2s ease-in-out infinite 0.5s',
              }}
            />

            {/* Main badge */}
            <div
              className="relative inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-base font-extrabold text-white overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #2ABB7F, #10b981, #0d9488, #2ABB7F)',
                backgroundSize: '300% 300%',
                animation: 'badge-gradient 4s ease infinite',
                boxShadow: '0 0 20px rgba(42,187,127,0.5), 0 0 60px rgba(42,187,127,0.2), 0 4px 15px rgba(42,187,127,0.3)',
              }}
            >
              {/* Bright shimmer sweep */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)',
                  animation: 'shimmer-wide 2.5s ease-in-out infinite',
                }}
              />
              {/* Sparkle particles */}
              <div
                className="absolute inset-0 overflow-hidden rounded-full"
              >
                <div className="absolute w-1 h-1 rounded-full bg-white/80" style={{ top: '20%', left: '15%', animation: 'sparkle 2s ease-in-out infinite' }} />
                <div className="absolute w-1 h-1 rounded-full bg-white/60" style={{ top: '60%', left: '75%', animation: 'sparkle 2s ease-in-out infinite 0.7s' }} />
                <div className="absolute w-0.5 h-0.5 rounded-full bg-white/70" style={{ top: '30%', left: '85%', animation: 'sparkle 2s ease-in-out infinite 1.3s' }} />
                <div className="absolute w-0.5 h-0.5 rounded-full bg-white/50" style={{ top: '70%', left: '30%', animation: 'sparkle 2s ease-in-out infinite 0.4s' }} />
              </div>
              {/* Pulsing dot */}
              <span className="relative flex size-3">
                <span
                  className="absolute inset-0 rounded-full bg-white"
                  style={{ animation: 'ping-slow 1.5s cubic-bezier(0,0,0.2,1) infinite' }}
                />
                <span className="relative inline-flex size-3 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
              </span>
              <span className="relative tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">LAUNCHING SOON</span>
            </div>
          </div>

          <Heading
            as="h1"
            size="7xl"
            weight="bold"
            className="leading-[1.2]! max-w-4xl text-center"
          >
            We&apos;re Getting Ready to
            <br />
            <span className="bg-linear-to-r from-brand-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Deliver Excellence
            </span>
          </Heading>

          <Body
            size="xl"
            color="muted-foreground"
            className="max-w-2xl"
            align="center"
          >
            Our advanced courier platform is launching soon to provide fast,
            reliable, and cost-effective parcel delivery across the UK.
          </Body>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton
                size="lg"
                color="primary"
                className="bg-brand-500! hover:bg-brand-600! border-none! shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-shadow!"
                icon={<InstagramIcon className="size-5" />}
              >
                Follow us on Instagram
              </CustomButton>
            </a>
            <CustomButton
              size="lg"
              variant="outlined"
              color="primary"
              className="border-brand-300! text-brand-600! hover:bg-brand-50! bg-white/60! backdrop-blur-sm!"
              icon={<Mail className="size-5" />}
              onClick={scrollToContact}
            >
              Contact for Partnership
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
