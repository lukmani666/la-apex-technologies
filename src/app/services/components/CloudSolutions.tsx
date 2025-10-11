'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Cloud, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const CloudSolutions = () => {
  const features = [
    "Cloud migration strategies",
    "Infrastructure as Code (IaC)",
    "Multi-cloud solutions",
    "Cloud security and compliance",
    "DevOps and CI/CD pipelines",
    "Cloud cost optimization"
  ];

  const benefits = [
    "Scalability on demand",
    "Reduced infrastructure costs",
    "High availability",
    "Global reach",
    "Disaster recovery",
    "Pay-as-you-go pricing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">

      <main className="">
        {/* Hero Section */}
        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-15 h-15 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
                Cloud Solutions
              </h1>
              <p className="text-base text-gray-300">
                Scalable cloud infrastructure and migration services
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="">
          <div className="container mx-auto px-6">
            <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/cloud-solutions.jpg"
                alt="Cloud Solutions"
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
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Embrace The Power of Cloud Computing</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Cloud computing has revolutionized how businesses operate, offering unprecedented scalability, reliability, and 
                cost-efficiency. Whether you&apos;re looking to migrate existing applications to the cloud, build cloud-native solutions, 
                or optimize your current cloud infrastructure, we have the expertise to guide you through every step of your cloud 
                journey.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our cloud solutions leverage leading platforms like AWS, Azure, and Google Cloud to deliver robust, secure, and 
                scalable infrastructure. We implement Infrastructure as Code (IaC) for reproducible deployments, set up CI/CD 
                pipelines for rapid development, and optimize costs to ensure you get maximum value from your cloud investment.
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Move to the Cloud?</h3>
              <p className="text-base text-muted-foreground mb-8">
                Let&apos;s discuss how cloud solutions can transform your business
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

export default CloudSolutions;
