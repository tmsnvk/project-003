import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ElementContainer } from "components/shared/layout";
import { FormSubmitButton, InputField, InputFormLabel, RequiredFields } from "components/shared/form";
import { ItemContainer } from "components/shared";
import { InformationLink, InformationText } from "components/shared/information";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 4;
  }
`;

const SearchContainer = styled.form`
  width: 90%;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: auto;
  }
`;

const FormInputContainer = styled(ElementContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem 2rem 2rem;
`;

const TutorialContainer = styled(ElementContainer)`
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: center;
  margin: 5rem 0 0 0;
  width: 90%;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: auto;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.color.warning};
  font-size: ${({ theme }) => theme.fontSize.default};
  padding: 1rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

const Search = ({ selectedPokemon, tutorial, hideTutorial }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data, event) => {
    selectedPokemon(data.pokemon);
    event.target.reset();

    if (!hideTutorial) {
      tutorial(true);
    }
  };

  return (
    <ComponentContainer>
      <SearchContainer id="pokemondata" onSubmit={handleSubmit(onSubmit)}>
          <FormInputContainer>
            <InputFormLabel htmlFor="pokemondata">Which Kanto Pokemon are you interested in?</InputFormLabel>
            <ItemContainer>
              <InputField
                type="text"
                id="pokemon"
                name="pokemon"
                placeholder="* Pokemon Name or ID"
                autoComplete="off"
                ref={register({
                  required:  true,
                  pattern: /\b(bulbasaur|ivysaur|venusaur|charmander|charmeleon|charizard|squirtle|wartortle|blastoise|caterpie|metapod|butterfree|weedle|kakuna|beedrill|pidgey|pidgeotto|pidgeot|rattata|raticate|spearow|fearow|ekans|arbok|pikachu|raichu|sandshrew|sandslash|nidoran-f|nidorina|nidoqueen|nidoran-m|nidorino|nidoking|clefairy|clefable|vulpix|ninetales|jigglypuff|wigglytuff|zubat|golbat|oddish|gloom|vileplume|paras|parasect|venonat|venomoth|diglett|dugtrio|meowth|persian|psyduck|golduck|mankey|primeape|growlithe|arcanine|poliwag|poliwhirl|poliwrath|abra|kadabra|alakazam|machop|machoke|machamp|bellsprout|weepinbell|victreebel|tentacool|tentacruel|geodude|graveler|golem|ponyta|rapidash|slowpoke|slowbro|magnemite|magneton|farfetchd|doduo|dodrio|seel|dewgong|grimer|muk|shellder|cloyster|gastly|haunter|gengar|onix|drowzee|hypno|krabby|kingler|voltorb|electrode|exeggcute|exeggutor|cubone|marowak|hitmonlee|hitmonchan|lickitung|koffing|weezing|rhyhorn|rhydon|chansey|tangela|kangaskhan|horsea|seadra|goldeen|seaking|staryu|starmie|mr-mime|scyther|jynx|electabuzz|magmar|pinsir|tauros|magikarp|gyarados|lapras|ditto|eevee|vaporeon|jolteon|flareon|porygon|omanyte|omastar|kabuto|kabutops|aerodactyl|snorlax|articuno|zapdos|moltres|dratini|dragonair|dragonite|mewtwo|mew)\b|\b([1-9]|[1-9][0-9]|1[0-4][0-9]|15[0-1])\b/i
                })}
                />
                {errors.pokemon?.type === "required" && <ErrorMessage>A NAME or ID is required.</ErrorMessage>}
                {errors.pokemon?.type === "pattern" && <ErrorMessage>A valid NAME or ID is required.</ErrorMessage>}
            </ItemContainer>
            <RequiredFields>* Required fields.</RequiredFields>
            <FormSubmitButton type="submit" name="submit" value="Search Database" disabled={formState.isSubmitting || !formState.isValid}></FormSubmitButton>
          </FormInputContainer>
      </SearchContainer>
      {!hideTutorial && 
      <TutorialContainer>
        <InformationText>How to use our free database search?<br />Enter either the valid name or ID of the Pokemon you would like to look up!</InformationText>
        <InformationText>To start getting more detailed search results, please sign up for one of our <InformationLink to="/pricing">subscription</InformationLink> options.</InformationText>
        <InformationText>To get more information, you are always more than welcome to <InformationLink to="/contact">contact</InformationLink> our support agents.</InformationText>
      </TutorialContainer>}
    </ComponentContainer>
  );
};

export default Search;