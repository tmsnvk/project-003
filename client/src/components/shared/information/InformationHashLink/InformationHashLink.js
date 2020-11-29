import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const InformationHashLink = styled(Link)`
  color: ${({ theme }) => theme.color.secondary};
  font-size: inherit;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.alternate};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export default InformationHashLink;