import styled from "styled-components";
import { Link } from "react-router-dom";

const InformationLink = styled(Link)`
  color: ${props => props.theme.fontColor.secondary};
  font-size: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.fontColor.alternate};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export default InformationLink;