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

// 수색신청관리
$(".tbl_top_btn > .btn").click(function(){
    $(".confirm_layer, .layer_back").stop().fadeIn();
});
$(".confirm_layer .cancel").click(function(){
    $(".confirm_layer, .layer_back").stop().fadeOut();
});


$(".list tr td .app").on('click', function(){
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
        $(this).text('승인해제');
    } else {
        $(this).addClass('on');
        $(this).text('승인');
    }
});


$('#chkAll').on('click', function(){
    if ($('#chkAll').is(':checked')) {
        $('input[name="srchchk"]').prop('checked', true);
    } else {
        $('input[name="srchchk"]').prop('checked', false);
    }
});
$('input[name="srchchk"]').click(function(){
    var total = $('input[name="srchchk"]').length; // name이 srchchk인 input의 총 갯수를 구해라.
    var check = $('input[name="srchchk"]:checked').length; // 체크된 srchchk의 갯수를 구해라
    
    if (total != chked) {
        $('#chkAll').prop('checked', false);
    } else {
        $('#chkAll').prop('checked', true);
    }
});










