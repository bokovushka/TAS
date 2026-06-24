import $ from 'jquery';
import '../../../../node_modules/readmore-js/readmore.min.js';

$('.spoiler--leadership').readmore({
	speed: 75,
	collapsedHeight: false,
	moreLink: '<button class="btn-read-more btn btn-ahead rounded-0 d-block mt-5 p-0">Детальніше</button>',
	lessLink: '<button class="btn-read-more btn btn-ahead rounded-0 d-block mt-5 p-0">Згорнути</button>'

});

$('.spoiler--media').readmore({
	speed: 75,
	collapsedHeight: false,
	moreLink: '<button class="btn-read-more btn btn-ahead rounded-0 d-block mt-5 p-0">Показати більше</button>',
	lessLink: false,
});

if (window.innerWidth < 1200) {
	$('.spoiler--contacts-info').readmore({
		speed: 75,
		collapsedHeight: false,
		moreLink: '<button class="btn-read-more btn rounded-0 d-flex align-items-center small-txt mt-3 p-0"><span>Детальніше</span><svg class="ml-1"><use xlink:href="img/icons/icons.svg#i-arrow-two-right"></use></svg></button>',
		lessLink: '<button class="btn-read-more btn rounded-0 d-flex align-items-center small-txt mt-3 p-0"><span>Згорнути</span><svg class="ml-1"><use xlink:href="img/icons/icons.svg#i-arrow-two-right"></use></svg></button>'
	});
}

//? ==== minicasco ===
$('.spoiler--minicasco--price').readmore({
	speed: 75,
	collapsedHeight: false,
	moreLink: '<div class="row"><div class="col-12 col-lg-10 offset-lg-2"><button class="btn btn-more btn-text p-0 mb-3 mb-xxxl-6 ml-xxxl-12">Прайс виплат</button>',
	lessLink: '<div class="row"><div class="col-12 col-lg-10 offset-lg-2"><button class="btn btn-more btn-text p-0 mt-5 mb-6 ">Згорнути</button>'

});

(function () {

	const $spoiler = $('.spoiler--minicasco--price');
	const $table = $('.calculation-table--minicasco');

	if (!$spoiler.length) return;

	// ▶ ВІДКРИТИ
	$(document).on(
		'click',
		'.calculation-table--minicasco-buttons .btn-main-blue',
		function () {
			$spoiler.addClass('is-open');
		}
	);

	// ▶ ЗАКРИТИ
	$(document).on(
		'click',
		'.btn-more',
		function () {
			$spoiler.removeClass('is-open');

			if ($table.hasClass('expanded')) {
				$table.removeClass('expanded');
			}
		}
	);

})();