import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { LayoutContainerDefault } from "components/shared/layout";
import { Header, SignupForm, SubscriptionOptions } from "components/page/pricing";
import { usePageTracking } from "utilities/analytics/analyticsTracking";
import data from "./data";

const LayoutContainer = styled(LayoutContainerDefault)`
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Pricing = () => {
  usePageTracking(data.title.pricing);

  return (
    <LayoutContainer>
      <Helmet>
        <title>{data.title.pricing}</title>
      </Helmet>
      <Header />
      <SubscriptionOptions />
      <SignupForm />
    </LayoutContainer>
  );
};

export default Pricing;