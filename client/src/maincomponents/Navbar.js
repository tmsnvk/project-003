import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarContainer = styled.section`
  background-color: var(--body-color-three);
  font-weight: bold;
  color: var(--font-color-three);
  box-shadow: 0px 2px 5px 0px var(--body-shadow);
	position: fixed;
  z-index: 1;
  opacity: 0.8;
	width: 100%;
  padding: 1.5rem 0 1.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:hover {
    opacity: 1;
    transition: 0.5s;
  }
`;

const Logo = styled.div`
  padding: 0 0 0 5rem;
  font-size: 2rem;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin: 0 0.5rem 0 0;
`;

const LanguageLinksList = styled.ul`
  list-style-type: none;
`;

const LanguageListItem = styled.li`
  display: inline;
  
  :last-child {
    color: var(--font-color-four);
  }
`;

const LanguageLinks = styled(Link)`
  font-size: 2rem;
  color: inherit;
  text-decoration: none;
  letter-spacing: 0.2rem;
  cursor: pointer;
  margin: 2rem 2rem 2rem 2rem;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <StyledIcon icon={["far", "dot-circle"]}></StyledIcon>CKPD - Your New Home!
      </Logo>
      <LanguageLinksList> 
        <LanguageListItem><LanguageLinks to="/">Home</LanguageLinks></LanguageListItem>
        <LanguageListItem><LanguageLinks to="/pricing">Pricing</LanguageLinks></LanguageListItem>
        <LanguageListItem><LanguageLinks to="/search">Search</LanguageLinks></LanguageListItem>
        <LanguageListItem><LanguageLinks to="/contact">Contact</LanguageLinks></LanguageListItem>
      </LanguageLinksList>
    </NavbarContainer>
  );
};

export default Navbar;