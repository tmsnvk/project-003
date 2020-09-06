import React from "react";
import styled from "styled-components";
import { ElementContainer, StyledIcon } from "components/commoncomponents";
import componentData from "./componentData";
import iconList from "utilities/iconList";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 95%;
  margin: 0 auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-end: 4;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 95%;
  }
`;

const ItemContainer = styled.div`
  text-align: left;
  padding: 0 0 1.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 100%;
  }
`;

const ItemTitle = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.fontSize.medium};
  text-transform: uppercase;
  padding: 0 0 2rem 0;

  &:after {
    content: " ";
    display: block;
    padding: 2rem 0 0 0;
    border-bottom: 2px solid ${props => props.theme.fontColor.secondary};
    width: 50%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const ItemText = styled.p`
  font-size: ${props => props.theme.fontSize.small};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const HowText = () => {
  const renderComponentData = componentData.map(({ text, id }) => {
    return (
      <ItemContainer key={id}>
        <StyledIcon icon={iconList.doubleRight}></StyledIcon>
        <ItemText>{text}</ItemText>
      </ItemContainer>
    );
  });

  return (
    <ComponentContainer>
      <ItemTitle>How does it work? - It's simple as 1 - 2 - 3!</ItemTitle>
      {renderComponentData}
    </ComponentContainer>
  );
};

export default HowText;