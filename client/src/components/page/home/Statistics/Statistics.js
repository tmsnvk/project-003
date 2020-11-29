import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ElementContainer } from "components/shared/layout";
import iconList from "utilities/iconList/iconList";
import data from "./data";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  margin: 0 auto;
  width: auto;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    flex-direction: row;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 6;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-end: 5;
  }
`;

const YearUpdate = styled.p`
  color: ${({ theme }) => theme.color.alternate};
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: center;
  margin: auto;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    padding: 0 5rem 0 2rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }
`;

const Container = styled.div`
  padding: 0 2rem 0 2rem;
  display: flex;
  flex-direction: row;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    display: block;
    padding: 0 1rem 0 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    justify-content: center;
    text-align: center;
    padding: 0 2rem 0 2rem;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  color: ${({ theme }) => theme.color.secondary};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }
`;

const Figure = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  padding: 0 0 1rem 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    padding: 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }
`;
  
const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.color.primaryDark};
  padding: 0 0 0 2rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    padding: 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const Statistics = () => {
  const renderComponentData = data.map(({ id, number, text }) => {
    return (
       <Container key={id}>
        <Icon icon={iconList.caretUp}></Icon>
         <Figure>{number}</Figure>
         <Text>{text}</Text>
      </Container>
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