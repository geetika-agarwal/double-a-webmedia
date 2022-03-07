import React, { useEffect } from "react";
import mission from "../../images/mission.svg";
import vision from "../../images/vision.svg";
import {
  AboutCol,
  AboutContainer,
  AboutContentContainer,
  AboutHeading,
  AboutHr,
  AboutImg,
  AboutRow,
  AboutSubheading,
  AHeading,
  AParagraph,
} from "./AboutElements";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 4000 });
  });

  return (
    <>
      <AboutContainer>
        <AboutHeading data-aos="fade-in">About Us</AboutHeading>
        <AboutSubheading data-aos="fade-in">
          Everything we do, we are always&nbsp;dedicated.
        </AboutSubheading>
        <AboutHr />
        <AboutContentContainer>
          <AboutRow>
            <AboutCol xs={12} lg={6} data-aos="slide-right" data-aos-delay="0">
              <AboutImg src={mission} />
            </AboutCol>
            <AboutCol xs={12} lg={6} data-aos="zoom-left" data-aos-delay="200">
              <AHeading>Our Mission</AHeading>
              <AParagraph>
                Web Design and Development Company is to create innovative
                products and deliver unique services which process quality and
                customer satisfaction to add value to your business. Our
                dedicated teams especially focus on the needs and requirements
                of the clients to build strong and long-term relations. With the
                aim to meet the clients demands, our teamwork to bring
                successful growth for various businesses.
              </AParagraph>
            </AboutCol>
          </AboutRow>
          <AboutRow>
            <AboutCol xs={12} lg={6} data-aos="zoom-right" data-aos-delay="200">
              <AHeading>Our Vision</AHeading>
              <AParagraph>
                The vision of Double-A Webmedia is to be a global leader in
                providing the best and unique IT solution to improve your
                productivity and business strength. Our try is to be actively
                updated with the latest trends of the business as well as the
                technology used in the IT industry. We work with the aspect of
                creativity, then comes trust to build a strong relationship with
                our clients for a long time of period.
              </AParagraph>
            </AboutCol>
            <AboutCol xs={12} lg={6} data-aos="slide-left" data-aos-delay="0">
              <AboutImg src={vision} />
            </AboutCol>
          </AboutRow>
        </AboutContentContainer>
      </AboutContainer>
    </>
  );
};

export default About;
