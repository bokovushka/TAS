import Swiper from 'swiper/bundle';

//? banner-top--swiper
var BannerTopSwiper = new Swiper('.banner-top--swiper', {
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	speed: 800,
	grabCursor: true,
	autoHeight: true,
	navigation: {
		nextEl: ".banner-top--swiper .swiper-buttons .button-slider-next",
		prevEl: ".banner-top--swiper .swiper-buttons .button-slider-prev",
	},
});

//? articles-preview--swiper
var ArticlesPreviewSwiper = new Swiper('.articles-preview--swiper', {
	slidesPerView: 3,
	spaceBetween: 24,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	speed: 800,
	grabCursor: true,
	navigation: {
		nextEl: ".articles-preview .swiper-buttons .button-slider-next",
		prevEl: ".articles-preview .swiper-buttons .button-slider-prev",
	},
	breakpoints: {
		1024: {
		},
		640: {
			slidesPerView: 2,
		},
		440: {
			slidesPerView: 1,
		}
	},
});

//? reviews-preview
var ReviewsPreviewSwiper = new Swiper('.reviews-preview--swiper', {
	slidesPerView: 3,
	spaceBetween: 24,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	speed: 800,
	grabCursor: true,
	navigation: {
		nextEl: ".reviews-preview .swiper-buttons .button-slider-next",
		prevEl: ".reviews-preview .swiper-buttons .button-slider-prev",
	},
	breakpoints: {
		1024: {
		},
		640: {
			slidesPerView: 2,
		},
		440: {
			slidesPerView: 1,
		}
	},
});

//? натиск по картці відгука зупиняє автопрокрутку
$(".reviews-preview--swiper .card-link-popup").on("click", function () {
	ReviewsPreviewSwiper.autoplay.stop();
});

//? натиск по кнопці закриття модального вікна запускає автопрокрутку
$(".popup-reviews-preview-card .close").on("click", function () {
	ReviewsPreviewSwiper.autoplay.start();
});

//? натиск поза областю модального вікна запускає автопрокрутку
$(document).mouseup(function (e) {
	if (!$(".popup-reviews-preview-card .modal-content").is(e.target) // если клик был не по нашему блоку
		&& $(".popup-reviews-preview-card .modal-content").has(e.target).length === 0) {
		ReviewsPreviewSwiper.autoplay.start();
	}
});

//? при наведені
// let sliderReviewsPreview = document.querySelector('.reviews-preview--swiper');
//? //при наведені зупиняє
// sliderReviewsPreview.addEventListener("mouseenter", function (e) {
// 	ReviewsPreviewSwiper.autoplay.stop();
// });
//? покидає область слайду запускає автопрокрутку
// sliderReviewsPreview.addEventListener("mouseleave", function (e) {
// 	ReviewsPreviewSwiper.autoplay.start();
// });


//? about-packages-preview--swiper
var AboutPackagesPreviewSwiper = new Swiper('.about-packages-preview--swiper', {
	grabCursor: true,
	spaceBetween: 24,
	slidesPerView: 4,
	navigation: {
		nextEl: ".about-packages-preview .swiper-buttons .button-slider-next",
		prevEl: ".about-packages-preview .swiper-buttons .button-slider-prev",
	},
	breakpoints: {
		1200: {
		},
		1024: {
			slidesPerView: 2.3,
		},
		768: {
			slidesPerView: 1.8,
		},
		576: {
			slidesPerView: 1.5,
		},
		440: {
			slidesPerView: 1,
			grid: {
				rows: 4,
				fill: "row",
			},
		}
	},
});


//? about-program-preview--swiper
var AboutProgramPreviewSwiper = new Swiper('.about-program-preview--swiper', {
	grabCursor: true,
	spaceBetween: 24,
	slidesPerView: 3,
	navigation: {
		nextEl: ".about-program-preview .swiper-buttons .button-slider-next",
		prevEl: ".about-program-preview .swiper-buttons .button-slider-prev",
	},
	breakpoints: {
		1200: {
		},
		1024: {
			slidesPerView: 2.3,
		},
		768: {
			slidesPerView: 1.8,
		},
		576: {
			slidesPerView: 1.5,
		},
		440: {
			slidesPerView: 1,
			grid: {
				rows: 3,
				fill: "row",
			},
		}
	},
});








// // ?swiper-wallpaper-collection
// var SwiperWallpaperCollection = new Swiper('.swiper-wallpaper-collection', {
// 	grabCursor: true,
// 	slidesPerView: 1,
// 	navigation: {
// 		nextEl: ".banner-top .swiper-buttons .button-slider-next",
// 		prevEl: ".banner-top .swiper-buttons .button-slider-prev",
// 	},
// 	thumbs: {
// 		swiper: SwiperWallpaperCollectionThumbs,
// 	},
// });

