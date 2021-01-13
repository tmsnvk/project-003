import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: ${({ align }) => align === "center" ? "center": "left"};
  padding: ${({ padding }) => padding ? padding : "0 0 0 0"};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ fontsize }) => fontsize ? ({ theme }) => theme.fontSize.medium : ({ theme }) => theme.fontSize.small};
  }
`;

const Paragraph = ({ data, align, fontsize, padding }) => {
  return (
    <ComponentContainer align={align} fontsize={fontsize} padding={padding}>
      {data}
    </ComponentContainer>
  );
};

export default Paragraph;