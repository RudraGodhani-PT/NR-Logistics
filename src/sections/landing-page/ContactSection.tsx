'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Heading, Body } from '@/components/common/Typography';
import { CustomButton } from '@/components/common/CustomButton';
import { CustomCard } from '@/components/common/CustomCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mail } from 'lucide-react';
import { InstagramIcon } from '../../components/svgs/InstagramIcon';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    reset();
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-brand-500/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left info */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-400 rounded-full px-4 py-1.5 text-sm font-medium w-fit">
              <Mail className="size-4" />
              Contact Us
            </div>

            <Heading as="h2" size="4xl" weight="bold" color="white">
              Partner With Our New{' '}
              <span className="bg-linear-to-r from-brand-400 to-emerald-400 bg-clip-text text-transparent">
                Courier Network
              </span>
            </Heading>

            <Body size="lg" color="#a1a1aa" className="max-w-md">
              We&apos;re currently onboarding eCommerce sellers, retailers, and distribution
              partners. Get in touch for early partnership enquiries.
            </Body>

            <div className="flex flex-col gap-4 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white/80 hover:text-brand-400 transition-colors group w-fit"
              >
                <div className="flex items-center justify-center size-10 rounded-xl bg-white/10 group-hover:bg-brand-500/20 transition-colors">
                  <InstagramIcon className="size-5" />
                </div>
                <span className="text-sm font-medium">Follow us on Instagram</span>
              </a>
              <a
                href="mailto:dev@nrex.uk"
                className="inline-flex items-center gap-3 text-white/80 hover:text-brand-400 transition-colors group w-fit"
              >
                <div className="flex items-center justify-center size-10 rounded-xl bg-white/10 group-hover:bg-brand-500/20 transition-colors">
                  <Mail className="size-5" />
                </div>
                <span className="text-sm font-medium">dev@nrex.uk</span>
              </a>
            </div>
          </div>

          {/* Right form */}
          <CustomCard
            padding="lg"
            shadow="xl"
            className="border border-white/10"
            surfaceColor="rgba(255,255,255,0.05)"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="text-white/80 text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  className="bg-white/10 border-white/10 text-white placeholder:text-white/40 focus:border-brand-500/60 focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-500/30"
                  {...register('name')}
                />
                {errors.name && (
                  <span className="text-red-400 text-xs">{errors.name.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-white/80 text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="you@company.com"
                  className="bg-white/10 border-white/10 text-white placeholder:text-white/40 focus:border-brand-500/60 focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-500/30"
                  {...register('email')}
                />
                {errors.email && (
                  <span className="text-red-400 text-xs">{errors.email.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-white/80 text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your business and partnership interests..."
                  rows={4}
                  className="bg-white/10 border-white/10 text-white placeholder:text-white/40 focus:border-brand-500/60 focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-500/30 resize-none"
                  {...register('message')}
                />
                {errors.message && (
                  <span className="text-red-400 text-xs">{errors.message.message}</span>
                )}
              </div>

              <CustomButton
                type="submit"
                size="lg"
                color="primary"
                loading={isSubmitting}
                loadingText="Sending..."
                className="bg-brand-500! hover:bg-brand-600! border-none! mt-2"
                icon={<Send className="size-4" />}
              >
                Send Message
              </CustomButton>
            </form>
          </CustomCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
