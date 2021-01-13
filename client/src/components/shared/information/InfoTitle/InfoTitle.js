import styled from "styled-components";

const ComponentContainer = styled.p`
  padding: 1rem 0 1rem 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  
  &:after {
    content: " ";
    display: block;
    border-bottom: 2px solid ${({ theme }) => theme.color.grayDark};
    width: 30%;
    margin: 0 auto;
    padding: 1rem 0 1rem 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const InfoTitle = ({ data }) => {
  return (
    <ComponentContainer>
      {data}
    </ComponentContainer>
  );
};

export default InfoTitle;