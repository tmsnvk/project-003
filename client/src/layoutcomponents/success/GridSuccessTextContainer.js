import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComponentContainer = styled.div`
  grid-area: grid-success;
  margin: 10rem 0 5rem 0;
  padding: 1rem 1rem 1rem 1rem;
  background-color: var(--body-color-three);
  box-shadow: 1px 2px 5px 1px var(--body-shadow);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Message = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 1rem 1rem 1rem;
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

const Image = styled.img`
  width: 50%;
  transform: scaleX(-1);
  padding: 5rem 1rem 1rem 1rem;
  align-self: center;
`;

const GridSuccessTextContainer = () => {
  return (
    <ComponentContainer>
      <Message>Your form submission was successful. Shortly, you will receive an email regarding your payment and login details.</Message>
      <Message>Happy hunting!</Message>
      <Message>Click <TextLink to="/">here</TextLink> to return to our home page!</Message>
      <Image src="https://pokeres.bastionbot.org/images/pokemon/66.png" alt="machop" />
    </ComponentContainer>
  );
};

export default GridSuccessTextContainer;