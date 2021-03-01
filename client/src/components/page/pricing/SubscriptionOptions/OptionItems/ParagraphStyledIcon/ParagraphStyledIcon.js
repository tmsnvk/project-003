import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled(FontAwesomeIcon)`
  margin: 0 0.5rem 0 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const ParagraphStyledIcon = ({ icon }) => {
  return (
    <ComponentContainer icon={icon}>

    </ComponentContainer>
  );
};

export default ParagraphStyledIcon;