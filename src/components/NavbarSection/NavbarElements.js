import styled from "styled-components";
import { NavLink as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  width: 100%;
  width: 100%;
  margin-top: 0px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-start;
  padding-right: 2rem;
  padding-left: 3rem;
  position: fixed;
  z-index: 1;
  background: #222831;
`;

export const NavLogoContainer = styled.div`
  height: 80px;
  width: 10rem;
  margin: 0 10px;
  white-space: nowrap;
`;

export const NavBrand = styled.h2`
  width: 100%;
  height: 100%;
  font-family: "horta";
  color: #eeeeee;
  padding-top: 1.5rem;
`;

export const Bars = styled(FaBars)`
  display: none;

  @media all and (max-width: 900px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  white-space: nowrap;

  @media all and (max-width: 900px) {
    display: none;
  }
`;

export const NavLinkText = styled(LinkR)`
  padding: 0 20px;
  color: #eeeeee;
  text-decoration: none;

  &.active {
    color: #ffc947;
    font-weight: bolder;
  }

  &:hover {
    text-decoration: none;
    color: #ffc947;
    font-weight: bold;
  }
`;
