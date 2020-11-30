import React from "react";
import styled from "styled-components";
import { LayoutContainerDefault } from "components/shared/layout";
import { Message } from "components/page/success";

const LayoutContainer = styled(LayoutContainerDefault)`
@media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Success = () => {
  return (
    <LayoutContainer>
      <Message />
    </LayoutContainer>
  );
};

export default Success;