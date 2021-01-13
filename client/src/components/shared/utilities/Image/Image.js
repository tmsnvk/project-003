import styled from "styled-components";

const Image = styled.img`
  align-self: center;
  width: 50%;
  padding: 5rem 1rem 1rem 1rem;
  transform: scaleX(-1);

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    width: 30%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: 40%;
  }
`;

export default Image;