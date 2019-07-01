/**
 *
 *
 *
 * FIRST STEP: Read the detailed instructions in instructions.txt
 *
 *
 *
 */

import React from "react";
import { render } from "react-dom";
import Container from "./components/container";
import { AppWrapper } from "./styles/styled";

// You don't have to use these objects directly if you don't
// want to, they're just here to give you the style values:
const colors = {
  lightTeal: "#E0F4F4", // light green background color
  darkGray: "#2B3636", // background of dark container box
  seaGreen: "#1DC090", // background of "cost per unit" box
  purple: "#AF74E3" // background of "total cost" box
};
const fontSizes = {
  large: 30, // e.g. "$175.50" value under "Cost Per Unit"
  medium: 20, // Text in "# of Units" field
  small: 14 // e.g. "Cost Per Unit" title
};
// See https://tomis.tech/images/counter-design-style-info.png
// for a diagram of where to use these values

const App = () => (
  <AppWrapper>
    <Container />
  </AppWrapper>
);

render(<App />, document.getElementById("root"));
