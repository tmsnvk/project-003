import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const SpanElement = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default SpanElement;