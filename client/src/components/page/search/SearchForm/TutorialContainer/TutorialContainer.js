import React from "react";
import styled from "styled-components";
import { SectionElementContainer } from "components/shared/layout";
import { AnswerParagraphElement, QuestionParagraphElement } from "components/shared/text";
import data from "./data";

const ComponentContainer = styled(SectionElementContainer)`
  width: 90%;
  margin: 5rem 0 0 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: auto;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const TutorialContainer = () => {
  return (
    <ComponentContainer>
      <QuestionParagraphElement render={data.question} />
      <AnswerParagraphElement render={data.answer.pOne} />
      <AnswerParagraphElement render={data.answer.pTwo} />
      <AnswerParagraphElement render={data.answer.pThree} />
    </ComponentContainer>
  );
};

export default TutorialContainer;