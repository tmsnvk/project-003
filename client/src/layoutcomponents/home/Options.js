import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ElementContainer from "../../commoncomponents/ElementContainer";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  margin: 0 auto;
  width: 90%;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-end: 3;
    grid-row-start: 6;
    grid-row-end: 7;
    width: auto;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-end: 5;
  }
`;

const TextTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.small};
  padding: 1rem 0 1rem 0;
  text-align: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const TextLink = styled(Link)`
  color: ${props => props.theme.fontColor.secondary};
  font-size: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.fontColor.alternate};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const Options = () => {
  return (
    <ComponentContainer>
      <TextTitle>Like what you see? - Subscribe on our <TextLink to="/pricing">Pricing</TextLink> page and join our community immediately!</TextTitle>
      <TextTitle>Have further questions? - Get in touch with one of our customer agents on our <TextLink to="/contact">Contact</TextLink> page!</TextTitle>
    </ComponentContainer>
  );
};

export default Options;