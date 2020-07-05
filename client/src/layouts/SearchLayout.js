import React from "react";
import styled from "styled-components";
import GridSearchContainer from "../layoutcomponents/search/GridSearchContainer";
import GridResultContainer from "../layoutcomponents/search/GridResultContainer";

const GridMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 2em;
  row-gap: 2rem;
  grid-template-areas:
    "grid-search grid-search grid-search"
    "grid-results grid-results grid-results"
`;

const SearchLayout = () => {
  return (
    <GridMainContainer>
      <GridSearchContainer />
      <GridResultContainer />
    </GridMainContainer>
  );
};

export default SearchLayout;