import React from "react";
import styled from "styled-components";
import { color, font, fontsize, mediaq } from "../../variables/styling";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-column-end: 4;
  }
`;

const SearchContainer = styled.form`
  margin: 20rem 0 0 0;
`;

const FormLabel = styled.label`
  font-size: ${fontsize.medium};
  font-weight: bold;
  letter-spacing: 0.3rem;
  color: ${color.font.secondary};
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
  font-size: ${fontsize.small};
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${color.background.mainDark};
  box-shadow: 0px 2px 2px 0px ${color.shadow.main};
  border-radius: 1rem;
  cursor: text;

  &:focus {
    outline: none;
  }
`;

const FormInputSubmit = styled.button`
  width: 20rem;
  margin: 3rem 0 0 0;
  padding: 1rem 1rem 1rem 1rem;
  font-size: ${fontsize.small};
  background-color: ${color.background.mainDark};
  box-shadow: 0px 2px 2px 0px ${color.shadow.main};
  border-radius: 1rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const TutorialContainer = styled.div`
  font-size: ${fontsize.medium};
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
  color: ${color.font.secondary};
  font-size: ${fontsize.medium};
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: ${color.background.secondary};
  }
`;

const ErrorMessage = styled.div`
  color: ${color.font.warning};
  font-size: ${fontsize.default};
  padding: 1rem 0 0 0;
`;

const Search = ({ pokemonSelection, flagSelection }) => {
  const { register, handleSubmit, errors, formState } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <ComponentContainer>
      <SearchContainer id="pokeid" onSubmit={handleSubmit(onSubmit)} onChange={(event) => {pokemonSelection(event.target.value)}}>
        <FormLabel htmlFor="pokeid">Which Kanto Pokemon are you interested in?</FormLabel>
          <FormInputContainer>
            <FormInputText
              type="text"
              id="pokemon"
              name="pokemon"
              placeholder="* Pokemon Name"
              autoComplete="off"
              ref={register({
                required: {
                  value: true,
                  message: "NAME is required."
                }, 
                pattern: /^[A-Za-z ]+$/i, 
                maxLength: {
                  value: 30,
                  message: "Enter maximum 30 characters."
                } 
              })} />
              {errors.pokemon && <ErrorMessage>{errors.pokemon.message}</ErrorMessage>}
            <FormInputSubmit type="submit" name="submit" disabled={formState.isSubmitting} onClick={() => {flagSelection(true)}}>Search Database!</FormInputSubmit>
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

export default Search;