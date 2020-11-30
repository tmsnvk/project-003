import React from "react";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";
import { Title } from "components/shared/header";
import data from "components/page/search/Header/data";

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
    width: auto;
    grid-column-end: 4;
  }
`;

const Header = () => {
  return (
    <ComponentContainer>
      <Title data={data.title} />
    </ComponentContainer>
  );
};

export default Header;