"use strict";

import "../css/carousel.css";

const createCarousel = (carousel) => {
    const wrap = carousel.querySelector(".wrap");
    const list = wrap.querySelector(".list");
    const items = list.querySelectorAll("li").length;

    const ITEM_WIDTH = 50; // The width of each li tag
    let itemCount = 4; // The item count that the carousel will display

    const scrollByClick = (direction) => {
        let leftEdge =
            list.getBoundingClientRect().left -
            wrap.getBoundingClientRect().left;

        switch (direction) {
            case "prev":
                leftEdge += ITEM_WIDTH * itemCount;
                leftEdge = Math.min(leftEdge, 0);
                break;
            case "next":
                leftEdge -= ITEM_WIDTH * itemCount;
                leftEdge = Math.max(
                    leftEdge,
                    -ITEM_WIDTH * (items - itemCount)
                );
                break;
        }

        list.style.transform = `translateX(${leftEdge}px)`;
    };

    const scrollByPointerMove = (e) => {
        list.addEventListener("dragstart", (e) => {
            e.preventDefault();
        });

        list.setPointerCapture(e.pointerId);

        let shiftX = e.clientX - list.getBoundingClientRect().left;

        document.addEventListener("pointermove", onPointerMove);
        document.addEventListener("pointerup", onPointerUp);

        function onPointerMove(e) {
            let newLeft =
                e.clientX - shiftX - wrap.getBoundingClientRect().left;

            if (newLeft > 0) {
                newLeft = 0;
            }

            let rightEdge = (items - itemCount) * ITEM_WIDTH;

            if (newLeft < -rightEdge) {
                newLeft = -rightEdge;
            }

            list.style.transform = `translateX(${newLeft}px)`;
        }

        function onPointerUp() {
            document.removeEventListener("pointerup", onPointerUp);
            document.removeEventListener("pointermove", onPointerMove);

            list.removeEventListener("dragstart", (e) => {
                e.preventDefault();
            });
        }
    };

    return {
        scrollByClick,
        scrollByPointerMove,
    };
};

export { createCarousel };
