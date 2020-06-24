import React from "react";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    --font-color-primary: #3d3d3d;
    --font-color-secondary: #f0f0f0;
    --font-color-tertiary: #ff9900;
    --body-color-primary: #f3f3f3;
    --body-color-secondary: #1d1d1d;
    --body-color-tertiary: #00af43;
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

class App extends React.Component {
  render() {
    return (
      <div>aa</div>
    );
  }
};

export default App;