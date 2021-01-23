import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.label`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.grayDark};
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 1rem 0;

  &:after {
    content: " ";
    padding: 3rem 0 0 0;
  	width: 80%;
    border-bottom: 2px solid ${({ theme }) => theme.color.grayDark};
    display: block;
		margin: 0 auto;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    align-self: center;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const FormLabel = ({ htmlFor, render }) => {
  return (
    <ComponentContainer htmlFor={htmlFor}>
      {render}
    </ComponentContainer>
  );
};

export default FormLabel;