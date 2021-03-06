import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

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

const HashLinkElement = ({ to, render }) => {
  return (
    <ComponentContainer to={to}>
      {render}
    </ComponentContainer>
  );
};

export default HashLinkElement;