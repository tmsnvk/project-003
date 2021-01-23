import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  color: ${({ theme }) => theme.color.redDark};
  font-size: ${({ theme }) => theme.fontSize.default};
  padding: 1rem 0 0 0;
`;

const ErrorMessage = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default ErrorMessage;