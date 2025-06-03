import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeComponents/HomeNavbar";
import Founders from "../components/AboutUsComponents/Founders";
import HeroSection from "../components/AboutUsComponents/HeroSection";
import OurJourney from "../components/AboutUsComponents/OurJourney";

const About = () => {
  return (
    <>
      <HomeNavbar />
      <HeroSection/>
      <Founders/>
      <OurJourney/>
      <Footer />
    </>
  );
};

export default About;
