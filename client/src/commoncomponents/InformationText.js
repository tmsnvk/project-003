import styled from "styled-components";

const InformationText = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  font-weight: bold;
  padding: 1rem 0 1rem 0;
  text-align: center;

  &:first-of-type {
    font-size: ${props => props.theme.fontSize.medium};
    &:after {
    content: " ";
    display: block;
    padding: 2rem 0 0 0;
    border-bottom: 2px solid ${props => props.theme.fontColor.mainDark};
    width: 30%;
    margin: 0 auto;
    }
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    &:first-of-type {
      font-size: ${props => props.theme.fontSize.large};
    }

    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export default InformationText;