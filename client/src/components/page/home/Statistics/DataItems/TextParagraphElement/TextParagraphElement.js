import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: center;
  font-weight: 600;
`;

const TextParagraphElement = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default TextParagraphElement;