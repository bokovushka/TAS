const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

// button more+ blocks

// console.log( $('.cards-products .cards-products:visible').length );
if (viewportWidth > 1199) {
	$('.b-single-product-related .btn-more').click(function () {
		$('.cards-products:visible .card-item').slice(0, $('.cards-products .card-item:visible').length + 4).css('display', 'block');
		if ($('.cards-products:visible .card-item:hidden').length == 0) $(this).hide();
		return false;
	});
}
if (viewportWidth > 767 && viewportWidth < 1200) {
	$('.b-single-product-related .btn-more').click(function () {
		$('.cards-products:visible .card-item').slice(0, $('.cards-products .card-item:visible').length + 3).css('display', 'block');
		if ($('.cards-products:visible .card-item:hidden').length == 0) $(this).hide();
		return false;
	});
}
if (viewportWidth < 768) {
	$('.b-single-product-related .btn-more').click(function () {
		$('.cards-products:visible .card-item').slice(0, $('.cards-products .card-item:visible').length + 2).css('display', 'block');
		if ($('.cards-products:visible .card-item:hidden').length == 0) $(this).hide();
		return false;
	});
}

// console.log($('.cards-products:visible .cards-products:hidden').length);

if ($('.cards-products:visible .card-item:hidden').length > 0) {
	$('.b-single-product-related .btn-more').show();
}
else {
	$('.b-single-product-related .btn-more').hide();
}



// $('.btn-item-tag-more-single').click(function () {
// 	$('.cards-products:visible .card-item').slice(0, $('.cards-products .card-item:visible').length + 6).css('display', 'block');
// 	if ($('.cards-products:visible .card-item:hidden').length == 0) $(this).hide();
// 	return false;
// });
// // console.log($('.cards-products:visible .cards-products:hidden').length);
// if ($('.cards-products:visible .card-item:hidden').length > 0) {
// 	$('.btn-item-tag-more-single').show();
// }
// else {
// 	$('.btn-item-tag-more-single').hide();
// }

// $('.btn-news-more').click(function () {
// 	$('.cards-news:visible .col-card').slice(0, $('.cards-news .col-card:visible').length + 3).css('display', 'block');
// 	if ($('.cards-news:visible .col-card:hidden').length == 0) $(this).hide();
// 	return false;
// });
// // console.log($('.cards-products:visible .cards-products:hidden').length);
// if ($('.cards-news:visible .col-card:hidden').length > 0) {
// 	$('.btn-news-more').show();
// }
// else {
// 	$('.btn-news-more').hide();
// }