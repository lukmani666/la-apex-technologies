'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Settings, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Automation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const features = [
    "Process automation",
    "Workflow optimization",
    "Custom scripting solutions",
    "Integration automation",
    "Task scheduling",
    "Robotic process automation (RPA)"
  ];

  const benefits = [
    "Increased efficiency",
    "Reduced human error",
    "Cost savings",
    "24/7 operation",
    "Faster processing",
    "Scalable solutions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
      <main className="">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-15 h-15 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
                Automation & Scripting
              </h1>
              <p className="text-base text-gray-300">
                Streamline processes and boost efficiency with intelligent automation
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="">
          <div className="container mx-auto px-6">
            <div className="relative w-full h-[40vh] md:h-[80vh] lg:h-[90vh] max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/automation.jpg"
                alt="Automation & Scripting"
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
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Work Smarter, Not Harder</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Automation is the key to scaling your business without proportionally scaling your costs. We help you identify 
                repetitive tasks and manual processes that can be automated, freeing up your team to focus on high-value activities. 
                From simple scripts to complex workflow automation, we deliver solutions that boost productivity and reduce errors.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our automation solutions range from basic task scheduling to sophisticated robotic process automation (RPA) that 
                can handle complex business workflows. We integrate with your existing systems and tools, ensuring seamless 
                operation and minimal disruption to your current processes. The result? More efficiency, lower costs, and 
                happier employees.
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Automate Your Workflows?</h3>
              <p className="text-base text-muted-foreground mb-8">
                Let&apos;s identify opportunities to streamline your processes
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

export default Automation;
