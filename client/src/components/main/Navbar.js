import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconList from "utilities/icons/iconList";

const ComponentContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
	width: 100%;
	position: fixed;
  z-index: 1;
  padding: 2rem 0 2rem 0;
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  background-image: ${({ theme }) => theme.color.gradient};
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.shadow};
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transition: 0.5s;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    flex-direction: row;
  }
`;

const LogoContainer = styled(Link)`
  padding: 0 0 1rem 0;
  letter-spacing: 0.1rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 0 0 0 5rem;
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  margin: 0 0.5rem 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const LinkContainer = styled.div`
  letter-spacing: 0.3rem;
`;

const LinkElement = styled(Link)`
  padding: 2rem 1rem 2rem 1rem;
  display: inline;

  &:nth-child(2) {
    color: ${({ theme }) => theme.color.orangeDark};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const Navbar = () => {
  return (
    <ComponentContainer>
      <LogoContainer to={"/"}>
        <StyledIcon icon={iconList.dotCircle}></StyledIcon>CKPD - Your New Home
      </LogoContainer>
      <LinkContainer> 
        <LinkElement to={"/"}>Home</LinkElement>
        <LinkElement to={"/pricing"}>Pricing</LinkElement>
        <LinkElement to={"/search"}>Search</LinkElement>
        <LinkElement to={"/contact"}>Contact</LinkElement>
      </LinkContainer>
    </ComponentContainer>
  );
};

export default Navbar;