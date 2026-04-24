/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function Navbar({ currentView, onViewChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', view: 'home' as View },
    { name: 'Menu', view: 'menu' as View },
    { name: 'Reviews', view: 'reviews' as View },
    { name: 'About', view: 'about' as View },
    { name: 'Contact', view: 'contact' as View },
  ];

  const handleNavClick = (view: View) => {
    onViewChange(view);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cafe-bg/90 backdrop-blur-md border-b border-cafe-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <span className="text-2xl font-serif font-bold tracking-tight text-cafe-primary">NAVYA CAFE</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.view}
                  onClick={() => handleNavClick(link.view)}
                  className={`font-sans uppercase tracking-[0.2em] text-[10px] transition-all hover:text-cafe-primary cursor-pointer ${
                    currentView === link.view ? 'font-bold text-cafe-primary' : 'text-cafe-ink opacity-60'
                  }`}
                  id={`nav-link-${link.view}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            <button className="px-6 py-2 bg-cafe-primary text-white rounded-full text-[10px] font-sans uppercase tracking-widest hover:bg-cafe-secondary transition-colors">
              Order Online
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cafe-primary p-2"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-cafe-bg border-b border-cafe-border px-4 pt-2 pb-6 space-y-1"
        >
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => handleNavClick(link.view)}
              className={`block w-full text-left px-3 py-4 font-sans uppercase tracking-widest text-xs rounded-md transition-colors ${
                currentView === link.view ? 'bg-cafe-surface text-cafe-primary font-bold' : 'text-cafe-ink/60 hover:bg-cafe-surface'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button className="w-full mt-4 py-3 bg-cafe-primary text-white rounded-lg font-sans uppercase tracking-widest text-xs">
            Order Online
          </button>
        </motion.div>
      )}
    </nav>
  );
}
