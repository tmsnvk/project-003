import React from "react";
import styled from "styled-components";
import OptionItems from "./OptionItems";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 95%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-end: 5;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

const SubscriptionOptions = () => {
  return (
    <ComponentContainer>
      <OptionItems />
    </ComponentContainer>
  );
};

export default SubscriptionOptions;