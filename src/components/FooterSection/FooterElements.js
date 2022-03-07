import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled(Container)`
  background-color: #000000;
`;

export const FooterRow = styled(Row)``;

export const FooterCol = styled(Col)``;

export const CompanyLogo = styled.img`
  width: 70%;
`;

export const LinksHeading = styled.h3`
  color: #eeeeee;
  font-family: "horta";
  padding-top: 3rem;
  font-weight: bold;
  letter-spacing: 3px;
`;

export const FooterLink = styled(Link)`
  color: #eeeeee;
  line-height: 2;

  &:hover {
    text-decoration: none;
    color: #ffc947;
  }
`;

export const SocialLinksHeading = styled.h3`
  color: #eeeeee;
  font-family: "horta";
  padding-top: 3rem;
  margin-bottom: 1rem;
  letter-spacing: 3px;
`;

export const SocialLink = styled.a`
  background-color: #ffc947;
  margin: 2rem 1rem;
  font-size: 1.1rem;
  padding: 5px 7px 6px;
  border-radius: 5px;
  color: #eeeeee;

  &:hover {
    cursor: pointer;
  }
`;

export const Address = styled.h5`
  font-family: "Abel";
  color: #f6f6f6;
  margin-top: 2rem;
`;

export const ContactNumber = styled.h5`
  font-family: "Abel";
  color: #f6f6f6;
  margin-top: 2rem;
`;

export const ContactEmail = styled.h5`
  font-family: "Abel";
  color: #f6f6f6;
  margin-top: 1rem;
`;
