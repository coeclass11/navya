/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { View } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import About from './components/About';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentView === 'home' && <Home onViewChange={setCurrentView} />}
            {currentView === 'menu' && <Menu />}
            {currentView === 'reviews' && <Reviews />}
            {currentView === 'about' && <About />}
            {currentView === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

