import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled(FontAwesomeIcon)`
  display: inline-block;
  margin: 0 0.5rem 0 0;
`;

const StyledIcon = ({ icon }) => {
  return (
    <ComponentContainer icon={icon}></ComponentContainer>
  );
};

export default StyledIcon;