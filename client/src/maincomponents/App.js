import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { color, font } from "../variables/styling";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeLayout from "../layouts/HomeLayout";
import PricingLayout from "../layouts/PricingLayout";
import SearchLayout from "../layouts/SearchLayout";
import ContactLayout from "../layouts/ContactLayout";
import SuccessLayout from "../layouts/SuccessLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook,faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faInfinity, faServer, faComments, faLifeRing, faAngleDoubleRight, faCaretUp, faAngleRight, faEuroSign, faIdCard, faTag, faCodeBranch, faHeart, faHamsa, faScroll, faRocket, faSpinner, faQuestion, faReply } from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
library.add(faFacebook,faTwitter, faYoutube, faInstagram, faDotCircle, faInfinity, faServer, faComments, faLifeRing, faAngleDoubleRight, faCaretUp, faAngleRight, faEuroSign, faIdCard, faTag, faCodeBranch, faHeart, faHamsa, faScroll, faRocket, faSpinner, faQuestion, faReply);

const GlobalStyle = createGlobalStyle`
  * {
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
    width: 100vw;
    height: 100vh;
    color: ${color.font.mainDark};
    background-color: ${color.background.mainLight};
    font-family: ${font.main};
    font-size: 62.5%;
    line-height: 1.5;
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
        <Route exact path="/pricing" component={PricingLayout} />
        <Route exact path="/search" component={SearchLayout} />
        <Route exact path="/contact" component={ContactLayout} />
        <Route exact path="/success" component={SuccessLayout} />
        <Route path="*" component={ErrorLayout} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;