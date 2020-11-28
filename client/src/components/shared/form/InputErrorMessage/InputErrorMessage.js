import styled from "styled-components";

const InputErrorMessage = styled.div`
  color: ${({ theme }) => theme.color.warning};
  font-size: ${({ theme }) => theme.fontSize.default};
  padding: 1rem 0 0 0;
`;

export default InputErrorMessage;