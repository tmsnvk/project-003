import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { color, font, fontsize, mediaq } from "../../variables/styling";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  margin: 0 auto;
  width: auto;
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${color.background.mainDark};
  box-shadow: 1px 2px 5px 1px ${color.shadow.main};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  font-weight: bold;

  @media only screen and (min-width: ${mediaq.small}) {
    flex-direction: row;
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 6;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    grid-column-end: 5;
  }
`;

const YearUpdate = styled.div`
  color: ${color.font.alternate};
  font-family: ${font.secondary};
  font-size: ${fontsize.large};
  text-align: center;
  margin: auto;

  @media only screen and (min-width: ${mediaq.medium}) {
    font-size: ${fontsize.xLarge};
    padding: 0 5rem 0 2rem;
  }

  @media only screen and (min-width: ${mediaq.xLarge}) {
    font-size: ${fontsize.xxLarge};
  }
`;

const StatContainer = styled.div`
  padding: 0 2rem 0 2rem;
  font-family: ${font.secondary};
  display: flex;
  flex-direction: row;

  @media only screen and (min-width: ${mediaq.small}) {
    display: block;
    text-align: center;
    padding: 0 1rem 0 1rem;
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    padding: 0 2rem 0 2rem;
  }
`;

const IconContainer = styled.div`
  color: ${color.font.secondary};
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${fontsize.xLarge};

  @media only screen and (min-width: ${mediaq.medium}) {
    font-size: ${fontsize.xxLarge};
  }
`;

const StatNumber = styled.div`
  font-size: ${fontsize.large};
  padding: 0 0 1rem 1rem;

  @media only screen and (min-width: ${mediaq.small}) {
    font-size: ${fontsize.medium};
    padding: 0;
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    font-size: ${fontsize.xLarge};
  }

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.xxLarge};
  }
`;
  
const StatText = styled.div`
  font-size: ${fontsize.large};
  color: ${color.font.mainDark};
  padding: 0 0 0 2rem;

  @media only screen and (min-width: ${mediaq.small}) {
    font-size: ${fontsize.medium};
    padding: 0;
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    font-size: ${fontsize.large};
  }

  @media only screen and (min-width: ${mediaq.xLarge}) {
    font-size: ${fontsize.large};
  }
`;

const Stats = () => {
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

  const renderItems = itemData.map(({ text, number }) => {
    return (
      <StatContainer key={text}>
        <IconContainer><StyledIcon icon={["fas", "caret-up"]}></StyledIcon></IconContainer>
        <StatNumber>{number}</StatNumber>
        <StatText>{text}</StatText>
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

export default Stats;