$(function() {
    "use strict";
    $('.toggle-sidebar').on("click", function() {
        $(".conent-area,.sidebar").toggleClass("no-sidebar");
    });

    // Toggle SubMenu
    $(".toggle-submenu").on("click", function() {
        $(this)
            .find("fa-angle-right")
            .toggleClass("down");
        $(this)
            .next(".child-links")
            .slideToggle();
    });
});
const myMap = new Map();
const mySet = new Set();