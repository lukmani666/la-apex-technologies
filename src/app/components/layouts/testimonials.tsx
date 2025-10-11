import React from "react"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel"
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechFlow Solutions",
      image: "/pic10.jpg",
      testimonial: "L.A. Apex transformed our entire digital infrastructure. Their expertise in automation and data science helped us increase efficiency by 200%. Truly exceptional work."
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateNow",
      image: "/pic12.jpg",
      testimonial: "Working with L.A. Apex was a game-changer. They delivered our mobile app ahead of schedule and under budget. The quality exceeded all expectations."
    },
    {
      name: "Emily Rodriguez",
      role: "VP Operations, DataDriven Corp",
      image: "/pic11.jpg",
      testimonial: "The team's attention to detail and commitment to understanding our business needs made all the difference. Our new analytics platform is incredibly powerful."
    },
    {
      name: "David Park",
      role: "CEO, GrowthTech",
      image: "/pic9.jpg",
      testimonial: "L.A. Apex doesn't just deliver solutions, they deliver partnerships. Their ongoing support and strategic insights continue to drive our success."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-emerald-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="text-yellow-400">Clients Say</span>
          </h2>
          <p className="text-base text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from the companies we&apos;ve helped transform
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basic-full md:basis-1/2 lg:basis-1/2">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 h-full">
                    <div className="flex items-center mb-6">
                      <div className="relative w-16 h-16 mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-emerald-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-300 text-base leading-relaxed italic">
                      &quot;{testimonial.testimonial}&quot;
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