// //? swiper-cards-products
// var SwiperCardsProducts = new Swiper('.swiper-cards-products', {
// 	spaceBetween: 16,
// 	navigation: {
// 		nextEl: ".product-collection-slider .swiper-buttons .button-slider-next",
// 		prevEl: ".product-collection-slider .swiper-buttons .button-slider-prev",
// 	},
// 	pagination: {
// 		el: ".product-collection-slider .swiper-pagination",
// 		clickable: true,
// 	},
// 	breakpoints: {
// 		1200: {
// 			slidesPerView: 4,
// 			spaceBetween: 32,
// 		},
// 		768: {
// 			slidesPerView: 3,
// 		},
// 		375: {
// 			spaceBetween: 20,
// 			slidesPerView: 2,
// 			grid: {
// 				rows: 2,
// 				fill: "row",
// 			},
// 		}
// 	},
// });

// //? swiper-collection-preview
// var SwiperCollectionPreview = new Swiper('.swiper-collection-preview', {
// 	slidesPerView: 1,
// 	grabCursor: true,
// 	navigation: {
// 		nextEl: ".swiper-collection-preview .swiper-buttons .button-slider-next",
// 		prevEl: ".swiper-collection-preview .swiper-buttons .button-slider-prev",
// 	},
// });

// //? swiper-single-wallpaper-thumbs
// var SwiperSingleWallpaperThumbs = new Swiper('.swiper-single-wallpaper-thumbs', {
// 	direction: "vertical",
// 	slidesPerView: 3,
// 	slidesPerGroup: 3,
// 	spaceBetween: 2,
// 	watchSlidesProgress: true,
// 	navigation: {
// 		nextEl: ".swiper-single-wallpaper-thumbs-wrap .button-slider-next",
// 		prevEl: ".swiper-single-wallpaper-thumbs-wrap .button-slider-prev",
// 	},
// 	pagination: {
// 		el: ".swiper-single-wallpaper-thumbs-wrap .swiper-pagination",
// 		clickable: true,
// 	},
// });

// //? swiper-single-wallpaper
// var SwiperSingleWallpaper = new Swiper('.swiper-single-wallpaper', {
// 	slidesPerView: 1,
// 	// simulateTouch: 0,
// 	thumbs: {
// 		swiper: SwiperSingleWallpaperThumbs,
// 	},
// 	pagination: {
// 		el: ".swiper-single-wallpaper-wrap .swiper-pagination",
// 		clickable: true,
// 	},
// });

// //? cards-products
// // if (window.innerWidth < 768) {
// // 	$('.cards-products').addClass('swiper-container');
// // 	$('.cards-products .cards-products-inner').addClass('swiper-wrapper');
// // 	$('.cards-products .card-item').addClass('swiper-slide');
// // 	var mySwiper = new Swiper('.card-products-more', {
// // 		slidesPerView: 2,
// // 		spaceBetween: 20,
// // 		grid: {
// // 			rows: 2,
// // 			fill: "row",
// // 		},
// // 	});
// // }

// //? blog-p swiper-blog-banner-top
// var SwiperBlogBannerTop = new Swiper('.blog-p .swiper-blog-banner-top', {
// 	grabCursor: true,
// 	slidesPerView: 1.5,
// 	centeredSlides: true,
// 	spaceBetween: 32,
// 	// initialSlide: 1,
// 	loop: true,
// 	navigation: {
// 		nextEl: ".blog-p .blog-banner-top .swiper-buttons .button-slider-next",
// 		prevEl: ".blog-p .blog-banner-top .swiper-buttons .button-slider-prev",
// 	},
// 	pagination: {
// 		el: ".blog-p .blog-banner-top .swiper-pagination",
// 		clickable: true,
// 	},
// 	breakpoints: {
// 		992: {},
// 		768: {
// 			spaceBetween: 16,
// 		},
// 		375: {
// 			spaceBetween: 10,
// 			slidesPerView: 1.1,
// 		}
// 	}
// });

// //? collection-p swiper-blog-banner-top
// var SwiperBlogBannerTop = new Swiper('.collection-p .swiper-blog-banner-top', {
// 	grabCursor: true,
// 	slidesPerView: 1.5,
// 	centeredSlides: true,
// 	spaceBetween: 32,
// 	// initialSlide: 1,
// 	loop: true,
// 	navigation: {
// 		nextEl: ".collection-p .blog-banner-top .swiper-buttons .button-slider-next",
// 		prevEl: ".collection-p .blog-banner-top .swiper-buttons .button-slider-prev",
// 	},
// 	pagination: {
// 		el: ".collection-p .blog-banner-top .swiper-pagination",
// 		clickable: true,
// 	},
// 	breakpoints: {
// 		992: {},
// 		768: {
// 			spaceBetween: 16,
// 		},
// 		375: {
// 			spaceBetween: 10,
// 			slidesPerView: 1.1,
// 		}
// 	}
// });

// //? nav-blog-category
// var NavBlogCategory = new Swiper(".nav-blog-category", {
// 	// direction: "vertical",
// 	slidesPerView: "auto",
// 	spaceBetween: 50,
// 	freeMode: true,
// 	scrollbar: {
// 		el: ".swiper-scrollbar",
// 		// draggable: true,
// 	},
// 	mousewheel: true,
// });

