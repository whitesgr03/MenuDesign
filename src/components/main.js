"use strict";

import { createDropdown } from "./dropdown";

const main = (() => {
    // catch DOM
    document.addEventListener("pointerover", activeMenu);

    function activeMenu(e) {
        if (e.target.closest(".dropdown")) {
            const dropdown = e.target.closest(".dropdown");
            createDropdown.activeItemHover(dropdown);
        }
    }
})();

export { main };
