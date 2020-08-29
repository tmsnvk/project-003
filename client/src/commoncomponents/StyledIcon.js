import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  color: ${props => props.theme.fontColor.secondary};
  font-size: ${props => props.theme.fontSize.xLarge};
  margin: 1rem 1rem 1rem 1rem;
`;

export default StyledIcon;