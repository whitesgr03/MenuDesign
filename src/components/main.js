"use strict";

import '../css/main.css';


import { createDropdown } from "./dropdown";
import { createHamburger } from "./hamburger";

const main = (() => {

    // catch DOM
    const hamburgerIcon = document.querySelector('.hamburger .icon')
    
    createHamburger.activeHamburger(hamburgerIcon);
        
    document.addEventListener("pointerover", activeMenu);

    function activeMenu(e) {
        if (e.target.closest(".dropdown")) {
            const dropdown = e.target.closest(".dropdown");
            createDropdown.activeItemHover(dropdown);
        }
    }
})();

export { main };
