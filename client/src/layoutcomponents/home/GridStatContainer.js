import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled.section`
  grid-area: grid-stat;
  margin: 5rem 0 0 0;
  padding: 1rem 1rem 1rem 1rem;
  background-color: var(--body-color-three);
  box-shadow: 1px 2px 5px 1px var(--body-shadow);
  display: flex;
  flex-direction: row;
  font-weight: bold;
  border-radius: 1rem;
`;

const YearUpdate = styled.div`
  text-align: center;
  margin: auto;
  font-size: 4rem;
  color: var(--font-color-four);
  font-family: "Open Sans", sans-serif;
`;

const StatContainer = styled.div`
  padding: 0 2rem 0 2rem;
  text-align: center;
`;

const IconWrapper = styled.div`
  color: var(--font-color-three);
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 5rem;
`;

const StatNumber = styled.div`
  font-size: 5rem;
  padding: 0 0 1rem 0;
  font-family: "Open Sans", sans-serif;
`;
  
const StatText = styled.div`
  font-size: 2rem;
  color: var(--font-color-one);
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
    {
      number: "1K+",
      text: "Badges"
    },
  ]

  const renderItems = itemData.map((item) => {
    return (
      <StatContainer key={item.text}>
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