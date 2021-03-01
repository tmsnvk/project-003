import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.fontSize.xLarge};
`;

const StyledIcon = ({ icon }) => {
  return (
    <ComponentContainer icon={icon} spin></ComponentContainer>
  );
};

export default StyledIcon;