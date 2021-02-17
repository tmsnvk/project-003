import React from "react";
import styled from "styled-components";
import { FooterLinkElement, FooterParagraphElement } from "./footer";

const FooterContainer = styled.footer`
  width: 100%;
  height: 15rem;
  margin: 5rem 0 0 0;
  padding: 1rem 0 1rem 0;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  background-color: ${({ theme }) => theme.color.blueDark};
  color: ${({ theme }) => theme.color.grayLight};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinkElement />
      <FooterParagraphElement />
    </FooterContainer>
  );
};

export default Footer;