import React from "react";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";
import { StyledIcon } from "components/shared/utilities";
import iconList from "utilities/iconList/iconList";
import data from "./data";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 95%;
  margin: 0 auto;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-end: 4;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 95%;
  }
`;

const Container = styled.div`
  text-align: left;
  padding: 0 0 1.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 100%;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-transform: uppercase;
  padding: 0 0 2rem 0;

  &:after {
    content: " ";
    display: block;
    padding: 2rem 0 0 0;
    border-bottom: 2px solid ${({ theme }) => theme.color.secondary};
    width: 50%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const HowText = () => {
  const renderComponentData = data.steps.map(({ id, text }) => {
    return (
      <Container key={id}>
        <StyledIcon icon={iconList.doubleRight}></StyledIcon>
        <Text>{text}</Text>
      </Container>
    );
  });

  return (
    <ComponentContainer>
      <Title>{data.title}</Title>
      {renderComponentData}
    </ComponentContainer>
  );
};

export default HowText;