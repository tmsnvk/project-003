import React from "react";
import styled from "styled-components";
import CardItems from "./CardItems";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    width: 80%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-end: 5;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    flex-wrap: nowrap;
    width: 95%;
  }
`;

const Summary = () => {
  return (
    <ComponentContainer>
      <CardItems />
    </ComponentContainer>
  );
};

export default Summary;