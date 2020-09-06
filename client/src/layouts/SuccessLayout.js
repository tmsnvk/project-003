import React from "react";
import styled from "styled-components";
import { SuccessContainer } from "components/layoutcomponents/success";

const LayoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 5rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const SuccessLayout = () => {
  return (
    <LayoutContainer>
      <SuccessContainer />
    </LayoutContainer>
  );
};

export default SuccessLayout;