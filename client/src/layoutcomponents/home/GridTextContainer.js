import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-area: grid-text;
  margin: 3rem 3rem 6rem 3rem;
  padding: 1rem 1rem 1rem 1rem;
  background-color: var(--body-color-tertiary);
  box-shadow: 1px 2px 5px 1px var(--body-shadow);
`;

const TextTitle = styled.h2`
  font-size: 1.8rem;
  padding: 1rem 0 1rem 0;
  text-align: center;
`;

const TextLink = styled(Link)`
  color: var(--font-color-tertiary);
  font-size: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--font-color-primary);
    padding-bottom: 0.2rem;
    border-bottom: 0.3rem solid var(--font-color-primary);
    transition: border-bottom 0.3s, color 0.3s;
  }
`;

const GridTextContainer = () => {

  return (
    <ComponentContainer>
      <TextTitle>Like what you see? Subscribe on our <TextLink to="/pricing">Pricing</TextLink> page!</TextTitle>
      <TextTitle>Have further questions? Get in touch with a customer agent on our <TextLink to="/contact">Contact</TextLink> page!</TextTitle>
    </ComponentContainer>
  );
};

export default GridTextContainer;