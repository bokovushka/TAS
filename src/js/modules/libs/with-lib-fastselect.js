import $ from 'jquery';
import "/node_modules/fastselect/dist/fastselect.standalone.js";

//? select-city //footer
$('.footer .select-city').fastselect({
	placeholder: 'Введіть назву міста',
	noResultsText: 'Не знайдено',
	// elementClass: 'fstElement fstSelect-city',
}
);