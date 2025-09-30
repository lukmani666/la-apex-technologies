import React from 'react';
import { Button } from '@/app/components/ui/button';
import { ArrowDown, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left animate-fade-in">
            <div className="flex items-center mb-6 animate-slide-in-left">
              <Sparkles className="w-6 h-6 text-emerald-400 mr-2 animate-pulse" />
              <span className="text-emerald-400 font-semibold">Next-Gen Technology Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-scale-in">
              Innovative Tech Solutions for a{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                Smarter Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed animate-fade-in delay-300">
              Empowering businesses through software development, data intelligence, and automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in delay-500">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-yellow-500 text-black font-bold px-8 py-6 text-lg hover:from-emerald-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Request a Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-emerald-500 text-emerald-400 bg-white hover:bg-emerald-500 hover:text-black px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Explore Services
              </Button>
            </div>
          </div>
          
          {/* Right side - Tech person image */}
          <div className="relative animate-fade-in delay-700">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="African tech professional working with laptop" 
                className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
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
