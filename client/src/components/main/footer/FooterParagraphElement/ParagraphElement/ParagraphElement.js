import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  padding: 0.5rem 0 0 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  letter-spacing: 0.2rem;
`;

const ParagraphElement = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default ParagraphElement;