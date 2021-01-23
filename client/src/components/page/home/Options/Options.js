import React from "react";
import styled from "styled-components";
import { SectionElementContainer } from "components/shared/layout";
import { ParagraphElement } from "components/shared/text";
import data from "./data";

const ComponentContainer = styled(SectionElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  margin: 0 auto;
  width: 90%;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    grid-row-start: 6;
    grid-row-end: 7;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-end: 5;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: auto;
  }
`;

const Options = () => {
  const renderParagraphElements = data.paragraphs.map(({ id, render }) => {
    return (
      <ParagraphElement key={id} render={render} style={"HomeOptions"} />
    );
  });

  return (
    <ComponentContainer>
      {renderParagraphElements}
    </ComponentContainer>
  );
};

export default Options;