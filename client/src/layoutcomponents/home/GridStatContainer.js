import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled.section`
  grid-area: grid-stat;
  margin: 3rem 3rem 6rem 3rem;
  padding: 1rem 1rem 1rem 1rem;
  background-color: var(--body-color-tertiary);
  box-shadow: 1px 2px 5px 1px var(--body-shadow);
  display: flex;
  flex-direction: row;
  font-weight: bold;
`;

const YearUpdate = styled.div`
  text-align: center;
  margin: auto;
  font-size: 4rem;
  color: var(--font-color-quaternary);
  font-family: "Open Sans", sans-serif;
`;

const StatContainer = styled.div`
  padding: 0 5rem 0 5rem;
  text-align: center;
`;

const IconWrapper = styled.div`
  color: var(--font-color-tertiary);
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 7rem;
`;

const StatNumber = styled.div`
  font-size: 5rem;
  padding: 0 0 1rem 0;
  font-family: "Open Sans", sans-serif;
`;
  
const StatText = styled.div`
  font-size: 2rem;
  color: var(--font-primary-color);
  font-family: "Open Sans", sans-serif;
`;

const GridStatContainer = () => {
  const itemData = [
    {
      number: "55K+",
      text: "Trainers"
    },
    {
      number: "2K+",
      text: "Gyms"
    },
    {
      number: "200+",
      text: "Competitions"
    },
  ]

  const renderItems = itemData.map((item) => {
    return (
      <StatContainer key={item.number}>
        <IconWrapper><StyledIcon icon="caret-up"></StyledIcon></IconWrapper>
        <StatNumber>{item.number}</StatNumber>
        <StatText>{item.text}</StatText>
      </StatContainer>
    );
  });

  return (
    <ComponentContainer>
      <YearUpdate>2020<br />STATS</YearUpdate>
      {renderItems}
    </ComponentContainer>
  );
};

export default GridStatContainer;