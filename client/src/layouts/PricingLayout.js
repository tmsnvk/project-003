import React from "react";
import styled from "styled-components";
import GridHeadContainer from "../layoutcomponents/pricing/GridHeadContainer";
import GridPricingContainer from "../layoutcomponents/pricing/GridPricingContainer";
import GridSignUpForm from "../layoutcomponents/pricing/GridSignUpForm";

const GridMainContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 5em;
  row-gap: 5rem;
  grid-template-areas:
  "grid-head grid-head grid-head grid-head"
  "grid-pricing grid-pricing grid-pricing grid-pricing"
  ". grid-signup grid-signup .";
`;

const PricingLayout = () => {
  return (
    <GridMainContainer>
      <GridHeadContainer />
      <GridPricingContainer />
      <GridSignUpForm />
    </GridMainContainer>
  );
};

export default PricingLayout;