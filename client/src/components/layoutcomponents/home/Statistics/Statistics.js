import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ElementContainer } from "components/commoncomponents";
import componentData from "./componentData";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  margin: 0 auto;
  width: auto;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily.secondary};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    flex-direction: row;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 6;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-end: 5;
  }
`;

const YearUpdate = styled.div`
  color: ${props => props.theme.fontColor.alternate};
  font-size: ${props => props.theme.fontSize.large};
  text-align: center;
  margin: auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.xLarge};
    padding: 0 5rem 0 2rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    font-size: ${props => props.theme.fontSize.xxLarge};
  }
`;

const ItemContainer = styled.div`
  padding: 0 2rem 0 2rem;
  display: flex;
  flex-direction: row;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    display: block;
    text-align: center;
    padding: 0 1rem 0 1rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    padding: 0 2rem 0 2rem;
  }
`;

const ItemIcon = styled(FontAwesomeIcon)`
  font-size: ${props => props.theme.fontSize.xLarge};
  color: ${props => props.theme.fontColor.secondary};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.xxLarge};
  }
`;

const ItemFigure = styled.div`
  font-size: ${props => props.theme.fontSize.large};
  padding: 0 0 1rem 1rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    font-size: ${props => props.theme.fontSize.medium};
    padding: 0;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.xLarge};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    font-size: ${props => props.theme.fontSize.xxLarge};
  }
`;
  
const ItemText = styled.div`
  font-size: ${props => props.theme.fontSize.large};
  color: ${props => props.theme.fontColor.mainDark};
  padding: 0 0 0 2rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    font-size: ${props => props.theme.fontSize.medium};
    padding: 0;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.large};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const Statistics = () => {
  const renderComponentData = componentData.map(({ icon, text, number }) => {
    return (
       <ItemContainer key={text}>
        <ItemIcon icon={icon}></ItemIcon>
         <ItemFigure>{number}</ItemFigure>
         <ItemText>{text}</ItemText>
      </ItemContainer>
    );
  });

  return (
    <ComponentContainer>
      <YearUpdate>2020<br />STATS</YearUpdate>
      {renderComponentData}
    </ComponentContainer>
  );
};

export default Statistics;