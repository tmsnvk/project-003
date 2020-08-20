import React from "react";
import styled from "styled-components";
import { color, fontsize, mediaq } from "../../variables/styling";
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
  width: 90%;
  margin: 10rem 0 0 0;
`;

const FormLabel = styled.label`
  display: block;
  color: ${color.font.secondary};
  font-size: ${fontsize.medium};
  font-weight: bold;
  letter-spacing: 0.3rem;
  text-align: center;
  margin: 0 0 3rem 0;

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.large};
  }
`;

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0 0 0;
`;

const FormInputText = styled.input`
  width: 20rem;
  font-size: ${fontsize.small};
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${color.background.mainDark};
  box-shadow: 0px 2px 2px 0px ${color.shadow.main};
  border-radius: 1rem;
  cursor: text;

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.medium};
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

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.medium};
  }
`;

const TutorialContainer = styled.div`
  font-size: ${fontsize.small};
  text-align: center;
  padding: 5rem 0 0 0;
  width: 90%;

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.medium};
  }
`;

const TutorialText = styled.p`
  padding: 3rem 0 0 0;

  &:last-of-type {
    padding: 3rem 0 10rem 0;
  }
`;

const TutorialLink = styled(Link)`
  color: ${color.font.secondary};
  font-size: ${fontsize.small};
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: ${color.background.secondary};
  }

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.medium};
  }
`;

const ErrorMessage = styled.div`
  color: ${color.font.warning};
  font-size: ${fontsize.default};
  padding: 1rem 0 0 0;

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.small};
  }
`;

const Search = ({ propSelectedPokemon, propInitiateData, propTutorial, propHideTutorial }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });
  
  const onSubmit = (data) => console.log(data);

  const handleSearchOnChange = (event) => propSelectedPokemon(event.target.value);
  
  const handleInitiateData = () => propInitiateData(true);

  const handleSubmitOnClick = () => {
    handleInitiateData(); 
    propTutorial();
  };
  
  return (
    <ComponentContainer>
      <SearchContainer id="pokemondata" onSubmit={handleSubmit(onSubmit)} onChange={handleSearchOnChange}>
        <FormLabel htmlFor="pokemondata">Which Kanto Pokemon are you interested in?</FormLabel>
          <FormInputContainer>
            <FormInputText
              type="text"
              id="pokemon"
              name="pokemon"
              placeholder="* Pokemon Name or ID"
              autoComplete="off"
              ref={register({
                required:  true,
                pattern: /\b(bulbasaur|ivysaur|venusaur|charmander|charmeleon|charizard|squirtle|wartortle|blastoise|caterpie|metapod|butterfree|weedle|kakuna|beedrill|pidgey|pidgeotto|pidgeot|rattata|raticate|spearow|fearow|ekans|arbok|pikachu|raichu|sandshrew|sandslash|nidoran-f|nidorina|nidoqueen|nidoran-m|nidorino|nidoking|clefairy|clefable|vulpix|ninetales|jigglypuff|wigglytuff|zubat|golbat|oddish|gloom|vileplume|paras|parasect|venonat|venomoth|diglett|dugtrio|meowth|persian|psyduck|golduck|mankey|primeape|growlithe|arcanine|poliwag|poliwhirl|poliwrath|abra|kadabra|alakazam|machop|machoke|machamp|bellsprout|weepinbell|victreebel|tentacool|tentacruel|geodude|graveler|golem|ponyta|rapidash|slowpoke|slowbro|magnemite|magneton|farfetchd|doduo|dodrio|seel|dewgong|grimer|muk|shellder|cloyster|gastly|haunter|gengar|onix|drowzee|hypno|krabby|kingler|voltorb|electrode|exeggcute|exeggutor|cubone|marowak|hitmonlee|hitmonchan|lickitung|koffing|weezing|rhyhorn|rhydon|chansey|tangela|kangaskhan|horsea|seadra|goldeen|seaking|staryu|starmie|mr-mime|scyther|jynx|electabuzz|magmar|pinsir|tauros|magikarp|gyarados|lapras|ditto|eevee|vaporeon|jolteon|flareon|porygon|omanyte|omastar|kabuto|kabutops|aerodactyl|snorlax|articuno|zapdos|moltres|dratini|dragonair|dragonite|mewtwo|mew)\b|\b([1-9]|[1-8][0-9]|9[0-9]|1[0-4][0-9]|15[01])\b/ig
              })} 
              />
              {errors.pokemon?.type === "required" && <ErrorMessage>A NAME or ID is required.</ErrorMessage>}
              {errors.pokemon?.type === "pattern" && <ErrorMessage>A valid NAME or ID is required.</ErrorMessage>}
            <FormInputSubmit type="submit" name="submit" disabled={formState.isSubmitting || !formState.isValid} onClick={handleSubmitOnClick}>Search Database!</FormInputSubmit>
          </FormInputContainer>
      </SearchContainer>
      {!propHideTutorial && <TutorialContainer>
        <TutorialText>To use our free database search, enter either the valid name or ID of the Pokemon you would like to look up!</TutorialText>
        <TutorialText>To start getting detailed search results, please sign up to one of our <TutorialLink to="/pricing">subscription</TutorialLink> options.</TutorialText>
        <TutorialText>To get more information, you are always more than welcome to <TutorialLink to="/contact">contact</TutorialLink> our support agents.</TutorialText>
      </TutorialContainer>}
    </ComponentContainer>
  );
};

export default Search;

// import axios from "axios";
// const [pokemonNames, setPokemonNames] = useState([]);

// useEffect(() => {
  //   const response = async () => {
    //     try {
      //       const { data } = await axios.get(`/pokemonnames`);
      //       const final = [];
      //       console.log(data.results);
      //        data.results.map((item) => {
        //         const { name } = item;
        //         final.push(name);
        //       });
        //       const myregex = final.toString().replace(/,/ig, "|");
        //       console.log(myregex);
        
        //       const finalreg = new RegExp("/\b(" + myregex + ")\b|\b([1-9]|[1-8][0-9]|9[0-9]|1[0-4][0-9]|15[01])\b/ig");
        //       setPokemonNames(finalreg);
        //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   response();
  // }, []);