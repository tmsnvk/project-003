import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconList from "utilities/iconList";

const ComponentContainer = styled.header`
  color: ${props => props.theme.fontColor.secondary};
  font-weight: bold;
  opacity: 0.8;
  background-image: ${props => props.theme.backgroundColor.gradient};
  box-shadow: 0px 2px 5px 0px ${props => props.theme.shadowColor.main};
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

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    flex-direction: row;
  }
`;

const LogoContainer = styled(Link)`
  color: ${props => props.theme.fontColor.secondary};
  font-size: ${props => props.theme.fontSize.small};
  padding: 1rem 0 1rem 1rem;
  text-decoration: none;
  cursor: pointer;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    padding: 0 0 0 5rem;
    font-size: ${props => props.theme.fontSize.medium};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${props => props.theme.fontSize.small};
  margin: 0 0.5rem 0 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.medium};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const LanguageLinksListContainer = styled.ul`
  list-style-type: none;
`;

const LanguageListItem = styled.li`
  display: inline;
  
  &:nth-child(2) {
    color: ${props => props.theme.fontColor.alternate};
  }
`;

const LanguageLinks = styled(Link)`
  font-size: ${props => props.theme.fontSize.small};
  color: inherit;
  padding: 2rem 1rem 2rem 1rem;
  letter-spacing: 0.2rem;
  text-decoration: none;
  cursor: pointer;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.medium};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    font-size: ${props => props.theme.fontSize.large};
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