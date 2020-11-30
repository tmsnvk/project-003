import styled from "styled-components";

const Submit = styled.input`
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.primaryDark};
  text-align: center;
  width: 20rem;
  height: 5rem;
  padding: 1rem 1rem 1rem 1rem;
  box-shadow: 0px 2px 2px 0px ${({ theme }) => theme.color.shadow};
  border: 1px solid ${({ theme }) => theme.color.secondary};
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryMid};
  }
  
  &:focus {
    outline: none;
  }
`;

export default Submit;