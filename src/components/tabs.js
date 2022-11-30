"use strict";

import "../css/tabs.css";

const createTabs = (() => {
    const activeTab = (menu, tab) => {
        if (!tab) return;

        const currentActiveTab = menu.querySelector(".active");

        if (currentActiveTab) {
            currentActiveTab.classList.remove("active");
        }

        tab.classList.add("active");
    };

    return {
        activeTab,
    };
})();

export { createTabs };
