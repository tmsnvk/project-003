import React from "react";
import styled from "styled-components";
import OptionTitle from "./OptionTitle";
import ParagraphElement from "./ParagraphElement";
import BottomParagraphElement from "./BottomParagraphElement";
import OptionButton from "./OptionButton";
import OptionPopular from "./OptionPopular";
import SpanElement from "./SpanElement";
import ParagraphStyledIcon from "./ParagraphStyledIcon";
import SpanStyledIcon from "./SpanStyledIcon";
import data from "./data";

const OptionContainer = styled.div`
  align-self: baseline;
  width: 80%;
  margin: 0 auto 2rem;
  background-image: ${({ theme }) => theme.color.gradient};
  box-shadow: ${({ theme }) => theme.elementBorder.boxShadow} ${({ theme }) => theme.color.shadow};
  border: ${({ theme }) => theme.elementBorder.border};
  border-radius: ${({ theme }) => theme.elementBorder.borderRadius};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    margin: 2rem 1rem 2rem 1rem;
    width: 40%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    width: 100%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    margin: 0 2.5rem 0 2.5rem;
  }
`;

const OptionPricingContainer = styled.div`
  padding: 2rem 0 2rem 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const OptionItems = () => {
  const renderOptionItems = data.map(({ optionTitle, priceIcon, priceTag, month, icon, paragraphs, link, bottomParagraph, mostPopular, alternate }) => {
    return (
      <OptionContainer key={optionTitle} $alternate={alternate}>
        <OptionTitle alternate={alternate} render={optionTitle} />
        <OptionPricingContainer>
          <SpanElement render={<>{priceIcon !== "" ? (<SpanStyledIcon icon={priceIcon} />) : (null)}{priceTag}</>} />
          {month}
        </OptionPricingContainer>
        <ParagraphElement render={<><ParagraphStyledIcon icon={icon} />{paragraphs.one}</>} />
        <ParagraphElement render={<><ParagraphStyledIcon icon={icon} />{paragraphs.two}</>} />
        <ParagraphElement render={<><ParagraphStyledIcon icon={icon} />{paragraphs.three}</>} />
        <ParagraphElement render={<><ParagraphStyledIcon icon={icon} />{paragraphs.four}</>} />
        <OptionButton to={link.to} alternate={alternate} render={link.text} />
        <BottomParagraphElement render={bottomParagraph} />
        {mostPopular !== "" ? (<OptionPopular render={mostPopular} />) : (null)}
      </OptionContainer>
    );
  });

  return (
    <>
      {renderOptionItems}
    </>
  );
};

export default OptionItems;