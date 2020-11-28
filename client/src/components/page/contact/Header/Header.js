import React from "react";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";
import { Title } from "components/shared/header";
import { InformationHashLink } from "components/shared";
import data from "components/page/contact/Header/data.json";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 90%;
  margin: 15rem auto 0;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    margin: 10rem auto 0;
    width: auto;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 4;
  }
`;

const Message = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const Header = () => {
  return (
    <ComponentContainer>
      <Title data={data.title} />
      <Message>Take a look at our <InformationHashLink to="/contact/#faq">FAQ</InformationHashLink> or <InformationHashLink to="/contact/#contactform">submit</InformationHashLink> your own question!</Message>
    </ComponentContainer>
  )
};

export default Header;