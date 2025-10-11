
import React from 'react';
import { Button } from '@/app/components/ui/button';

const CTABanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-yellow-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
          Let&apos;s Build Something Amazing Together
        </h2>
        <p className="text-base text-white/90 mb-8 max-w-3xl mx-auto">
          Ready to transform your business with cutting-edge technology? 
          Let&apos;s discuss how we can help you achieve your goals.
        </p>
        <Button 
          size="lg" 
          className="bg-gray-900 cursor-pointer text-white hover:bg-gray-800 px-12 py-6 text-base font-bold transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Schedule a Consultation
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
