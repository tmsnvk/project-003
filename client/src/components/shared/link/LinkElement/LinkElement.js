import styled from "styled-components";
import { Link } from "react-router-dom";

const handleColor = (color) => {
  switch (color) {
    case "grayLight":
      return ({ theme }) => theme.color.grayLight;
    case "orangeDark":
      return ({ theme }) => theme.color.orangeDark;
    default:
      return ({ theme }) => theme.color.blueDark;
  }
};

const handleHover = (hover) => {
  switch (hover) {
    case "nohover":
      return null;
    case "grayLight":
      return ({ theme }) => theme.color.grayLight;
    case "orangeDark":
      return ({ theme }) => theme.color.orangeDark;
    default:
      return ({ theme }) => theme.color.blueDark;
  }
};

const ComponentContainer = styled(Link)`
  display: inline;
  padding: ${({ padding }) => padding ? padding : "0 0 0 0"};
  color: ${({ color }) => handleColor(color)};
  opacity: ${({ opacity }) => opacity ? opacity : "1"};
  cursor: pointer;

  &:hover {
    color: ${({ hover }) => handleHover(hover)};
    opacity: 1;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ dimension }) => dimension === "large" ? ({ theme }) => theme.fontSize.large : ({ theme }) => theme.fontSize.medium};
  }
`;

const LinkElement = ({ to, text, color, dimension, hover, opacity, padding }) => {
  return (
    <ComponentContainer to={to} color={color} dimension={dimension} hover={hover} opacity={opacity} padding={padding}>
      {text}
    </ComponentContainer>
  );
};

export default LinkElement;