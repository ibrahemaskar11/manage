import CTASection from "./components/CTASection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Features />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
