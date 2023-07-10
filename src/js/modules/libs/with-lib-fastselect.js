import $ from 'jquery';
import "../../../../node_modules/fastselect/dist/fastselect.standalone.js";

//? select-city //footer
$('.footer .select-city').fastselect({
}
);

//? select-city wrap //active //footer
setInterval(function () {
	if ($('.footer .fstElement').hasClass('fstActive')) {
		$('.footer .select-wrap').addClass('active');
	}
	else {
		$('.footer .select-wrap').removeClass('active');
	}
}, 100);

//? select-program //casco page
$('.calculation-data .select-program').fastselect({
}
);

//? select-program wrap //active  //casco page
setInterval(function () {
	if ($('.calculation-data .fstElement').hasClass('fstActive')) {
		$('.calculation-data .select-wrap').addClass('active');
	}
	else {
		$('.calculation-data .select-wrap').removeClass('active');
	}
}, 100);

//? select-currency //casco page
$('.calculation-data .select-currency').fastselect({
}
);

//? select-year //rehuliarna-richna-zvitnist.html
$('.financial-info .select-year').fastselect({
}
);

//? select-accordion //rehuliarna-richna-zvitnist.html
$('.insurance-case-tablist-nav .select-accordion').fastselect({
}
);

//? select-year   //news.html
$('.news .select-year').fastselect({
}
);

//? select-news-category
$('.news .select-news-category').fastselect({
}
);

//? select-accordion //parntners.html
$('.partners-tablist-nav .select-accordion').fastselect({
}
);

//? select-accordion //user.html
$('.user-profile-nav .select-accordion').fastselect({
}
);

//? select-service //user.html
$('.user-profile .select-service').fastselect({
}
);

//? select-choose-car //avtotsyvilka-2.html
$('.field-choose-car .select-choose-car').fastselect({
}
);

//? select-engine-capacity //avtotsyvilka-2.html
$('.field-engine-capacity .select-engine-capacity').fastselect({
}
);

//? select-carrying-capacity //avtotsyvilka-2.html
$('.field-carrying-capacity .select-carrying-capacity').fastselect({
}
);

$('.select-choose-car').change(function () {
	if ($(this).val() == '1') {
		$('.form-osago-data').addClass("choose-car-2");
		$('.form-osago-data').removeClass("choose-car-1");
		$('.form-osago-data').removeClass("choose-car-3");
		$('.form-osago-data').removeClass("otk-no");
	}
	else {
		if (($(this).val() == '2')) {
			$('.form-osago-data').addClass("choose-car-3");
			$('.form-osago-data').removeClass("choose-car-1");
			$('.form-osago-data').removeClass("choose-car-2");
		}
		else {
			$('.form-osago-data').addClass("choose-car-1");
			$('.form-osago-data').removeClass("choose-car-2");
			$('.form-osago-data').removeClass("choose-car-3");
			$('.form-osago-data').removeClass("otk-no");
		}
	}
});

//? select-otk //avtotsyvilka-2.html
$('.field-otk .select-otk').fastselect({
}
);

// $('.select-otk').change(function () {
// 	if ($(this).val() == '1') {
// 		$('.form-osago-data').addClass("otk-no");
// 	}
// 	else {
// 		$('.form-osago-data').removeClass("otk-no");
// 	}
// });