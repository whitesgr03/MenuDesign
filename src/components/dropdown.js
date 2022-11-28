"use strict";

import "../css/dropdown.css";

const createDropdown = (() => {
    const activeItemHover = (dropdown) => {
        if (!dropdown.classList.contains("active")) {
            const title = dropdown.querySelector(".title");
            title.addEventListener("transitionend", setItemHover);
        }

        dropdown.addEventListener("pointerout", closeItemHover);

        function setItemHover(e) {
            const dropdown = e.target.closest(".dropdown");

            dropdown.classList.add("active");

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
})();

export { createDropdown };