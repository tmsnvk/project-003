import React from "react";
import styled from "styled-components";
import { SectionElementContainer } from "components/shared/layout";
import { PageTitleElement } from "components/shared/text";
import data from "./data";

const ComponentContainer = styled(SectionElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 90%;
  margin: 15rem auto 0;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    margin: 10rem auto 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: auto;
    grid-column-end: 4;
  }
`;

const Header = () => {
  return (
    <ComponentContainer>
      <PageTitleElement render={data.title} />
    </ComponentContainer>
  );
};

export default Header;