import React from "react";
import styled from "styled-components";
import { mediaq } from "../variables/styling";
import Overview from "../layoutcomponents/pricing/Overview";
import SubscriptionOptions from "../layoutcomponents/pricing/SubscriptionOptions";
import SignupForm from "../layoutcomponents/pricing/SignupForm";

const LayoutContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  column-gap: 5em;
  row-gap: 5rem;

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const PricingLayout = () => {
  return (
    <LayoutContainer>
      <Overview />
      <SubscriptionOptions />
      {/* <SignupForm /> */}
    </LayoutContainer>
  );
};

export default PricingLayout;