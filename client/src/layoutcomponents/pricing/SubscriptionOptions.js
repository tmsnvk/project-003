import React from "react";
import styled from "styled-components";
import { color, fontsize, mediaq } from "../../variables/styling";
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

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-column-end: 3;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 95%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    grid-column-end: 5;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
  }

  @media only screen and (min-width: ${mediaq.xLarge}) {
    width: 90%;
  }
`;

const NormalOfferContainer = styled.div`
  width: 90%;
  margin: 0 auto 2rem;
  background-color: ${color.font.mainLight};
  box-shadow: 0px 2px 2px 0px ${color.shadow.main};
  border-radius: 1rem;

  

  @media only screen and (min-width: ${mediaq.small}) {
    width: 60%;
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    margin: 0 1rem 0 1rem;
    width: 45%;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    width: 100%;
    margin: 0 2rem 0 2rem;
  }

  @media only screen and (min-width: ${mediaq.xLarge}) {
    width: 90%;
  }
`;

const BestOfferContainer = styled(NormalOfferContainer)`
  @media only screen and (min-width: ${mediaq.small}) {
    transform: scale(1.05);
  }
`;

const PricingTitle = styled.h3`
  font-size: ${fontsize.xLarge};
  color: ${color.font.mainLight};
  background-color: ${color.background.secondary};
  border-radius: 1.5rem 1.5rem 0 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1rem;

  @media only screen and (min-width: ${mediaq.xLarge}) {
    font-size: ${fontsize.xxLarge};
  }
`;

const BestOfferTitle = styled(PricingTitle)`
  background-color: ${color.background.alternate};
`;

const PricingTagContainer = styled.p`
  text-align: center;
  padding: 2rem 0 2rem 0;
  font-size: ${fontsize.small};
`;

const PriceTagSpan = styled.span`
  font-size: ${fontsize.large};
`;

const StyledIconPricing = styled(FontAwesomeIcon)`
  font-size: ${fontsize.medium};
  vertical-align: super;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${fontsize.small};
  vertical-align: middle;
  margin: 0 1rem 0 0;

  @media only screen and (min-width: ${mediaq.xLarge}) {
    font-size: ${fontsize.medium};
  }
`;

const PricingBody = styled.p`
  font-size: ${fontsize.small};
  padding: 0 0 1rem 2rem;

  @media only screen and (min-width: ${mediaq.small}) {
    font-size: ${fontsize.medium};
  }

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.small};
  }

  @media only screen and (min-width: ${mediaq.xLarge}) {
    font-size: ${fontsize.medium};
  }
`;

const PricingBodyLastofType = styled(PricingBody)`
  padding: 1rem 0 2rem 0;
  text-align: center;
`;

const PricingBodyLastParagraph = styled(PricingBody)`
  /* padding: 0 2rem 1rem 5rem; */
`;

const MostPopularOffer = styled.div`
  background-color: ${color.background.alternate};
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: ${fontsize.small};
  text-align: center;
  border-radius: 0 0 1rem 1rem;
  font-weight: bold;
  padding: 1rem 0 1rem 0;
`;

const SignUpButton = styled.button`
  font-size: ${fontsize.small};
  background-color: ${color.background.secondary};
  color: ${color.font.mainLight};
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
    background-color: ${color.font.mainDark};
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${mediaq.small}) {
    font-size: ${fontsize.medium};
  }
`;

const BestOfferButton = styled(SignUpButton)`
  background-color: ${color.background.alternate};
`;

const SubscriptionOptions = () => {
  return (
    <ComponentContainer>
      <NormalOfferContainer>
        <PricingTitle>Free</PricingTitle>
        <PricingTagContainer>
          <PriceTagSpan><StyledIconPricing icon={["fas", "euro-sign"]}></StyledIconPricing> 0</PriceTagSpan>
        </PricingTagContainer>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Free without registration.</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Search with limited access.</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>No access to the community.</PricingBody>
        <PricingBodyLastParagraph><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Limited support.</PricingBodyLastParagraph>
        <SignUpButton as={Link} to="/search">Search now!</SignUpButton>
      </NormalOfferContainer>
      <NormalOfferContainer>
        <PricingTitle>Solo</PricingTitle>
        <PricingTagContainer>
          <PriceTagSpan><StyledIconPricing icon={["fas", "euro-sign"]}></StyledIconPricing> 24.95 </PriceTagSpan>/ month
        </PricingTagContainer>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Single registration.</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Search with full access.</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Access to communities.</PricingBody>
        <PricingBodyLastParagraph><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Full technical support.</PricingBodyLastParagraph>
        <SignUpButton as={Link} to="/pricing/#signupform">Sign me up!</SignUpButton>
        <PricingBodyLastofType>30-day money back guarantee.</PricingBodyLastofType>
      </NormalOfferContainer>
      <BestOfferContainer>
        <BestOfferTitle>Duo</BestOfferTitle>
        <PricingTagContainer>
          <PriceTagSpan><StyledIconPricing icon={["fas", "euro-sign"]}></StyledIconPricing> 39.95 </PriceTagSpan>/ month
        </PricingTagContainer>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Register together with a buddy.</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Search with full access.</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Access to communities.</PricingBody>
        <PricingBodyLastParagraph><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>Full technical support.</PricingBodyLastParagraph>
        <BestOfferButton as={Link} to="/pricing/#signupform">Sign me up!</BestOfferButton>
        <PricingBodyLastofType>30-day money back guarantee.</PricingBodyLastofType>
        <MostPopularOffer>Most popular!</MostPopularOffer>
      </BestOfferContainer>
      <NormalOfferContainer>
        <PricingTitle>Gym</PricingTitle>
        <PricingTagContainer>
          <PriceTagSpan>Gym tailored! *</PriceTagSpan>
        </PricingTagContainer>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>* Contact us for further details!</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>* Fee based on gym size.</PricingBody>
        <PricingBody><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>* Access to special features.</PricingBody>
        <PricingBodyLastParagraph><StyledIcon icon={["fas", "angle-right"]}></StyledIcon>* Dedicated support agent.</PricingBodyLastParagraph>
        <SignUpButton as={Link} to="/contact">Contact us!</SignUpButton>
        <PricingBodyLastofType>30-day money back guarantee.</PricingBodyLastofType>
      </NormalOfferContainer>
    </ComponentContainer>
  );
};

export default SubscriptionOptions;