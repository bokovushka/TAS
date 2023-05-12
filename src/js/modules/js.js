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

//? select-city-wrap //active //foter
setInterval(function () {
	if ($('.footer .fstElement').hasClass('fstActive')) {
		$('.footer .select-wrap').addClass('active');
	}
	else {
		$('.footer .select-wrap').removeClass('active');
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
// let stars = document.querySelectorAll(".popup-reviews-preview-card .card-review--star .star");
// document.querySelector(".popup-reviews-preview-card .card-review--star").addEventListener("click", starRating);
// let rating = document.querySelector(".star");

// function starRating(e) {
// 	stars.forEach((star) => star.classList.remove("star-paint"));
// 	const i = [...stars].indexOf(e.target);
// 	if (i > -1) {
// 		stars[i].classList.add("star-paint");
// 		rating.textContent = `${stars.length - i}/5`;
// 	} else {
// 		rating.textContent = `${0}/5`;
// 	}
// }

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