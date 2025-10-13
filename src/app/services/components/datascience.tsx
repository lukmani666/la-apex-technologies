'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const DataScience = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const features = [
    "Data mining and exploration",
    "Predictive analytics and modeling",
    "Machine learning solutions",
    "Business intelligence dashboards",
    "Data visualization",
    "Statistical analysis and reporting"
  ];

  const benefits = [
    "Data-driven decision making",
    "Uncover hidden patterns",
    "Predictive insights",
    "Custom analytics solutions",
    "Real-time reporting",
    "Actionable recommendations"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
      <main className="">
        {/* Hero Section */}
        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-15 h-15 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
                Data Science & Analysis
              </h1>
              <p className="text-base text-gray-300">
                Transform your data into actionable insights and strategic advantages
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="">
          <div className="container mx-auto px-6">
            <div className="relative w-full h-[50vh] md:h-[80vh] lg:h-[90vh] max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/data-science.jpg"
                alt="Data Science & Analysis" 
                fill
                onLoad={() => setIsLoaded(true)}
                className={`object-cover ${isLoaded ? "blur-0 opacity-100": "blur-lg opacity-100"}`}
                priority
              />
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Unlock The Power of Your Data</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Data is the new oil, but only if you know how to refine it. Our data science and analytics services help you 
                extract meaningful insights from your data, enabling smarter decisions and strategic advantages. We use advanced 
                statistical methods, machine learning algorithms, and data visualization techniques to transform raw data into 
                actionable intelligence.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Whether you&apos;re looking to predict customer behavior, optimize operations, or discover new opportunities, our 
                data science experts can help. We work with data of all sizes and complexities, from traditional databases to 
                big data platforms, ensuring you get the most value from your information assets.
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Harness Your Data?</h3>
              <p className="text-base text-muted-foreground mb-8">
                Let&apos;s turn your data into your competitive advantage
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

export default DataScience;
