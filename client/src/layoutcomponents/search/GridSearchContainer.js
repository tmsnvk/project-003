import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ComponentContainer = styled.section`
  grid-area: grid-search;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.div`
  margin: 20rem 0 0 0;
`;

const FormLabel = styled.label`
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.3rem;
  color: var(--font-color-tertiary);
  text-align: center;
  margin: 0 0 3rem 0;
`;

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0 0 0;
`;

const FormInputText = styled.input`
  width: 30rem;
  font-size: 2rem;
  background-color: var(--body-color-tertiary);
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 1rem;
  box-shadow: 0px 2px 2px 0px var(--body-shadow);
  cursor: text;

  &:focus {
    outline: none;
  }
`;

const FormInputSubmit = styled.button`
  width: 20rem;
  font-size: 2rem;
  background-color: var(--body-color-primary);
  margin: 3rem 0 0 0;
  padding: 1rem 1rem 1rem 1rem;
  box-shadow: 0px 2px 2px 0px var(--body-shadow);
  border-radius: 1rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const TutorialContainer = styled.div`
  font-size: 3rem;
  text-align: center;
  padding: 10rem 0 0 0;
`;

const TutorialText = styled.p`
  padding: 3rem 0 0 0;

  &:last-of-type {
    padding: 3rem 0 10rem 0;
  }
`;

const TutorialLink = styled(Link)`
  color: var(--font-color-tertiary);
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: var(--font-color-tertiary);
  }
`;

const GridSearchContainer = () => {
  return (
    <ComponentContainer>
      <SearchContainer>
        <FormLabel htmlFor="search-field">Which Kanto Pokemon are you interested in?</FormLabel>
          <FormInputContainer>
            <FormInputText type="text" id="search-field" name="search-field" autoComplete="off" />
            <FormInputSubmit>Search Database!</FormInputSubmit>
          </FormInputContainer>
      </SearchContainer>
      <TutorialContainer>
        <TutorialText>To use our free database search, enter either the name or the ID of the Pokemon you would like to look up!</TutorialText>
        <TutorialText>To start getting detailed search results, please sign up to one of our <TutorialLink to="/pricing">subscription</TutorialLink> options.</TutorialText>
        <TutorialText>To get more information, you are always more than welcome to <TutorialLink to="/contact">contact</TutorialLink> our support agents.</TutorialText>
      </TutorialContainer>

    </ComponentContainer>
  );
};

export default GridSearchContainer;