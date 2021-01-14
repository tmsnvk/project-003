import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LinkElement } from "components/shared/link"; 
import { StyledIcon } from "components/shared/utilities";
import iconList from "utilities/icons/iconList";
import data from "./data";

const ComponentContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
	width: 100%;
	position: fixed;
  z-index: 1;
  padding: 2rem 0 2rem 0;
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  background-image: ${({ theme }) => theme.color.gradient};
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.shadow};
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transition: 0.5s;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    flex-direction: row;
  }
`;

const LogoLink = styled(Link)`
  padding: 0 0 1rem 0;
  letter-spacing: 0.1rem;
  font-size: ${({ theme }) => theme.fontSize.small};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 0 0 0 5rem;
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const LinkContainer = styled.div`
  letter-spacing: 0.3rem;
`;

const Navbar = () => {
  const renderLinks = data.navbar.links.map(({ color, id, link, text }) => {
    return (
      <LinkElement key={id} to={link} text={text} color={color} dimension={"large"} hover={"nohover"} padding={"2rem 1rem 2rem 1rem"} />
    );
  });

  return (
    <ComponentContainer>
      <LogoLink to={"/"}>
        <StyledIcon icon={iconList.dotCircle} dimension={"large"} margin={"0 0.5rem 0 0"} />
        {data.navbar.title}
      </LogoLink>
      <LinkContainer>
        {renderLinks}
      </LinkContainer>
    </ComponentContainer>
  );
};

export default Navbar;