import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled(FontAwesomeIcon)`
  display: inline-block;
  margin: 1rem 1rem 1rem 1rem;
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.fontSize.xLarge};
`;

const StyledIcon = ({ icon }) => {
  return (
    <ComponentContainer icon={icon}></ComponentContainer>
  );
};

export default StyledIcon;