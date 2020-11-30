import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.legend`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.secondary};
  margin: 5rem 0 1rem 0;
`;

const RadioLegend = ({ legendData }) => {
  return (
    <ComponentContainer>
      {legendData}
    </ComponentContainer>
  );
};

export default RadioLegend;