import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  padding: 0 0 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.1rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const BottomParagraphElement = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default BottomParagraphElement;