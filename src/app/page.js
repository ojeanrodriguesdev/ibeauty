import Testimonials from "./components/animation/Testimonials";
import Contact from "./components/common/Contact";
import FAQ from "./components/common/Faq";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AboutSection from "./components/sections/AboutSection";
import HeroSection from "./components/sections/HeroSection";



export default function Home() {
  return (
   <>
  <Header />
  <HeroSection />
  <AboutSection />
  <Testimonials />
  <Contact />
  <FAQ />
  <Footer />
  </>
  );
}
