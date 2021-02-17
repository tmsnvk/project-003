import React from "react";
import styled from "styled-components";
import LinkElement from "./LinkElement";
import data from "../data";

const ComponentContainer = styled.section`
  padding: 0 0 2rem 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 0 0 0 0;
  }
`;

const NavbarLogoElement = () => {
  return (
    <ComponentContainer>
      <LinkElement link={data.logo.link} render={data.logo.render} />
    </ComponentContainer>
  );
};

export default NavbarLogoElement;