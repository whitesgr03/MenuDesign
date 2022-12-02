"use strict";

import "../css/main.css";

import { createDropdown } from "./dropdown";
import { createHamburger } from "./hamburger";
import { createTabs } from "./tabs";
import { createCarousel } from "./carousel";

const main = (() => {
    document.addEventListener("pointerover", activeMenuOnPointerOver);
    document.addEventListener("pointerdown", activeMenuOnPointerDown);
    document.addEventListener("pointerup", activeMenuOnPointerUp);

    function activeMenuOnPointerOver(e) {
        if (e.target.closest(".dropdown")) {
            const dropdown = createDropdown(e.target.closest(".dropdown"));

            dropdown.activeItemHover();
        }
    }
    function activeMenuOnPointerUp(e) {
        if (e.target.closest(".hamburger")) {
            const hamburger = createHamburger(e.target.closest(".hamburger"));

            hamburger.activeHamburger(e);
        }

        if (e.target.closest(".tabs")) {
            if (e.target.closest(".item")) {
                const tabs = createTabs(e.target.closest(".tabs"));

                tabs.activeTab(e.target.closest(".item"));
            }
        }
    }
    function activeMenuOnPointerDown(e) {
        if (e.target.closest(".carousel")) {
            const carousel = createCarousel(e.target.closest(".carousel"));

            if (e.target.closest(".arrow")) {
                const arrow = e.target.closest(".arrow").classList[1];
                carousel.scrollByClick(arrow);
            }

            if (e.target.closest(".list")) {
                carousel.scrollByPointerMove(e);
            }
        }
    }
})();

export { main };

// dropdown menu

// const dropdown = document.querySelector(".dropdown");
// const dropdownMethod = createDropdown(dropdown);

// dropdown.addEventListener("pointerover", () => {
//     dropdownMethod.activeItemHover();
// });

// hamburger menu

// const hamburger = document.querySelector(".hamburger");
// const hamburgerMethod = createHamburger(hamburger);

// hamburger.addEventListener('pointerup', () => {
//     hamburgerMethod.activeHamburger();
// })

// tabs menu
// To use the tabsDropdown menu, you need to load  createHamburger

// const tabs = document.querySelector(".tabs");
// const tabsMethod = createTabs(tabs);

// tabs.addEventListener("pointerup", (e) => {
//     if (e.target.closest(".item")) {
//         tabsMethod.activeTab(e.target.closest(".item"));
//     }
// });


// carousel menu
// To use the carousel menu, you need to load createTabs

// const carousel = document.querySelector(".carousel");
// const carouselMethod = createCarousel(carousel);

// carousel.addEventListener("pointerdown", (e) => {
//     if (e.target.closest(".arrow")) {
//         const arrow = e.target.closest(".arrow").classList[1];
//         carouselMethod.scrollByClick(arrow);
//     }

//     if (e.target.closest(".list")) {
//         carouselMethod.scrollByPointerMove(e);
//     }
// });
