import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconList from "utilities/iconList/iconList";

const FooterContainer = styled.footer`
  width: 100%;
  height: 15rem;
  color: ${({ theme }) => theme.color.primaryLight};
  background-color: ${({ theme }) => theme.color.secondary};
  text-align: center;
  margin: 5rem 0 0 0;
  padding: 1rem 0 1rem 0;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FooterLinks = styled(Link)`
  color: inherit;
  margin: 1rem 1.5rem 2rem 1.5rem;
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
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  letter-spacing: 0.2rem;
`;

const CopyrightMessage = styled.p`
  padding: 0.5rem 0 0 0;

  &:first-of-type {
    padding: 0 0 0 0;
  }
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
        <CopyrightMessage>&copy; 2020 by tamasnvk</CopyrightMessage>
        <CopyrightMessage>built with &#x2764;</CopyrightMessage>
        <CopyrightMessage>using react & pokeapi.co</CopyrightMessage> 
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;