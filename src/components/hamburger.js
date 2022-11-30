"use strict";

import "../css/hamburger.css";

const createHamburger = (() => {
    const activeHamburger = (hamburger) => {
        if (!hamburger.classList.contains("active")) {
            hamburger.classList.add("active");
            setTimeout(() => {
                document.addEventListener("click", closeMenu);
            });
        }

        function closeMenu(e) {
            if (
                e.target.closest(".list") &&
                e.target.closest(".list") === hamburger.querySelector(".list")
            )
                return;

            const icon = hamburger.querySelector(".icon");

            if (
                (hamburger.classList.contains("active") &&
                    e.target.closest(".icon") === icon) ||
                e.target.closest(".icon") !== icon
            ) {
                hamburger.classList.remove("active");
            }

            document.removeEventListener("click", closeMenu);
        }
    };

    return {
        activeHamburger,
    };
})();

export { createHamburger };
