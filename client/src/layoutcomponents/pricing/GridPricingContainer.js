import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  grid-area: grid-pricing;
	display: flex;
	flex-direction: row;
	font-size: 2rem;
`;

const PricingBoxContainer = styled.div`
  width: 70%;
  margin: 0 5rem 0 5rem;
  background-color: var(--font-color-secondary);
  box-shadow: 0px 2px 2px 0px var(--body-shadow);
  border-radius: 1rem;
`;

const PricingTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1rem;
  font-size: 5rem;
  background-color: var(--body-color-secondary);
  color: var(--font-color-secondary);
  border-radius: 1.5rem 1.5rem 0 0;
`;

const GridPricingContainer = () => {
  return (
    <ComponentContainer>
      <PricingBoxContainer>
        <PricingTitle>Free</PricingTitle>

      </PricingBoxContainer>

    </ComponentContainer>
  );
};

export default GridPricingContainer;

/* <section class="container-grid-pricing">
    <div class="pricing-holder">
      <h3>Free</h3>
      <p><span><sup><i class="icons fas fa-euro-sign"></i></sup>0</span></p>
      <p><i class="icons fas fa-angle-right"></i>Free without registration.</p>
      <p><i class="icons fas fa-angle-right"></i>Search with limited access.</p>
      <p><i class="icons fas fa-angle-right"></i>No access to the community.</p>
      <p class="lastparag"><i class="icons fas fa-angle-right"></i>Limited support.</p>
      <button class="signup">Sign me up!</button>
      <p>30-day money back guarantee.</p>
    </div>
    <div class="pricing-holder">
      <h3>Solo</h3>
      <p><span><sup><i class="icons fas fa-euro-sign"></i></sup>24.95</span> / month</p>
      <p><i class="icons fas fa-angle-right"></i>Single registration.</p>
      <p><i class="icons fas fa-angle-right"></i>Search with full access.</p>
      <p><i class="icons fas fa-angle-right"></i>Access to private communities.</p>
      <p class="lastparag"><i class="icons fas fa-angle-right"></i>Full technical support.</p>
      <button class="signup">Sign me up!</button>
      <p>30-day money back guarantee.</p>
    </div>
    <div class="pricing-holder" id="best-offer">
      <h3>Duo</h3>
      <p><span><sup><i class="icons fas fa-euro-sign"></i></sup>39.95</span> / month</p>
      <p><i class="icons fas fa-angle-right"></i>Register together with one buddy.</p>
      <p><i class="icons fas fa-angle-right"></i>Search with full access.</p>
      <p><i class="icons fas fa-angle-right"></i>Access to private communities.</p>
      <p class="lastparag"><i class="icons fas fa-angle-right"></i>Full technical support.</p>
      <button class="signup">Sign me up!</button>
      <p>30-day money back guarantee.</p>
      <div>Most popular!</div>
    </div>
    <div class="pricing-holder">
      <h3>Gym</h3>
      <p><span>Gym tailored! *</span></p>
      <p><i class="icons fas fa-angle-right"></i>* Contact us for further details!</p>
      <p><i class="icons fas fa-angle-right"></i>* Fee based on gym size.</p>
      <p><i class="icons fas fa-angle-right"></i>* Access to special features.</p>
      <p class="lastparag"><i class="icons fas fa-angle-right"></i>* Dedicated support agent.</p>
      <a class="contact" href="./contact">Contact us!</a>
      <p>30-day money back guarantee.</p>
    </div>
  </section> */