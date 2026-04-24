/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full px-10 py-12 bg-cafe-divider border-t border-cafe-border flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-sans uppercase tracking-[0.2em] text-cafe-light">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className="text-cafe-ink font-bold opacity-30 mb-1 tracking-widest">Hours</span>
          <div className="flex space-x-6">
            <span>Mon-Fri: 7am - 8pm</span>
            <span>Sat-Sun: 8am - 9pm</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center space-y-1">
        <span className="text-cafe-ink font-bold opacity-30 mb-1 tracking-widest">Address</span>
        <span>123 Serenity Lane, Bloom District</span>
      </div>

      <div className="flex flex-col items-center md:items-end space-y-1">
        <span className="text-cafe-ink font-bold opacity-30 mb-1 tracking-widest">Social</span>
        <div className="flex space-x-4">
          <span className="hover:text-cafe-primary transition-colors cursor-pointer">Instagram</span>
          <span className="hover:text-cafe-primary transition-colors cursor-pointer">Facebook</span>
        </div>
      </div>
    </footer>
  );
}
