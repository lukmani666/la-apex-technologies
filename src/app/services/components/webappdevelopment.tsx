'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const WebAppDevelopment = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const features = [
    "Responsive web design",
    "Progressive web apps (PWA)",
    "Native and cross-platform mobile apps",
    "E-commerce solutions",
    "Content management systems",
    "Real-time web applications"
  ];

  const benefits = [
    "Mobile-first approach",
    "Cross-browser compatibility",
    "Fast loading times",
    "Intuitive user interfaces",
    "SEO optimization",
    "Accessibility standards"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
      <main className="">
        {/* Hero Section */}
        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-15 h-15 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
                Web & App Development
              </h1>
              <p className="text-base text-gray-300">
                Responsive websites and mobile applications that engage users
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="">
          <div className="container mx-auto px-6">
            <div className="relative w-full h-[40vh] md:h-[80vh] lg:h-[90vh] max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/web-app-development.jpg"
                alt="Web & App Development" 
                fill
                onLoad={() => setIsLoaded(true)}
                className={`object-cover ${isLoaded ? "blur-0 scale-100" : "blur-md scale-105"}`}
                priority
              />
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Create Stunning Digital Experiences</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                In today&apos;s digital-first world, your online presence is crucial. We create beautiful, high-performing websites and 
                mobile applications that not only look great but also deliver exceptional user experiences. Our development approach 
                combines aesthetics with functionality, ensuring your digital products stand out in a crowded marketplace.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                From responsive websites that adapt to any screen size to native mobile apps that leverage device capabilities, 
                we build digital solutions that engage your audience and drive results. Our focus on performance, accessibility, 
                and user experience ensures that every interaction is smooth and intuitive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-6">Benefits</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Your Digital Presence?</h3>
              <p className="text-base text-muted-foreground mb-8">
                Let&apos;s create a web or mobile experience that your users will love
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/request-demo">
                  <Button size="lg" className="cursor-pointer bg-gradient-to-r from-emerald-500 to-yellow-500 text-black hover:from-emerald-600 hover:to-yellow-600">
                    Request a Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="bg-white cursor-pointer border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WebAppDevelopment;
