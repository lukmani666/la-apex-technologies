"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from '@/app/components/ui/button';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from '@/app/components/ui/navigation-menu';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleScheduleCall = () => {
    // replace this URL with your actual scheduling link (Calendly, Cal.com, etc.)
    window.open('https://calendly.com', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image 
            src="/logo.png"
            alt='L.A. Apex Logo'
            width={120}
            height={120}
            priority
          />
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base cursor-pointer text-gray-300 hover:text-emerald-400 bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gray-800 border border-gray-700">
                  <div className="p-4 w-64">
                    {["Software Development", "Data Science", "Automation", "Tech Consulting"].map((service) => (

                      <Link key={service} href="/#services" className="block px-3 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700 rounded">
                        {service}
                      </Link>
                    ))}
                    
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/#about" className="text-gray-300 hover:text-emerald-400 transition-colors">About</Link>
          <Link href="/#case-studies" className="text-gray-300 hover:text-emerald-400 transition-colors">Case Studies</Link>
          <Link href="/#testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors">Testimonials</Link>
          <Link href="/#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</Link>
        </nav>

        <Button onClick={handleScheduleCall} className="hidden cursor-pointer lg:block bg-gradient-to-r from-emerald-500 to-yellow-500 text-black font-bold hover:from-emerald-600 hover:to-yellow-600">
          Get a Free Consultation
        </Button>

        <button
          className="lg:hidden text-white relative w-8 h-8 flex flex-col justify-center items-center z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-white rounded origin-center"
          ></motion.span>
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 bg-white rounded my-1"
          ></motion.span>
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-white rounded origin-center"
          ></motion.span>
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)} // close when overlay clicked
            />

            {/* Slide-in Menu */}
            <motion.div
              key="mobileMenu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 90, damping: 15 }}
              className="fixed top-0 right-0 w-4/5 h-full bg-gray-900/95 border-l border-gray-700 shadow-2xl"
            >
              <nav className="flex flex-col space-y-6 p-8 pt-24 bg-gray-900/95">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 text-lg hover:text-emerald-400 transition"
                >
                  Home
                </Link>

                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-base cursor-pointer text-gray-300 hover:text-emerald-400 bg-transparent">
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-gray-800 border border-gray-700">
                        <div className="p-4 w-64">
                          {["Software Development", "Data Science", "Automation", "Tech Consulting"].map((service, i) => (
                            <Link
                              key={i}
                              href="/#services"
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-3 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700 rounded"
                            >
                              {service}
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <Link href="/#about" className="text-gray-300 text-lg hover:text-emerald-400 transition">
                  About
                </Link>
                <Link href="/#case-studies" className="text-gray-300 text-lg hover:text-emerald-400 transition">
                  Case Studies
                </Link>
                <Link href="/#testimonials" className="text-gray-300 text-lg hover:text-emerald-400 transition">
                  Testimonials
                </Link>
                <Link href="/#contact" className="text-gray-300 text-lg hover:text-emerald-400 transition">
                  Contact
                </Link>

                <Button className="bg-gradient-to-r from-emerald-500 to-yellow-500 text-black font-bold w-full mt-8 hover:from-emerald-600 hover:to-yellow-600">
                  Get a Free Consultation
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;