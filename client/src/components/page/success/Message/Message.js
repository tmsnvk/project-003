import React from "react";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";
import { InfoLink, InfoText, InfoTitle } from "components/shared/information";
import { Image } from "components/shared/utilities";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 90%;
  margin: 15rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

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
      <InfoTitle>
        Your form submission was successful. You will shortly receive an email regarding your payment and login details.
      </InfoTitle>
      <InfoText>
        Happy hunting!
      </InfoText>
      <InfoText>
        Click <InfoLink to="/">here</InfoLink> to return to our home page!
      </InfoText>
      <Image src="https://pokeres.bastionbot.org/images/pokemon/66.png" alt="machop" loading="lazy" />
    </ComponentContainer>
  );
};

export default Message;