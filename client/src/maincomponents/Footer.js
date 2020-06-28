import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GridFooterContainer = styled.section`
  grid-area: grid-footer;
`;

const FooterContainer = styled.footer`
  color: var(--font-color-secondary);
  background-color: var(--body-color-secondary);
  text-align: center;
  padding: 0 0 1rem 0;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FooterLinks = styled(Link)`
  color: inherit;
  font-size: 2rem;
  padding: 0 2rem 0 2rem;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  margin: 1rem 0 1rem 0;
`;

const Copyright = styled.div`

`;

const CopyrightDiv = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 0.15rem;
`;

const Footer = () => {
  return (
    <GridFooterContainer>
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
          <CopyrightDiv>using react & APINAME</CopyrightDiv> 
        </Copyright>
      </FooterContainer>
    </GridFooterContainer>
  );
};

export default Footer;