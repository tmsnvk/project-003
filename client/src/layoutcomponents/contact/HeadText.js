import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { color, font, fontsize, mediaq } from "../../variables/styling";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 90%;
  margin: 10rem auto 0;
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${color.background.mainDark};
  box-shadow: 1px 2px 5px 1px ${color.shadow.main};
  border-radius: 1rem;

  @media only screen and (min-width: ${mediaq.small}) {
    width: auto;
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-column-end: 4;
  }
`;

const QuestionText = styled.h1`
  font-family: ${font.secondary};
  font-size: ${fontsize.large};
  color: ${color.font.secondary};
  text-align: center;
  padding: 1rem 0 2.5rem 0;

  @media only screen and (min-width: ${mediaq.extraSmall}) {
    font-size: ${fontsize.xLarge};
  } 
`;

const AnswerText = styled.h2`
  font-family: ${font.secondary};
  font-size: ${fontsize.medium};
  text-align: center;
`;

const ContactLink = styled(Link)`
  color: ${color.font.secondary};
`;


const HeadText = () => {
  return (
    <ComponentContainer>
      <QuestionText>How we can help?</QuestionText>
      <AnswerText>Take a look at our <ContactLink to="/contact/#faq">FAQ</ContactLink> or <ContactLink to="/contact/#contactform">submit</ContactLink> your own question!</AnswerText>
    </ComponentContainer>
  )
};

export default HeadText;