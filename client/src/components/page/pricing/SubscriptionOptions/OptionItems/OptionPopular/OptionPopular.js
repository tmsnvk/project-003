import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  padding: 1rem 0 1rem 0;
  background-color: ${({ theme }) => theme.color.orangeDark};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-align: center;
  border-radius: 0 0 1rem 1rem;
`;

const OptionPopular = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default OptionPopular;