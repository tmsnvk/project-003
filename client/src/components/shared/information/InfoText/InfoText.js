import styled from "styled-components";

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 1rem 0 1rem 0;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export default InfoText;