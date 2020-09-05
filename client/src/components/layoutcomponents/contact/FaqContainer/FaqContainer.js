import React, { useState } from "react";
import styled from "styled-components";
import FaqItem from "./FaqItem";
import ElementContainer from "components/commoncomponents/ElementContainer";
import componentData from "./componentData";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 60%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-end: 4;
    width: 60%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    width: 50%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 40%;
  }
`;

const FaqContainer = () => {
  const [faqs, setFaqs] = useState(componentData);

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

  const renderComponentData = faqs.map((faq, i) => (
    <FaqItem faq={faq} key={faq.id} i={i} toggle={toggle} />
  ));

  return (
    <ComponentContainer id="faq">
      {renderComponentData}
    </ComponentContainer>
  );
};

export default FaqContainer;