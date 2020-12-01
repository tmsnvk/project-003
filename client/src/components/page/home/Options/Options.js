import React from "react";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";
import { InfoLink, InfoText, InfoTitle } from "components/shared/information";

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
      <InfoTitle>
        Want to know what we offer?<br />Take a look at the following paragraphs and visit the appropriate link to get an answer for your questions!
      </InfoTitle>
      <InfoText>
        Like what you see? - Subscribe on our <InfoLink to="/pricing">Pricing</InfoLink> page and join our community immediately!
      </InfoText>
      <InfoText>
        Have further questions? - Visit our FAQ or get in touch with one of our customer agents on our <InfoLink to="/contact">Contact</InfoLink> page!
      </InfoText>
    </ComponentContainer>
  );
};

export default Options;