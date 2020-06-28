import React from "react";

import styled from "styled-components";

const GridMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 2em;
  row-gap: 2rem;
  grid-template-areas:
  "grid-navbar grid-navbar grid-navbar grid-navbar"
  "grid-content-body grid-content-body . ."
  "grid-footer grid-footer grid-footer grid-footer";
`;

const ContactLayout = () => {
  
    return (
    <div>
    <GridMainContainer>

      <div>CONTACT</div>
    </GridMainContainer>
</div>


    );
};

export default ContactLayout;