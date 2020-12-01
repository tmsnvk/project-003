import styled from "styled-components";
import { Link } from "react-router-dom";

const InfoLink = styled(Link)`
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

export default InfoLink;