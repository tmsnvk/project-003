import React from "react";
import styled from "styled-components";
import { DivElementContainer } from "components/shared/layout";
import ParagraphElement from "./ParagraphElement";
import { ParagraphTitleElement } from "components/shared/text";
import StyledIcon from "./StyledIcon";
import data from "./data";

const Container = styled(DivElementContainer)`
  width: 95%;
  margin: 0 auto 2.5rem;
  text-align: center;

  &:hover {
    transform: scale(1.025);
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

const CardItems = () => {
  const renderSummaryCards = data.map(({ id, icon, title, paragraphs }) => {
    return (
      <Container key={id}>
        <StyledIcon icon={icon} />
        <ParagraphTitleElement render={title} />
        <ParagraphElement render={paragraphs.one} />
        {paragraphs.two !== "" ? (<ParagraphElement render={paragraphs.two} />) : (null)}
      </Container>
    );
  });

  return (
    <>
      {renderSummaryCards}
    </>
  );
};

export default CardItems;