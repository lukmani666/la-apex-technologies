"use client"

import React, { useState, useEffect, useRef} from 'react'
import { CheckCircle, Users, Star, Award } from 'lucide-react'

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    rating: 0,
    team: 0
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: CheckCircle,
      label: "Projects Done",
      value: 236,
      suffix: "",
      color: "emerald"
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: 490,
      suffix: "K+",
      color: "yellow"
    },
    {
      icon: Star,
      label: "Client Rating",
      value: 4.9,
      suffix: "",
      decimal: true,
      color: "emerald"
    },
    {
      icon: Award,
      label: "Expert Team",
      value: 25,
      suffix: "+",
      color: "yellow"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [])

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        projects: Math.floor(236 * progress),
        clients: Math.floor(490 * progress),
        rating: Math.min(4.9, (4.9 * progress)),
        team: Math.floor(25 * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          projects: 236,
          clients: 490,
          rating: 4.9,
          team: 25
        });
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible]);

  const formatValue = (stat: typeof stats[0], currentCount: number) => {
    if (stat.decimal) {
      return currentCount.toFixed(1);
    }
    return Math.floor(currentCount).toString();
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 border border-emerald-400 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-emerald-300 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4 animate-scale-in">
            Our <span className="text-emerald-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in delay-300">
            Numbers that speak for our excellence and commitment to delivering outstanding results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const currentValue = stat.label === "Projects Done" ? counts.projects :
                               stat.label === "Happy Clients" ? counts.clients :
                               stat.label === "Client Rating" ? counts.rating :
                               counts.team;

            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-100 hover:shadow-2xl group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 relative flex justify-center">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-full flex items-center justify-center group-hover:from-${stat.color}-400 group-hover:to-${stat.color}-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                </div>

                <div className="mb-4">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {formatValue(stat, currentValue)}
                    <span className={`text-2xl text-${stat.color}-400 ml-1`}>
                      {stat.suffix}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </h3>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-400 rounded-full transition-all duration-2000 ease-out`}
                    style={{ 
                      width: isVisible ? '100%' : '0%',
                      transitionDelay: `${index * 150}ms`
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional floating elements */}
        <div className="absolute top-20 right-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/3 right-10 w-4 h-4 bg-emerald-300 rounded-full animate-float opacity-20"></div>
      </div>
    </section>
  )
}

export default Statistics