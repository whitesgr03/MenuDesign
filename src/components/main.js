"use strict";

import "../css/main.css";

import { createDropdown } from "./dropdown";
import { createHamburger } from "./hamburger";

const main = (() => {
    document.addEventListener("pointerdown", activeMenuOnClick);
    document.addEventListener("pointerover", activeMenuOnOver);

    function activeMenuOnOver(e) {
        if (e.target.closest(".dropdown")) {

            const dropdown = e.target.closest(".dropdown");
            createDropdown.activeItemHover(dropdown);
        }
    }

    function activeMenuOnClick(e) {
        if (e.target.closest(".hamburger")) {

            const hamburger = e.target.closest(".hamburger");
            createHamburger.activeHamburger(hamburger);
        }
    }
})();

export { main };
