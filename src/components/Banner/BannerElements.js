import { Container } from "react-bootstrap";
import styled from "styled-components";

export const HeroContainer = styled(Container)`
  padding: 0;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 800px;
`;

export const CompanyLogo = styled.img`
  position: absolute;
  top: 200px;
  left: 150px;
  width: 400px;
  -webkit-animation: expand 2s;
  animation: expand 2s;

  @keyframes expand {
    0% {
      top: 100px;
      opacity: 0;
    }
    100% {
      top: 200px;
      opacity: 1;
    }
  }

  @-webkit-keyframes expand {
    0% {
      top: 0px;
      opacity: 0;
    }
    100% {
      top: 200px;
      opacity: 1;
    }
  }
`;

export const CompanyMotto = styled.h1`
  position: absolute;
  top: 580px;
  left: 180px;
  -webkit-animation: expand 2s;
  animation: slide 2s;
  font-family: "horta";
  color: #eeeeee;
  @keyframes slide {
    0% {
      left: 0px;
      opacity: 0;
    }
    100% {
      left: 180px;
      opacity: 1;
    }
  }

  @-webkit-keyframes expandText {
    0% {
      top: 0px;
      opacity: 0;
    }
    100% {
      top: 200px;
      opacity: 1;
    }
  }
`;
