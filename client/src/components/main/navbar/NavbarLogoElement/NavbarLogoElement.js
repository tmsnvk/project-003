import React from "react";
import styled from "styled-components";
import { LinkElement } from "components/shared/link";
import { PROJECT_ROOT } from "utilities/constants/urls";
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
      <LinkElement to={`/${PROJECT_ROOT}`} render={data.navbar.logo} style={"NavbarLogo"} />
    </ComponentContainer>
  );
};

export default NavbarLogoElement;