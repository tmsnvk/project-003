import styled from "styled-components";

const Textarea = styled.textarea`
  width: 25rem;
  height: 20rem;
  resize: none;
  margin: 2rem 0 0 0;
  padding: 1rem 0.5rem 0.5rem 2rem;
  background-color: ${({ theme }) => theme.color.grayMid};
  font-family: ${({ theme }) => theme.fontFamily.main};
  font-size: ${({ theme }) => theme.fontSize.small};
  border: 1px solid ${({ theme }) => theme.color.blueDark};
  box-shadow: 0px 2px 2px 0px ${({ theme }) => theme.color.shadow};
  border-radius: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.grayLight};
  }

  &:focus {
		outline: none;
		background-color: ${({ theme }) => theme.color.grayLight};
  }

  &::placeholder {
		padding: 1rem 1rem 1rem 1rem;
		letter-spacing: 0.2rem;
		color: ${({ theme }) => theme.color.blueDark};
	}

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: 30rem;
  }
`;

export default Textarea;