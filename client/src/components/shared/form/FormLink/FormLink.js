import { Link } from "react-router-dom";
import styled from "styled-components";

const FormLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.primaryDark};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export default FormLink;