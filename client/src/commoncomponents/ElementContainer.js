import styled from "styled-components";

const ElementContainer = styled.div`
  color: ${props => props.theme.fontColor.mainDark};
  font-size: ${props => props.theme.fontSize.small};
  background-image: ${props => props.theme.backgroundColor.gradient};
  padding: ${props => props.theme.elementBorder.padding};
  border: ${props => props.theme.elementBorder.border};
  border-radius: ${props => props.theme.elementBorder.borderRadius};
  box-shadow: ${props => props.theme.elementBorder.boxShadow} ${props => props.theme.shadowColor.main};
`;

export default ElementContainer;