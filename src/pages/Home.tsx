import GetBrochure from "../components/HomeComponents/GetBrochure";
import BannerSection from "../components/HomeComponents/BannerSection";
import HomeNavbar from "../components/HomeComponents/HomeNavbar";
import WhyChoose from "../components/HomeComponents/WhyChoose";
import AwardWinning from "../components/HomeComponents/AwardWinning";
import Programs from "../components/HomeComponents/Programs";
import Testimonials from "../components/HomeComponents/Testimonials";
import Clients from "../components/HomeComponents/Clients";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <BannerSection />
      <WhyChoose />
      <AwardWinning />
      <Programs />
      <Testimonials />
      <Clients />
      <GetBrochure />
      <Footer />
    </>
  );
};

export default Home;
