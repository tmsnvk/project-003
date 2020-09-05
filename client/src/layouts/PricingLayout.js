import React from "react";
import styled from "styled-components";
import Header from "components/layoutcomponents/pricing/Header";
import SubscriptionOptions from "components/layoutcomponents/pricing/SubscriptionOptions";
import SignupForm from "components/layoutcomponents/pricing/SignupForm";

const LayoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 5rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const PricingLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <SubscriptionOptions />
      <SignupForm />
    </LayoutContainer>
  );
};

export default PricingLayout;