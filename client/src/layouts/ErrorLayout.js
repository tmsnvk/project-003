import React from "react";
import styled from "styled-components";
import GridErrorContainer from "../layoutcomponents/error/GridErrorContainer";

const GridMainContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-column-gap: 5em;
  grid-row-gap: 5rem;
  grid-template-areas:
  ". grid-error grid-error .";
`;

const ErrorLayout = () => {
  return (
    <GridMainContainer>
      <GridErrorContainer />
    </GridMainContainer>
  );
};

export default ErrorLayout;