import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const CareersContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

export const CareersBackgroundContainer = styled.div`
  width: 100%;
  height: 22.5rem;
  overflow: hidden;
`;

export const CareersBackground = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
  height: 23rem;
  top: 80px;
  left: 0;
`;

export const CareersTitle = styled.h1`
  text-align: center;
  margin-top: 10rem;
  color: #eeeeee;
  padding-bottom: 1rem;
  font-weight: 900;
  font-size: 5rem;
  font-family: "horta";
  letter-spacing: 3px;
  animation: fade 3s;
  -webkit-animation: fade 3s;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export const CareersQuote = styled.h3`
  color: #ffc947;
  text-align: center;
  font-weight: 600;
  padding-bottom: 1rem;
  font-family: "Abel";
  letter-spacing: 3px;
  animation: fade 3s;
  --webkit-animation: fade 3s;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export const CareersContentContainer = styled(Container)`
  margin-top: 10rem;
`;

export const CareersRow = styled(Row)`
  margin: 1rem auto;
`;

export const CareersColumn = styled(Col)`
  width: 100%;
  height: 100%;
`;

export const CardContainer = styled.div`
  width: 95%;
  height: 28rem;
  margin: 2rem auto;
  background-color: #000000;
  background-size: cover;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

export const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #f6f6f6;
  opacity: 0.5;
  transition: all 0.5s;
  border-radius: 20px;
`;

export const CareerName = styled.h2`
  color: #f6f6f6;
  padding-left: 2rem;
  letter-spacing: 3px;
  line-height: 40px;
  transform: translateY(40px);
  transition: all 0.7s;
  font-family: "Abel";
  font-weight: 600;
  color: #ffc947;
  padding-top: 10rem;
  padding-right: 2rem;

  &:hover {
    text-decoration: none;
  }
`;
