import React from "react";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";
import { ParagraphElement } from "components/shared/text";
import { LinkElement } from "components/shared/link";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  margin: 0 auto;
  width: 90%;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    grid-row-start: 6;
    grid-row-end: 7;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-end: 5;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: auto;
  }
`;

const Options = () => {
  return (
    <ComponentContainer>
      <ParagraphElement data={<>Want to know what we offer?<br />Read below and visit the appropriate link to get an answer for your questions!</>} align={"center"} fontsize padding={"0 0 1rem 0"} />
      <ParagraphElement data={<>Like what you see? - Subscribe on our <LinkElement to={"/pricing"} text={"Pricing"} /> page and join our community immediately!</>} align={"center"} fontsize padding={"0 0 1rem 0"} />
      <ParagraphElement data={<>Have further questions? - Visit our FAQ or get in touch with one of our customer agents on our <LinkElement to={"/contact"} text={"Contact"} /> page!</>} align={"center"} fontsize />
    </ComponentContainer>
  );
};

export default Options;