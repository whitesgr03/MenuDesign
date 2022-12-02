"use strict";

import "../css/tabs.css";
import "../css/tabsDropdown.css";

const createTabs = (tabs) => {
    const list = tabs.querySelector(".list");
    const listChild = Array.from(list.children);

    const activeTab = (tab) => {
        if (listChild.findIndex((item) => item === tab) === -1) return;

        const currentActiveTab = list.querySelector(".item.active");

        if (currentActiveTab) {
            currentActiveTab.classList.remove("active");
        }
        tab.classList.add("active");
    };

    return {
        activeTab,
    };
};

export { createTabs };
