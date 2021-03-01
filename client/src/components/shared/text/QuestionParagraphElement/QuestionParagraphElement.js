import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 600;
`;

const QuestionParagraphElement = ({ render }) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default QuestionParagraphElement;