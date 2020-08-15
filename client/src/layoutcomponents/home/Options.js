import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, fontsize, mediaq } from "../../variables/styling";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  margin: 0 auto;
  width: 90%;
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${color.background.mainDark};
  box-shadow: 1px 2px 5px 1px ${color.shadow.main};
  border-radius: 1rem;

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-column-end: 3;
    grid-row-start: 6;
    grid-row-end: 7;
    width: auto;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    grid-column-end: 5;
  }
`;

const TextTitle = styled.h2`
  font-size: ${fontsize.small};
  padding: 1rem 0 1rem 0;
  text-align: center;

  @media only screen and (min-width: ${mediaq.medium}) {
    font-size: ${fontsize.medium};
  }
`;

const TextLink = styled(Link)`
  color: ${color.font.secondary};
  font-size: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${color.font.alternate};
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    font-size: ${fontsize.medium};
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