import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled(FontAwesomeIcon)`
  display: inline-block;
  font-size: ${({ dimension }) => dimension === "large" ? ({ theme }) => theme.fontSize.small : ({ theme }) => theme.fontSize.xLarge};
  margin: ${({ margin }) => margin ? margin : "0 0 0 0"};
  /* margin: 1rem 1rem 1rem 1rem; */

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ dimension }) => dimension === "large" ? ({ theme }) => theme.fontSize.large : ({ theme }) => theme.fontSize.xLarge};
  }
`;

const StyledIcon = ({ icon, spin, dimension, margin }) => {
  return (
    <ComponentContainer icon={icon} spin={spin} dimension={dimension} margin={margin}></ComponentContainer>
  );
};

export default StyledIcon;