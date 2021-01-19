import React from "react";
import styled from "styled-components";
import { SectionElementContainer } from "components/shared/layout";
import { PageTitleElement, ParagraphElement } from "components/shared/text";
import { Image } from "components/shared/utilities";
import data from "./data";

const ComponentContainer = styled(SectionElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 90%;
  margin: 15rem auto 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    margin: 10rem auto 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-start: 2;
    grid-column-end: 4;
  }
`;

const Message = () => {
  return (
    <ComponentContainer>
      <PageTitleElement render={data.title} />
      <ParagraphElement render={data.message.pOne} align fontsize />
      <ParagraphElement render={data.message.pTwo} align fontsize />
      <Image src={"https://pokeres.bastionbot.org/images/pokemon/66.png"} alt={"machop image"} loading={"lazy"} />
    </ComponentContainer>
  );
};

export default Message;