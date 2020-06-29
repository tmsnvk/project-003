import React from "react";
import styled from "styled-components";
import GridHeadContainer from "../layoutcomponents/home/GridHeadContainer";
import GridItemContainer from "../layoutcomponents/home/GridItemContainer";
import GridImageContainer from "../layoutcomponents/home/GridImageContainer";
import GridHowImageContainer from "../layoutcomponents/home/GridHowImageContainer";
import GridHowContainer from "../layoutcomponents/home/GridHowContainer";
import GridStatContainer from "../layoutcomponents/home/GridStatContainer";
import GridTextContainer from "../layoutcomponents/home/GridTextContainer";

const GridMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 5em;
  grid-row-gap: 5rem;
  grid-template-areas: 
    ". grid-head grid-head ."
    "grid-item grid-item grid-item grid-item"
    "grid-image grid-image grid-image grid-image"
    "grid-how-image grid-how grid-how ."
    ". grid-stat grid-stat ."
    ". grid-text grid-text ."
`;

const HomeLayout = () => {
  return (
    <GridMainContainer>
      <GridHeadContainer />
      <GridItemContainer />
      <GridImageContainer />
      <GridHowImageContainer />
      <GridHowContainer />
      <GridStatContainer />
      <GridTextContainer />
    </GridMainContainer>
  );
};

export default HomeLayout;