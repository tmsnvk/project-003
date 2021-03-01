import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-align: center;
`;

const ParagraphElement = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default ParagraphElement;