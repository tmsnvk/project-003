import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import componentData from "./componentData";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-end: 3;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 95%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-end: 5;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

const ItemContainer = styled.div`
  width: 90%;
  align-self: baseline;
  margin: 0 auto 2rem;
  background-image: ${props => props.theme.backgroundColor.gradient};
  box-shadow: ${props => props.theme.elementBorder.boxShadow} ${props => props.theme.shadowColor.main};
  border: ${props => props.theme.elementBorder.border};
  border-radius: ${props => props.theme.elementBorder.borderRadius};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.extraSmall}) {
    width: 80%;
    transform: ${({ alternate }) => alternate ? "scale(1.05)" : null};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 50%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    margin: 2rem 1rem 2rem 1rem;
    width: 40%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    width: 100%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    margin: 0 2.5rem 0 2.5rem;
  }
`;

const ItemTitle = styled.h3`
  font-size: ${props => props.theme.fontSize.xLarge};
  color: ${props => props.theme.fontColor.mainLight};
  text-shadow: 3px 3px 1px ${props => props.theme.fontColor.mainDark};
  background-color: ${({ alternate, theme: { backgroundColor } }) => alternate ? backgroundColor.alternate : backgroundColor.secondary};
  border-radius: 1rem 1rem 0 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    font-size: ${props => props.theme.fontSize.xxLarge};
  }
`;

const ItemPricingContainer = styled.div`
  text-align: center;
  padding: 2rem 0 2rem 0;
  font-size: ${props => props.theme.fontSize.small};
`;

const ItemPriceTagSpan = styled.span`
  font-size: ${props => props.theme.fontSize.large};
  padding: 0 0.5rem 0 0;
`;

const ItemPricingIcon = styled(FontAwesomeIcon)`
  font-size: ${props => props.theme.fontSize.medium};
  vertical-align: super;
  margin: 0 0.5rem 0 0;
`;

const ItemParagraph = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  padding: 0 0 1rem 2rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    font-size: ${props => props.theme.fontSize.small};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const ItemParagraphIcon = styled(FontAwesomeIcon)`
  font-size: ${props => props.theme.fontSize.small};
  vertical-align: middle;
  margin: 0 1rem 0 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const ItemButton = styled.button`
  display: block;
  width: 50%;
  color: ${props => props.theme.fontColor.mainLight};
  font-size: ${props => props.theme.fontSize.small};
  background-color: ${({ alternate, theme: { backgroundColor } }) => alternate ? backgroundColor.alternate : backgroundColor.secondary};
  border-radius: ${props => props.theme.elementBorder.borderRadius};
  padding: 1rem 1rem 1rem 1rem;
  margin: 1rem auto;
  text-decoration: none;
  text-align: center;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.fontColor.mainDark};
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const ItemBottomParagraph = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  padding: 0 0 2rem 0;
  text-align: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const ItemPopular = styled.div`
  background-color: ${props => props.theme.backgroundColor.alternate};
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-align: center;
  border-radius: 0 0 1rem 1rem;
  padding: 1rem 0 1rem 0;
`;

const SubscriptionOptions = () => {
  const renderComponentData = componentData.map(({ optionTitle, priceIcon, priceTag, month, icon, paragraphs, link, bottomParagraph, mostPopular, alternate }) => {
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