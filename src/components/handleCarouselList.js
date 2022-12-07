"use strict";

function handleCarouselList(carousel, sources, width) {
    const wrap = carousel.querySelector(".wrap");
    const list = wrap.querySelector(".list");
    const dotsList = wrap.querySelector(".dotsList");

    const itemWidth = width; // The width of each li tag and wrap tag
    const offsetIndex = Math.floor(sources.length / 2); // List is offset to the middle to show the first picture

    const createItem = () => {
        const isOdd = sources.length % 2 !== 0;

        let index = 0;

        if (isOdd) {
            index = 1;
        }

        const firstHalf = sources.slice(0, offsetIndex + index);
        const secondHalf = sources.slice(offsetIndex + index);

        const srcArray = [...secondHalf, ...firstHalf]; // Get the second half to the front

        for (let src of srcArray) {
            const li = document.createElement("li");
            const img = document.createElement("img");
            const index = sources.findIndex((url) => url === src);

            img.src = sources[index];

            li.append(img);
            li.className = "item";
            li.dataset.itemIndex = index;

            list.append(li);
        }

        wrap.style.width = `${itemWidth}px`;

        list.style.transform = `translateX(${offsetIndex * -itemWidth}px)`;
    };

    const createDot = () => {
        for (let i = 0; i < sources.length; i++) {
            const li = document.createElement("li");
            const button = document.createElement("button");

            li.className = "dot";
            li.append(button);

            li.dataset.dotIndex = i;

            if (i === 0) {
                li.classList.add("active");
            }

            dotsList.append(li);
        }
    };

    return {
        createItem,
        createDot,
    };
}

export { handleCarouselList };
