import styled from "styled-components";

const FormSubmitButton = styled.input`
  align-self: center;
  font-size: ${props => props.theme.fontSize.medium};
  text-align: center;
  width: 20rem;
  height: 5rem;
  padding: 1rem 1rem 1rem 1rem;
  box-shadow: 0px 2px 2px 0px ${props => props.theme.shadowColor.main};
  border: 1px solid ${props => props.theme.fontColor.secondary};
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.backgroundColor.mainDark};
  }
  
  &:focus {
    outline: none;
  }
`;

export default FormSubmitButton;