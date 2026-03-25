import Image from 'next/image';
import { Body } from '@/components/common/Typography';
import { InstagramIcon } from '../../components/svgs/InstagramIcon';
import { IMAGES } from '@/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top row: logo + nav + socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Logo */}
          <Image
            src={IMAGES.NR_LOGISTICS_LOGO}
            alt="NR Logistics"
            width={120}
            height={40}
            className="h-10 w-auto"
          />

          {/* Nav links */}
          <div className="flex items-center gap-8">
            <a
              href="#contact"
              className="text-white/60 hover:text-brand-400 text-sm font-medium transition-colors"
            >
              Contact Us
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-brand-400 text-sm font-medium transition-colors"
            >
              <InstagramIcon className="size-4" />
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom row: copyright */}
        <div className="pt-6 flex justify-center">
          <Body size="sm" color="#52525b">
            &copy; {new Date().getFullYear()} NR Logistics. All rights reserved.
          </Body>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
