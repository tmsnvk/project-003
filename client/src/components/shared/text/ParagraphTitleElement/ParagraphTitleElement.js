import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  padding: 0 0 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.grayDark};
  font-weight: 600;
  text-align: center;

  &:after {
    content: " ";
    display: block;
    padding: 2rem 0 0 0;
    border-bottom: 2px solid ${({ theme }) => theme.color.blueDark};
    width: 33%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const ParagraphTitleElement = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default ParagraphTitleElement;