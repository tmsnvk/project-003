import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding: 0 0 3rem 0;
  font-weight: normal;
`;

const PageSubTitleElement = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default PageSubTitleElement;