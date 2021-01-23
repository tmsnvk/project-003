import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.label`
  display: block;
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const RadioLabel = ({ htmlFor, render }) => {
  return (
    <ComponentContainer htmlFor={htmlFor}>
      {render}
    </ComponentContainer>
  );
};

export default RadioLabel;