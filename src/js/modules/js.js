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