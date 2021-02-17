import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledIcon from "../StyledIcon";

const ComponentContainer = styled(Link)`
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  letter-spacing: 0.2rem;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const LinkElement = ({ link, icon }) => {
  return (
    <ComponentContainer to={link}>
      <StyledIcon icon={icon} />
    </ComponentContainer>
  );
};

export default LinkElement;