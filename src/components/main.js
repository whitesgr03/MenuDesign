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
