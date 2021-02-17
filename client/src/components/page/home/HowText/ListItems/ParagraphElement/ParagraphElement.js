import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
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