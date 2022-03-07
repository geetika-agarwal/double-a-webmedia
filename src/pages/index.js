import React from "react";
import About from "../components/AboutComponent";
import Banner from "../components/Banner";
import FAQSection from "../components/FAQSection";
import Footer from "../components/FooterSection";
import OurTeam from "../components/OurTeamSection";
import ScrolltoTop from "../components/ScrollToTop";
import Services from "../components/ServicesComponent";
import TestimonialSection from "../components/TestimonialsSection";

const Home = () => {
  return (
    <>
      <ScrolltoTop />
      <Banner />
      <Services />
      <About />
      <OurTeam />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Home;
