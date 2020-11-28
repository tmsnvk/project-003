import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconList from "utilities/iconList/iconList";

const FooterContainer = styled.footer`
  color: ${({ theme }) => theme.color.primaryLight};
  background-color: ${({ theme }) => theme.color.secondary};
  text-align: center;
  margin: 5rem 0 0 0;
  padding: 1rem 0 1rem 0;
  width: 100%;
  height: 20rem;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FooterLinks = styled(Link)`
  color: inherit;
  margin: 2rem 2rem 4rem 2rem;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const FooterIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.xLarge};
`;

const Copyright = styled.div`
  color: ${({ theme }) => theme.color.primaryLight};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bold;
  letter-spacing: 0.2rem;
`;

const CopyrightDiv = styled.p`
  padding: 0.5rem 0 0 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Router>
        <SocialLinks>
          <FooterLinks to="/"><FooterIcon icon={iconList.facebook}></FooterIcon></FooterLinks>
          <FooterLinks to="/"><FooterIcon icon={iconList.twitter}></FooterIcon></FooterLinks>
          <FooterLinks to="/"><FooterIcon icon={iconList.instagram}></FooterIcon></FooterLinks>
          <FooterLinks to="/"><FooterIcon icon={iconList.youtube}></FooterIcon></FooterLinks>
        </SocialLinks>
      </Router>
      <Copyright>
        <CopyrightDiv>&copy; 2020 by tamasnvk</CopyrightDiv>
        <CopyrightDiv>built with &#x2764;</CopyrightDiv>
        <CopyrightDiv>using react & pokeapi.co</CopyrightDiv> 
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;