import styled from "styled-components";

const InformationText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 1rem 0 1rem 0;
  text-align: center;

  &:first-of-type {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: 600;
    &:after {
    content: " ";
    display: block;
    padding: 2rem 0 0 0;
    border-bottom: 2px solid ${({ theme }) => theme.color.primaryDark};
    width: 30%;
    margin: 0 auto;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    &:first-of-type {
      font-size: ${({ theme }) => theme.fontSize.large};
    }

    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export default InformationText;