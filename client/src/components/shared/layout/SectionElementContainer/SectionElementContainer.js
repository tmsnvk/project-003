import styled from "styled-components";

const SectionElementContainer = styled.section`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: ${({ theme }) => theme.fontSize.small};
  background-image: ${({ theme }) => theme.color.gradient};
  padding: ${({ theme }) => theme.elementBorder.padding};
  border: ${({ theme }) => theme.elementBorder.border};
  border-radius: ${({ theme }) => theme.elementBorder.borderRadius};
  box-shadow: ${({ theme }) => theme.elementBorder.boxShadow} ${({ theme }) => theme.color.shadow};
`;

export default SectionElementContainer;