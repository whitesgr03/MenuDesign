"use strict";

const createCycleCarousel = (carousel, offsetIndex, itemWidth) => {
    const list = carousel.querySelector(".list");
    const dotsList = carousel.querySelector(".dotsList");

    let timer = null;
    let duration = null;
    let direction = null;

    const autoCarousel = {
        set(ms, dir) {
            duration = ms;
            direction = dir
            carousel.classList.add("autoCarousel");
        },
        active() {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(auto, duration);

            function auto() {
                scrollByClick(direction);
                timer = setTimeout(auto, duration);
            }
        },
        stop() {
            clearTimeout(timer);
            timer = null;
        },
    };

    const scrollByClick = (direction, skip) => {
        if (carousel.classList.contains("sliding")) return;

        carousel.classList.add("sliding");

        const activeDot = dotsList.querySelector(".dot.active");

        if (activeDot) {
            activeDot.classList.remove("active");
        }

        switch (direction) {
            case "prev":
                offsetIndex -= 1;
                break;
            case "next":
                offsetIndex += 1;
                break;
        }

        list.style.transform = `translateX(${offsetIndex * -itemWidth}px)`;

        if (skip) {
            offsetNode();
        } else {
            list.style.transition = "transform .3s";
            list.addEventListener("transitionend", offsetNode);
        }

        function offsetNode() {
            switch (direction) {
                case "prev":
                    list.prepend(list.lastElementChild);
                    offsetIndex += 1;
                    break;
                case "next":
                    list.append(list.firstElementChild);
                    offsetIndex -= 1;
                    break;
            }

            const currentItemIndex = list.querySelector(
                `li:nth-child(${offsetIndex + 1})`
            ).dataset.itemIndex;

            const dot = dotsList.querySelector(
                `.dot:nth-child(${+currentItemIndex + 1})`
            );

            dot.classList.add("active");

            list.style.transform = `translateX(${offsetIndex * -itemWidth}px)`;

            list.style.transition = "";

            carousel.classList.remove("sliding");

            if (!skip) {
                this.removeEventListener("transitionend", offsetNode);
            }
        }
    };

    return {
        scrollByClick,
        autoCarousel,
    };
};

export { createCycleCarousel };
