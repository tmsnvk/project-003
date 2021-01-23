import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import { ParagraphElement, SpanElement } from "components/shared/text";
import { StyledIcon } from "components/shared/utilities";
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

const OptionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  color: ${({ theme }) => theme.color.grayLight};
  text-shadow: 3px 3px 1px ${({ theme }) => theme.color.grayDark};
  background-color: ${({ $alternate, theme: { color } }) => $alternate ? color.orangeDark : color.blueDark};
  border-radius: 1rem 1rem 0 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }
`;

const OptionPricingContainer = styled.div`
  padding: 2rem 0 2rem 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const OptionButton = styled(Link)`
  display: block;
  width: 50%;
  padding: 1rem 1rem 1rem 1rem;
  margin: 1rem auto;
  color: ${({ theme }) => theme.color.grayLight};
  font-size: ${({ theme }) => theme.fontSize.small};
  background-color: ${({ $alternate, theme: { color } }) => $alternate ? color.orangeDark : color.blueDark};
  border-radius: ${props => props.theme.elementBorder.borderRadius};
  text-decoration: none;
  text-align: center;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.grayDark};
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const OptionPopular = styled.div`
  padding: 1rem 0 1rem 0;
  background-color: ${({ theme }) => theme.color.orangeDark};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-align: center;
  border-radius: 0 0 1rem 1rem;
`;

const OptionItems = () => {
  const renderOptionItems = data.map(({ optionTitle, priceIcon, priceTag, month, icon, paragraphs, link, bottomParagraph, mostPopular, alternate }) => {
    return (
      <OptionContainer key={optionTitle} $alternate={alternate}>
        <OptionTitle $alternate={alternate}>{optionTitle}</OptionTitle>
        <OptionPricingContainer>
          <SpanElement render={<>{priceIcon !== "" ? <StyledIcon icon={priceIcon} style={"PricingOptions_Tag"} /> : null}{priceTag}</>} style={"PricingOptions_Tag"} />
          {month}
        </OptionPricingContainer>
        <ParagraphElement render={<><StyledIcon icon={icon} style={"PricingOptions"} />{paragraphs.one}</>} style={"PricingOptions"} />
        <ParagraphElement render={<><StyledIcon icon={icon} style={"PricingOptions"} />{paragraphs.two}</>} style={"PricingOptions"} />
        <ParagraphElement render={<><StyledIcon icon={icon} style={"PricingOptions"} />{paragraphs.three}</>} style={"PricingOptions"} />
        <ParagraphElement render={<><StyledIcon icon={icon} style={"PricingOptions"} />{paragraphs.four}</>} style={"PricingOptions"} />
        <OptionButton to={link.to} $alternate={alternate}>{link.text}</OptionButton>
        <ParagraphElement render={bottomParagraph} style={"PricingOptionsBottom"} />
        {mostPopular !== "" ? <OptionPopular>{mostPopular}</OptionPopular> : null}
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