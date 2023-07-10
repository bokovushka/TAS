import $ from 'jquery';
// import { createPopper } from '@popperjs/core';
import 'bootstrap';

//? modal
$(document).on('hidden.bs.modal', function (event) {
	if ($('.modal:visible').length) {
		$('body').addClass('modal-open');
	}
});

//? select-accordion tab mobile // strahuvannya-za-dogovorami-zelena-kartka.html
$('.select-accordion').on('change', function (e) {
	$(this).closest(".insurance-case-tablist-nav").find('.nav-pills .nav-item .nav-link').eq($(this).val()).tab('show');
});

//? select-accordion tab mobile // partners.html
$('.select-accordion').on('change', function (e) {
	$(this).closest(".partners-tablist-nav").find('.nav-pills .nav-item .nav-link').eq($(this).val()).tab('show');
});

// //? tab banner // partners.html
$('#partners-tablist-nav--pills-tab a[data-toggle="pill"]').on('show.bs.tab', function (e) {
	let target = $(e.target).data('target');
	$(target)
		.addClass('active show')
		.siblings('.tab-pane.active')
		.removeClass('active show')
});

//? select-accordion tab mobile // user.html
$('.select-accordion').on('change', function (e) {
	$(this).closest(".user-profile-nav").find('.nav-pills .nav-item .nav-link').eq($(this).val()).tab('show');
});

//? tooltip info field
$(function () {
	var tooltipFieldError = ['<div class="tooltip tooltip-help-info" role="tooltip">',
		'<div class="tooltip-inner">',
		'</div>',
		'</div>'].join('');
	$('.i-info').tooltip({
		trigger: "hover", //hover focus click manual
		html: true,
		placement: "top",
		template: tooltipFieldError,
		// fallbackPlacement: [], // строго в заданому напрямку, не дає можливості при скролі позиціонувати в інші сторони
	});
});