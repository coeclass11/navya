/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { IMAGES } from '../constants';
import { Coffee, ShieldCheck, Zap, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Quality First",
      desc: "We exclusively source the top 1% of Arabica beans globally.",
      icon: <ShieldCheck className="h-6 w-6" />
    },
    {
      title: "Community",
      desc: "A space designed for connections, conversations, and creativity.",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: "Freshness",
      desc: "Roasted weekly in small batches for optimal flavor profile.",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <div className="pt-32 pb-32 px-4 bg-cafe-bg">
      <div className="max-w-7xl mx-auto">
        {/* Story Section */}
        <section className="flex flex-col lg:flex-row gap-24 items-center mb-40">
          <div className="lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <span className="font-sans-accent block text-cafe-accent">Origins</span>
              <h1 className="text-6xl md:text-8xl font-serif font-medium text-cafe-ink leading-[1.1]">
                Brewing <br/><span className="italic font-light">Excellence</span>
              </h1>
            </motion.div>
            <p className="text-lg text-cafe-secondary font-sans leading-relaxed max-w-xl">
              Founded in 2024, Navya Cafe was born from the belief that coffee is more than just a morning ritual—it's an experience. We spent years searching for farmers who share our commitment to sustainability and excellence.
            </p>
            <p className="text-lg text-cafe-secondary font-sans leading-relaxed max-w-xl">
              Today, Navya stands as a testament to that journey. Every element of our cafe, from the hand-picked ceramics to the warm oak furniture, is designed to enhance your sensory journey.
            </p>
            <div className="pt-8">
              <div className="flex items-center space-x-4">
                <div className="h-14 w-14 rounded-full overflow-hidden border border-cafe-border p-1 bg-white">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200" alt="Founder" referrerPolicy="no-referrer" className="rounded-full h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-serif font-medium text-xl text-cafe-primary italic">Navya Sharma</p>
                  <p className="font-sans-accent text-[10px] text-cafe-accent tracking-tighter">Founder & Head Roaster</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-cafe-border">
              <img
                src={IMAGES.interior}
                alt="Our Vibe"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-cafe-primary text-white p-10 rounded-2xl shadow-xl">
              <p className="text-5xl font-serif font-light mb-1">10k+</p>
              <p className="font-sans-accent text-[8px] opacity-70 tracking-widest">Cups Served Monthly</p>
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="bg-cafe-surface rounded-[3rem] p-16 md:p-32 border border-cafe-border">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
            <div className="space-y-4">
              <span className="font-sans-accent block text-cafe-accent">Soul</span>
              <h2 className="text-5xl font-serif font-medium text-cafe-ink">Our Core Values</h2>
            </div>
            <p className="text-cafe-secondary max-w-sm font-sans text-sm italic">"Sustainability, quality, and community are at the heart of everything we do."</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                className="space-y-6"
              >
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm text-cafe-primary border border-cafe-divider">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-serif font-medium text-cafe-ink">{val.title}</h3>
                <p className="text-cafe-secondary font-sans text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
