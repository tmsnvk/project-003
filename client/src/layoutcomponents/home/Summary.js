import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { color, font, fontsize, mediaq } from "../../variables/styling";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-column-end: 3;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 95%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    grid-column-end: 5;
  }

  @media only screen and (min-width: ${mediaq.xLarge}) {
    flex-wrap: nowrap;
  }
`;

const ItemContainer = styled.div`
  background-color: ${color.background.mainDark};
  margin: 0 auto 2rem;
  padding: 1rem 1rem 1rem 1rem;
  box-shadow: 1px 2px 5px 1px ${color.shadow.main};
  width: 90%;
  border-radius: 1rem;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    margin: 2rem 1rem 0 1rem;
    width: 45%;
  }

  @media only screen and (min-width: ${mediaq.xLarge}) {
    width: 100%;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  color: ${color.font.secondary};
  font-size: ${fontsize.xxLarge};
  padding: 1rem 0 1rem 0;
`;

const ItemTitle = styled.h3`
  font-size: ${fontsize.medium};
  padding: 0 0 2rem 0;
  font-family: ${font.secondary};
`;

const ItemParagraph = styled.p`
  padding: 0 0 1rem 0;
  font-size: ${fontsize.small};
`;

const Summary = () => {
  const itemData = [
    {
      icon: ["fas", "infinity"],
      title: "Running 7/24 & 365 days/year",
      paragraphs: {
        one: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ratione omnis, voluptate facere commodi rerum optio. Magnam perspiciatis odit nisi sit asperiores sunt deseruntmagni saepe, quo ipsam maxime!",
        two: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ratione omnis, voluptate facere commodi rerum optio. Magnam perspiciatis odit nisi sit asperiores sunt deseruntmagni saepe, quo ipsam maxime! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ratione omnis, voluptate facere commodi rerum optio. ",
        three: "Magnam perspiciatis odit nisi sit asperiores sunt deseruntmagni saepe, quo ipsam maxime!"
      }
    },
    {
      icon: ["fas", "server"],
      title: "Neat & clear data presentation",
      paragraphs: {
        one: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ratione omnis, voluptate facere commodi rerum optio. Magnam perspiciatis odit nisi sit asperiores sunt deseruntmagni saepe, quo ipsam maxime!",
        two: "",
        three: ""
      }
    },
    {
      icon: ["fas", "comments"],
      title: "Great community",
      paragraphs: {
        one: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ratione omnis, voluptate facere commodi rerum optio. Magnam perspiciatis odit nisi sit asperiores sunt deseruntmagni saepe, quo ipsam maxime!",
        two: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ratione omnis, voluptate facere commodi rerum optio. Magnam perspiciatis odit nisi sit asperiores sunt deseruntmagni saepe, quo ipsam maxime!",
        three: ""
      }
    },
    {
      icon: ["fas", "life-ring"],
      title: "Email, chat & phone support",
      paragraphs: {
        one: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ratione omnis, voluptate facere commodi rerum optio. Magnam perspiciatis odit nisi sit asperiores sunt deseruntmagni saepe, quo ipsam maxime!",
        two: "",
        three: ""
      }
    }
  ]

  const renderItems = itemData.map(({ icon, title, paragraphs }) => {
    return (
      <ItemContainer key={icon}>
        <StyledIcon icon={icon}></StyledIcon>
        <ItemTitle>{title}</ItemTitle>
        <ItemParagraph>{paragraphs?.one}</ItemParagraph>
        <ItemParagraph>{paragraphs?.two}</ItemParagraph>
        <ItemParagraph>{paragraphs?.three}</ItemParagraph>
      </ItemContainer>
    );
  });

  return (
    <ComponentContainer>
      {renderItems}
    </ComponentContainer>
  );
};

export default Summary;