import React from "react";
import { useForm } from "react-hook-form";
import { trackUserEvent } from "utilities/analytics/analyticsTracking";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";
import { ErrorMessage, FormLabel, InputField, RequiredFields, Submit } from "components/shared/form";
import { InfoLink, InfoText, InfoTitle } from "components/shared/information";

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

const InputContainer = styled(ElementContainer)`
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
      <FormContainer id="pokemondata" onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <FormLabel htmlFor="pokemondata">
            Which Kanto Pokemon are you interested in?
          </FormLabel>
          <InputField
            type="text"
            id="pokemon"
            name="pokemon"
            placeholder="* Pokemon Name or ID"
            autoComplete="off"
            maxLength="10"
            ref={register({
              required: true,
              pattern: {
                value: /\b(bulbasaur|ivysaur|venusaur|charmander|charmeleon|charizard|squirtle|wartortle|blastoise|caterpie|metapod|butterfree|weedle|kakuna|beedrill|pidgey|pidgeotto|pidgeot|rattata|raticate|spearow|fearow|ekans|arbok|pikachu|raichu|sandshrew|sandslash|nidoran-f|nidorina|nidoqueen|nidoran-m|nidorino|nidoking|clefairy|clefable|vulpix|ninetales|jigglypuff|wigglytuff|zubat|golbat|oddish|gloom|vileplume|paras|parasect|venonat|venomoth|diglett|dugtrio|meowth|persian|psyduck|golduck|mankey|primeape|growlithe|arcanine|poliwag|poliwhirl|poliwrath|abra|kadabra|alakazam|machop|machoke|machamp|bellsprout|weepinbell|victreebel|tentacool|tentacruel|geodude|graveler|golem|ponyta|rapidash|slowpoke|slowbro|magnemite|magneton|farfetchd|doduo|dodrio|seel|dewgong|grimer|muk|shellder|cloyster|gastly|haunter|gengar|onix|drowzee|hypno|krabby|kingler|voltorb|electrode|exeggcute|exeggutor|cubone|marowak|hitmonlee|hitmonchan|lickitung|koffing|weezing|rhyhorn|rhydon|chansey|tangela|kangaskhan|horsea|seadra|goldeen|seaking|staryu|starmie|mr-mime|scyther|jynx|electabuzz|magmar|pinsir|tauros|magikarp|gyarados|lapras|ditto|eevee|vaporeon|jolteon|flareon|porygon|omanyte|omastar|kabuto|kabutops|aerodactyl|snorlax|articuno|zapdos|moltres|dratini|dragonair|dragonite|mewtwo|mew)\b|\b([1-9]|[1-9][0-9]|1[0-4][0-9]|15[0-1])\b/i,
                message: "A valid NAME or ID is required."
              }
            })}
          />
          {errors.pokemon && <ErrorMessage errorMessage={errors.pokemon.message} />}
          <RequiredFields requiredData={"* Required field."} />
          <Submit type="submit" name="submit" value="Search Database" disabled={formState.isSubmitting || !formState.isValid} />
        </InputContainer>
      </FormContainer>
      {!hideTutorial && 
      <TutorialContainer>
        <InfoTitle>
          How to use our free database?<br />Enter either the valid name or ID of the Pokemon you would like to look up!
        </InfoTitle>
        <InfoText>
          To start getting more detailed search results, please sign up for one of our <InfoLink to="/pricing">subscription</InfoLink> options.
        </InfoText>
        <InfoText>
          To get more information, you are always more than welcome to <InfoLink to="/contact">contact</InfoLink> our support agents.
        </InfoText>
      </TutorialContainer>}
    </ComponentContainer>
  );
};

export default SearchForm;