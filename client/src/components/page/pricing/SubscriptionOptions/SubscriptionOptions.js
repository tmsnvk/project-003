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

const ItemContainer = styled.div`
  width: 90%;
  align-self: baseline;
  margin: 0 auto 2rem;
  background-image: ${({ theme }) => theme.color.gradient};
  box-shadow: ${({ theme }) => theme.elementBorder.boxShadow} ${({ theme }) => theme.color.shadow};
  border: ${({ theme }) => theme.elementBorder.border};
  border-radius: ${({ theme }) => theme.elementBorder.borderRadius};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xSmall}) {
    width: 80%;
    transform: ${({ alternate }) => alternate ? "scale(1.05)" : null};
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

const ItemTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  color: ${({ theme }) => theme.color.primaryLight};
  text-shadow: 3px 3px 1px ${({ theme }) => theme.color.primaryDark};
  background-color: ${({ alternate, theme: { color } }) => alternate ? color.alternate : color.secondary};
  border-radius: 1rem 1rem 0 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }
`;

const ItemPricingContainer = styled.div`
  text-align: center;
  padding: 2rem 0 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const ItemPriceTagSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  padding: 0 0.5rem 0 0;
`;

const ItemPricingIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.medium};
  vertical-align: super;
  margin: 0 0.5rem 0 0;
`;

const ItemParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 0 0 1rem 2rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const ItemParagraphIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.small};
  vertical-align: middle;
  margin: 0 1rem 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const ItemButton = styled.button`
  display: block;
  width: 50%;
  color: ${({ theme }) => theme.color.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.small};
  background-color: ${({ alternate, theme: { color } }) => alternate ? color.alternate : color.secondary};
  border-radius: ${props => props.theme.elementBorder.borderRadius};
  padding: 1rem 1rem 1rem 1rem;
  margin: 1rem auto;
  text-decoration: none;
  text-align: center;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDark};
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const ItemBottomParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 0 0 2rem 0;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const ItemPopular = styled.div`
  background-color: ${({ theme }) => theme.color.alternate};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-align: center;
  border-radius: 0 0 1rem 1rem;
  padding: 1rem 0 1rem 0;
`;

const SubscriptionOptions = () => {
  const renderComponentData = data.map(({ optionTitle, priceIcon, priceTag, month, icon, paragraphs, link, bottomParagraph, mostPopular, alternate }) => {
    return (
      <ItemContainer key={optionTitle} alternate={alternate ? 1 : 0}>
        <ItemTitle alternate={alternate ? 1 : 0}>{optionTitle}</ItemTitle>
        <ItemPricingContainer>
          <ItemPriceTagSpan>
            {priceIcon !== null ? <ItemPricingIcon icon={priceIcon}></ItemPricingIcon> : null}{priceTag}
          </ItemPriceTagSpan>
          {month}
        </ItemPricingContainer>
        <ItemParagraph><ItemParagraphIcon icon={icon}></ItemParagraphIcon>{paragraphs.one}</ItemParagraph>
        <ItemParagraph><ItemParagraphIcon icon={icon}></ItemParagraphIcon>{paragraphs.two}</ItemParagraph>
        <ItemParagraph><ItemParagraphIcon icon={icon}></ItemParagraphIcon>{paragraphs.three}</ItemParagraph>
        <ItemParagraph><ItemParagraphIcon icon={icon}></ItemParagraphIcon>{paragraphs.four}</ItemParagraph>
        <ItemButton as={Link} to={link.to} alternate={alternate ? 1 : 0}>{link.text}</ItemButton>
        <ItemBottomParagraph>{bottomParagraph}</ItemBottomParagraph>
        {mostPopular !== null ? <ItemPopular>{mostPopular}</ItemPopular> : null}
      </ItemContainer>
    );
  });

  return (
    <ComponentContainer>
      {renderComponentData}
    </ComponentContainer>
  );
};

export default SubscriptionOptions;