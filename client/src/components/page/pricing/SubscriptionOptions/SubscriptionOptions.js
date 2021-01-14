import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "./data";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 95%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-end: 5;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

const OptionContainer = styled.div`
  align-self: baseline;
  width: 90%;
  margin: 0 auto 2rem;
  background-image: ${({ theme }) => theme.color.gradient};
  box-shadow: ${({ theme }) => theme.elementBorder.boxShadow} ${({ theme }) => theme.color.shadow};
  border: ${({ theme }) => theme.elementBorder.border};
  border-radius: ${({ theme }) => theme.elementBorder.borderRadius};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xSmall}) {
    width: 80%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    width: 50%;
  }

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
  background-color: ${({ alternate, theme: { color } }) => alternate ? color.orangeDark : color.blueDark};
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

const OptionPriceTagSpan = styled.span`
  padding: 0 0.5rem 0 0;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const OptionPricingIcon = styled(FontAwesomeIcon)`
  margin: 0 0.5rem 0 0;
  font-size: ${({ theme }) => theme.fontSize.medium};
  vertical-align: super;
`;

const OptionParagraph = styled.p`
  padding: 0 0 1rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.small};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const OptionParagraphIcon = styled(FontAwesomeIcon)`
  margin: 0 1rem 0 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  vertical-align: middle;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const OptionButton = styled(Link)`
  display: block;
  width: 50%;
  padding: 1rem 1rem 1rem 1rem;
  margin: 1rem auto;
  color: ${({ theme }) => theme.color.grayLight};
  font-size: ${({ theme }) => theme.fontSize.small};
  background-color: ${({ alternate, theme: { color } }) => alternate ? color.orangeDark : color.blueDark};
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

const OptionBottomParagraph = styled.p`
  padding: 0 0 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const OptionPopular = styled.div`
  padding: 1rem 0 1rem 0;
  background-color: ${({ theme }) => theme.color.orangeDark};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-align: center;
  border-radius: 0 0 1rem 1rem;
`;

const SubscriptionOptions = () => {
  const renderComponentData = data.map(({ optionTitle, priceIcon, priceTag, month, icon, paragraphs, link, bottomParagraph, mostPopular, alternate }) => {
    return (
      <OptionContainer key={optionTitle} alternate={alternate ? 1 : 0}>
        <OptionTitle alternate={alternate ? 1 : 0}>{optionTitle}</OptionTitle>
        <OptionPricingContainer>
          <OptionPriceTagSpan>
            {priceIcon !== "" ? <OptionPricingIcon icon={priceIcon}></OptionPricingIcon> : null}{priceTag}
          </OptionPriceTagSpan>
          {month}
        </OptionPricingContainer>
        <OptionParagraph><OptionParagraphIcon icon={icon}></OptionParagraphIcon>{paragraphs.one}</OptionParagraph>
        <OptionParagraph><OptionParagraphIcon icon={icon}></OptionParagraphIcon>{paragraphs.two}</OptionParagraph>
        <OptionParagraph><OptionParagraphIcon icon={icon}></OptionParagraphIcon>{paragraphs.three}</OptionParagraph>
        <OptionParagraph><OptionParagraphIcon icon={icon}></OptionParagraphIcon>{paragraphs.four}</OptionParagraph>
        <OptionButton to={link.to} alternate={alternate ? 1 : 0}>{link.text}</OptionButton>
        <OptionBottomParagraph>{bottomParagraph}</OptionBottomParagraph>
        {mostPopular !== "" ? <OptionPopular>{mostPopular}</OptionPopular> : null}
      </OptionContainer>
    );
  });

  return (
    <ComponentContainer>
      {renderComponentData}
    </ComponentContainer>
  );
};

export default SubscriptionOptions;