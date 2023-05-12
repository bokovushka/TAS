import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";

//? single-wallpaper-gallery
Fancybox.bind('[data-fancybox="single-wallpaper-gallery"]', {
	Toolbar: {
		items: {
			close_custom: {
				tpl: `<button class="f-button btn-fancybox-close" data-fancybox-close><svg><use xlink:href="../img/icons/icons.svg#i-close"></use></svg></button>`,
			},
		},
		display: {
			left: [],
			right: ["close_custom"],
		},
	},
	Carousel: {
		Navigation: {
			nextTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-circle"></use></svg>`,
			prevTpl: `<svg><use xlink:href="img/icons/icons.svg#i-arrow-circle"></use></svg>`,
		},
	},
	Thumbs: false,
});





