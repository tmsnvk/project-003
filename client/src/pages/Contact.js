import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { LayoutContainerDefault } from "components/shared/layout";
import { ContactForm, FaqContainer, Header } from "components/page/contact";
import { usePageTracking } from "utilities/analytics/analyticsTracking";
import data from "./data";

const LayoutContainer = styled(LayoutContainerDefault)`
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Contact = () => {
  usePageTracking(data.title.contact);

  return (
    <LayoutContainer>
      <Helmet>
        <title>{data.title.contact}</title>
      </Helmet>
      <Header />
      <FaqContainer />
      <ContactForm />
    </LayoutContainer>
  );
};

export default Contact;