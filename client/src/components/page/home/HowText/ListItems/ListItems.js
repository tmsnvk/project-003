import React from "react";
import styled from "styled-components";
import { ParagraphElement } from "components/shared/text";
import { StyledIcon } from "components/shared/utilities";
import iconList from "utilities/icons/iconList";
import data from "../data";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 1rem 0;
  text-align: left;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 100%;
  }
`;

const ListItems = () => {
  const renderComponentData = data.steps.map(({ id, text }) => {
    return (
      <Container key={id}>
        <StyledIcon icon={iconList.doubleRight} />
        <ParagraphElement data={text} align={"left"} fontsize={"medium"} />
      </Container>
    );
  });

  return (
    <>
      {renderComponentData}
    </>
  );
};

export default ListItems;