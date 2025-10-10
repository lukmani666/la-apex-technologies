import React from 'react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Code, Globe, BarChart3, Settings, Target, Cloud, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: "software-dev",
      title: "Software Development",
      description: "Custom applications built with modern technologies and best practices.",
      icon: Code,
      details: "We build scalable, maintainable software solutions tailored to your specific business needs. Our development process ensures quality code, thorough testing, and seamless deployment.",
      features: [
        "Custom web and desktop applications",
        "API development and integration",
        "Microservices architecture",
        "Legacy system modernization",
        "Code review and optimization",
        "Continuous integration and deployment"
      ]
    },
    {
      id: "web-app",
      title: "Web & App Development",
      description: "Responsive websites and mobile applications that engage users.",
      icon: Globe,
      details: "Create stunning digital experiences with our web and mobile app development services. We focus on user experience, performance, and cross-platform compatibility.",
      features: [
        "Responsive web design",
        "Progressive web apps (PWA)",
        "Native and cross-platform mobile apps",
        "E-commerce solutions",
        "Content management systems",
        "Real-time web applications"
      ]
    },
    {
      id: "data-science",
      title: "Data Science & Analysis",
      description: "Transform your data into actionable insights and strategic advantages.",
      icon: BarChart3,
      details: "Unlock the power of your data with advanced analytics, machine learning, and data visualization. We help you make data-driven decisions that drive business growth.",
      features: [
        "Data mining and exploration",
        "Predictive analytics and modeling",
        "Machine learning solutions",
        "Business intelligence dashboards",
        "Data visualization",
        "Statistical analysis and reporting"
      ]
    },
    {
      id: "automation",
      title: "Automation & Scripting",
      description: "Streamline processes and boost efficiency with intelligent automation.",
      icon: Settings,
      details: "Eliminate repetitive tasks and improve operational efficiency with custom automation solutions. From simple scripts to complex workflow automation.",
      features: [
        "Process automation",
        "Workflow optimization",
        "Custom scripting solutions",
        "Integration automation",
        "Task scheduling",
        "Robotic process automation (RPA)"
      ]
    },
    {
      id: "consulting",
      title: "Tech Consulting",
      description: "Strategic guidance to navigate digital transformation successfully.",
      icon: Target,
      details: "Navigate the complex technology landscape with expert guidance. We provide strategic consulting to help you make informed decisions about technology investments.",
      features: [
        "Technology strategy planning",
        "Digital transformation roadmap",
        "Architecture design and review",
        "Technology stack selection",
        "Security and compliance audits",
        "Team training and mentorship"
      ]
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      icon: Cloud,
      details: "Leverage the power of cloud computing for scalability, reliability, and cost-efficiency. We help you migrate, manage, and optimize your cloud infrastructure.",
      features: [
        "Cloud migration strategies",
        "Infrastructure as Code (IaC)",
        "Multi-cloud solutions",
        "Cloud security and compliance",
        "DevOps and CI/CD pipelines",
        "Cloud cost optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive technology solutions designed to transform your business and drive innovation
              </p>
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto px-4">
            <Tabs defaultValue={services[0].id} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12 h-auto gap-2 bg-muted/50 p-2">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <TabsTrigger 
                      key={service.id} 
                      value={service.id}
                      className="cursor-pointer flex flex-col items-center gap-2 py-4 data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="text-xs text-center">{service.title}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <TabsContent key={service.id} value={service.id}>
                    <div className="max-w-4xl mx-auto">
                      <Card className="border-2 border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                        <CardHeader>
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-3xl mb-2">{service.title}</CardTitle>
                              <CardDescription className="text-base md:text-lg">{service.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-6 text-base md:text-lg">
                            {service.details}
                          </p>
                          
                          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                          <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {service.features.map((feature, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/request-demo">
                              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-yellow-500 text-black hover:from-emerald-600 hover:to-yellow-600">
                                Get Started
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </Link>
                            <Link href="/#contact">
                              <Button size="lg" variant="outline" className="cursor-pointer bg-white text-black border-emerald-500 hover:bg-emerald-500 hover:text-white">
                                Contact Us
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals
            </p>
            <Link href="/request-demo">
              <Button size="lg" className="cursor-pointer bg-gradient-to-r from-emerald-500 to-yellow-500 text-black hover:from-emerald-600 hover:to-yellow-600">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
