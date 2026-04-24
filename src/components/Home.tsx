/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Coffee, Star, Heart, Menu as MenuIcon } from 'lucide-react';
import { IMAGES } from '../constants';
import { View } from '../types';

interface HomeProps {
  onViewChange: (view: View) => void;
}

export default function Home({ onViewChange }: HomeProps) {
  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Cafe Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#3e2723]/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-6"
          >
            <span className="font-sans-accent block">Est. 2024 — Local Roastery</span>
            <h1 className="text-7xl md:text-[6rem] font-serif leading-[1.1] font-medium">
              Welcome to <br />
              <span className="italic font-light">Navya Cafe</span>
            </h1>
            <p className="text-lg md:text-xl font-sans leading-relaxed max-w-md text-white/90">
              Where every cup tells a story. Step into a space crafted for comfort, community, and the finest organic blends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onViewChange('menu')}
                className="px-10 py-4 bg-cafe-primary text-white rounded-lg font-sans text-sm tracking-widest uppercase hover:bg-cafe-secondary transition-all transform hover:-translate-y-1"
                id="hero-view-menu"
              >
                View Menu
              </button>
              <button
                onClick={() => onViewChange('contact')}
                className="px-10 py-4 border border-white text-white rounded-lg font-sans text-sm tracking-widest uppercase hover:bg-white hover:text-cafe-primary transition-all"
                id="hero-visit-us"
              >
                Visit Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="font-sans-accent block text-cafe-accent">Selection</span>
            <h2 className="text-5xl md:text-6xl font-serif font-medium text-cafe-ink">Featured Menu</h2>
          </div>
          <p className="text-cafe-secondary max-w-sm font-sans text-sm">Our most loved blends and snacks, curated for the true coffee enthusiast.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Espresso Romano',
              price: '$4.50',
              image: IMAGES.coffee,
              tag: 'Roast'
            },
            {
              title: 'Velvet Cheesecake',
              price: '$7.00',
              image: IMAGES.dessert,
              tag: 'Bakery'
            },
            {
              title: 'Artisan Sandwich',
              price: '$12.00',
              image: IMAGES.interior,
              tag: 'Fresh'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-6 rounded-2xl border border-cafe-border shadow-sm group hover:shadow-md transition-shadow"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-cafe-primary px-3 py-1 rounded-full text-[10px] font-sans-accent font-bold">
                  {item.tag}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-serif font-medium text-cafe-ink">{item.title}</h3>
                <span className="text-lg font-light text-cafe-secondary">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-cafe-surface py-32 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={IMAGES.about}
                alt="Our Coffee"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <span className="font-sans-accent block text-cafe-accent">Est. 2024</span>
              <h2 className="text-5xl md:text-6x font-serif font-medium text-cafe-primary leading-tight">Coffee with <br/><span className="italic">Conscience</span></h2>
            </div>
            <p className="text-lg text-cafe-secondary font-sans leading-relaxed">
              Navya Cafe began with a simple vision: to create a sanctuary where the frantic pace of modern life slows down. Inspired by traditional European cafe culture, we bring you the finest ethically sourced grains.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 border-b border-cafe-border pb-4">
                <div className="bg-white p-3 rounded-xl shadow-sm"><Coffee className="h-5 w-5 text-cafe-primary" /></div>
                <span className="font-sans-accent text-[10px] text-cafe-ink">Ethically Sourced beans</span>
              </div>
              <div className="flex items-center space-x-4 border-b border-cafe-border pb-4">
                <div className="bg-white p-3 rounded-xl shadow-sm"><Heart className="h-5 w-5 text-cafe-primary" /></div>
                <span className="font-sans-accent text-[10px] text-cafe-ink">Crafted with comfort</span>
              </div>
            </div>
            <button
              onClick={() => onViewChange('about')}
              className="px-8 py-3 border border-cafe-primary text-cafe-primary rounded-lg font-sans text-sm tracking-widest uppercase hover:bg-cafe-primary hover:text-white transition-all"
            >
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 text-center px-4 bg-cafe-bg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-12"
        >
          <div className="w-px h-20 bg-cafe-border mx-auto" />
          <h2 className="text-4xl md:text-6xl font-serif italic text-cafe-primary/80 leading-snug">
            "We believe in the quiet power of a perfect pour over."
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-10 h-px bg-cafe-border" />
            <p className="font-sans-accent text-[10px] opacity-60">Barista philosophy</p>
            <div className="w-10 h-px bg-cafe-border" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

