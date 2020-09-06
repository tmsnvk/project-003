import React from "react";
import styled from "styled-components";
import { ElementContainer, StyledIcon } from "components/commoncomponents";
import componentData from "./componentData";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 80%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-end: 3;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-end: 5;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    flex-wrap: nowrap;
    width: 95%;
  }
`;

const ItemContainer = styled(ElementContainer)`
  width: 95%;
  margin: 0 auto 2.5rem;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  &:last-of-type {
    margin: 0 auto;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    margin: 2rem 1rem 0 1rem;
    width: 45%;

    &:last-of-type {
      margin: 2rem 1rem 0 1rem;
    }
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 100%;
  }
`;

const ItemTitle = styled.h3`
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.fontFamily.secondary};
  padding: 0 0 2rem 0;

  &:after {
    content: " ";
    display: block;
    padding: 1.5rem 0 0 0;
    border-bottom: 2px solid ${props => props.theme.fontColor.secondary};
    width: 25%;
    margin: 0 auto;
  }
`;

const ItemParagraph = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  padding: 0 0 1rem 0;
`;

const Summary = () => {
  const renderComponentData = componentData.map(({ icon, title, paragraphs }) => {
    return (
      <ItemContainer key={icon}>
        <StyledIcon icon={icon}></StyledIcon>
        <ItemTitle>{title}</ItemTitle>
        <ItemParagraph>{paragraphs.one}</ItemParagraph>
        <ItemParagraph>{paragraphs?.two}</ItemParagraph>
      </ItemContainer>
    );
  });

  return (
    <ComponentContainer>
      {renderComponentData}
    </ComponentContainer>
  );
};

export default Summary;