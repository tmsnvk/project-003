import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { LayoutContainerDefault } from "components/shared/layout";
import { Message } from "components/page/error";
import { usePageTracking } from "utilities/analytics/analyticsTracking";
import data from "./data";

const LayoutContainer = styled(LayoutContainerDefault)`
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const NotFound = () => {
  usePageTracking(data.title.notfound);

  return (
    <LayoutContainer>
      <Helmet>
        <title>{data.title.notfound}</title>
      </Helmet>
      <Message />
    </LayoutContainer>
  );
};

export default NotFound;