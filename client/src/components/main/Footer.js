import React from "react";
import styled from "styled-components";
import { LinkElement } from "components/shared/link";
import { StyledIcon } from "components/shared/utilities";
import data from "./data";

const FooterContainer = styled.footer`
  width: 100%;
  height: 15rem;
  margin: 5rem 0 0 0;
  padding: 1rem 0 1rem 0;
  color: ${({ theme }) => theme.color.grayLight};
  background-color: ${({ theme }) => theme.color.blueDark};
  text-align: center;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CopyrightContainer = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  letter-spacing: 0.2rem;
`;

const TextElement = styled.p`
  padding: 0.5rem 0 0 0;

  &:first-of-type {
    padding: 0 0 0 0;
  }
`;

const Footer = () => {
  const renderLinks = data.footer.linkIcons.map(({ id, link, icon }) => {
    return (
      <LinkElement key={id} to={link} text={<><StyledIcon icon={icon} /></>} color={"grayLight"} hover={"grayLight"} opacity={"0.7"} padding={"1rem 1.5rem 2rem 1.5rem"} />
    );
  });

  const renderTexts = data.footer.copyright.map(({ id, text }) => {
    return (
      <TextElement key={id}>
        {text}
      </TextElement>
    );
  });

  return (
    <FooterContainer>
      <LinkContainer>
        {renderLinks}
      </LinkContainer>
      <CopyrightContainer>
        {renderTexts}
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;