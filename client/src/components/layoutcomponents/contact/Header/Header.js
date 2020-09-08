import React from "react";
import styled from "styled-components";
import { ElementContainer, HeaderMainTitle, HeaderMessage, InformationHashLink } from "components/commoncomponents";
const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 90%;
  margin: 15rem auto 0;
  text-align: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    margin: 10rem auto 0;
    width: auto;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-end: 4;
  }
`;

const Header = () => {
  return (
    <ComponentContainer>
      <HeaderMainTitle>How we can help?</HeaderMainTitle>
      <HeaderMessage>Take a look at our <InformationHashLink to="/contact/#faq">FAQ</InformationHashLink> or <InformationHashLink to="/contact/#contactform">submit</InformationHashLink> your own question!</HeaderMessage>
    </ComponentContainer>
  )
};

export default Header;