import React from "react";
import styled from "styled-components";
import { ParagraphElement } from "components/shared/text";
import { StyledIcon } from "components/shared/utilities";
import iconList from "utilities/icons/iconList";
import data from "../data";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 2rem 0 2rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    display: block;
    padding: 0 1rem 0 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    justify-content: center;
    padding: 0 2rem 0 2rem;
    text-align: center;
  }
`;

const DataItems = () => {
  const renderDataItems = data.items.map(({ id, number, text }) => {
    return (
      <Container key={id}>
        <StyledIcon icon={iconList.caretUp} fontsize={"homestatsicon"} />
          <ParagraphElement
            render={number}
            align
            fontfamily
            fontsize={"homestatsfigure"}
            fontweight={"600"}
            padding={"homestatsfigure"}
          />
          <ParagraphElement
            render={text}
            align
            fontfamily
            fontsize={"homestatstext"}
            fontweight={"600"}
            padding={"homestatstext"}
          />
      </Container>
    );
  });

  return (
    <>
      {renderDataItems}
    </>
  );
};

export default DataItems;