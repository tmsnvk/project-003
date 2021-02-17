import React from "react";
import styled from "styled-components";
import { SectionElementContainer } from "components/shared/layout";
import { HeaderTitleElement } from "components/shared/text";
import data from "./data";

const ComponentContainer = styled(SectionElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 15rem auto 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    margin: 10rem auto 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-end: 5;
  }
`;

const Image = styled.img`
  display: none;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    display: inline-block;
    width: 25%;
    transform: scaleX(-1);
    padding: 0 0 0 3rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    width: 15%;
  }
`;

const Header = () => {
  return (
    <ComponentContainer>
      <Image src={data.image.src} alt={data.image.alt} loading={"lazy"} />
      <HeaderTitleElement render={data.title} />
    </ComponentContainer>
  );
};

export default Header;