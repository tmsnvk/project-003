import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const Message = ({ data }) => {
  return (
    <ComponentContainer>
      {data}
    </ComponentContainer>
  );
};

export default Message;