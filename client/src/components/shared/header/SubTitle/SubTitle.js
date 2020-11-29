import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding: 0 0 3rem 0;
  font-weight: normal;
`;

const SubTitle = ({ data }) => {
  return (
    <ComponentContainer>
      {data}
    </ComponentContainer>
  );
};

export default SubTitle;