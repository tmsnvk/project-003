import React from "react";
import styled from "styled-components";
import { LayoutContainerDefault } from "components/shared/layout";
import { ContactForm, FaqContainer, Header } from "components/page/contact";

const LayoutContainer = styled(LayoutContainerDefault)`
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Contact = () => {
  return (
    <LayoutContainer>
      <Header />
      <FaqContainer />
      <ContactForm />
    </LayoutContainer>
  );
};

export default Contact;