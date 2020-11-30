import styled from "styled-components";

const Image = styled.img`
  width: 50%;
  transform: scaleX(-1);
  padding: 5rem 1rem 1rem 1rem;
  align-self: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    width: 30%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: 40%;
  }
`;

export default Image;