import { Link } from "react-router-dom";
import styled from "styled-components";

const FormLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.fontColor.mainDark};
  font-size: ${props => props.theme.fontSize.small};
`;

export default FormLink;