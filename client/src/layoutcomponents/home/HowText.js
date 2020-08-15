import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { color, fontsize, mediaq } from "../../variables/styling";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 90%;
  margin: 0 auto;
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${color.background.mainDark};
  box-shadow: 1px 2px 5px 1px ${color.shadow.main};
  border-radius: 1rem;

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    grid-column-end: 5;
  }

  @media only screen and (min-width: ${mediaq.xLarge}) {
    width: 95%;
  }
`;

const HowStepsContainer = styled.div`
  text-align: left;
  padding: 0 0 2rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (min-width: ${mediaq.xLarge}) {
    width: 100%;
  }
`;

const HowStepsTitle = styled.h2`
  text-align: center;
  font-size: ${fontsize.medium};
  text-transform: uppercase;
  padding: 0 0 2rem 0;

  &:after {
    content: " ";
    display: block;
    padding: 2rem 0 0 0;
    border-bottom: 2px solid ${color.font.secondary};
    width: 50%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.large};
  }
`;

const HowStepsIcon = styled.div`
  color: ${color.font.secondary};
  padding: 0 1rem 0 2rem;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${fontsize.large};
`;

const HowStepsText = styled.p`
  font-size: ${fontsize.small};

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.medium};
  }
`;

const HowText = () => {
  const itemData = [
    {
      text: "Request a subscription, register your Pokedex ID & immediately start using the search function.",
      id: 1
    },
    {
      text: "Receive always up-to-date information about any given Kanto Pokemon.",
      id: 2
    },
    {
      text: "Take part in our buzzing online community and get invited to our offline meetups - exhange valuable information with your peers and share how your hunts turn out.",
      id: 3
    },
    {
      text: "Test your mettle in our regular community competitions & win great prizes.",
      id: 4
    },
    {
      text: "Contact our 24/7 support team with any issue.",
      id: 5
    }
  ]

  const renderItems = itemData.map(({ text, id }) => {
    return (
      <HowStepsContainer key={id}>
        <HowStepsIcon><StyledIcon icon={["fas", "angle-double-right"]}></StyledIcon></HowStepsIcon>
        <HowStepsText>{text}</HowStepsText>
      </HowStepsContainer>
    );
  });

  return (
    <ComponentContainer>
      <HowStepsTitle>How does it work? - It's simple as 1 - 2 - 3!</HowStepsTitle>
      {renderItems}
    </ComponentContainer>
  );
};

export default HowText;