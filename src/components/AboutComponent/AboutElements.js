import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #222831;
  width: 100%;
  height: 100%;
  padding-bottom: 3rem;
`;

export const AboutHeading = styled.h1`
  color: #ffc947;
  text-align: center;
  padding-top: 3rem;
  font-family: "horta";
  font-size: 3rem;
  letter-spacing: 3px;
`;

export const AboutSubheading = styled.h4`
  color: #eeeeee;
  text-align: center;
  font-family: "Abel";
  margin: 1.5rem auto;
`;

export const AboutHr = styled.hr`
  width: 10%;
  margin: 0.5rem auto;
  border-top: 5px solid #ffc947;
`;

export const AboutContentContainer = styled(Container)``;

export const AboutRow = styled(Row)`
  margin: 2rem 0;
`;

export const AboutCol = styled(Col)`
  text-align: center;
`;

export const AboutImg = styled.img`
  width: 60%;
  margin: 4rem auto;
  animation: mymove;
  -webkit-animation: mymove;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 2s;

  @keyframes mymove {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(20px);
    }
  }
`;

export const AHeading = styled.h2`
  color: #ffc947;
  font-family: "horta";
  letter-spacing: 3px;
  margin-top: 4rem;
`;

export const AParagraph = styled.h4`
  color: #eeeeee;
  font-family: "Abel";
  margin-top: 2rem;
  text-align: left;
  line-height: 2rem;
  word-spacing: 3px;
`;
