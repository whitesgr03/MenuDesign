"use strict";

import "../css/hamburger.css";

const createHamburger = (() => {
    const activeHamburger = (hamburgerIcon) => {
        hamburgerIcon.addEventListener("pointerup", openMenu);

        function openMenu() {
            const hamburger = this.parentElement;

            hamburger.classList.toggle("active");
                
            if (hamburger.classList.contains("active")) {
                document.addEventListener("pointerdown", closeMenu);
            }

            function closeMenu(e) {

                if (e.target.closest(".list")) {
                    const target = e.target.closest(".list");
                    const list = hamburger.lastElementChild;

                    if (target === list) return;
                }

                if (e.target.closest('.icon') !== hamburgerIcon) {
                    hamburger.classList.remove("active");
                }
                
                document.removeEventListener("pointerdown", closeMenu);
            }
        }
    };

    return {
        activeHamburger,
    };
})();

export { createHamburger };
