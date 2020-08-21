import styled from "styled-components";

const ElementContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor.mainDark};
  box-shadow: ${props => props.theme.elementBorder.boxShadow} ${props => props.theme.shadowColor.main};
  padding: ${props => props.theme.elementBorder.padding};
  border-radius: ${props => props.theme.elementBorder.borderRadius};
`;

export default ElementContainer;