import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Bars,
  Nav,
  NavBrand,
  NavLinkText,
  NavLogoContainer,
  NavMenu,
} from "./NavbarElements";

const NavbarSection = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav id="navbar">
        <NavLogoContainer onClick={toggleHome}>
          <NavBrand>
            Double-A <span style={{ color: "#ffc947" }}>Webmedia</span>
          </NavBrand>
        </NavLogoContainer>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLinkText to="/">Home</NavLinkText>

          <NavLinkText to="/our-work">Our Work</NavLinkText>

          <NavLinkText to="/contact-us">Contact Us</NavLinkText>

          <NavLinkText to="/pricing">Pricing</NavLinkText>

          <NavLinkText to="/careers">Careers</NavLinkText>

          <NavLinkText to="/customize-your-page">
            Customize Your Page
          </NavLinkText>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavbarSection;
