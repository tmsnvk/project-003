import styled from "styled-components";
import { Link } from "react-router-dom";

const ComponentContainer = styled(Link)`
  color: ${({ theme }) => theme.color.blueDark};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.orangeDark};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const LinkElement = ({ to, text }) => {
  return (
    <ComponentContainer to={to}>
      {text}
    </ComponentContainer>
  );
};

export default LinkElement;