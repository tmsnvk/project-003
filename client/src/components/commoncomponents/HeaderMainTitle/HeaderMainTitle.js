import styled from "styled-components";

const HeaderMainTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.xLarge};
  text-transform: uppercase;
  padding: 2rem 0 2rem 0;
  text-align: center;

  &:after {
    content: " ";
    display: block;
    padding: 2rem 0 0 0;
    border-bottom: 2px solid ${props => props.theme.fontColor.mainDark};
    width: 30%;
    margin: 0 auto;
  }
`;

export default HeaderMainTitle;