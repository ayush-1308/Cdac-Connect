import { useRef } from "react";
import CampusHero from "./CampusHero";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PlatformHighlights from "./PlatformHighlights";
import FeaturedCampuses from "./FeaturedCampuses";

const Home = () => {
    const footerRef = useRef(null);
    
    const navigateToAbout = () => {
        window.location.href = '/about';
    };

    const scrollToFooter = () => {
        footerRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <>
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen min-w-screen text-white font-sans overflow-y-scroll hide-scrollbar">
      <Navbar onContactClick={scrollToFooter} onAboutClick={navigateToAbout} />
      <CampusHero />
      <PlatformHighlights />
      <FeaturedCampuses />
      <Footer ref={footerRef} />
    </div>
    </>
  );
};

export default Home;
