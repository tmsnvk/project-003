import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PROJECT_ROOT } from "utilities/constants/urls";
import ScrollToTop from "utilities/ScrollToTop/ScrollToTop";
import GlobalStyle from "utilities/theme/GlobalStyle";
import theme from "utilities/theme/theme";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Contact, Home, NotFound, Pricing, Search, Success } from "pages";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faInfinity, faServer, faComments, faLifeRing, faAngleDoubleRight, faCaretUp, faAngleRight, faEuroSign, faIdCard, faTag, faCodeBranch, faHeart, faHamsa, faScroll, faRocket, faCircleNotch, faReply } from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
library.add(faFacebook, faTwitter, faYoutube, faInstagram, faDotCircle, faInfinity, faServer, faComments, faLifeRing, faAngleDoubleRight, faCaretUp, faAngleRight, faEuroSign, faIdCard, faTag, faCodeBranch, faHeart, faHamsa, faScroll, faRocket, faCircleNotch, faReply);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path={`/${PROJECT_ROOT}`} component={Home} />
        <Route exact path={`/${PROJECT_ROOT}/pricing`} component={Pricing} />
        <Route exact path={`/${PROJECT_ROOT}/search`} component={Search} />
        <Route exact path={`/${PROJECT_ROOT}/contact`} component={Contact} />
        <Route exact path={`/${PROJECT_ROOT}/success`} component={Success} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;