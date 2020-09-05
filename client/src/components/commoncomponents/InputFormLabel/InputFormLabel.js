import styled from "styled-components";

const InputFormLabel = styled.label`
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.fontColor.mainDark};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 1rem 0;

  &:after {
    content: " ";
    padding: 3rem 0 0 0;
  	width: 80%;
    border-bottom: 2px solid ${props => props.theme.fontColor.mainDark};
    display: block;
		margin: 0 auto;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    align-self: center;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

export default InputFormLabel;