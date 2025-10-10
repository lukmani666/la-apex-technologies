import React from 'react'
import { Users, TrendingUp, Handshake, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Experience Team",
      description: "Seasoned professionals with deep expertise across multiple technologies and industries.",
      icon: Users
    },
        {
      title: "Scalable Solutions",
      description: "Future-proof architecture that grows with your business needs and requirements.",
      icon: TrendingUp,
    },
    {
      title: "Client-Focused",
      description: "Personalized approach with dedicated support and transparent communication throughout.",
      icon: Handshake,
    },
    {
      title: "Secure & Efficient",
      description: "Industry-leading security practices and optimized performance for peace of mind.",
      icon: Shield,
    },
  ];
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-bounce"></div>
        </div>
      </div>
      
      <div className="mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 animate-scale-in">
            Why Choose <span className="text-yellow-400">L.A. Apex?</span>
          </h2>
          <p className="text-base text-gray-300 max-w-3xl mx-auto animate-fade-in delay-300">
            We deliver exceptional results through proven methodologies and unwavering commitment to excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-100 hover:shadow-2xl group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 relative flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:from-emerald-400 group-hover:to-emerald-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center animate-fade-in delay-700">
          <div className="bg-gray-800/30 rounded-xl p-8 max-w-4xl mx-auto border border-emerald-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
              {[
                { number: 1, text: "Discover" },
                { number: 2, text: "Design" },
                { number: 3, text: "Develop" },
                { number: 4, text: "Deploy" }
              ].map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold mb-2 group-hover:bg-emerald-400 group-hover:scale-110 transition-all duration-300">
                      {step.number}
                    </div>
                    <span className="text-gray-300 text-sm group-hover:text-emerald-400 transition-colors duration-300">{step.text}</span>
                  </div>
                  {index < 3 && (
                    <div className="block w-8 h-0.5 bg-emerald-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-emerald-400 transform -translate-x-full animate-slide-in-right"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs;