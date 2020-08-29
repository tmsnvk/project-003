import styled from "styled-components";

const HeaderSubTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.medium};
  padding: 0 0 3rem 0;
  font-weight: normal;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

export default HeaderSubTitle;