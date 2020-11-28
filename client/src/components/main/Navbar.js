import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconList from "utilities/iconList/iconList";

const ComponentContainer = styled.header`
  color: ${({ theme }) => theme.color.secondary};
  font-weight: bold;
  opacity: 0.8;
  background-image: ${({ theme }) => theme.color.gradient};
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.shadow};
  padding: 2rem 0 2rem 0;
	width: 100%;
	position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover {
    opacity: 1;
    transition: 0.5s;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    flex-direction: row;
  }
`;

const LogoContainer = styled(Link)`
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 1rem 0 1rem 1rem;
  text-decoration: none;
  cursor: pointer;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 0 0 0 5rem;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: 0 0.5rem 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: $${({ theme }) => theme.fontSize.medium};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const LanguageLinksListContainer = styled.ul`
  list-style-type: none;
`;

const LanguageListItem = styled.li`
  display: inline;
  
  &:nth-child(2) {
    color: ${({ theme }) => theme.color.alternate};
  }
`;

const LanguageLinks = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: inherit;
  padding: 2rem 1rem 2rem 1rem;
  letter-spacing: 0.2rem;
  text-decoration: none;
  cursor: pointer;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const Navbar = () => {
  return (
    <ComponentContainer>
      <LogoContainer to="/">
        <StyledIcon icon={iconList.dotCircle}></StyledIcon>CKPD - Your New Home!
      </LogoContainer>
      <LanguageLinksListContainer> 
        <LanguageListItem><LanguageLinks to="/">Home</LanguageLinks></LanguageListItem>
        <LanguageListItem><LanguageLinks to="/pricing">Pricing</LanguageLinks></LanguageListItem>
        <LanguageListItem><LanguageLinks to="/search">Search</LanguageLinks></LanguageListItem>
        <LanguageListItem><LanguageLinks to="/contact">Contact</LanguageLinks></LanguageListItem>
      </LanguageLinksListContainer>
    </ComponentContainer>
  );
};

export default Navbar;