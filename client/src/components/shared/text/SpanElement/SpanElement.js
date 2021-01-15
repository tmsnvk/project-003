import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.span`
  font-weight: 600;
`;

const SpanElement = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default SpanElement;