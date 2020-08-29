import React, { useState } from "react";
import styled from "styled-components";
import FaqItem from "./FaqItem";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 90%;
  margin: 0 auto;
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  box-shadow: 1px 2px 5px 1px ${props => props.theme.shadowColor.main};
  border-radius: 1rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 60%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-end: 4;
    width: 60%;
  }
`;

const FaqContainer = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Answer #1?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      id: 1,
      open: false
    },
    {
      question: "What is Answer #2?",
      answer: "Diam vel quam elementum pulvinar etiam non quam lacus. Sed faucibus turpis in eu mi bibendum neque.",
      id: 2,
      open: false
    },
    {
      question: "What is Answer #3?",
      answer: "Dolor morbi non arcu risus quis varius quam quisque id. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.",
      id: 3,
      open: false
    },
    {
      question: "What is Answer #4?",
      answer: "Sapien et ligula ullamcorper malesuada proin. Malesuada bibendum arcu vitae elementum curabitur. Leo urna molestie at elementum eu facilisis sed odio. A iaculis at erat pellentesque.",
      id: 4,
      open: false
    },
    {
      question: "What is Answer #5?",
      answer: "Mattis rhoncus urna neque viverra justo nec ultrices dui.",
      id: 5,
      open: false
    }
  ]);

  const toggle = (index) => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }

      return faq;
    }));
  };

  const renderData = faqs.map((faq, i) => (
    <FaqItem faq={faq} key={faq.id} i={i} toggle={toggle} />
  ));

  return (
    <ComponentContainer id="faq">
      {renderData}
    </ComponentContainer>
  );
};

export default FaqContainer;