import React from "react";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";
import { PageTitle, ParagraphElement } from "components/shared/text";
import { HashLinkElement } from "components/shared/link";
import data from "./data";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 90%;
  margin: 15rem auto 0;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    width: auto;
    margin: 10rem auto 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 4;
  }
`;

const Header = () => {
  return (
    <ComponentContainer>
      <PageTitle data={data.title} />
      <ParagraphElement data={<>Take a look at our <HashLinkElement to={"/contact/#faq"} text={"FAQ"} /> or <HashLinkElement to={"/contact/#contactform"} text={"submit"} /> your own question!</>} align={"center"} fontsize />
    </ComponentContainer>
  )
};

export default Header;