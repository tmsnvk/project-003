import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ContactLayout, ErrorLayout, HomeLayout, PricingLayout, SearchLayout, SuccessLayout } from "layouts";
import ScrollToTop from "utilities/ScrollToTop";
import ReactGA from "react-ga";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faInfinity, faServer, faComments, faLifeRing, faAngleDoubleRight, faCaretUp, faAngleRight, faEuroSign, faIdCard, faTag, faCodeBranch, faHeart, faHamsa, faScroll, faRocket, faCircleNotch, faReply } from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
library.add(faFacebook, faTwitter, faYoutube, faInstagram, faDotCircle, faInfinity, faServer, faComments, faLifeRing, faAngleDoubleRight, faCaretUp, faAngleRight, faEuroSign, faIdCard, faTag, faCodeBranch, faHeart, faHamsa, faScroll, faRocket, faCircleNotch, faReply);

const theme = {
  fontColor: {
    mainDark: "#3f3b3b", // almost black
    mainLight: "#f3f3f1", // light gray
    secondary: "#0c2cbb", // dark blue
    alternate: "#dc8b18", // orange
    warning: "#d90e00" // red
  },
  backgroundColor: {
    mainDark: "#c7c8cc", // gray/blue-ish
    mainLight: "#f3f3f1", // almost white
    secondary: "#0c2cbb", // dark blue
    alternate: "#dc8b18", // orange
    gradient: "radial-gradient(circle, #f3f3f1, #c7c8cc)"
  },
  shadowColor: {
    main: "#424242" // almost black
  },
  fontFamily: {
    main: `"Roboto", sans-serif`,
    secondary: `"Open Sans", sans-serif`
  },
  fontSize: {
    default: "1rem",
    small: "1.2rem",
    medium: "1.5rem",
    large: "2rem",
    xLarge: "3rem",
    xxLarge: "5rem"
  },
  elementBorder: {
    padding: "1rem 1rem 1rem 1rem",
    boxShadow: "1px 2px 5px 1px",
    border: "solid 1px #e1e2df",
    borderRadius: "1rem",

  },
  mediaQueries: {
    extraSmall: "320px",
    small: "480px",
    medium: "768px",
    large: "992px",
    xLarge: "1200px"
  }
};

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
    color: ${props => props.theme.fontColor.mainDark};
    background-color: ${props => props.theme.backgroundColor.mainLight};
    font-family: ${props => props.theme.fontFamily.main};
    font-size: 62.5%;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
`;

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
        <Route exact path="/" component={HomeLayout} />
        <Route exact path="/pricing" component={PricingLayout} />
        <Route exact path="/search" component={SearchLayout} />
        <Route exact path="/contact" component={ContactLayout} />
        <Route exact path="/success" component={SuccessLayout} />
        <Route path="*" component={ErrorLayout} />
      </Switch>
      <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;