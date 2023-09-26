import $ from 'jquery';

//? header //.submenu-lvl-1 .head - active class
$(".submenu-lvl-1 .head").click(function () {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	}
	else {
		$('.submenu-lvl-1 .head').removeClass('active');
		$(this).addClass('active');
	}
});

$(document).mouseup(function (e) {
	if (!$(".submenu-lvl-1 .head").is(e.target) // если клик был не по нашему блоку
		&& $(".submenu-lvl-1 .head").has(e.target).length === 0) { // и не по его дочерним элементам
		$(".submenu-lvl-1 .head").removeClass('active');
	}
});

//? mobile menu lock body
$(document).ready(function () {
	let body_lock = document.querySelector('body');
	let menuBtn = document.querySelector('.navbar-toggler');
	let bgBody = document.querySelector('.popup-bg-body');

	menuBtn.addEventListener('click', function () {
		body_lock.classList.toggle('lock');
		bgBody.classList.toggle('open')
	})
});

//?  закриття меню поза областю
$(document).mouseup(function (e) {
	if (!$(".header").is(e.target) // если клик был не по нашему блоку
		&& $(".header").has(e.target).length === 0) { // и не по его дочерним элементам
		$('.popup-bg-body').removeClass("open");
		$('body').removeClass("lock");
	}
});

//? закриття popup-bg-body і мобільного меню при поворотах наприклад на планшетці
setInterval(function () {
	if (window.innerWidth >= 1024) {
		if ($(".navbar-collapse").hasClass("show")) {
			$('.navbar-toggler').click()
		}
	}
}, 100);

//? flip-cards //add class flipped
// const boxes = document.querySelectorAll('.flip-cards .card-content');
// boxes.forEach(el => {
// 	el.addEventListener('click', function () {
// 		boxes.forEach(el => {
// 			if (el !== this) el.classList.remove('flipped');
// 		});
// 		this.classList.toggle('flipped');
// 	});
// });

// $(".flip-cards .card-content").mouseleave(function () {
// 	$(this).removeClass("flipped");
// });


//? height = width //why-we //why-we--box
function res() {
	var width = $('.why-we--box').width();
	$('.why-we--box').height(width);
} res();

$(window).resize(function () {
	res();
});

//? star rating
const stars = document.querySelectorAll('.popup-write-review .star');

for (let i = 0; i < stars.length; i++) {
	stars[i].addEventListener('click', function () {
		changeStarrt(i);
	})
}

function changeStarrt(num) {
	for (let i = 0; i <= num; i++) {
		stars[i].classList.add('star-paint');
	}

	for (let i = stars.length - 1; i > num; i--) {
		stars[i].classList.remove('star-paint');
	}
}

//? questions--inner click add active

$('.questions--inner .btn-more').click(function () {
	if ($(this).closest(".questions--inner").hasClass("active")) {
		$(this).closest(".questions--inner").removeClass("active");
		$(this).closest(".questions--inner").find(".btn-link").addClass("collapsed").attr("aria-expanded", false);
		$(this).closest(".questions--inner").find(".collapse").removeClass("show");
		$(this).text("Детальніше");
	}
	else {
		$(this).text("Згорнути");
		$(this).closest(".questions--inner").addClass("active");
	}
});

//? клік поза областю акардеона закриває його
$(document).mouseup(function (e) {
	if (!$("#accordion-financial-info--nav").is(e.target) // если клик был не по нашему блоку
		&& $("#accordion-financial-info--nav").has(e.target).length === 0) { // и не по его дочерним элементам
		if ($("#collapse-accordion-financial-info--nav-1").hasClass("show")) {
			$('.card-header .btn').click()
		}
	}
});

//? news category // active class
$(".news .swiper-slide").click(function () {
	$('.news .swiper-slide').removeClass('active');
	$(this).addClass('active');
});


//? select mobile // partners.html
setInterval(function () {
	if (window.innerWidth < 1024) {
		if ($(".partners-tablist-nav .fstElement").hasClass("fstActive")) {
			function resize() {
				$('.partners-tablist-nav .fstActive .fstToggleBtn').width($('.partners-tablist-nav .fstActive .fstResults').width());
			}
			resize();
			$(window).resize(function () {
				resize()
			});
		}
		else {
			$(".partners-tablist-nav .fstElement .fstToggleBtn").removeAttr("style");
		}
	}
}, 100);

//? toggle password //user.html
$(".btn-toggle-password").on("click", function () {
	var input = $(this).parent().children('input');
	var icon = $(this);

	if ($(icon).hasClass("active")) {
		// Password is visible
		$(icon).removeClass("active");
		$(input).attr("type", "password");
	} else {
		// Password is not visible
		$(icon).addClass("active");
		$(input).attr("type", "text");
	}
});


//?  edit image //user.html
setInterval(function () {
	if (window.innerWidth < 1024) {
		if ($("#user-profile-nav--pills-4-tab").hasClass("active")) {
			$('.user-profile-nav').addClass('edit');
		} else {
			$('.user-profile-nav').removeClass('edit');
		}
	}
	else {
		$('.user-profile-nav').removeClass('edit');
	}
}, 100);

//? btn-more //calc-insurance-payment.html

