import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled.div`
  padding: 0.5rem 0.5rem 2rem 0.5rem;
`;

const Question = styled.h2`
  font-family: ${props => props.theme.fontFamily.secondary};
  font-size: ${props => props.theme.fontSize.medium};
  cursor: pointer;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const Answer = styled.p`
  padding: 0.5rem 0 0 0;
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.fontColor.secondary};
  overflow-y: ${props => props.hidden ? "visible" : "hidden"};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const AnswerIcon = styled(FontAwesomeIcon)`
  font-size: ${props => props.theme.fontSize.medium};
  margin: 0 1rem 0 0;
  transform: scaleX(-1);
`;

const FaqItem = ({ faq, i, toggle }) => {

  const handleToggle = () => toggle(i);

	return (
		<ComponentContainer key={faq.id} onClick={handleToggle}>
			<Question>{faq.question}</Question>
			<Answer hidden={!faq.open}><AnswerIcon icon={["fas", "reply"]}></AnswerIcon>{faq.answer}</Answer>
		</ComponentContainer>
	);
};

export default FaqItem;