$(window).scroll(function () {
	if ($(document).scrollTop() > 500) {
		$('.btn-arrow-up').addClass('visible');
	} else {
		$('.btn-arrow-up').removeClass('visible');
	}
}).scroll()

// $(document).mouseup(function (e){ // событие клика по веб-документу
// 	const div = $(".main-menu .menu-item-has-children"); // тут указываем ID элемента

// 	div.each(function() {
// 		if (!$(this).is(e.target) // если клик был не по нашему блоку
// 		&& $(this).has(e.target).length === 0) { // и не по его дочерним элементам
// 			$(this).removeClass('active'); // скрываем его
// 		} else {
// 			if(!$(this).hasClass('active')){
// 				$(this).addClass('active');
// 			} else {
// 				if($(this).is(e.target)) {
// 					$(this).removeClass('active');
// 				}
// 			}
// 		}
// 	});
// });

// $(window).scroll(function () {
// 	if ($(document).scrollTop() > 500) {
// 		$('.btn-arrow-up, .btn-quiz').addClass('visible');
// 	} else {
// 		$('.btn-arrow-up, .btn-quiz').removeClass('visible');
// 	}
// }).scroll()

// if (viewportWidth > 992) {

// 	if( ($(".header").offset() !== undefined) && ($(".header").offset().top > 0)){
// 		$(".header").addClass("header--hide");
// 	}

// 	$(window).scroll(function () {
// 		$(window).scrollTop() <= 40 ? $(".header").addClass("header--bg") : $(".header-mob").removeClass("header--bg");
// 	});

// // const footer = document.querySelector('.footer');
// // document.addEventListener("scroll", checkScroll);

// // let prevY = window.scrollY + window.innerHeight;
// // function checkScroll() {
// //   let footerTop = getRectTop(footer) + window.scrollY + 140;
// //   let windowBottomY = window.scrollY + window.innerHeight;
// //   if (prevY < windowBottomY) {  // Scroll Down
// //     if (windowBottomY > footerTop)
// // 			document.querySelector('.header .header-left').classList.add('active');
// //   } else { // Scroll Up
// //     if (windowBottomY <= footerTop)
// // 			document.querySelector('.header .header-left').classList.remove('active');
// //   }
// //   prevY = windowBottomY
// // };

// // function getRectTop(el) {
// //   var rect = el.getBoundingClientRect();
// //   return rect.top;
// // }

// // position: scrolledToFooter ? 'relative' : 'fixed';

// 	var lastScrollTop = 0;
// 	$(window).scroll(function (event) {
// 		var st = $(this).scrollTop();
// 		if (st > lastScrollTop && $(window).scrollTop() >= 20) {
// 			$(".header").addClass("header--hide")
// 		} else {
// 			$(".header").removeClass("header--hide");
// 		}
// 		lastScrollTop = st;
// 	});
// }
if (window.innerWidth < 992) {
	// $('.menu-item-has-children .nav-link').click(function(){
	// 	return false;
	// });
	// $('.burger').click(function(){
	// 	$('body').addClass('lock');
	// 	$('.menu-mob, .lock').addClass('active');
	// });
	// $('.close-link').click(function(){
	// 	$('body').removeClass('lock');
	// 	$('.menu-mob, .lock').removeClass('active');
	// });
	// $(document).mouseup(function(e){
	// 	var div = $('.menu-mob');
	// 	if(!div.is(e.target) && div.has(e.target).length === 0){
	// 		$('body').removeClass('lock');
	// 		$('.menu-mob, .lock').removeClass('active');
	// 	}
	// });
	$(window).scrollTop() <= 70 ? $(".header-main").addClass(" header-main-bg") : $(".header-main-mob").removeClass(" header-main-bg");

	$(window).scroll(function () {
		$(window).scrollTop() <= 70 ? $(".header-main").addClass(" header-main-bg") : $(".header-main-mob").removeClass(" header-main-bg");
	});

	let lastScrollTop = 0;
	$(window).scroll(function (event) {
		let st = $(this).scrollTop();
		if (st > lastScrollTop && $(window).scrollTop() >= 70) {
			$(".header-main").addClass("header-main-hide")
		} else {
			$(".header-main").removeClass("header-main-hide");
			$(".header-main").addClass(" header-main-bg")
		}
		lastScrollTop = st;
	});
}