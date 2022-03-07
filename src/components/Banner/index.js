import React from "react";
import {
  CompanyLogo,
  CompanyMotto,
  HeroContainer,
  HeroImage,
} from "./BannerElements";
import background from "../../images/background.jpg";
import logo from "../../images/logo1.png";

const Banner = () => {
  return (
    <>
      <HeroContainer fluid>
        <CompanyLogo src={logo} />
        <CompanyMotto>"We make it easy for you"</CompanyMotto>
        <HeroImage src={background} />
      </HeroContainer>
    </>
  );
};

export default Banner;
