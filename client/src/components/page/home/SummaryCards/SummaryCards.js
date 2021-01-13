import React from "react";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";
import { Paragraph } from "components/shared/text";
import { StyledIcon } from "components/shared/utilities";
import data from "./data";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    width: 80%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-end: 5;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    flex-wrap: nowrap;
    width: 95%;
  }
`;

const Container = styled(ElementContainer)`
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

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    margin: 2rem 1rem 0 1rem;
    width: 45%;

    &:last-of-type {
      margin: 2rem 1rem 0 1rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 100%;
  }
`;

const Title = styled.h3`
  padding: 0 0 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  &:after {
    content: " ";
    display: block;
    padding: 1.5rem 0 0 0;
    border-bottom: 2px solid ${({ theme }) => theme.color.blueDark};
    width: 25%;
    margin: 0 auto;
  }
`;

const Summary = () => {
  const renderComponentData = data.map(({ id, icon, title, paragraphs }) => {
    return (
      <Container key={id}>
        <StyledIcon icon={icon} />
        <Title>{title}</Title>
        <Paragraph data={paragraphs.one} padding={"0 0 1rem 0"} />
        {paragraphs.two !== "" ? <Paragraph data={paragraphs.two} padding={"0 0 1rem 0"} /> : null}
      </Container>
    );
  });

  return (
    <ComponentContainer>
      {renderComponentData}
    </ComponentContainer>
  );
};

export default Summary;