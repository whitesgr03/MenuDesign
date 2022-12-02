"use strict";

import "../css/hamburger.css";

const createHamburger = (hamburger) => {
    const list = hamburger.querySelector(".list");

    const activeHamburger = () => {
        if (hamburger.classList.contains("active")) return;

        hamburger.classList.add("active");

        function closeMenu(e) {
            if (e.target.closest(".list") === list) return;

            hamburger.classList.remove("active");
            console.log('remove')
            document.removeEventListener("pointerup", closeMenu);
        }
    };

    return {
        activeHamburger,
    };
};

export { createHamburger };
