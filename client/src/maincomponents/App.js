import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Navbar from "./Navbar";
import Footer from "./Footer";

import HomeLayout from "../layouts/HomeLayout";
import PricingLayout from "../layouts/PricingLayout";
import SearchLayout from "../layouts/SearchLayout";
import ContactLayout from "../layouts/ContactLayout";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faInfinity, faServer, faComments, faLifeRing, faAngleDoubleRight, faCaretUp, faAngleRight, faEuroSign, faTag, faCodeBranch, faHeart, faHamsa, faScroll, faRocket } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faInfinity, faServer, faComments, faLifeRing, faAngleDoubleRight, faCaretUp, faAngleRight, faEuroSign, faTag, faCodeBranch, faHeart, faHamsa, faScroll, faRocket );

const GlobalStyle = createGlobalStyle`
  * {
    --font-color-primary: #3d3d3d; // almost black
    --font-color-secondary: #edebeb; // white
    --font-color-tertiary: #0c2cbb; // dark blue
    --font-color-quaternary: #eb9800; // orange
    --body-color-primary: #edebeb; // white
    --body-color-secondary: #0c2cbb; // dark blue
    --body-color-tertiary: #dbdbdb; // gray
    --body-shadow: #424242; // almost black
    font-family: "Roboto", sans-serif;
    font-size: 62.5%;
    line-height: 1.5;
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
  box-sizing: border-box;
  }

  html,
  body {
    color: var(--font-color-primary);
    background-color: var(--body-color-primary);
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeLayout} />
        <Route path="/pricing" component={PricingLayout} />
        <Route path="/search" component={SearchLayout} />
        <Route path="/contact" component={ContactLayout} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;