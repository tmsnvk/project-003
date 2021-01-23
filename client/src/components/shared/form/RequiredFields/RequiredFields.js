import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  margin: 2.5rem auto 0;
  padding: 0 0 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.blueDark};
`;

const RequiredFields = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default RequiredFields;