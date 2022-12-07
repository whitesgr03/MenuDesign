"use strict";

import "../css/main.css";

import { createDropdown } from "./dropdown";
import { createHamburger } from "./hamburger";
import { createTabs } from "./tabs";
import { createCarousel } from "./carousel";
import { createCycleCarousel } from "./circularCarousel";
import { handleCarouselList } from "./handleCarouselList";

import image from "../img/big1.jpg";
import image2 from "../img/big2.jpg";
import image3 from "../img/big3.jpg";
import image4 from "../img/big4.jpg";
import image5 from "../img/big5.jpg";
import image6 from "../img/big6.jpg";
import image7 from "../img/big7.jpg";

const main = (() => {
    const circularCarousel = document.querySelector(".carousel.circular");

    const sources = getSources();
    const halfLength = Math.floor(sources.length / 2);
    const itemWidth = 500;

    const carouselList = handleCarouselList(
        circularCarousel,
        sources,
        itemWidth
    );
    carouselList.createItem();
    carouselList.createDot();    

    document.addEventListener("pointerover", activeMenuOnPointerOver);
    document.addEventListener("pointerdown", activeMenuOnPointerDown);
    document.addEventListener("pointerup", activeMenuOnPointerUp);

    function getSources() {
        return [image, image2, image3, image4, image5, image6, image7];
    }

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
            let carousel = e.target.closest(".carousel");

            if (carousel.classList.contains("circular")) {

                const newCarousel = createCycleCarousel(
                    carousel,
                    halfLength,
                    itemWidth
                );
                
                if (e.target.closest(".arrow")) {
                    const direction = e.target.closest(".arrow").classList[1];
                    newCarousel.scrollByClick(direction);
                }

                if (e.target.closest(".dot")) {
                    const currentDotIndex =
                        +carousel.querySelector(".dot.active").dataset.dotIndex;

                    const selectDotIndex =
                        +e.target.closest(".dot").dataset.dotIndex;

                    const index = selectDotIndex - currentDotIndex;

                    if (index === 0) return;

                    let direction = null;

                    if (index > 0) {
                        direction = "next";
                    } else {
                        direction = "prev";
                    }

                    for (let i = 1; i <= Math.abs(index); i++) {
                        newCarousel.scrollByClick(direction, true);
                    }
                }
            } else {
                const newCarousel = createCarousel(carousel, 60, 4);
                if (e.target.closest(".list")) {
                    newCarousel.scrollByPointerMove(e);
                }
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
