import styled from "styled-components";

const RadioFormLabel = styled.label`
  display: block;
  color: ${props => props.theme.fontColor.secondary};
  font-size: ${props => props.theme.fontSize.small};
`;

export default RadioFormLabel;