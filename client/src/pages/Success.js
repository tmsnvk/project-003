import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { LayoutContainerDefault } from "components/shared/layout";
import { Message } from "components/page/success";
import { usePageTracking } from "utilities/analytics/analyticsTracking";
import data from "./data";

const LayoutContainer = styled(LayoutContainerDefault)`
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Success = () => {
  usePageTracking("Success");

  return (
    <LayoutContainer>
      <Helmet>
        <title>{data.title.success}</title>
      </Helmet>
      <Message />
    </LayoutContainer>
  );
};

export default Success;