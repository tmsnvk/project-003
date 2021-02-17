import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  padding: 0.5rem 0 0 0;
  font-size: ${({ theme }) => theme.fontSize.small};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const HeaderParagraphElement = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default HeaderParagraphElement;