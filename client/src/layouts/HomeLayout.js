import React from "react";
import styled from "styled-components";
import GridHeadContainer from "../layoutcomponents/home/GridHeadContainer";
import GridItemContainer from "../layoutcomponents/home/GridItemContainer";
import GridImageContainer from "../layoutcomponents/home/GridImageContainer";

const GridMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 5em;
  grid-row-gap: 5rem;
  grid-template-areas: 
    ". grid-head grid-head ."
    "grid-item grid-item grid-item grid-item"
    "grid-image grid-image grid-image grid-image"
    "how-image how how ."
    ". text text ."
`;

const HomeLayout = () => {
  return (
    <GridMainContainer>
      <GridHeadContainer />
      <GridItemContainer />
      <GridImageContainer />
    </GridMainContainer>
  );
};

export default HomeLayout;