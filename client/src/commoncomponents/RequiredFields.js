import styled from "styled-components";

const RequiredFields = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.fontColor.secondary};
  margin: 2.5rem 0 0 0;
  align-self: center;
  padding: 0 0 2rem 0;
`;

export default RequiredFields;