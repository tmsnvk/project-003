import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  color: ${({ theme }) => theme.color.warning};
  font-size: ${({ theme }) => theme.fontSize.default};
  padding: 1rem 0 0 0;
`;

const ErrorMessage = ({ errorMessage }) => {
  return (
    <ComponentContainer>
      {errorMessage}
    </ComponentContainer>
  );
};

export default ErrorMessage;