import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  padding: 0 0 1rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.small};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const ParagraphElement = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default ParagraphElement;