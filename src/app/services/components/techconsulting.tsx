import React from 'react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Target, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const TechConsulting = () => {
  const features = [
    "Technology strategy planning",
    "Digital transformation roadmap",
    "Architecture design and review",
    "Technology stack selection",
    "Security and compliance audits",
    "Team training and mentorship"
  ];

  const benefits = [
    "Expert guidance",
    "Risk mitigation",
    "Cost optimization",
    "Strategic alignment",
    "Technology roadmap",
    "Competitive advantage"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
      <main className="">
        {/* Hero Section */}
        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-15 h-15 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
                Tech Consulting
              </h1>
              <p className="text-base text-gray-300">
                Strategic guidance to navigate digital transformation successfully
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="">
          <div className="container mx-auto px-6">
            <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/tech-consulting.jpg"
                alt="Tech Consulting" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Navigate Technology With Confidence</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Technology decisions can make or break your business. Our consulting services provide you with expert guidance 
                to navigate the complex technology landscape, make informed decisions, and avoid costly mistakes. We bring 
                years of experience and industry best practices to help you build a solid technology foundation for your business.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From technology strategy and architecture design to security audits and team training, we cover all aspects of 
                technology consulting. We don't just recommend solutions – we partner with you to understand your unique challenges 
                and goals, then develop strategies that align technology investments with business objectives.
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready for Expert Guidance?</h3>
              <p className="text-base text-muted-foreground mb-8">
                Let's discuss your technology challenges and opportunities
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

export default TechConsulting;
