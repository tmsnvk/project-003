import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { LayoutContainerDefault } from "components/shared/layout";
import { Header, SignupForm, SubscriptionOptions } from "components/page/pricing";

const LayoutContainer = styled(LayoutContainerDefault)`
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Pricing = () => {
  return (
    <LayoutContainer>
      <Helmet>
        <title>Pricing Options</title>
      </Helmet>
      <Header />
      <SubscriptionOptions />
      <SignupForm />
    </LayoutContainer>
  );
};

export default Pricing;