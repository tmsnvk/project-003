import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled.div`
  grid-area: grid-pricing;
	display: flex;
  flex-direction: row;
`;

const PricingBoxContainer = styled.div`
  width: 100%;
  margin: 0 2.5rem 0 2.5rem;
  background-color: var(--body-color-three);
  box-shadow: 0px 2px 2px 0px var(--body-shadow);
  border-radius: 1rem;

  &:first-of-type {
    margin: 0 2.5rem 0 5rem;
  }

  &:last-of-type {
    margin: 0 5rem 0 2.5rem;
  }
`;

const BestOfferContainer = styled(PricingBoxContainer)`
  transform: scale(1.05);
`;

const PricingTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1rem;
  font-size: 5rem;
  background-color: var(--body-color-two);
  color: var(--font-color-two);
  border-radius: 1.5rem 1.5rem 0 0;
`;

const BestOfferTitle = styled(PricingTitle)`
  background-color: var(--font-color-four);
`;

const PricingTagContainer = styled.p`
  text-align: center;
  padding: 2rem 0 2rem 0;
  font-size: 1.5rem;
`;

const PriceTagSpan = styled.span`
  font-size: 3.5rem;
`;

const StyledIconPricing = styled(FontAwesomeIcon)`
  padding: 0 1rem 0 0;
  font-size: 3.5rem;
  vertical-align: super;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  padding: 0 1rem 0 0;
  font-size: 4rem;
  vertical-align: middle;
`;

const PricingBody = styled.p`
  font-size: 1.7rem;
  padding: 0 2rem 2rem 5rem;
`;

const PricingBodyLastofType = styled(PricingBody)`
  padding: 1rem 0 2rem 0;
  text-align: center;
`;

const PricingBodyLastParagraph = styled(PricingBody)`
  padding: 0 2rem 1rem 5rem;
`;

const MostPopularOffer = styled.div`
  background-color: var(--font-color-four);
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 3rem;
  text-align: center;
  border-radius: 0 0 1rem 1rem;
  font-weight: bold;
  padding: 1rem 0 1rem 0;
`;

const SignUpButton = styled.button`
  font-size: 2.5rem;
  background-color: var(--body-color-two);
  color: var(--font-color-two);
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
    background-color: var(--font-color-one);
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;

const BestOfferButton = styled(SignUpButton)`
  background-color: var(--font-color-four);
`;

const GridPricingContainer = () => {
  return (
    <ComponentContainer>
      <PricingBoxContainer>
        <PricingTitle>Free</PricingTitle>
        <PricingTagContainer><PriceTagSpan><StyledIconPricing icon={["fas", "euro-sign"]}></StyledIconPricing>0</PriceTagSpan></PricingTagContainer>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Free without registration.</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Search with limited access.</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>No access to the community.</PricingBody>
        <PricingBodyLastParagraph><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Limited support.</PricingBodyLastParagraph>
        <SignUpButton as={Link} to="/search">Search now!</SignUpButton>
      </PricingBoxContainer>
      <PricingBoxContainer>
        <PricingTitle>Solo</PricingTitle>
        <PricingTagContainer><PriceTagSpan><StyledIconPricing icon={["fas", "euro-sign"]}></StyledIconPricing>24.95</PriceTagSpan> / month</PricingTagContainer>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Single registration.</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Search with full access.</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Access to communities.</PricingBody>
        <PricingBodyLastParagraph><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Full technical support.</PricingBodyLastParagraph>
        <SignUpButton as={Link} to="/pricing/#name">Sign me up!</SignUpButton>
        <PricingBodyLastofType>30-day money back guarantee.</PricingBodyLastofType>
      </PricingBoxContainer>
      <BestOfferContainer>
        <BestOfferTitle>Duo</BestOfferTitle>
        <PricingTagContainer><PriceTagSpan><StyledIconPricing icon={["fas", "euro-sign"]}></StyledIconPricing>39.95</PriceTagSpan> / month</PricingTagContainer>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Register together with a buddy.</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Search with full access.</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Access to communities.</PricingBody>
        <PricingBodyLastParagraph><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Full technical support.</PricingBodyLastParagraph>
        <BestOfferButton as={Link} to="">Sign me up!</BestOfferButton>
        <PricingBodyLastofType>30-day money back guarantee.</PricingBodyLastofType>
        <MostPopularOffer>Most popular!</MostPopularOffer>
      </BestOfferContainer>
      <PricingBoxContainer>
        <PricingTitle>Gym</PricingTitle>
        <PricingTagContainer><PriceTagSpan>Gym tailored! *</PriceTagSpan></PricingTagContainer>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>* Contact us for further details!</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>* Fee based on gym size.</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>* Access to special features.</PricingBody>
        <PricingBodyLastParagraph><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>* Dedicated support agent.</PricingBodyLastParagraph>
        <SignUpButton as={Link} to="/contact">Contact us!</SignUpButton>
        <PricingBodyLastofType>30-day money back guarantee.</PricingBodyLastofType>
      </PricingBoxContainer>
    </ComponentContainer>
  );
};

export default GridPricingContainer;