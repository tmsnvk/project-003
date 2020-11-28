import styled from "styled-components";

const RadioFormLabel = styled.label`
  display: block;
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export default RadioFormLabel;