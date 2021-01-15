import React from "react";
import styled from "styled-components";
import { SectionElementContainer } from "components/shared/layout";
import YearUpdate from "./YearUpdate";
import DataItems from "./DataItems";

const ComponentContainer = styled(SectionElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 0 auto;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    flex-direction: row;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 6;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-end: 5;
  }
`;

const Statistics = () => {
  return (
    <ComponentContainer>
      <YearUpdate />
      <DataItems />
    </ComponentContainer>
  );
};

export default Statistics;