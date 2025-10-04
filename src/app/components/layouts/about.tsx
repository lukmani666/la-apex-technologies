import React from "react";
import { Lightbulb, Award, Heart, TrendingUp } from "lucide-react";
import Image from "next/image";

const colors = {
  emerald: {
    bg: "bg-emerald-100",
    text: "text-emerald-600",
  },
  yellow: {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
};

const About = () => {
  const features = [
    { icon: Lightbulb, text: "Innovation", color: "emerald" },
    { icon: Award, text: "Excellence", color: "yellow" },
    { icon: Heart, text: "Trust", color: "emerald" },
    { icon: TrendingUp, text: "Growth", color: "yellow" },
  ];
  return (
    <section id="about" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 border border-emerald-500 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-yellow-500 rounded-full animate-pulse"></div>
      </div>

      <div className="mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-scale-in">
              About <span className="text-emerald-600">L.A. Apex</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed animate-fade-in delay-300">
              Founded with a vision to transform businesses through innovative technology solutions, 
              L.A. Apex Technologies stands at the forefront of digital transformation. We combine 
              cutting-edge expertise with personalized service to deliver results that exceed expectations.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed animate-fade-in delay-500">
              Our mission is to empower organizations with the tools and insights they need to thrive 
              in an increasingly digital world, while building lasting partnerships based on trust and excellence.
            </p>

             <div className="grid grid-cols-2 gap-6">
              {features.map((item, index) => {
                const IconComponent = item.icon;
                const colorClasses = colors[item.color as keyof typeof colors];

                return (
                  <div
                    key={item.text}
                    className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 group animate-fade-in"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <div
                      className={`w-12 h-12 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                    <h3 className="font-semibold text-base text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                      {item.text}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-1/2 animate-fade-in delay-700">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="African tech professional working in modern office" 
                className="rounded-lg shadow-xl transform group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-yellow-500/20 rounded-lg group-hover:opacity-0 transition-opacity duration-500"></div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500/20 rounded-full backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center animate-float">
                <div className="w-6 h-6 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-yellow-500/20 rounded-full backdrop-blur-sm border border-yellow-400/30 flex items-center justify-center animate-float delay-1000">
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;