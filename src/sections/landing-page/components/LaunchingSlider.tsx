'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Heading, Body } from '@/components/common/Typography';
import { Smartphone, Monitor } from 'lucide-react';
import { IMAGES } from '@/assets';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  cssEase: 'ease-in-out',
  dotsClass: 'slick-dots custom-dots',
};

const LaunchingSlider = () => {
  return (
    <div className="w-full overflow-hidden border-2 border-brand-500/40 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-[0_0_15px_rgba(42,187,127,0.1)]">
      <style>{`
        .launching-slider .slick-list {
          overflow: hidden !important;
        }
        .custom-dots {
          bottom: 10px !important;
        }
        .custom-dots li button:before {
          color: rgba(42, 187, 127, 0.4) !important;
          font-size: 10px !important;
        }
        .custom-dots li.slick-active button:before {
          color: #2ABB7F !important;
        }
      `}</style>

      <Slider {...sliderSettings} className="launching-slider">
        {/* Slide 1: Mobile App */}
        <div>
          <div className="flex flex-col gap-4 pb-10 overflow-hidden">
            <div className="inline-flex items-center gap-2 bg-brand-500/15 text-brand-400 rounded-full px-3 py-1 text-xs font-medium w-fit">
              <Smartphone className="size-3.5" />
              Mobile App
            </div>
            <Heading as="h3" size="2xl" weight="bold" color="foreground">
              Mobile App
            </Heading>
            <Body size="base" color="muted-foreground">
              Track, manage and deliver parcels on the go with our powerful mobile experience.
            </Body>

            {/* Mobile Mockups */}
            <div className="flex justify-center items-end gap-3 mt-4">
              <div className="relative w-[90px] sm:w-[115px] md:w-[135px] lg:w-[125px] xl:w-[145px] rounded-xl overflow-hidden shadow-xl shadow-brand-500/10  translate-y-2">
                <Image
                  src={IMAGES.BOOKING_HISTORY}
                  alt="Booking History Screen"
                  className="w-full h-auto"
                />
              </div>
              <div className="relative w-[105px] sm:w-[135px] md:w-[155px] lg:w-[145px] xl:w-[165px] rounded-xl overflow-hidden shadow-xl shadow-brand-500/15  z-10">
                <Image
                  src={IMAGES.MAIN_SCREEN}
                  alt="Main Screen"
                  className="w-full h-auto"
                />
              </div>
              <div className="relative w-[90px] sm:w-[115px] md:w-[135px] lg:w-[125px] xl:w-[145px] rounded-xl overflow-hidden shadow-xl shadow-brand-500/10  translate-y-2">
                <Image
                  src={IMAGES.HOME_SCREEN}
                  alt="Home Screen"
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Slide 2: Web Dashboard */}
        <div>
          <div className="flex flex-col gap-4 pb-10 overflow-hidden">
            <div className="inline-flex items-center gap-2 bg-brand-500/15 text-brand-400 rounded-full px-3 py-1 text-xs font-medium w-fit">
              <Monitor className="size-3.5" />
              Web Platform
            </div>
            <Heading as="h3" size="2xl" weight="bold" color="foreground">
              Powerful Website
            </Heading>
            <Body size="base" color="muted-foreground">
              Manage orders, track shipments, and analyze performance with our advanced platform.
            </Body>

            {/* Web Mockup */}
            <div className="flex justify-center mt-4">
              <div className="relative w-full max-w-[90%] mx-auto rounded-xl overflow-hidden shadow-xl shadow-brand-500/10 ">
                <Image
                  src={IMAGES.WEB_DASHBPARD}
                  alt="Web Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </Slider>
    </div>
  );
};

export default LaunchingSlider;
