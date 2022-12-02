"use strict";

import "../css/dropdown.css";

const createDropdown = (dropdown) => {
    const activeItemHover = () => {
        if (
            !dropdown.classList.contains("incomplete") &&
            !dropdown.classList.contains("active")
        ) {
            dropdown.classList.add("incomplete");
        } else {
            return;
        }

        if (
            dropdown.classList.contains("incomplete") &&
            !dropdown.classList.contains("active")
        ) {
            const title = dropdown.querySelector(".title");
            title.addEventListener("transitionend", setItemHover);
        }

        function setItemHover() {
            dropdown.classList.add("active");
            dropdown.classList.remove("incomplete");

            dropdown.addEventListener("pointerout", closeItemHover);

            this.removeEventListener("transitionend", setItemHover);
        }

        function closeItemHover(e) {
            if (e.relatedTarget.closest(".dropdown")) return;

            dropdown.classList.remove("active");

            this.removeEventListener("pointerout", closeItemHover);
        }
    };

    return {
        activeItemHover,
    };
};

export { createDropdown };
