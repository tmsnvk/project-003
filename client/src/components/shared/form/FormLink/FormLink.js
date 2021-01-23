import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComponentContainer = styled(Link)`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const FormLink = ({ to, render }) => {
  return (
    <ComponentContainer to={to}>
      {render}
    </ComponentContainer>
  );
};

export default FormLink;