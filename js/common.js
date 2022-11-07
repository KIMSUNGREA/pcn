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



   $(function() {
       //input을 datepicker로 선언
       $("#datepicker").datepicker({
        nextText: '다음 달',
		prevText: '이전 달',
		showOtherMonths: true,
        showMonthAfterYear: true,
		yearSuffix: '년',
		dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dateFormat: 'yy-mm-dd',
		onClose: function( selectedDate ) {    
			//시작일(startDate) datepicker가 닫힐때
			//종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
			$('#pickDate').datepicker('option', 'minDate', selectedDate);
		} 
       });                    
       
       //초기값을 오늘 날짜로 설정해줘야 합니다.
       $('#datepicker').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)          
       
       $('#startDate').datepicker({
		nextText: '다음 달',
		prevText: '이전 달',
		showOtherMonths: true,
        showMonthAfterYear: true,
		yearSuffix: '년',
		dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dateFormat: 'yy.mm.dd',
		onClose: function( selectedDate ) {    
			//시작일(startDate) datepicker가 닫힐때
			//종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
			$('#startDate').datepicker('option', 'minDate', selectedDate);
		},
		showOn: 'both',
		buttonImage: 'images/icon_calr.png',
		buttonImageOnly: true
	});
	$('#endDate').datepicker({
		nextText: '다음 달',
		prevText: '이전 달',
		showOtherMonths: true,
        showMonthAfterYear: true,
		yearSuffix: '년',
		dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dateFormat: 'yy.mm.dd',
		onClose: function( selectedDate ) {    
			//시작일(startDate) datepicker가 닫힐때
			//종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
			$('#endDate').datepicker('option', 'minDate', selectedDate);
		},
		showOn: 'both',
		buttonImage: 'images/icon_calr.png',
		buttonImageOnly: true
	});

   });



// 모바일 로그인
$(".btn_login_type a").click(function(){
	$(".btn_login_type a").removeClass("on");
	$(this).addClass("on");
});
$(".nomal").click(function(){
	$(".btn_temp_login").removeClass("show")
	$(".save_id").show();
	$(".btn_login").removeClass("mgt")
});
$(".tempo").click(function(){
	$(".btn_temp_login").addClass("show");
	$(".save_id").hide();
	$(".btn_login").addClass("mgt")
});




// 모바일 사건배당전
$(".menu_btn").click(function(){
	$(".menu_backg").fadeIn();
	$(".hbg_menu_wrap").animate({right:0});
});
$(".close_btn").click(function(){
	$(".menu_backg").fadeOut();
	$(".hbg_menu_wrap").animate({right:-600});
});













