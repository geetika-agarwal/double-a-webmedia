import React, { useEffect } from "react";
import background from "../../images/careers-background.jpg";
import {
  CardContainer,
  CareerName,
  CareersBackground,
  CareersBackgroundContainer,
  CareersColumn,
  CareersContainer,
  CareersContentContainer,
  CareersQuote,
  CareersRow,
  CareersTitle,
  OverlayContainer,
} from "./CareersElements";
import frontend from "../../images/frond-end-dev.jpg";
import backend from "../../images/back-end-dev.jpg";
import fullstack from "../../images/full-stack-dev.jpg";
import projectleader from "../../images/project-leader.jpg";
import tester from "../../images/software-tester.jpg";
import { Link as LinkR } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../FooterSection";

const CareersSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <CareersContainer>
        <CareersBackgroundContainer>
          <CareersBackground src={background} />
          <CareersTitle>Careers</CareersTitle>
          <CareersQuote>
            {" "}
            It is never too late to be what you might have been.
          </CareersQuote>
        </CareersBackgroundContainer>

        <CareersContentContainer>
          <CareersRow>
            <CareersColumn sm={12} md={6} lg={6}>
              <LinkR to="/frontend" style={{ textDecoration: "none" }}>
                <CardContainer
                  data-aos="slide-right"
                  className="container1"
                  style={{ backgroundImage: `url(${frontend})` }}
                >
                  <OverlayContainer className="overlay1">
                    <CareerName className="head1">
                      Front-End Development
                    </CareerName>
                  </OverlayContainer>
                </CardContainer>
              </LinkR>
            </CareersColumn>

            <CareersColumn sm={12} md={6} lg={6}>
              <LinkR to="/backend" style={{ textDecoration: "none" }}>
                <CardContainer
                  data-aos="slide-left"
                  className="container2"
                  style={{ backgroundImage: `url(${backend})` }}
                >
                  <OverlayContainer className="overlay2">
                    <CareerName className="head2">
                      Back-End Development
                    </CareerName>
                  </OverlayContainer>
                </CardContainer>
              </LinkR>
            </CareersColumn>
          </CareersRow>

          <CareersRow>
            <CareersColumn sm={12} md={6} lg={6}>
              <LinkR to="/fullstack" style={{ textDecoration: "none" }}>
                <CardContainer
                  data-aos="slide-right"
                  className="container3"
                  style={{ backgroundImage: `url(${fullstack})` }}
                >
                  <OverlayContainer className="overlay3">
                    <CareerName className="head3">
                      Full Stack Web Development
                    </CareerName>
                  </OverlayContainer>
                </CardContainer>
              </LinkR>
            </CareersColumn>

            <CareersColumn sm={12} md={6} lg={6}>
              <LinkR to="/project-leader" style={{ textDecoration: "none" }}>
                <CardContainer
                  data-aos="slide-left"
                  className="container4"
                  style={{ backgroundImage: `url(${projectleader})` }}
                >
                  <OverlayContainer className="overlay4">
                    <CareerName className="head4">
                      Project / Team Leader
                    </CareerName>
                  </OverlayContainer>
                </CardContainer>
              </LinkR>
            </CareersColumn>
          </CareersRow>

          <CareersRow>
            <CareersColumn sm={12} md={6} lg={6}>
              <LinkR to="/testing" style={{ textDecoration: "none" }}>
                <CardContainer
                  data-aos="slide-right"
                  className="container5"
                  style={{ backgroundImage: `url(${tester})` }}
                >
                  <OverlayContainer className="overlay5">
                    <CareerName className="head5">Software Testing</CareerName>
                  </OverlayContainer>
                </CardContainer>
              </LinkR>
            </CareersColumn>
          </CareersRow>
        </CareersContentContainer>
      </CareersContainer>
      <Footer />
    </>
  );
};

export default CareersSection;
