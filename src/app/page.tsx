import About from './components/layouts/about';
import Hero from './components/layouts/Hero';
import Services from './components/layouts/services';
export default function Home() {
   return (
    <div className="min-h-screen bg-gray-900">
      {/* <Header /> */}
      <Hero />
      <About />
      <Services />
      {/* <WhyChooseUs /> */}
      {/* <Statistics /> */}
      {/* <CaseStudies /> */}
      {/* <Testimonials /> */}
      {/* <CTABanner /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
};
