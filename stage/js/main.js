$(function() {
    "use strict";
    $('.toggle-sidebar').on("click", function() {
        $(".conent-area,.sidebar").toggleClass("no-sidebar");
    });
});