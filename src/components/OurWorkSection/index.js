import React, { useEffect } from "react";
import background from "../../images/our-work-background.jpg";
import SiteList from "../SiteListSection";
import { Site1, Site2, Site3, Site4 } from "../SiteListSection/Data";
import {
  OurWorkBackground,
  OurWorkBlockQuote,
  OurWorkContent,
  OurWorkHeroSection,
  OurWorkSubtitle,
  OurWorkTitle,
} from "./OurWorkElements";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../FooterSection";

const OurWork = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <OurWorkHeroSection>
        <OurWorkBackground src={background} />
        <OurWorkTitle>Our Work</OurWorkTitle>
        <OurWorkSubtitle>
          “Know thy self.” We say, “Know thy users.”
        </OurWorkSubtitle>
      </OurWorkHeroSection>
      <OurWorkBlockQuote>
        <b> A successful website does three things: </b>
        <br />
        &ensp; It attracts the right kinds of visitors. <br />
        &ensp; &ensp; Collect Contact details for future ongoing relation.{" "}
        <br />
        &ensp; &ensp; &ensp; Guides them to the main services or product you
        offer. <br />
      </OurWorkBlockQuote>
      <OurWorkContent>
        <div data-aos="fade-up">
          <SiteList {...Site1} />
        </div>
        <div data-aos="fade-up">
          <SiteList {...Site2} />
        </div>
        <div data-aos="fade-up">
          <SiteList {...Site3} />
        </div>
        <div data-aos="fade-up">
          <SiteList {...Site4} />
        </div>
        <Footer />
      </OurWorkContent>
    </>
  );
};

export default OurWork;
