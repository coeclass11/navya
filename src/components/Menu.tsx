/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState } from 'react';
import { MENU_ITEMS, IMAGES } from '../constants';
import { Coffee, Shell, Croissant, CakeSlice } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'coffee' | 'tea' | 'snacks' | 'desserts'>('all');

  const categories = [
    { id: 'all', name: 'All Menu' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'tea', name: 'Tea' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'desserts', name: 'Desserts' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-32 px-4 bg-cafe-bg min-h-screen">
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <span className="font-sans-accent block text-cafe-accent">Selection</span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-medium text-cafe-ink"
          >
            Our Menu
          </motion.h1>
          <div className="w-px h-12 bg-cafe-border mx-auto my-6" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`font-sans uppercase tracking-[0.2em] text-[10px] pb-2 transition-all border-b-2 ${
                activeCategory === cat.id
                  ? 'border-cafe-primary text-cafe-primary font-bold'
                  : 'border-transparent text-cafe-ink/40 hover:text-cafe-ink'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-12">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <div className="flex items-end justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="text-xl md:text-2xl font-serif font-medium text-cafe-ink group-hover:text-cafe-primary transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex-1 mx-4 border-b border-cafe-border border-dashed h-0 mb-2 opacity-60" />
                  </div>
                  <p className="text-cafe-secondary text-sm font-sans italic opacity-70 mt-1 max-w-sm">{item.description}</p>
                </div>
                <span className="text-lg font-light text-cafe-secondary font-sans">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Suggestion Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-16 bg-cafe-surface rounded-3xl text-center space-y-8"
        >
          <h2 className="text-3xl font-serif font-medium text-cafe-ink italic">Can't decide?</h2>
          <p className="text-cafe-secondary max-w-sm mx-auto text-sm font-sans">Our signature flights allow you to taste three different micro-roasts from the same region.</p>
          <button className="px-10 py-4 bg-cafe-primary text-white rounded-lg font-sans text-xs tracking-widest uppercase hover:bg-cafe-secondary transition-colors shadow-lg shadow-cafe-primary/10">
            Ask the Barista
          </button>
        </motion.div>
      </section>
    </div>
  );
}
