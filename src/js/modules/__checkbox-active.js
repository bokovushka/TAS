$('.filter-item--type-picture .custom-control-label').click(function () {
	$(this).closest('.custom-checkbox').toggleClass("checked");
});

// $(".filter-item--type-picture .custom-control-label").click(function () {

// 	if ($(this).closest('.checkbox-preview').hasClass('active')) {
// 		$(this).closest('.checkbox-preview').removeClass('active');
// 	}
// 	else {
// 		$('.filter-item--type-picture .checkbox-preview').removeClass('active');
// 		$(this).closest('.checkbox-preview').addClass('active');
// 	}
// });