$(".calc-insurance-payment-page .filter-cards .filter-card .card-details .btn-more").click(function () {
	$(this).closest('.filter-cards .filter-card').find('.filter-card--additional').addClass("active");
	$(this).addClass("active");
});
$(".calc-insurance-payment-page .filter-cards .filter-card .filter-card--additional .btn-more--close").click(function () {
	$(this).closest('.filter-cards .filter-card').find('.filter-card--additional').removeClass("active");
	$(this).closest('.filter-cards .filter-card').find('.card-details .btn-more').removeClass("active");
});

//? btn-collapse mobile //calc-insurance-payment.html
$(".filter-cards .filter-card .company-name").click(function () {
	if ($(this).hasClass('active')) {
		$(this).removeClass("active");
		$(this).closest('.filter-cards .filter-card').removeClass("active");
	}
	else {
		$(this).addClass("active");
		$(this).closest('.filter-cards .filter-card').addClass("active");
		$(this).closest('.filter-cards .filter-card').find('.filter-card--additional').removeClass("active");
		$(this).closest('.filter-cards .filter-card').find('.card-details .btn-more').removeClass("active");
	}
});

//? btn-collapse mobile //calc-insurance-payment-step.html

$(".calc-insurance-payment-step-page .calculation-data .btn-collapse").click(function () {
	if ($(this).hasClass('active')) {
		$(this).removeClass("active");
		$(this).closest('.calculation-data').find('.electronic-policy--content').removeClass("active");
	}
	else {
		$(this).addClass("active");
		$(this).closest('.calculation-data').find('.electronic-policy--content').addClass("active");
	}
});

//? btn-more mobile //calc-insurance-payment-step-2.html
$(".calc-insurance-payment-step-page .policy-additional .btn-more").click(function () {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$(this).closest('.policy-additional').find('.policy-additional--content-more').removeClass("active");
	}
	else {
		$(this).addClass('active');
		$(this).closest('.policy-additional').find('.policy-additional--content-more').addClass("active");
	}
});

//? btn edit //calc-insurance-payment-step-2.html
$(".form-osago-step .edit-data-result .edit-data-result--item .user-pic--edit").click(function () {
	$(this).addClass('active');
	$(this).closest('.edit-data-result--item').addClass('active').find('input').removeAttr("readonly");
	$(this).closest('.edit-data-result--item').find('.field').removeClass('field-compete')
});

//? btn save&reset //calc-insurance-payment-step-2.html
$(".form-osago-step .edit-data-result .edit-data-result--item .buttons .btn").click(function () {
	$(this).closest('.edit-data-result--item').removeClass('active').find('input').prop('readonly', true);
	$(this).closest('.edit-data-result--item').find('.field').addClass('field-compete')
});

//? btn more //calc-mini-casco-insurance-payment-car-number
$(".calc-mini-casco-page .filter-cards .btn-more").click(function () {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active').text("Детальніше");
		$(this).closest('.filter-card').find('.filter-card--additional').removeClass("active");
	}
	else {
		$(this).addClass('active').text("Згорнути");
		$(this).closest('.filter-card').find('.filter-card--additional').addClass("active");
	}
});

//? checkbox active //calc-travel-page
// const toggle = () => document.querySelector('.calc-travel-page #policy-year').closest('.calc-travel-page .additional-param').classList.toggle('active');
// document.querySelector('.calc-travel-page #policy-year').addEventListener('change', toggle);

//? calc-travel-page .filters-search-buttons // active class
$(".calc-travel-page .filters-search-buttons .btn").click(function () {
	$('.calc-travel-page .filters-search-buttons .btn').removeClass('active');
	$(this).addClass('active');
});

//? btn more //calc-mini-casco-insurance-payment-car-number
$(".calc-travel-page .filter-cards .btn-more").click(function () {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active').text("Детальніше");
		$(this).closest('.filter-card').find('.filter-card--additional').removeClass("active");
	}
	else {
		$(this).addClass('active').text("Згорнути");
		$(this).closest('.filter-card').find('.filter-card--additional').addClass("active");
	}
});


//? btn more //calc-mini-casco-insurance-payment-car-number
$(".calc-travel-page .form-calculation-data .additional-param .btn-more").click(function () {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active').text("Додаткові параметри");
		$(this).closest('.additional-param').find('.more-additional-param').removeClass("active");
	}
	else {
		$(this).addClass('active').text("Приховати дод. параметри");
		$(this).closest('.additional-param').find('.more-additional-param').addClass("active");
	}
});


// $('#check-referral-bonus').on('click', (val) => {
// 	const isChecked = val.currentTarget.checked
// 	const displayValue = isChecked ? 'block' : 'none'
// 	$('.bonus-info-descr').css('display', displayValue)
// })

$('#check-referral-bonus').on('click', function () {
	if ($(this).is(':checked')) {
		$('.bonus-info-descr').css('display', 'block')
	} else {
		$('.bonus-info-descr').css('display', 'none')
	}
});

//calc-travel.html
$('.calc-travel-page .additional-param #policy-year').on('click', function () {
	if ($(this).is(':checked')) {
		$('.additional-param--fields').addClass('active')
	} else {
		$('.additional-param--fields').removeClass('active')
	}
});

$('.calc-travel-page .additional-param .people-block').on('click', function () {
	$(this).closest(".people-block--wrap").toggleClass('active');
});
