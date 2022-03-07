import styled from "styled-components";

export const OurWorkHeroSection = styled.div`
  width: 100%;
  height: 100%;
`;

export const OurWorkBackground = styled.img`
  width: 100%;
  height: 30rem;
`;

export const OurWorkTitle = styled.h1`
  color: #eeeeee;
  text-align: center;
  padding-bottom: 1rem;
  z-index: 0;
  top: 150px;
  margin: 1 auto;
  left: 40%;
  position: absolute;
  font-weight: 900;
  font-size: 5rem;
  font-family: "horta";
  letter-spacing: 3px;
  animation: fade 3s;
`;

export const OurWorkSubtitle = styled.h2`
  color: #ffc947;
  text-align: center;
  font-weight: 600;
  font-family: "Abel";
  letter-spacing: 3px;
  animation: fade 3s;
  position: absolute;
  top: 250px;
  left: 27%;
`;

export const OurWorkBlockQuote = styled.h4`
  border-left: 10px solid #393e46;
  margin-top: 5rem;
  font-family: "Abel";
  margin-left: 8rem;
  padding: 10px 20px;
  color: #393e46;
  line-height: 1.5;
  font-style: italic;
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

  @media screen and (max-width: 775px) {
    margin-left: 1rem;
  }
`;

export const OurWorkContent = styled.div`
  margin-top: 2rem;
  font-family: "Abel";
`;