// //? swiper-article
// var SwiperArticle = new Swiper('.swiper-article', {
// 	slidesPerView: "auto",
// 	slidesPerGroup: 3,
// 	spaceBetween: 12,
// 	grabCursor: true,
// 	navigation: {
// 		nextEl: '.article-slider .button-slider-next',
// 		prevEl: '.article-slider .button-slider-prev',
// 	},
// 	pagination: {
// 		el: '.article-slider .swiper-pagination',
// 		type: 'fraction',
// 	},
// 	breakpoints: {
// 		1200: {},
// 		768: {
// 			slidesPerGroup: 2,
// 		},
// 		375: {
// 			slidesPerGroup: 1,
// 			spaceBetween: 20,
// 		},
// 	}
// });

// //? swiper-article-preview
// var SwiperArticlePreview = new Swiper('.swiper-article-preview', {
// 	slidesPerView: 3,
// 	spaceBetween: 32,
// 	grabCursor: true,
// 	breakpoints: {
// 		768: {
// 		},
// 		576: {
// 			slidesPerView: 2,
// 		},
// 		375: {
// 			slidesPerView: 1.4,
// 			spaceBetween: 20,
// 		},
// 	}
// });

// //? swiper-archive-catalog-filter-top
// var SwiperCatalogCategory = new Swiper('.swiper-catalog-category', {
// 	slidesPerView: 6,
// 	spaceBetween: 32,
// 	navigation: {
// 		nextEl: '.catalog-category-slider .button-slider-next',
// 		prevEl: '.catalog-category-slider .button-slider-prev',
// 	},
// 	breakpoints: {
// 		1400: {},
// 		768: {
// 			slidesPerView: 5,
// 		},
// 		992: {
// 			slidesPerView: 4,
// 		},
// 		768: {
// 			slidesPerView: 3,
// 		},
// 		576: {
// 			slidesPerView: 2,
// 		},
// 		375: {
// 			slidesPerView: 2.7,
// 		},
// 	}
// });

// //? filter-views
// if (window.innerWidth < 992) {
// 	$('.filter-views').addClass('swiper-container');
// 	$('.filter-views-content').addClass('swiper-wrapper');
// 	$('.filter-view-item').addClass('swiper-slide');
// 	var FilterViews = new Swiper('.filter-views', {
// 		slidesPerView: "auto",
// 		spaceBetween: 8,
// 		freeMode: true,
// 		grabCursor: true,
// 		scrollbar: {
// 			el: ".swiper-scrollbar",
// 			// draggable: true,
// 		},
// 		mousewheel: true,
// 	});
// }

// //? swiper-will-need
// var SwiperWillNeed = new Swiper('.swiper-will-need', {
// 	slidesPerView: 4,
// 	spaceBetween: 64,
// 	grabCursor: true,
// 	navigation: {
// 		nextEl: ".swiper-will-need .swiper-buttons .button-slider-next",
// 		prevEl: ".swiper-will-need .swiper-buttons .button-slider-prev",
// 	},
// 	pagination: {
// 		el: ".swiper-will-need .swiper-pagination",
// 		clickable: true,
// 	},
// 	breakpoints: {
// 		1400: {},
// 		1200: {
// 			spaceBetween: 32,
// 		},
// 		992: {
// 			spaceBetween: 32,
// 			slidesPerView: 3,
// 		},
// 		768: {
// 			spaceBetween: 20,
// 			slidesPerView: 3.5,
// 		},
// 		576: {
// 			spaceBetween: 20,
// 			slidesPerView: 2.5,
// 			slidesPerGroup: 2,
// 		},
// 		375: {
// 			spaceBetween: 20,
// 			slidesPerView: 2.2,
// 			slidesPerGroup: 2,
// 		},
// 	}
// });

// //? popular-city swiper
// var NavBlogCategory = new Swiper(".popular-city", {
// 	// direction: "vertical",
// 	slidesPerView: "auto",
// 	spaceBetween: 30,
// 	freeMode: true,
// 	grabCursor: true,
// 	scrollbar: {
// 		el: ".popular-city .swiper-scrollbar",
// 		// draggable: true,
// 	},
// 	mousewheel: true,
// });

// //? swiper-single-brand
// var SwiperSingleBrand = new Swiper(".single-brand-slider .swiper-single-brand", {
// 	// slidesPerView: 'auto',
// 	slidesPerView: 'auto',
// 	spaceBetween: 40,
// 	grabCursor: true,
// 	loop: true,
// 	centeredSlides: true,
// 	navigation: {
// 		nextEl: '.single-brand-slider .button-slider-next',
// 		prevEl: '.single-brand-slider .button-slider-prev',
// 	},
// 	pagination: {
// 		el: '.single-brand-slider .swiper-pagination',
// 		type: 'fraction',
// 	},
// 	breakpoints: {
// 		992: {},
// 		576: {
// 			centeredSlides: false,
// 			spaceBetween: 16,
// 		},
// 		375: {
// 			centeredSlides: false,
// 			slidesPerView: 1.6,
// 			spaceBetween: 12,
// 		},

// 	},
// });
