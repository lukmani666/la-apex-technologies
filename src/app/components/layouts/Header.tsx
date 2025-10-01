"use client"

import React, { useState } from 'react';
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

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image 
            src="/logo.png"
            alt='L.A. Apex Logo'
            width={120}
            height={120}
          />
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-300 hover:text-emerald-400 bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gray-800 border border-gray-700">
                  <div className="p-4 w-64">
                    <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700 rounded">Software Development</a>
                    <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700 rounded">Data Science</a>
                    <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700 rounded">Automation</a>
                    <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700 rounded">Tech Consulting</a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">About</a>
          <a href="#case-studies" className="text-gray-300 hover:text-emerald-400 transition-colors">Case Studies</a>
          <a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors">Testimonials</a>
          <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a>
        </nav>

        <Button className="hidden cursor-pointer lg:block bg-gradient-to-r from-emerald-500 to-yellow-500 text-black font-bold hover:from-emerald-600 hover:to-yellow-600">
          Get a Free Consultation
        </Button>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#home" className="text-gray-300 hover:text-emerald-400">Home</a>
            <a href="#services" className="text-gray-300 hover:text-emerald-400">Services</a>
            <a href="#about" className="text-gray-300 hover:text-emerald-400">About</a>
            <a href="#case-studies" className="text-gray-300 hover:text-emerald-400">Case Studies</a>
            <a href="#testimonials" className="text-gray-300 hover:text-emerald-400">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-emerald-400">Contact</a>
            <Button className="bg-gradient-to-r from-emerald-500 to-yellow-500 text-black font-bold w-full mt-4">
              Get a Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;