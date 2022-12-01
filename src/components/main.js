"use strict";

import "../css/main.css";

import { createDropdown } from "./dropdown";
import { createHamburger } from "./hamburger";
import { createTabs } from "./tabs";
import { createCarousel } from "./carousel";

const main = (() => {
    document.addEventListener("pointerover", activeMenuOnOver);
    document.addEventListener("click", activeMenuOnClick);

    function activeMenuOnOver(e) {
        if (e.target.closest(".dropdown")) {
            const dropdown = e.target.closest(".dropdown");
            createDropdown.activeItemHover(dropdown);
        }
    }

    function activeMenuOnClick(e) {
        e.preventDefault();

        if (e.target.closest(".hamburger")) {
            const hamburger = e.target.closest(".hamburger");
            createHamburger.activeHamburger(hamburger);
        }

        if (e.target.closest(".tabs")) {
            const menu = e.target.closest(".tabs");

            let tab = null;

            if (e.target.closest(".hamburger")) {
                tab = e.target.closest(".hamburger").parentElement;
            } else {
                tab = e.target.closest(".item");
            }

            const hamburger = e.target.closest(".hamburger");

            createTabs.activeTab(menu, tab);

            if (hamburger) {
                import("../css/tabsDropdown.css");
                createHamburger.activeHamburger(hamburger);
            }
        }

        if (e.target.closest(".carousel")) {

            const carousel = createCarousel(e.target.closest(".carousel")) 

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

// 單獨監聽一個 dropdown menu

// const drop = document.querySelector('.dropdown')

// drop.addEventListener("pointerover", () => {
//     createDropdown.activeItemHover(drop);
// });

// 單獨監聽一個 hamburger menu

// const hamburger = document.querySelector(".hamburger");

// hamburger.addEventListener('pointerdown', () => {

//     createHamburger.activeHamburger(hamburger);
// })

// 單獨監聽一個 tabs menu

// const tabs = document.querySelector(".tabs");

// tabs.addEventListener("click", (e) => {
//     e.preventDefault();

//     const menu = e.target.closest(".tabs");

//     let tab = null;

//     if (e.target.closest(".hamburger")) {
//         tab = e.target.closest(".hamburger").parentElement;
//     } else {
//         tab = e.target.closest(".item");
//     }

//     const hamburger = e.target.closest(".hamburger");

//     createTabs.activeTab(menu, tab);

//     if (hamburger) {
//         createHamburger.activeHamburger(hamburger);
//     }
// });

// 單獨監聽一個 carousel menu

// const carousel = document.querySelector(".carousel");

// carousel.addEventListener("pointerdown", (e) => {
//     if (e.target.closest(".arrow")) {
//         const arrow = e.target.closest(".arrow").classList[1];
//         createCarousel.scrollByClick(arrow);
//     }

//     if (e.target.closest(".list")) {
//         createCarousel.scrollByPointerMove(e);
//     }
// });
