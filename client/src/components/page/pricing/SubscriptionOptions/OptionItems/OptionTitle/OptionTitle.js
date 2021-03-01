import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  color: ${({ theme }) => theme.color.grayLight};
  text-shadow: 3px 3px 1px ${({ theme }) => theme.color.grayDark};
  background-color: ${({ $alternate, theme: { color } }) => $alternate ? color.orangeDark : color.blueDark};
  border-radius: 1rem 1rem 0 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }
`;

const OptionTitle = ({ alternate, render }) => {
  return (
    <ComponentContainer $alternate={alternate}>
      {render}
    </ComponentContainer>
  );
};

export default OptionTitle;