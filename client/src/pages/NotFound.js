import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { LayoutContainerDefault } from "components/shared/layout";
import { ErrorMessageContainer } from "components/page/error";
import { usePageTracking } from "utilities/analytics/analyticsTracking";

const LayoutContainer = styled(LayoutContainerDefault)`
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const NotFound = () => {
  usePageTracking("PageNotFound");

  return (
    <LayoutContainer>
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <ErrorMessageContainer />
    </LayoutContainer>
  );
};

export default NotFound;