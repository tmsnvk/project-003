import styled from "styled-components";

const InputField = styled.input`
  width: 25rem;
  height: 5rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: 2rem 0 0 0;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  background-color: ${({ theme }) => theme.color.primaryMid};
  border: 1px solid ${({ theme }) => theme.color.secondary};
  box-shadow: 0px 2px 2px 0px ${({ theme }) => theme.color.shadow};
  border-radius: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryLight};
  }

  &:focus {
		outline: none;
		background-color: ${({ theme }) => theme.color.primaryLight};
  }

  &::placeholder {
		letter-spacing: 0.2rem;
		padding: 1rem 1rem 1rem 1rem;
		color: ${({ theme }) => theme.color.secondary};
	}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: 30rem;
  }
`;

export default InputField;