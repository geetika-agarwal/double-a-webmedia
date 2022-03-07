import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const PricingSectionContainer = styled.div`
  width: 100%;
`;

export const PricingBackgroundContainer = styled.div`
  width: 100%;
  height: 22.5rem;
  margin-bottom: 90px;
  text-align: center;
`;

export const PricingBackground = styled.img`
  width: 100%;
  height: 30rem;
`;
export const PricingTitle = styled.h1`
  text-align: center;
  margin-top: 6rem;
  padding-bottom: 1rem;
  font-weight: 900;
  color: #eeeeee;
  font-family: "horta";
  position: absolute;
  top: 80px;
  left: 40%;
  font-size: 4rem;
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

export const PricingSubTitle = styled.h4`
  color: #f6f6f6;
  text-align: center;
  font-weight: 600;
  color: #ffc947;
  font-family: "Abel";
  position: absolute;
  left: 33%;
  top: 300px;
  letter-spacing: 3px;
  animation: fade 3s;
  -webkit-animation: fade 3s;
`;

export const PricingContentContainer = styled(Container)`
  font-family: "Abel";
`;

export const PricingBlockQuote = styled.h2`
  border-left: 10px solid #393e46;
  margin-left: 8rem;
  padding: 10px 20px;
  color: #393e46;
  line-height: 1.5;
  font-style: italic;
  font-weight: 600;
  animation: fade 3s;
  -webkit-animation: fade 3s;

  @media screen and (max-width: 428px) {
    margin-left: 10px;
  }
`;

export const PricingRow = styled(Row)`
  padding: 3rem 5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 428px) {
    padding: 5rem 1rem;
  }
`;

export const PricingColumn = styled(Col)`
  width: 100%;
  height: 100%;
`;

export const PricingCard = styled.div`
  height: 90vh;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  background-color: #eeeeee;
  color: #222831;
  margin-top: 2rem;
`;

export const CardImage = styled.img`
  width: 30%;
  margin: 30px 0;
`;

export const CardTitleGold = styled.h1`
  padding: 0.8rem 0;
  font-weight: 700;
`;

export const CardSubtitleGold = styled.h3`
  padding: 0.8rem;
  color: #222831;
`;

export const CardPriceGold = styled.h2`
  padding: 0.8rem 0;
  font-weight: 700;
`;

export const FeaturesList = styled.ul`
  text-align: left;
  padding-left: 2rem;
`;

export const FeatureGold = styled.li`
  color: #222831;
  margin-left: 2rem;
  font-size: 1.3rem;
`;

export const CardButtonGold = styled.button`
  margin: 2rem;
  color: #eeeeee;
  width: 8rem;
  height: 2.5rem;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #222831;

  &:hover {
    background-color: #ffc947;
    color: #222831;
    box-shadow: 0px 4px 8px rgb(255, 255, 255, 0.3);
    font-weight: 600;
  }
`;
