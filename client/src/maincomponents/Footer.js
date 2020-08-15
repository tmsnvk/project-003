import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { color, font, fontsize, mediaq } from "../variables/styling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterContainer = styled.footer`
  color: ${color.font.mainLight};
  background-color: ${color.background.secondary};
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
  padding: 0 2rem 0 2rem;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${fontsize.large};
  margin: 1rem 0 1rem 0;

  @media only screen and (min-width: ${mediaq.small}) {
    font-size: ${fontsize.extraLarge};
  }
`;

const Copyright = styled.div`
  color: ${color.font.mainLight};
  font-family: ${font.secondary};
  font-size: ${fontsize.small};
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin: 2rem 0 0 0;
`;

const CopyrightDiv = styled.p`
  padding: 0.5rem 0 0 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Router>
        <SocialLinks>
          <FooterLinks to="/"><StyledIcon icon={["fab", "facebook"]}></StyledIcon></FooterLinks>
          <FooterLinks to="/"><StyledIcon icon={["fab", "twitter"]}></StyledIcon></FooterLinks>
          <FooterLinks to="/"><StyledIcon icon={["fab", "instagram"]}></StyledIcon></FooterLinks>
          <FooterLinks to="/"><StyledIcon icon={["fab", "youtube"]}></StyledIcon></FooterLinks>
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