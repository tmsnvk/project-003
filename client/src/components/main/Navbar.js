import React from "react";
import styled from "styled-components";
import { NavbarLinkElement, NavbarLogoElement } from "./navbar";

const ComponentContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
	width: 100%;
	position: fixed;
  z-index: 1;
  padding: 2rem 0 2rem 0;
  font-weight: 600;
  background-image: ${({ theme }) => theme.color.gradient};
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.shadow};
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transition: 0.5s;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    flex-direction: row;
  }
`;

const Navbar = () => {
  return (
    <ComponentContainer>
      <NavbarLogoElement />
      <NavbarLinkElement />
    </ComponentContainer>
  );
};

export default Navbar;