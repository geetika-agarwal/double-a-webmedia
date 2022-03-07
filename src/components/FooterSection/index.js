import React from "react";
import logo from "../../images/logo1.png";
import {
  Address,
  CompanyLogo,
  ContactEmail,
  ContactNumber,
  FooterCol,
  FooterContainer,
  FooterLink,
  FooterRow,
  LinksHeading,
  SocialLink,
  SocialLinksHeading,
} from "./FooterElements";
import { FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <FooterContainer fluid>
      <FooterRow>
        <FooterCol xs={12} md={6} lg={4}>
          <CompanyLogo src={logo} />
        </FooterCol>
        <FooterCol xs={12} md={6} lg={4}>
          <LinksHeading>Useful Links</LinksHeading>
          <FooterLink to="/">
            <MdKeyboardArrowRight className="yellow" />
            Home
          </FooterLink>{" "}
          <br />
          <FooterLink to="/our-work">
            <MdKeyboardArrowRight className="yellow" />
            Our Work
          </FooterLink>
          <br />
          <FooterLink to="/contact-us">
            <MdKeyboardArrowRight className="yellow" />
            Contact Us
          </FooterLink>
          <br />
          <FooterLink to="/careers">
            <MdKeyboardArrowRight className="yellow" />
            Careers
          </FooterLink>
          <br />
          <FooterLink to="/pricing">
            <MdKeyboardArrowRight className="yellow" />
            Pricing
          </FooterLink>
          <br />
          <FooterLink to="/customize-your-page">
            <MdKeyboardArrowRight className="yellow" />
            Customize Your Page
          </FooterLink>
        </FooterCol>
        <FooterCol xs={12} md={6} lg={4}>
          <SocialLinksHeading>Social Links</SocialLinksHeading>
          <SocialLink>
            <FaTwitter />
          </SocialLink>
          <SocialLink>
            <FaFacebook />
          </SocialLink>
          <SocialLink>
            <FaLinkedinIn />
          </SocialLink>
          <br />
          <Address>Mumbai</Address>
          <ContactNumber>+91 1234567890</ContactNumber>
          <ContactEmail>info@gmail.com</ContactEmail>
        </FooterCol>
      </FooterRow>
    </FooterContainer>
  );
};

export default Footer;
