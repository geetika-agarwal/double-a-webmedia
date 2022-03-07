import React, { useEffect } from "react";
import {
  SCardHeading,
  SCardImg,
  SCardSubheading,
  ServiceCard,
  ServiceCardContainer,
  ServiceCol,
  ServiceRow,
  ServicesContainer,
  ServicesHeading,
  ServicesHr,
  ServicesSubheading,
  SImgWrap,
} from "./ServicesElements";
import card1 from "../../images/web-dev.png";
import card2 from "../../images/mobile-development.png";
import card3 from "../../images/content-marketing.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <>
      <ServicesContainer>
        <ServicesHeading data-aos="fade-in">Our Services</ServicesHeading>
        <ServicesSubheading data-aos="fade-in">
          We’re an agile and well rounded web design company that loves to work
          with start-ups and new businesses.
        </ServicesSubheading>
        <ServicesHr />
        <ServiceCardContainer>
          <ServiceRow>
            <ServiceCol xs={12} md={6} lg={4}>
              <ServiceCard data-aos="fade-up" data-aos-delay="0">
                <SImgWrap>
                  <SCardImg src={card1} />
                </SImgWrap>
                <SCardHeading>Web Development</SCardHeading>
                <SCardSubheading>
                  Building a Unique Website to Convert Visitors into Customers
                </SCardSubheading>
              </ServiceCard>
            </ServiceCol>
            <ServiceCol xs={12} md={6} lg={4}>
              <ServiceCard data-aos="fade-up" data-aos-delay="200">
                <SImgWrap>
                  <SCardImg src={card2} />
                </SImgWrap>
                <SCardHeading>Mobile App Development</SCardHeading>
                <SCardSubheading>
                  Create, curate, teach. That’s the way we code.Enjoy to the
                  fullest!!
                </SCardSubheading>
              </ServiceCard>
            </ServiceCol>
            <ServiceCol xs={12} md={6} lg={4}>
              <ServiceCard data-aos="fade-up" data-aos-delay="400">
                <SImgWrap>
                  <SCardImg src={card3} />
                </SImgWrap>
                <SCardHeading>Digital Marketing Services</SCardHeading>
                <SCardSubheading>
                  Winning edge from the top Internet Marketing Agency India!
                </SCardSubheading>
              </ServiceCard>
            </ServiceCol>
          </ServiceRow>
        </ServiceCardContainer>
      </ServicesContainer>
    </>
  );
};

export default Services;
