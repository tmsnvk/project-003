import React from "react";
import styled from "styled-components";
import { LinkElement } from "components/shared/link";
import { StyledIcon } from "components/shared/utilities";
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
      <LinkElement
        to={"/"}
        render={<><StyledIcon icon={data.navbar.title.icon} fontsize={"navlogo"} margin={"navlogo"} />{data.navbar.title.text}</>}
        fontsize={"navlogo"}
        letterspacing={"0.1rem"}
        padding={"navlogo"}
      />
    </ComponentContainer>
  );
};

export default NavbarLogoElement;