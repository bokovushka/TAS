//counter for input
$('.custom-control-number--date input').each(function () {
	if ($(this).val() === '') {
		$(this).closest('.custom-control-number--date').find('.before').show();
	} else {
		$(this).closest('.custom-control-number--date').find('.before').hide();
	}
});

$('.custom-control-number--date input').on('input', function () {
	console.log($(this).val());
	if ($(this).val() === '') {
		$(this).closest('.custom-control-number--date').find('.before').show();
	} else {
		$(this).closest('.custom-control-number--date').find('.before').hide();
	}
});

$('.custom-control-number .counter').click(function (e) {
	$(this).closest('.custom-control-number').find('.before').hide();
	let valueElement = $(this).closest('.custom-control-number').find('input');
	const minVal = valueElement.attr('min');

	if (!valueElement.val()) {
		valueElement.val(minVal);
	}

	else if ($(this).hasClass('plus')) {
		if (!valueElement.val()) {
			valueElement.val(minVal);
		} else
			valueElement.val(Math.max(parseInt(valueElement.val()) + 1));
	}
	else if (valueElement.val() > minVal) // Stops the value going into negatives
	{
		valueElement.val(Math.max(parseInt(valueElement.val()) - 1));
	}

	return false;
});

	// $("#item-object").keyup(function () {
	// 	if (this.value.match(/[^0-9]|^0{1}|\d{5}/g)) {
	// 		this.value = this.value.replace(/./g, '');
	// 	}
	// });