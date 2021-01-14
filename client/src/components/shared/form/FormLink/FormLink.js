import { Link } from "react-router-dom";
import styled from "styled-components";

const FormLink = styled(Link)`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: ${({ theme }) => theme.fontSize.small};
  text-decoration: none;
`;

export default FormLink;