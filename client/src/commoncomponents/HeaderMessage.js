import styled from "styled-components";

const HeaderMessage = styled.div`
  font-size: ${props => props.theme.fontSize.small};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export default HeaderMessage;