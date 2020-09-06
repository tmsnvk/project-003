import React from "react";
import styled from "styled-components";
import { ElementContainer, InformationText, StyledIcon } from "components/commoncomponents";
import iconList from "utilities/iconList";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: auto;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const LoadingSpinner = ({ message }) => {
  return (
    <ComponentContainer>
      <StyledIcon icon={iconList.spinner} spin></StyledIcon>
      <InformationText>{message}</InformationText>
    </ComponentContainer>
  );
};

export default LoadingSpinner;