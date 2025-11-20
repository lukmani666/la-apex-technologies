"use client"
import React, { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { ArrowDown, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
      </div>
      
      <div className="mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-15 lg:py-0 items-center">
          {/* Left side - Text content */}
          <div className="text-left animate-fade-in">
            <div className="flex items-center mb-6 animate-slide-in-left">
              <Sparkles className="w-6 h-6 text-emerald-400 mr-2 animate-pulse" />
              <span className="text-emerald-400 font-semibold">Next-Gen Technology Solutions</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight animate-scale-in">
              Innovative Tech Solutions for a{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                Smarter Future
              </span>
            </h1>
            
            <p className="text-base text-gray-300 mb-12 max-w-2xl leading-relaxed animate-fade-in delay-300">
              Empowering businesses through software development, data intelligence, and automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in delay-500">
              <Link href="/request-demo">
                <Button 
                  size="lg" 
                  className="cursor-pointer bg-gradient-to-r from-emerald-500 to-yellow-500 text-black font-bold px-8 py-6 text-sm hover:from-emerald-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Request a Demo
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-emerald-500 cursor-pointer text-emerald-400 bg-white hover:bg-emerald-500 hover:text-white px-8 py-6 text-sm transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right side - Tech person image */}
          <div className="relative animate-fade-in delay-700">
            <div className="relative w-full h-[40vh] md:h-[80vh] lg:h-[90vh] group">
              <Image
                src="/pic3.jpg" 
                alt="African tech professional working with laptop" 
                fill
                onLoad={() => setIsLoaded(true)}
                className={`rounded-2xl shadow-2xl transform group-hover:scale-100 transition-all duration-700 object-cover ${
                  isLoaded ? "blur-0 scale-100" : "blur-md scale-105"
                }`}
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transition: 'opacity 0.7s ease-in-out, filter 0.7s ease-in-out, transform 0.7s ease-in-out'
                }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-yellow-500/20 rounded-2xl group-hover:opacity-0 transition-opacity duration-500"></div>
              
              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/20 rounded-full backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center animate-float">
                <div className="w-8 h-8 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-500/20 rounded-full backdrop-blur-sm border border-yellow-400/30 flex items-center justify-center animate-float delay-1000">
                <div className="w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-emerald-400 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
