import React from 'react'
import { Button } from '../ui/button'
const CaseStudies = () => {
   const projects = [
    {
      title: "E-Commerce Platform Transformation",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Redesigned and optimized a major retailer's online platform, resulting in 300% increase in conversions.",
      result: "300% increase in conversions",
      category: "Web Development"
    },
    {
      title: "Data Analytics Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Built comprehensive analytics platform for healthcare provider to track patient outcomes and operational efficiency.",
      result: "40% improvement in operational efficiency",
      category: "Data Science"
    },
    {
      title: "Automation System Implementation",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Automated manual processes for manufacturing company, reducing processing time and human error.",
      result: "70% reduction in processing time",
      category: "Automation"
    },
    {
      title: "Mobile App Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Created innovative mobile application for fitness industry with real-time tracking and social features.",
      result: "50K+ downloads in first month",
      category: "Mobile Development"
    },
    {
      title: "Cloud Migration Project",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Successfully migrated legacy systems to cloud infrastructure for financial services company.",
      result: "60% reduction in infrastructure costs",
      category: "Cloud Solutions"
    }
  ];
  return (
    <section id="case-studies" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success <span className="text-emerald-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real results from our partnerships with forward-thinking companies
          </p>
        </div>
        
        {/* grid now stretches children */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl 
                        transition-all duration-300 transform hover:scale-105 group h-full flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* flex-1 lets this section grow and push the button down */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="bg-emerald-50 p-3 rounded-lg mb-4">
                  <span className="text-emerald-700 font-semibold">Result: </span>
                  <span className="text-emerald-600">{project.result}</span>
                </div>

                <Button 
                  variant="outline" 
                  className="mt-auto border-emerald-500 bg-white text-emerald-600 
                            hover:bg-emerald-500 hover:text-white transition-all duration-300 w-full"
                >
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default CaseStudies