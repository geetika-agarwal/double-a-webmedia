import React, { useEffect } from "react";
import background from "../../images/pricing-background.jpg";
import {
  CardButtonGold,
  CardImage,
  CardPriceGold,
  CardSubtitleGold,
  CardTitleGold,
  FeatureGold,
  FeaturesList,
  PricingBackground,
  PricingBackgroundContainer,
  PricingBlockQuote,
  PricingCard,
  PricingColumn,
  PricingContentContainer,
  PricingRow,
  PricingSectionContainer,
  PricingSubTitle,
  PricingTitle,
} from "./PricingSectionElements";
import gold from "../../images/gold-medal.png";
import silver from "../../images/silver-medal.png";
import bronze from "../../images/bronze-medal.png";
import { TiTick } from "react-icons/ti";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../FooterSection";
import { Link } from "react-router-dom";

const PricingSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <PricingSectionContainer>
        <PricingBackgroundContainer>
          <PricingBackground src={background} />
          <PricingTitle>Pricing Section</PricingTitle>
          <PricingSubTitle>
            Price is what you pay. Value is what you get.
          </PricingSubTitle>
        </PricingBackgroundContainer>
        <PricingContentContainer fluid>
          <br />
          <br />
          <br />
          <PricingBlockQuote>
            More the better. The higher the price you have to pay,
            <br /> &ensp; the more you will cherish it.
          </PricingBlockQuote>
          <PricingRow>
            <PricingColumn xs={12} md={6} lg={4}>
              <PricingCard data-aos="zoom-in-up" className="pricing-card">
                <CardImage src={bronze} />
                <CardTitleGold className="gold">Bronze Pack</CardTitleGold>
                <CardSubtitleGold className="white">
                  Perfect for college students for their start ups with min.
                  cost.
                </CardSubtitleGold>
                <CardPriceGold className="gold">&#8377; 2000 /-</CardPriceGold>
                <FeaturesList>
                  <FeatureGold className="white">
                    Targeted for students &ensp;
                    <TiTick />
                  </FeatureGold>
                  <FeatureGold className="white">
                    Requires less money &ensp;
                    <TiTick />
                  </FeatureGold>
                  <FeatureGold className="white">
                    Designed in less time &ensp;
                    <TiTick />
                  </FeatureGold>
                  <FeatureGold className="white">
                    Optional feature &ensp;
                    <TiTick />
                  </FeatureGold>
                  <FeatureGold className="white">
                    Optional feature &ensp;
                    <TiTick />
                  </FeatureGold>
                </FeaturesList>
                <Link to="/payment-bronze-pack">
                  <CardButtonGold className="gold-button">
                    Select this Pack
                  </CardButtonGold>
                </Link>
              </PricingCard>
            </PricingColumn>

            <PricingColumn xs={12} md={6} lg={4}>
              <PricingCard
                className="pricing-card"
                data-aos="zoom-in-up"
                style={{ marginTop: "0.8rem" }}
              >
                <CardImage src={gold} />
                <CardTitleGold className="gold">Gold Pack</CardTitleGold>
                <CardSubtitleGold className="white">
                  Perfect for big companies
                </CardSubtitleGold>
                <CardPriceGold className="gold">10,000 /-</CardPriceGold>
                <FeaturesList className="white">
                  <FeatureGold className="white">
                    Targeted for Large firms &ensp;
                    <TiTick />
                  </FeatureGold>
                  <FeatureGold className="white">
                    Requires lots of Capital &ensp;
                    <TiTick />
                  </FeatureGold>
                  <FeatureGold className="white">
                    Designed in more time &ensp;
                    <TiTick />
                  </FeatureGold>
                  <FeatureGold className="white">
                    Complex Website &ensp;
                    <TiTick />
                  </FeatureGold>
                  <FeatureGold className="white">
                    Optional feature &ensp;
                    <TiTick />
                  </FeatureGold>
                </FeaturesList>
                <Link to="/payment-gold-pack">
                  <CardButtonGold className="gold-button">
                    Select this Pack
                  </CardButtonGold>
                </Link>
              </PricingCard>
            </PricingColumn>

            <PricingColumn xs={12} md={6} lg={4}>
              <PricingCard data-aos="zoom-in-up" className="pricing-card">
                <CardImage src={silver} />
                <CardTitleGold className="gold">Silver Pack</CardTitleGold>
                <CardSubtitleGold className="white">
                  Perfect for Start-Ups, with required resources
                </CardSubtitleGold>
                <CardPriceGold className="gold">&#8377; 5,000 /-</CardPriceGold>
                <FeaturesList className="white">
                  <FeatureGold className="white">
                    Targeted for Medium-level Start-Ups &ensp;
                    <TiTick />
                  </FeatureGold>
                  <FeatureGold className="white">
                    Requires moderate amount of money &ensp;
                    <TiTick />
                  </FeatureGold>
                  <FeatureGold className="white">
                    Designing time based on complexity &ensp;
                    <TiTick />{" "}
                  </FeatureGold>
                  <FeatureGold className="white">
                    Optional feature &ensp;
                    <TiTick />
                  </FeatureGold>
                  <FeatureGold className="white">
                    Optional feature &ensp;
                    <TiTick />
                  </FeatureGold>
                </FeaturesList>
                <Link to="/payment-silver-pack">
                  <CardButtonGold className="gold-button">
                    Select this Pack
                  </CardButtonGold>
                </Link>
              </PricingCard>
            </PricingColumn>
          </PricingRow>
        </PricingContentContainer>
      </PricingSectionContainer>
      <Footer />
    </>
  );
};

export default PricingSection;
