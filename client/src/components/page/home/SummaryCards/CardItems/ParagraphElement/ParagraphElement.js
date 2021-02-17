import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  padding: 0 0 1rem 0;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const ParagraphElement = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default ParagraphElement;