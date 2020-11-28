import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ElementContainer } from "components/shared/layout";
import iconList from "utilities/iconList/iconList";
import componentData from "./componentData";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    width: 60%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 4;
    width: 60%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    width: 50%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 40%;
  }
`;

const FaqItemContainer = styled.div`
  padding: 0.5rem 0.5rem 2rem 0.5rem;
`;

const Question = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  cursor: pointer;
`;

const Answer = styled.p`
  padding: 0.5rem 0 0 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.secondary};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const AnswerIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin: 0 1rem 0 0;
  transform: scaleX(-1);
`;

const FaqContainer = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const onTitleClick = (index) => {
    setActiveQuestion(index);
  };
  
  const renderComponentData = componentData.map((faq, index) => {
    const active = index === activeQuestion ? "" : "hidden";

    return (
      <FaqItemContainer key={faq.id} onClick={() => onTitleClick(index)}>
        <Question>{faq.question}</Question>
        <Answer hidden={active}><AnswerIcon icon={iconList.reply}></AnswerIcon>{faq.answer}</Answer>
      </FaqItemContainer>
    );
  });

  return (
    <ComponentContainer id="faq">
      {renderComponentData}
    </ComponentContainer>
  );
};

export default FaqContainer;