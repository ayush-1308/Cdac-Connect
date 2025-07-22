
import Navbar from "./components/Navbar";
import CampusHero from "./components/CampusHero";
//import FeaturesSections from "./components/FeaturesSections/";

import Hero from "./components/Hero";
import PlatformHighlights from "./components/PlatformHighlights";
//import Carousel from "./components/Carousel";
//import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen min-w-screen text-white font-sans">
      <Navbar />
      <CampusHero />
    {/* <FeaturesSections /> */}
    <PlatformHighlights/>
      {/* <Hero /> */}
      
      {/* <Carousel />
      <Footer /> */}
    </div>
  );
}