import React from "react";
import styled from "styled-components";
import ErrorContainer from "components/layoutcomponents/error/ErrorContainer";

const LayoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 5em;
  grid-row-gap: 5rem;
  
  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ErrorLayout = () => {
  return (
    <LayoutContainer>
      <ErrorContainer />
    </LayoutContainer>
  );
};

export default ErrorLayout;