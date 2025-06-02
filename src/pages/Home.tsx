import GetBrochure from "../components/HomeComponents/GetBrochure";
import BannerSection from "../components/HomeComponents/BannerSection";
import HomeNavbar from "../components/HomeComponents/HomeNavbar";
import WhyChoose from "../components/HomeComponents/WhyChoose";
import Programs from "../components/HomeComponents/Programs";
import Testimonials from "../components/HomeComponents/Testimonials";
import Footer from "../components/Footer";
import DontWait from "../components/HomeComponents/DontWait";
import Process from "../components/HomeComponents/Process";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <BannerSection />
      <DontWait/>
      <WhyChoose />
      <Programs />
      <Process/>
      <Testimonials />
      <GetBrochure />
      <Footer />
    </>
  );
};

export default Home;
