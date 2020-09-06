import React from "react";
import styled from "styled-components";
import { ElementContainer, Image, InformationLink, InformationText } from "components/commoncomponents";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 90%;
  margin: 10rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-start: 2;
    grid-column-end: 4;
  }
`;

const SuccessContainer = () => {
  return (
    <ComponentContainer>
      <InformationText>Your form submission was successful. Shortly, you will receive an email regarding your payment and login details.</InformationText>
      <InformationText>Happy hunting!</InformationText>
      <InformationText>Click <InformationLink to="/">here</InformationLink> to return to our home page!</InformationText>
      <Image src="https://pokeres.bastionbot.org/images/pokemon/66.png" alt="machop" />
    </ComponentContainer>
  );
};

export default SuccessContainer;