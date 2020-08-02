import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-area: grid-text;
  margin: 0 0 5rem 0;
  padding: 1rem 1rem 1rem 1rem;
  background-color: var(--body-color-three);
  box-shadow: 1px 2px 5px 1px var(--body-shadow);
  border-radius: 1rem;
`;

const TextTitle = styled.h2`
  font-size: 1.5rem;
  padding: 1rem 0 1rem 0;
  text-align: center;
`;

const TextLink = styled(Link)`
  color: var(--font-color-three);
  font-size: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--font-color-four);
  }
`;

const GridTextContainer = () => {
  return (
    <ComponentContainer>
      <TextTitle>Like what you see? - Subscribe on our <TextLink to="/pricing">Pricing</TextLink> page and join our community immediately!</TextTitle>
      <TextTitle>Have further questions? - Get in touch with one of our customer agents on our <TextLink to="/contact">Contact</TextLink> page!</TextTitle>
    </ComponentContainer>
  );
};

export default GridTextContainer;