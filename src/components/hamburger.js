"use strict";

import "../css/hamburger.css";

const createHamburger = (hamburger) => {
    const list = hamburger.querySelector(".list");

    const activeHamburger = () => {
        if (hamburger.classList.contains("active")) return;

        hamburger.classList.add("active");

        setTimeout(() => {
            document.addEventListener("pointerup", closeMenu);
        });

        function closeMenu(e) {
            if (e.target.closest(".list") === list) return;

            hamburger.classList.remove("active");
            document.removeEventListener("pointerup", closeMenu);
        }
    };

    return {
        activeHamburger,
    };
};

export { createHamburger };
