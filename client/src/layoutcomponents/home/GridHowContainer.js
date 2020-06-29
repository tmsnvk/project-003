import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled.section`
  grid-area: grid-how;
  margin: 3rem 3rem 3rem 3rem;
  padding: 1rem 1rem 1rem 1rem;
  background-color: var(--body-color-tertiary);
  box-shadow: 1px 2px 5px 1px var(--body-shadow);
`;
  
const HowTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  padding: 1rem 0 3rem 0;
  font-weight: normal;

  &:after {
    content: " ";
    display: block;
    padding: 2rem 0 0 0;
    border-bottom: 2px solid var(--font-color-tertiary);
    width: 50%;
    margin: 0 auto;
  }
`;

const HowSteps = styled.div`
  text-align: left;
  padding: 0 0 3rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconWrapper = styled.div`
  color: var(--font-color-tertiary);
  font-size: 3rem;
  padding: 0 2rem 0 5rem;
`;

const StyledIcon = styled(FontAwesomeIcon)`
`;

const InfoText = styled.p`
  font-size: 1.8rem;
`;

const GridHowContainer = () => {
  const itemData = [
    {
      text: "Register your Pokedex ID, immediately start using the search function."
    },
    {
      text: "Receive always up-to-date information about any given Kanto Pokemon."
    },
    {
      text: "Take part in our buzzing online community and get invited to our offline meetups - exhange valuable information with your peers and share how your hunts turn out."
    },
    {
      text: "Test your mettle in our regular community competitions & win great prizes."
    },
    {
      text: "Contact our 24/7 support team with any issue."
    }
  ]

  const renderItems = itemData.map((item) => {
    return (
      <HowSteps key={item.text}>
        <IconWrapper><StyledIcon icon="angle-double-right"></StyledIcon></IconWrapper>
        <InfoText>{item.text}</InfoText>
      </HowSteps>
    );
  });

  return (
    <ComponentContainer>
      <HowTitle>How does it work? - It's simple as 1, 2, 3!</HowTitle>
      {renderItems}
    </ComponentContainer>
  );
};

export default GridHowContainer;