import React from "react";
import styled from "styled-components";
import { color, font, fontsize, mediaq } from "../../variables/styling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const GridResultImage = styled.div`
  width: 30rem;
  padding: 2rem 3rem 2rem 3rem;
  box-shadow: 0px 2px 2px 0px var(--body-shadow);
  border-radius: 1rem;
`;

const GridResultData = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
`;

const ResultBoxContainer = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin: 0 5rem 0 0;
  letter-spacing: 0.2rem;
  width: 30%;
  background-color: var(--body-color-one);
  padding: 2rem 2rem 2rem 2rem;
  box-shadow: 0px 2px 2px 0px var(--body-shadow);
  border-radius: 1rem;
`;

const ResultTitle = styled.div`

`;

const ResultBaseData = styled.div`

`;

const ResultStatsData = styled.div`

`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  padding: 0 1rem 0 0;
`;

const Result = ({ pokemonData }) => {
  return (
    <ComponentContainer>
      <GridResultImage>

      </GridResultImage>
      <GridResultData>
        <ResultBoxContainer>
          <ResultTitle>Main Information:</ResultTitle>
          <ResultBaseData><StyledIcon icon="id-card"></StyledIcon>Name:&nbsp;{pokemonData.name}</ResultBaseData>
          <ResultBaseData><StyledIcon icon="tag"></StyledIcon>ID:&nbsp;{pokemonData.id}</ResultBaseData>
          {pokemonData.typeTwo ? 
            <ResultBaseData><StyledIcon icon="code-branch"></StyledIcon>Type:&nbsp;{pokemonData.typeOne} / {pokemonData.typeTwo}</ResultBaseData> : 
            <ResultBaseData><StyledIcon icon="code-branch"></StyledIcon>Type:&nbsp;{pokemonData.typeOne}</ResultBaseData>
          }
        </ResultBoxContainer>
        <ResultBoxContainer>
        <ResultTitle>Statistics:</ResultTitle>
          <ResultStatsData><StyledIcon icon="heart"></StyledIcon>HP:&nbsp;{pokemonData.statistics[0].base_stat}</ResultStatsData>
          <ResultStatsData><StyledIcon icon="hamsa"></StyledIcon>Attack:&nbsp;{pokemonData.statistics[1].base_stat}</ResultStatsData>
          <ResultStatsData><StyledIcon icon="scroll"></StyledIcon>Defense:&nbsp;{pokemonData.statistics[2].base_stat}</ResultStatsData>
          <ResultStatsData><StyledIcon icon="rocket"></StyledIcon>Speed:&nbsp;{pokemonData.statistics[5].base_stat}</ResultStatsData>
        </ResultBoxContainer>
      </GridResultData>
    </ComponentContainer>
  );
};

export default Result;