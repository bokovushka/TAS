var input = document.querySelectorAll('.field input'),
	buffer = [];
for (var i = 0; input.length > i; i++) {
	console.log(input[i].value);
	buffer[i] = document.createElement('div');
	buffer[i].className = "buffer";
	//вставляем скрытый div.buffer
	input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling);

	input[i].oninput = function () {
		this.nextElementSibling.innerHTML = this.value;
		this.style.width = this.nextElementSibling.clientWidth + 'px';
	};
}

//width input
// $.fn.textWidth = function (text, font) {

// 	if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);

// 	$.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));

// 	return $.fn.textWidth.fakeEl.width();
// };

// $('input').on('input', function () {
// 	var inputWidth = $(this).textWidth();
// 	$(this).css({
// 		width: inputWidth
// 	})
// }).trigger('input');


// function inputWidth(elem, minW, maxW) {
// 	elem = $(this);
// 	console.log(elem)
// }

// var targetElem = $('input');

// inputWidth(targetElem);
