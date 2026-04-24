/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-32 px-4 bg-cafe-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <span className="font-sans-accent block text-cafe-accent">Visit Us</span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-medium text-cafe-ink"
          >
            Get in Touch
          </motion.h1>
          <div className="w-px h-12 bg-cafe-border mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info & Map */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <span className="font-sans-accent text-[10px] text-cafe-accent">Locate</span>
                <h3 className="text-2xl font-serif font-medium">Coffee Creek</h3>
                <p className="text-cafe-secondary text-sm font-sans leading-relaxed">
                  123 Serenity Lane,<br />Bloom District, CA 90210
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                <span className="font-sans-accent text-[10px] text-cafe-accent">Talk</span>
                <h3 className="text-2xl font-serif font-medium">Connect</h3>
                <p className="text-cafe-secondary text-sm font-sans leading-relaxed">
                  +1 (555) 123-4567<br />
                  hello@navyacafe.com
                </p>
              </motion.div>
            </div>

            {/* Map Placeholder */}
            <div className="h-96 bg-cafe-surface rounded-3xl overflow-hidden relative border border-cafe-border shadow-sm">
              <div className="absolute inset-0 flex items-center justify-center text-cafe-accent/30 font-serif italic text-xl">
                [ Map Integration ]
              </div>
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800&h=400&blur=2"
                alt="Map Background"
                className="w-full h-full object-cover opacity-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-12 rounded-3xl shadow-xl border border-cafe-border"
          >
            <h2 className="text-3xl font-serif font-medium text-cafe-ink mb-10 italic">Reserve a Table</h2>
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="font-sans-accent text-[10px] text-cafe-accent">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-cafe-bg/50 border border-cafe-border rounded-xl px-4 py-4 focus:outline-none focus:border-cafe-primary transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="font-sans-accent text-[10px] text-cafe-accent">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-cafe-bg/50 border border-cafe-border rounded-xl px-4 py-4 focus:outline-none focus:border-cafe-primary transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="font-sans-accent text-[10px] text-cafe-accent">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-cafe-bg/50 border border-cafe-border rounded-xl px-4 py-4 focus:outline-none focus:border-cafe-primary transition-all resize-none text-sm"
                  placeholder="Tell us about your visit..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cafe-primary text-white py-5 rounded-xl font-sans font-bold text-xs tracking-widest uppercase hover:bg-cafe-secondary transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
