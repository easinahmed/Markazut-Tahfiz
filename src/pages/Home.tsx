import Info from "../components/Info";
import Notice from "../components/Notice";
import About from "../components/sections/About";
import Gallery from "../components/sections/GalleryGrid";
import Hero from "../components/sections/Hero";
import Speech from "../components/sections/Speech";
import Testimonial from "../components/sections/Testimonial";


const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      
      <Hero/>
      <Notice/>
      <About/>
      <Info/>
      <Speech/>
      <Gallery/>
      <Testimonial/>
    </div>
  );
};

export default Home;