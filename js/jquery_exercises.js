"use strict";
(function (){


$('.codeup').click(function() {
    $(".codeup").css("background-color", "blue");
});

$('p').dblclick(function() {
    $(this).css("font-size", "18px");
});

$("li").hover(
    function() {
        // first change
        $(this).css("color", "red");

    },

    function() {
        // first change
        $(this).css("color", "black");
});
}());








