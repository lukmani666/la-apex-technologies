"use client"
import React,{ useState }  from 'react'
import Image from 'next/image';

const CaseStudies = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const projects = [
    {
      title: "E-Commerce Platform Transformation",
      image: "/pic4.jpg",
      description: "Redesigned and optimized a major retailer's online platform, resulting in 300% increase in conversions.",
      result: "300% increase in conversions",
      category: "Web Development"
    },
    {
      title: "Data Analytics Dashboard",
      image: "/pic5.jpg",
      description: "Built comprehensive analytics platform for healthcare provider to track patient outcomes and operational efficiency.",
      result: "40% improvement in operational efficiency",
      category: "Data Science"
    },
    {
      title: "Automation System Implementation",
      image: "/pic6.jpg",
      description: "Automated manual processes for manufacturing company, reducing processing time and human error.",
      result: "70% reduction in processing time",
      category: "Automation"
    },
    {
      title: "Mobile App Development",
      image: "/pic7.jpg",
      description: "Created innovative mobile application for fitness industry with real-time tracking and social features.",
      result: "50K+ downloads in first month",
      category: "Mobile Development"
    },
    {
      title: "Cloud Migration Project",
      image: "/pic8.jpg",
      description: "Successfully migrated legacy systems to cloud infrastructure for financial services company.",
      result: "60% reduction in infrastructure costs",
      category: "Cloud Solutions"
    }
  ];
  return (
    <section id="case-studies" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Success <span className="text-emerald-600">Stories</span>
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Real results from our partnerships with forward-thinking companies
          </p>
        </div>
        
        {/* grid now stretches children */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl 
                        transition-all duration-300 transform hover:scale-100 group h-full flex flex-col"
            >
              <div className="relative overflow-hidden h-60">

                <Image
                  src={project.image} 
                  alt={project.title}
                  fill
                  onLoad={() => setIsLoaded(true)}
                  className={`w-full h-48 object-cover group-hover:scale-110 transition-all duration-700 ${isLoaded ? "blur-0 scale-100" : "blur-md scale-105"}`}
                  style={{
                    opacity: isLoaded ? 1 : 0
                  }}
                  priority
                />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* flex-1 lets this section grow and push the button down */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-base text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="bg-emerald-50 p-3 rounded-lg mb-4">
                  <span className="text-base text-emerald-700 font-semibold">Result: </span>
                  <span className="text-base text-emerald-600">{project.result}</span>
                </div>

                {/* <Button 
                  variant="outline" 
                  className="mt-auto cursor-pointer border-emerald-500 bg-white text-emerald-600 
                            hover:bg-emerald-500 hover:text-white transition-all duration-300 w-full"
                >
                  View Project
                </Button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default CaseStudies