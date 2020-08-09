import React from "react";
import styled from "styled-components";
import GridSuccessTextContainer from "../layoutcomponents/success/GridSuccessTextContainer";

const GridMainContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr auto;
  column-gap: 5em;
  row-gap: 5rem;
  grid-template-areas:
  ". grid-success grid-success .";
`;

const SuccessLayout = () => {
  return (
    <GridMainContainer>
      <GridSuccessTextContainer />
    </GridMainContainer>
  );
};

export default SuccessLayout;