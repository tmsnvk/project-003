import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  grid-area: grid-head-text;
  margin: 20rem 3rem 3rem 3rem;
  padding: 1rem 1rem 1rem 1rem;
`;

const GridHeadTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: normal;
  padding: 5rem 0 0 0;

  &:after {
    content: " ";
    padding: 3rem 0 0 0;
  	width: 100%;
    border-bottom: 2px solid var(--font-color-primary);
    display: block;
		margin: 0 auto;
  }
`;

const GridHeadContainer = () => {
  return (
    <ComponentContainer>
        <GridHeadTitle>Pricing overview - Select your plan!</GridHeadTitle>
    </ComponentContainer>
  );
};

export default GridHeadContainer;