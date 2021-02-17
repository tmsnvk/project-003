import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledIcon from "../StyledIcon";

const ComponentContainer = styled(Link)`
  letter-spacing: 0.1rem;
  cursor: pointer;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 0 0 0 5rem;
  }
`;

const LinkElement = ({ link, render: { icon, text }}) => {
  return (
    <ComponentContainer to={link}>
      <StyledIcon icon={icon} />
      {text}
    </ComponentContainer>
  );
};

export default LinkElement;