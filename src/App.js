import React from "react";
import { styleReset } from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";

/* Pick a theme of your choice */
import original from "react95/dist/themes/original";
import "./assets/css/style.css";

/* Original Windows95 font (optional) */
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

import Navbar from "./components/Navbar";
import NewsTicker from "./components/NewsTicker";
import WeatherComponent from "./components/WeatherComponent";
import NewsComponent from "./components/NewsComponent";
import ForcastComponent from "./components/ForcastComponent";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  body{
    background-color: #018181;
  }
  ${styleReset}
`;

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <div style={{ height: "3.4vw" }}>
          <Navbar />
        </div>
        <NewsTicker />
        <div>
          <WeatherComponent />
          <NewsComponent />
          <ForcastComponent />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
