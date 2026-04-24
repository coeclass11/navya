/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, MessageCircle, User, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';
import { useState } from 'react';

export default function Reviews() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="pt-32 pb-32 px-4 bg-cafe-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <span className="font-sans-accent block text-cafe-accent">Kind Words</span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-serif font-medium text-cafe-ink"
          >
            Testimonials
          </motion.h1>
          <div className="w-px h-12 bg-cafe-border mx-auto mt-6" />
        </div>

        {/* Featured Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-cafe-border relative flex flex-col h-full"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`}
                  />
                ))}
              </div>
              <p className="text-cafe-secondary text-sm italic font-light leading-relaxed mb-8 flex-grow">
                "{review.comment}"
              </p>
              <div className="flex items-center space-x-3 pt-6 border-t border-cafe-divider">
                <div className="h-8 w-8 bg-cafe-light rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[10px] tracking-widest text-cafe-ink uppercase">{review.name}</h4>
                  <p className="text-[10px] font-sans text-cafe-accent tracking-tighter opacity-70">Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Review Section */}
        <section className="max-w-xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-medium text-cafe-primary">Share Your Moment</h2>
            <p className="text-cafe-secondary font-sans text-sm">We value the connection we share with our community. Your feedback helps us perfect the craft.</p>
          </div>

          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="px-10 py-4 bg-cafe-primary text-white rounded-lg font-sans text-xs tracking-widest uppercase hover:bg-cafe-secondary transition-all"
              id="btn-show-review-form"
            >
              Write a Review
            </button>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-cafe-surface p-10 rounded-3xl space-y-8 text-left border border-cafe-border shadow-lg"
              onSubmit={(e) => { e.preventDefault(); setShowForm(false); alert('Thank you for your review!'); }}
            >
              <div className="space-y-2">
                <label className="font-sans-accent text-[10px] text-cafe-accent">Your Name</label>
                <input
                  type="text"
                  className="w-full bg-white border border-cafe-border rounded-xl px-4 py-3 focus:outline-none focus:border-cafe-primary transition-colors text-sm"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="font-sans-accent text-[10px] text-cafe-accent">Rating</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-5 w-5 text-yellow-400 cursor-pointer fill-yellow-400 hover:scale-110 transition-transform" />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-sans-accent text-[10px] text-cafe-accent">Your Feedback</label>
                <textarea
                  rows={4}
                  className="w-full bg-white border border-cafe-border rounded-xl px-4 py-3 focus:outline-none focus:border-cafe-primary transition-colors text-sm resize-none"
                  placeholder="How was your coffee today?"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 px-8 py-3 bg-cafe-primary text-white rounded-lg font-sans text-xs tracking-widest uppercase hover:opacity-90 transition-all font-bold"
                >
                  Post Review
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-8 py-3 border border-cafe-primary text-cafe-primary rounded-lg font-sans text-xs tracking-widest uppercase hover:bg-white transition-all"
                >
                  Cancel
                </button>
              </div>
            </motion.form>
          )}
        </section>
      </div>
    </div>
  );
}
