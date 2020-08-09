import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeLayout from "../layouts/HomeLayout";
import PricingLayout from "../layouts/PricingLayout";
import SearchLayout from "../layouts/SearchLayout";
import ContactLayout from "../layouts/ContactLayout";
import SuccessLayout from "../layouts/SuccessLayout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook,faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faInfinity, faServer, faComments, faLifeRing, faAngleDoubleRight, faCaretUp, faAngleRight, faEuroSign, faTag, faCodeBranch, faHeart, faHamsa, faScroll, faRocket } from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
library.add(faFacebook,faTwitter, faYoutube, faInstagram, faDotCircle, faInfinity, faServer, faComments, faLifeRing, faAngleDoubleRight, faCaretUp, faAngleRight, faEuroSign, faTag, faCodeBranch, faHeart, faHamsa, faScroll, faRocket );

const GlobalStyle = createGlobalStyle`
  * {
    --font-color-one: #3d3d3d; /* almost black */
    --font-color-two: #edebeb; /* white */
    --font-color-three: #0c2cbb; /* dark blue */
    --font-color-four: #eb9800; /* orange */
    --font-color-five: #d90e00; /* red */
    --body-color-one: #edebeb; /* white */
    --body-color-two: #0c2cbb; /* dark blue */
    --body-color-three: #dbdbdb; /* gray */
    --body-shadow: #424242; /* almost black */
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
    color: var(--font-color-one);
    background-color: var(--body-color-one);
  }
`;

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeLayout} />
        <Route path="/pricing" component={PricingLayout} />
        <Route path="/search" component={SearchLayout} />
        <Route path="/contact" component={ContactLayout} />
        <Route path="/success" component={SuccessLayout} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;