import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled(FontAwesomeIcon)`
  display: inline-block;
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.fontSize.xLarge};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }
`;

const StyledIcon = ({ icon }) => {
  return (
    <ComponentContainer icon={icon}></ComponentContainer>
  );
};

export default StyledIcon;