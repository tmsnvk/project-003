import React from "react";
import styled from "styled-components";
import { mediaq } from "../variables/styling";
import HeadText from "../layoutcomponents/contact/HeadText";
import FaqContainer from "../layoutcomponents/contact/FaqContainer";
import ContactForm from "../layoutcomponents/contact/ContactForm";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 5rem;

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ContactLayout = () => {  
  return (
    <LayoutContainer>
      <HeadText />
      <FaqContainer />
      <ContactForm />
    </LayoutContainer>
  );
};

export default ContactLayout;