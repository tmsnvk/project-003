import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ScrollToTop from "utilities/ScrollToTop/ScrollToTop";
import GlobalStyle from "utilities/theme/GlobalStyle";
import theme from "utilities/theme/theme";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Contact, Home, NotFound, Pricing, Search, Success } from "pages";
import ReactGA from "react-ga";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faInfinity, faServer, faComments, faLifeRing, faAngleDoubleRight, faCaretUp, faAngleRight, faEuroSign, faIdCard, faTag, faCodeBranch, faHeart, faHamsa, faScroll, faRocket, faCircleNotch, faReply } from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
library.add(faFacebook, faTwitter, faYoutube, faInstagram, faDotCircle, faInfinity, faServer, faComments, faLifeRing, faAngleDoubleRight, faCaretUp, faAngleRight, faEuroSign, faIdCard, faTag, faCodeBranch, faHeart, faHamsa, faScroll, faRocket, faCircleNotch, faReply);

ReactGA.initialize(process.env.REACT_APP_GA_KEY);
ReactGA.pageview("/");
ReactGA.pageview("/pricing");
ReactGA.pageview("/search");
ReactGA.pageview("/contact");
ReactGA.pageview("/error");
ReactGA.pageview("/success");

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/success" component={Success} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;