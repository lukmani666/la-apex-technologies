import About from './components/layouts/about';
import CaseStudies from './components/layouts/casestudies';
import Contact from './components/layouts/contact';
import CTABanner from './components/layouts/ctabanner';
import Footer from './components/layouts/footer';
import Hero from './components/layouts/Hero';
import Services from './components/layouts/services';
import Statistics from './components/layouts/statistics';
import Testimonials from './components/layouts/testimonials';
import WhyChooseUs from './components/layouts/whychooseus';
export default function Home() {
   return (
    <div className="min-h-screen bg-gray-900">
      {/* <Header /> */}
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Statistics />
      <CaseStudies />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
};
