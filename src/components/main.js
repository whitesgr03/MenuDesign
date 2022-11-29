"use strict";

import "../css/main.css";

import { createDropdown } from "./dropdown";
import { createHamburger } from "./hamburger";
import { createTabs } from "./tabs";

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

        if (e.target.closest(".tabs")) {
            const menu = e.target.closest(".tabs");
            const tab = e.target.closest(".item");

            createTabs.activeTab(menu, tab);
        }
    }
})();

export { main };
