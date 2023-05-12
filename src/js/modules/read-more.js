//? read more //why-we
readMore($('.spoiler'), 2);

function readMore(jObj, lineNum) {
	if (isNaN(lineNum)) {
		lineNum = 2;
	}
	var go = new ReadMore(jObj, lineNum);
}

function ReadMore(_jObj, lineNum) {
	var READ_MORE_LABEL = 'Детальніше';
	var HIDE_LABEL = 'Згорнути';

	var jObj = _jObj;
	var textMinHeight = '' + (parseInt(jObj.children('.hidden-text').css('line-height'), 10) * lineNum) + 'px';
	var textMaxHeight = '' + jObj.children('.hidden-text').css('height');

	jObj.children('.hidden-text').css('height', '' + textMaxHeight);
	jObj.children('.hidden-text').css('transition', 'height .5s');
	jObj.children('.hidden-text').css('height', '' + textMinHeight);

	jObj.append('<button class="btn-read-more btn btn-ahead text-main-blue rounded-0 d-block mt-5 p-0">' + READ_MORE_LABEL + '</button>');

	jObj.children('.btn-read-more').click(function () {
		if (jObj.children('.hidden-text').css('height') === textMinHeight) {
			jObj.children('.hidden-text').css('height', '' + textMaxHeight);
			jObj.children('.btn-read-more').html(HIDE_LABEL).addClass('active');
			$(this).closest('.row').removeClass('align-items-end'); //
		} else {
			jObj.children('.hidden-text').css('height', '' + textMinHeight);
			jObj.children('.btn-read-more').html(READ_MORE_LABEL).removeClass('active');
			$(this).closest('.row').addClass('align-items-end'); //
		}
	});
}