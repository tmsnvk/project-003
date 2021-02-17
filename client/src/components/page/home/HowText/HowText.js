import React from "react";
import styled from "styled-components";
import { SectionElementContainer } from "components/shared/layout";
import ListItems from "./ListItems";
import { ParagraphTitleElement } from "components/shared/text";
import data from "./data";

const ComponentContainer = styled(SectionElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 95%;
  margin: 0 auto;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-end: 4;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 95%;
  }
`;

const HowText = () => {
  return (
    <ComponentContainer>
      <ParagraphTitleElement render={data.title} />
      <ListItems />
    </ComponentContainer>
  );
};

export default HowText;