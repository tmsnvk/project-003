import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, font, fontsize, mediaq } from "../variables/styling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled.section`
  background-color: ${color.background.mainDark};
  font-weight: bold;
  color: ${color.font.secondary};
  box-shadow: 0px 2px 5px 0px ${color.shadow.main};
	position: fixed;
  z-index: 1;
  opacity: 0.8;
	width: 100%;
  padding: 1.5rem 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover {
    opacity: 1;
    transition: 0.5s;
  }

  @media only screen and (min-width: ${mediaq.small}) {
    flex-direction: row;
  }
`;

const LogoContainer = styled.div`
  font-size: ${fontsize.small};
  padding: 1rem 0 1rem 1rem;

  @media only screen and (min-width: ${mediaq.medium}) {
    padding: 0 0 0 5rem;
    font-size: ${fontsize.medium};
  }

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.large};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${fontsize.small};
  margin: 0 0.5rem 0 0;

  @media only screen and (min-width: ${mediaq.medium}) {
    font-size: ${fontsize.medium};
  }

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.large};
  }
`;

const LanguageLinksListContainer = styled.ul`
  list-style-type: none;
`;

const LanguageListItem = styled.li`
  display: inline;
  
  :last-child {
    color: ${color.font.alternate};
  }
`;

const LanguageLinks = styled(Link)`
  font-size: ${fontsize.small};
  color: inherit;
  padding: 2rem 1rem 2rem 1rem;
  letter-spacing: 0.2rem;
  text-decoration: none;
  cursor: pointer;

  @media only screen and (min-width: ${mediaq.medium}) {
    font-size: ${fontsize.medium};
  }

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.large};
  }
`;

const Navbar = () => {
  return (
    <ComponentContainer>
      <LogoContainer>
        <StyledIcon icon={["far", "dot-circle"]}></StyledIcon>CKPD - Your New Home!
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