import React from "react";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";
import { PageSubTitle, PageTitle, Paragraph } from "components/shared/text";
import data from "./data";

const ComponentContainer = styled(ElementContainer)`
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
    grid-column-end: 3;
    width: 60%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-start: 2;
    grid-column-end: 4;
    width: 100%;
  }
`;

const Header = () => {
  return (
    <ComponentContainer>
      <PageTitle data={data.title} />
      <PageSubTitle data={data.subtitle} />
      <Paragraph data={data.message} align={"center"} fontsize />
    </ComponentContainer>
  );
};

export default Header;