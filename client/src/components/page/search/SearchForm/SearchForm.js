import React from "react";
import { useForm } from "react-hook-form";
import { trackUserEvent } from "utilities/analytics/analyticsTracking";
import styled from "styled-components";
import { SectionElementContainer } from "components/shared/layout";
import { ErrorMessage, FormLabel, InputField, RequiredFields, Submit } from "components/shared/form";
import TutorialContainer from "./TutorialContainer";
import { searchPokemon } from "utilities/helpers/regex/forms";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 4;
  }
`;

const FormContainer = styled.form`
  width: 90%;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: auto;
  }
`;

const InputContainer = styled(SectionElementContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem 2rem 2rem;
`;

const SearchForm = ({ selectedPokemon, tutorial, hideTutorial }) => {
  const { errors, formState, handleSubmit, register } = useForm({ mode: "onChange" });

  const onSubmit = (data, event) => {
    selectedPokemon(data.pokemon);
    event.target.reset();
    trackUserEvent("search form", "submit");

    if (!hideTutorial) tutorial(true);
  };

  return (
    <ComponentContainer>
      <FormContainer method={"GET"} onSubmit={handleSubmit(onSubmit)} id={"pokemondata"}>
        <InputContainer>
          <FormLabel htmlFor={"pokemondata"} render={"Which Kanto Pokemon are you interested in?"} />
          <InputField
            type={"text"}
            id={"pokemon"}
            name={"pokemon"}
            placeholder={"* Pokemon Name or ID"}
            autoComplete={"off"}
            maxLength={"10"}
            ref={register({
              required: true,
              pattern: { value: searchPokemon, message: "A valid NAME or ID is required." }
            })}
          />
          {errors.pokemon && <ErrorMessage render={errors.pokemon.message} />}
          <RequiredFields render={"* Required field."} />
          <Submit type={"submit"} name={"submit"} value={"Search Database"} disabled={formState.isSubmitting || !formState.isValid} />
        </InputContainer>
      </FormContainer>
      {!hideTutorial && <TutorialContainer />}
    </ComponentContainer>
  );
};

export default SearchForm;