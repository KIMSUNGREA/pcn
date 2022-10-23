// gnb
$(".gnb > ul > li").on("mouseover", function () {
    $(".backg").slideDown(300);
    $(".submenu1").slideDown(300);
    $(this).addClass("bold").siblings().removeClass("bold");
});

$("header").on("mouseleave", function () {
    $(".backg").slideUp(300);
    $(".submenu1").slideUp(300);
    $(".gnb > ul > li").removeClass("bold");
});

$(".log > ul > li").on("mouseover", function () {
    $(".backg").slideDown(300);
    $(".submenu1").slideDown(300);
    $(this).addClass("bold").siblings().removeClass("bold");
});

$("header").on("mouseleave", function () {
    $(".backg").slideUp(300);
    $(".submenu1").slideUp(300);
});
// gnb.

// left_snb
$(".leftsec > ul > li:nth-child(3)").on("mouseover", function () {
    $(".acd").stop().slideDown(300);
});
$(".leftsec > ul > li:nth-child(3)").on("mouseleave", function () {
    $(".acd").stop().slideUp(300);
});
// left_snb.

$(function () {
    $(".gauge .gaugebar").addClass("gon1")
});