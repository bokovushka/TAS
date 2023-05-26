import $ from 'jquery';
import "../../../../node_modules/fastselect/dist/fastselect.standalone.js";

//? select-city //footer
$('.footer .select-city').fastselect({
	// placeholder: 'Введіть назву міста',
	// noResultsText: 'Не знайдено',
	// elementClass: 'fstElement fstSelect-city',
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
	// placeholder: 'Тип програми',
	// noResultsText: 'Не знайдено',
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

//? select-program wrap //active  //casco page
$('.calculation-data .select-currency').fastselect({
	// placeholder: 'Тип програми',
	// noResultsText: 'Не знайдено',
}
);
