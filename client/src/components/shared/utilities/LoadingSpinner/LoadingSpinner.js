import React from "react";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";
import { ParagraphTitle } from "components/shared/text";
import { StyledIcon } from "components/shared/utilities";
import iconList from "utilities/icons/iconList";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;

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
      <StyledIcon icon={iconList.spinner} spin />
      <ParagraphTitle data={loadingMessage} />
    </ComponentContainer>
  );
};

export default LoadingSpinner;