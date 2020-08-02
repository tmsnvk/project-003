import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComponentContainer = styled.section`
  grid-area: grid-item;
  text-align: center;
  display: flex;
  flex-direction: row;
`;

const ItemContainer = styled.div`
  background-color: var(--body-color-three);
  font-size: 2rem;
  margin: 0 2.5rem 0 2.5rem;
  padding: 1rem 1rem 1rem 1rem;
  box-shadow: 1px 2px 5px 1px var(--body-shadow);
  width: 100%;
  border-radius: 1rem;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  &:first-of-type {
    margin: 0 2.5rem 0 5rem;
  }

  &:last-of-type {
    margin: 0 5rem 0 2.5rem;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  color: var(--font-color-three);
  font-size: 5.5rem;
  padding: 1rem 0 1rem 0;
`;

const ItemTitle = styled.h3`
  font-size: 2rem;
  padding: 0 0 2rem 0;
  font-family: "Open Sans", sans-serif;
`;

const ItemMessage = styled.p`
  padding: 0 0 1rem 0;
`;

const GridItemContainer = () => {
  const itemData = [
    {
      icon: "infinity",
      title: "Running 7/24 & 365 days/year",
      paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ratione omnis, voluptate facere commodi rerum optio. Magnam perspiciatis odit nisi sit asperiores sunt deseruntmagni saepe, quo ipsam maxime!",
      paragraphTwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ratione omnis, voluptate facere commodi rerum optio. Magnam perspiciatis odit nisi sit asperiores sunt deseruntmagni saepe, quo ipsam maxime! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ratione omnis, voluptate facere commodi rerum optio. ",
      paragraphThree: "Magnam perspiciatis odit nisi sit asperiores sunt deseruntmagni saepe, quo ipsam maxime!"
    },
    {
      icon: "server",
      title: "Neat & clear data presentation",
      paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ratione omnis, voluptate facere commodi rerum optio. Magnam perspiciatis odit nisi sit asperiores sunt deseruntmagni saepe, quo ipsam maxime!",
      paragraphTwo: "",
      paragraphThree: ""
    },
    {
      icon: "comments",
      title: "Great community",
      paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ratione omnis, voluptate facere commodi rerum optio. Magnam perspiciatis odit nisi sit asperiores sunt deseruntmagni saepe, quo ipsam maxime!",
      paragraphTwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ratione omnis, voluptate facere commodi rerum optio. Magnam perspiciatis odit nisi sit asperiores sunt deseruntmagni saepe, quo ipsam maxime!",
      paragraphThree: ""
    },
    {
      icon: "life-ring",
      title: "Email, chat & phone support",
      paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ratione omnis, voluptate facere commodi rerum optio. Magnam perspiciatis odit nisi sit asperiores sunt deseruntmagni saepe, quo ipsam maxime!",
      paragraphTwo: "",
      paragraphThree: ""
    }
  ]

  const renderItems = itemData.map((item) => {
    return (
      <ItemContainer key={item.icon}>
        <StyledIcon icon={item.icon}></StyledIcon>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemMessage>{item.paragraphOne}</ItemMessage>
        <ItemMessage>{item.paragraphTwo}</ItemMessage>
        <ItemMessage>{item.paragraphThree}</ItemMessage>
      </ItemContainer>
    );
  });

  return (
    <ComponentContainer>
      {renderItems}
    </ComponentContainer>
  );
};

export default GridItemContainer;