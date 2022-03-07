import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const PageContainer = styled(Container)`
  margin-top: 4rem;
  overflow-x: hidden;
  width: fit-content;
`;

export const PageRow = styled(Row)`
  overflow-x: hidden;
  line-height: 1.8;
`;

export const PageHeading = styled.h1`
  font-size: 5rem;
  margin-left: 1rem;
  color: #222831;
  font-family: "horta";
`;

export const PageImage = styled.img`
  width: 90%;
  margin: 1rem;
`;

export const PageSubheading = styled.h1`
  color: #222831;
  padding: 0.5rem 1rem;
  font-family: "horta";
`;

export const PageParagraph = styled.p`
  color: #393e46;
  padding: 1rem 2rem 0 2rem;
  font-size: 2rem;
  font-family: "Abel";
`;

export const PageQuote = styled.h2`
  margin-left: 4rem;
  padding: 1rem 3rem 1rem 1rem;
  border-left: 8px solid #222831;
  color: #222831;
  font-style: italic;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: "Abel";
  font-weight: 700;
`;

export const PageBtnWrap = styled.div`
  width: 100%;
  height: 3rem;
  text-align: center;
  vertical-align: middle;
  margin: 5rem 0;
`;

export const PageBtn = styled.button`
  width: 15rem;
  height: 3rem;
  outline: none;
  border: none;
  border-radius: 20px;
  color: #eeeeee;
  background-color: #393e46;
  padding: 10px;

  &:hover {
    background-color: #222831;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border: none;
    outline: none;
    font-weight: bolder;
  }
`;
