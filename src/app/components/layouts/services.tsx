import React from 'react'
import { Button } from '../ui/button'
import { 
  Code,
  Globe,
  BarChart3,
  Settings, 
  Target,
  Cloud, 
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: "Software Development",
      description: "Custom applications built with modern technologies and best practices.",
      icon: Code,
    },
    {
      title: "Web & App Development",
      description: "Responsive websites and mobile applications that engage users.",
      icon: Globe,
    },
    {
      title: "Data Science & Analysis",
      description: "Transform your data into actionable insights and strategic advantages.",
      icon: BarChart3,
    },
    {
      title: "Automation & Scripting",
      description: "Streamline processes and boost efficiency with intelligent automation.",
      icon: Settings,
    },
    {
      title: "Tech Consulting",
      description: "Strategic guidance to navigate digital transformation successfully.",
      icon: Target,
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      icon: Cloud,
    },
  ]
  return (
    <section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-emerald-400 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-400 rounded-full animate-pulse"></div>
      </div>
      
      <div className="mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4 animate-scale-in">
            Our <span className="text-emerald-400">Services</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in delay-300">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-500 transform hover:scale-100 hover:shadow-2xl group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:from-emerald-400 group-hover:to-emerald-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="border-emerald-500 bg-white cursor-pointer text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Services