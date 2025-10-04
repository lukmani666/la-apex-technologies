import React from "react"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "L.A. Apex transformed our entire digital infrastructure. Their expertise in automation and data science helped us increase efficiency by 200%. Truly exceptional work."
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateNow",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "Working with L.A. Apex was a game-changer. They delivered our mobile app ahead of schedule and under budget. The quality exceeded all expectations."
    },
    {
      name: "Emily Rodriguez",
      role: "VP Operations, DataDriven Corp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "The team's attention to detail and commitment to understanding our business needs made all the difference. Our new analytics platform is incredibly powerful."
    },
    {
      name: "David Park",
      role: "CEO, GrowthTech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "L.A. Apex doesn't just deliver solutions, they deliver partnerships. Their ongoing support and strategic insights continue to drive our success."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-emerald-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our <span className="text-yellow-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the companies we've helped transform
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basic-full md:basis-1/2 lg:basis-1/2">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 h-full">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-emerald-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-300 text-lg leading-relaxed italic">
                      "{testimonial.testimonial}"
                    </blockquote>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-emerald-400 border-emerald-400 hover:bg-emerald-400 hover:text-black" />
            <CarouselNext className="text-emerald-400 border-emerald-400 hover:bg-emerald-400 hover:text-black" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;