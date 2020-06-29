import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.section`
  background-color: var(--body-color-tertiary);
  font-weight: bold;
  color: var(--font-color-tertiary);
  box-shadow: 0px 2px 5px 0px var(--body-shadow);
	position: fixed;
	width: 100%;
  z-index: 1;
`;

const WelcomeTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  padding: 2rem 0 2rem 0;
  transition: all 0.4s ease;

  &:after {
    content: " ";
    display: block;
    padding: 2rem 0 0 0;
    border-bottom: 2px solid var(--font-color-tertiary);
    width: 50%;
    margin: 0 auto;
  }
`;

const LanguageLinksList = styled.ul`
  list-style-type: none;
  text-align: center;
  padding: 1rem 0 1rem 0;
`;
  
const LanguageListItem = styled.li`
  display: inline;
  padding: 0 0 0 5rem;
`;

const LanguageLinks = styled(Link)`
  color: inherit;
  font-size: 1.8rem;
  text-decoration: none;
  letter-spacing: 0.15rem;
  cursor: pointer;
  margin: 2rem 2rem 2rem 2rem;

  &:hover {
    color: var(--font-color-primary);
    padding-bottom: 0.2rem;
    border-bottom: 0.3rem solid var(--font-color-primary);
    transition: border-bottom 0.3s, color 0.3s;
  }
`;

const NavbarToggle = styled.div`
  .visible {
    visibility: visible;
  }

  .hidden {
    visibility: hidden;
    font-size: 0rem;
    padding: 0 0 0 0;
		transition: all 0.4s ease;
		transform: scale(0);
  }
`;

class Navbar extends React.Component {
  state = { previousScrollPosition: window.pageYOffset, visible: true };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { previousScrollPosition } = this.state;
    const currentScrollPosition = window.pageYOffset;
    const visible = previousScrollPosition > currentScrollPosition;

    this.setState({
      previousScrollPosition: currentScrollPosition, visible });
  };

  render() {
    return (
      <HeaderContainer>
        <NavbarToggle>
          <WelcomeTitle className={this.state.visible ? "visible" : "hidden"}>Welcome to Central Kanto Pokemon Database!</WelcomeTitle>
        </NavbarToggle>
        <LanguageLinksList> 
          <LanguageListItem><LanguageLinks to="/">Home</LanguageLinks></LanguageListItem>
          <LanguageListItem><LanguageLinks to="/pricing">Pricing</LanguageLinks></LanguageListItem>
          <LanguageListItem><LanguageLinks to="/search">Search</LanguageLinks></LanguageListItem>
          <LanguageListItem><LanguageLinks to="/contact">Contact</LanguageLinks></LanguageListItem>
        </LanguageLinksList>
      </HeaderContainer>
    );
  }
};

export default Navbar;