import React from "react";
import styled from "styled-components";
import GridHeadImageContainer from "../layoutcomponents/pricing/GridHeadImageContainer";
import GridHeadTextContainer from "../layoutcomponents/pricing/GridHeadTextContainer";
import GridPricingContainer from "../layoutcomponents/pricing/GridPricingContainer";

const GridMainContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 2em;
  row-gap: 2rem;
  grid-template-areas:
  "grid-head-img grid-head-text grid-head-text ."
  "grid-pricing grid-pricing grid-pricing grid-pricing"
  ". grid-signup grid-signup ."
  "grid-footer grid-footer grid-footer grid-footer";
`;

const PricingLayout = () => {
  return (
    <GridMainContainer>
      <GridHeadImageContainer />
      <GridHeadTextContainer />
      <GridPricingContainer />
    </GridMainContainer>
  );
};

export default PricingLayout;