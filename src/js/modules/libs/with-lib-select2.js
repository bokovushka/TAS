import $ from 'jquery';
import "../../../../node_modules/select2/dist/js/select2.js";

//? select
$(document).ready(function () {
	$('.field select').select2({
		// dropdownParent: $('.field'),
		minimumResultsForSearch: -1,
	});
});

$('#select-otk').select2({
	data: ['Yes', 'No']
})


$('.select-choose-car').change(function () {
	// $('.select-otk').val(0)
	// $('#select-otk').select2('val', 'Yes')
	$('#select-otk').val('Yes').trigger('change');
	if ($(this).val() == '1') {
		$('.form-osago-data').addClass("choose-car-2");
		$('.form-osago-data').removeClass("choose-car-1");
		$('.form-osago-data').removeClass("choose-car-3");
		$('.form-osago-data').removeClass("choose-car-4");
		$('.form-osago-data').removeClass("otk-no");
	}
	else {
		if (($(this).val() == '2')) {
			$('.form-osago-data').addClass("choose-car-3");
			$('.form-osago-data').removeClass("choose-car-1");
			$('.form-osago-data').removeClass("choose-car-2");
			$('.form-osago-data').removeClass("choose-car-4");
		}
		else {
			if (($(this).val() == '3')) {
				$('.form-osago-data').addClass("choose-car-4");
				$('.form-osago-data').removeClass("choose-car-1");
				$('.form-osago-data').removeClass("choose-car-2");
				$('.form-osago-data').removeClass("choose-car-3");
				$('.form-osago-data').removeClass("otk-no");

			}
			else {
				$('.form-osago-data').addClass("choose-car-1");
				$('.form-osago-data').removeClass("choose-car-2");
				$('.form-osago-data').removeClass("choose-car-3");
				$('.form-osago-data').removeClass("choose-car-4");
				$('.form-osago-data').removeClass("otk-no");
			}
		}
	}
});


$('.select-otk').change(function () {
	if ($(this).val() == '1') {
		// $('.form-osago-data').addClass("otk-no");
	}
	else {
		// $('.form-osago-data').removeClass("otk-no");
	}
});