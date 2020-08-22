import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  align-self: baseline;
  width: 70%;
  margin: 0 auto 2rem;
  background-color: ${props => props.theme.fontColor.mainLight};
  box-shadow: 0px 2px 2px 0px ${props => props.theme.shadowColor.main};
  border-radius: 1rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 50%;
    transform: ${({ alternate }) => alternate ? "scale(1.05)" : null};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    margin: 2rem 1rem 2rem 1rem;
    width: 40%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    width: 100%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 20%;
    margin: 0 2.5rem 0 2.5rem;
  }
`;

const ItemTitle = styled.h3`
  font-size: ${props => props.theme.fontSize.xLarge};
  color: ${props => props.theme.fontColor.mainLight};
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
  font-size: ${props => props.theme.fontSize.small};
  background-color: ${({ alternate, theme: { backgroundColor } }) => alternate ? backgroundColor.alternate : backgroundColor.secondary};
  color: ${props => props.theme.fontColor.mainLight};
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 1rem;
  display: block;
  width: 50%;
  margin: 1rem auto;
  opacity: 0.7;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

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
  font-size: ${props => props.theme.fontSize.small};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-align: center;
  border-radius: 0 0 1rem 1rem;
  padding: 1rem 0 1rem 0;
`;

const SubscriptionOptions = () => {
  const componentData = [
    {
      optionTitle: "Free",
      priceIcon: ["fas", "euro-sign"],
      priceTag: "0",
      month: "",
      paragraphs: {
        one: "Free without registration.",
        two: "Search with limited access.",
        three: "No access to communities.",
        four: "Limited support."
      },
      link: {
        to: "/search",
        text: "Search now!"
      },
      bottomParagraph: "",
      mostPopular: undefined,
      alternate: false
    },
    {
      optionTitle: "Solo",
      priceIcon: ["fas", "euro-sign"],
      priceTag: "24.95",
      month: "/ month",
      paragraphs: {
        one: "Single registration.",
        two: "Search with full access.",
        three: "Access to communities.",
        four: "Full technical support."
      },
      link: {
        to: "/pricing/#signupform",
        text: "Sign me up!"
      },
      bottomParagraph: "30-day money back guarantee.",
      mostPopular: undefined,
      alternate: false
    },
    {
      optionTitle: "Duo",
      priceIcon: ["fas", "euro-sign"],
      priceTag: "39.95",
      month: "/ month",
      paragraphs: {
        one: "Register together with a buddy.",
        two: "Search with full access.",
        three: "Access to communities.",
        four: "Full technical support."
      },
      link: {
        to: "/pricing/#signupform",
        text: "Sign me up!"
      },
      bottomParagraph: "30-day money back guarantee.",
      mostPopular: "Most popular!",
      alternate: true
    },
    {
      optionTitle: "Gym",
      priceIcon: undefined,
      priceTag: "Gym tailored! *",
      month: "",
      paragraphs: {
        one: "* Contact us for further details!",
        two: "* Fee based on gym size.",
        three: "* Access to special features.",
        four: "* Dedicated support agent."
      },
      link: {
        to: "/contact",
        text: "Contact us!"
      },
      bottomParagraph: "30-day money back guarantee.",
      mostPopular: undefined,
      alternate: false
    }
  ];

  const renderComponentData = componentData.map(({ optionTitle, priceIcon, priceTag, month, paragraphs, link, bottomParagraph, mostPopular, alternate }) => {
    return (
      <ItemContainer key={optionTitle} alternate={alternate ? 1 : 0}>
        <ItemTitle alternate={alternate ? 1 : 0}>{optionTitle}</ItemTitle>
        <ItemPricingContainer>
          <ItemPriceTagSpan>
            {priceIcon !== undefined ? <ItemPricingIcon icon={priceIcon}></ItemPricingIcon> : null}{priceTag}
          </ItemPriceTagSpan>
          {month}
        </ItemPricingContainer>
        <ItemParagraph><ItemParagraphIcon icon={["fas", "angle-right"]}></ItemParagraphIcon>{paragraphs.one}</ItemParagraph>
        <ItemParagraph><ItemParagraphIcon icon={["fas", "angle-right"]}></ItemParagraphIcon>{paragraphs.two}</ItemParagraph>
        <ItemParagraph><ItemParagraphIcon icon={["fas", "angle-right"]}></ItemParagraphIcon>{paragraphs.three}</ItemParagraph>
        <ItemParagraph><ItemParagraphIcon icon={["fas", "angle-right"]}></ItemParagraphIcon>{paragraphs.four}</ItemParagraph>
        <ItemButton as={Link} to={link.to} alternate={alternate ? 1 : 0}>{link.text}</ItemButton>
        <ItemBottomParagraph>{bottomParagraph}</ItemBottomParagraph>
        {mostPopular !== undefined ? <ItemPopular>{mostPopular}</ItemPopular> : null}
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