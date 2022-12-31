// @ts-nocheck
import * as React from "react";
import { Global, css } from "@emotion/react";

import CSS_VARIABLES from "./styles/cssVariables";
import CSS_RESET from "./styles/cssReset";
import UTILITIES from "./styles/utilities";

import HERO_SECTION_STYLING from "./styles/heroSectionStyling";
import EVENT_SECTION_STYLING from "./styles/eventSectionStyling";
import SPONSOR_SECTION_STYLING from "./styles/sponsorSectionStyling";

import LAYOUT_STYLING from "./styles/layoutStyling";
import MODAL_STYLING from "./styles/modalStyling";
import EVENT_CARD_STYLING from "./styles/eventCardStyling";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

        :root {
          ${CSS_VARIABLES}
          font-family: "Rubik", -apple-system, sans-serif;
          font-family:  -apple-system, sans-serif;
        }

        ${CSS_RESET}
        ${UTILITIES}

        ${LAYOUT_STYLING}
        ${MODAL_STYLING}

        ${HERO_SECTION_STYLING}
        ${SPONSOR_SECTION_STYLING}
      `}
    />
  );
};

export default GlobalStyles;
