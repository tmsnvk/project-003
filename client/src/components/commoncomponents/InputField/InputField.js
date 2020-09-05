import styled from "styled-components";

const InputField = styled.input`
  width: 25rem;
  height: 5rem;
  font-size: ${props => props.theme.fontSize.small};
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  border: 1px solid ${props => props.theme.fontColor.secondary};
  box-shadow: 0px 2px 2px 0px ${props => props.theme.shadowColor.main};
  border-radius: 1rem;

  &:hover {
    background-color: ${props => props.theme.backgroundColor.mainLight};
  }

  &:focus {
		outline: none;
		background-color: ${props => props.theme.backgroundColor.mainLight};
  }

  &::placeholder {
		letter-spacing: 0.2rem;
		padding: 1rem 1rem 1rem 1rem;
		color: ${props => props.theme.fontColor.secondary};
	}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 30rem;
  }
`;

export default InputField;