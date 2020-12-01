import React from "react";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";
import { InfoTitle } from "components/shared/information";
import { StyledIcon } from "components/shared/utilities";
import iconList from "utilities/iconList/iconList";

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

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    width: auto;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const LoadingSpinner = ({ loadingMessage }) => {
  return (
    <ComponentContainer>
      <StyledIcon icon={iconList.spinner} spin></StyledIcon>
      <InfoTitle>{loadingMessage}</InfoTitle>
    </ComponentContainer>
  );
};

export default LoadingSpinner;