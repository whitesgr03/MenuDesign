"use strict";

import "../css/carousel.css";

const createCarousel = (carousel, width, count) => {
    const wrap = carousel.querySelector(".wrap");
    const list = wrap.querySelector(".list");
    const items = list.querySelectorAll("li").length;

    const itemWidth = width; // The width of each li tag
    const itemCount = count; // Number of items displayed per slide

    const scrollByPointerMove = (e) => {
        list.addEventListener("dragstart", (e) => {
            e.preventDefault();
        });

        const pointerId = e.pointerId;

        let shiftX = e.clientX - list.getBoundingClientRect().left;

        setTimeout(() => {
            document.addEventListener("pointermove", onPointerMove);
            document.addEventListener("pointerup", onPointerUp);
        });

        function onPointerMove(e) {
            list.setPointerCapture(pointerId);

            let newLeft =
                e.clientX - shiftX - wrap.getBoundingClientRect().left;

            if (newLeft > 0) {
                newLeft = 0;
            }

            let rightEdge = (items - itemCount) * itemWidth;
            console.log(newLeft);

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
        scrollByPointerMove,
    };
};

export { createCarousel };
