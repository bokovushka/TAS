import RangeSlider from "/node_modules/svelte-range-slider-pips/dist/svelte-range-slider-pips.mjs";
if (window.location.toString().indexOf('archive-catalog') > 0) { //добавляє виконання скрипту лиш на певній сторінці
	let PriceSlider = new RangeSlider({
		target: document.getElementById("price-slider"),
		props: {
			min: 0,
			max: 10000,
			values: [0, 10000],
			step: 1,
			range: true,
			float: true,
			suffix: " грн",
			// pushy: true, // чи штовхає один іншого  default false
			// pips: true,
			// pipstep: 1000,
			// all: "label",
			// first: "label",
			// last: "label",
			// rest: "label"
			// all: "label",
			// hoverable: false,
			// prefix: "$"
		}
	});

	let PriceSliderFull = new RangeSlider({
		target: document.getElementById("price-slider-full"),
		props: {
			min: 0,
			max: 10000,
			values: [0, 10000],
			step: 1,
			range: true,
			float: true,
			suffix: " грн",
		}
	});

	let PriceSliderFullMobile = new RangeSlider({
		target: document.getElementById("price-slider-full-m"),
		props: {
			min: 0,
			max: 10000,
			values: [0, 10000],
			step: 1,
			range: true,
			float: true,
			suffix: " грн",
		}
	});

	let CurrencyFirst = document.querySelector(".currency-first");
	let CurrencyLast = document.querySelector(".currency-last");
	let CurrencyFirstFull = document.querySelector(".currency-first-full");
	let CurrencyLastFull = document.querySelector(".currency-last-full");
	let CurrencyFirstFullMobile = document.querySelector(".currency-first-full-m");
	let CurrencyLastFullMobile = document.querySelector(".currency-last-full-m");

	//? #price-slider
	//змінює значення при використанні повзунка
	PriceSlider.$on('change', function (e) {
		CurrencyFirst.value = e.detail.values[0];
		CurrencyLast.value = e.detail.values[1];
	});

	//змінює значення в інпутах
	CurrencyFirst.addEventListener("change", (e) => {
		PriceSlider.$set({ values: [CurrencyFirst.value, CurrencyLast.value] });
	});

	CurrencyLast.addEventListener("change", (e) => {
		PriceSlider.$set({ values: [CurrencyFirst.value, CurrencyLast.value] });
	});

	//? #price-slider-full
	//змінює значення при використанні повзунка
	PriceSliderFull.$on('change', function (e) {
		CurrencyFirstFull.value = e.detail.values[0];
		CurrencyLastFull.value = e.detail.values[1];
	});

	//змінює значення в інпутах
	CurrencyFirstFull.addEventListener("change", (e) => {
		PriceSliderFull.$set({ values: [CurrencyFirstFull.value, CurrencyLastFull.value] });
	});

	CurrencyLastFull.addEventListener("change", (e) => {
		PriceSliderFull.$set({ values: [CurrencyFirstfULL.value, CurrencyLastFull.value] });
	});

	//? #price-slider-full-m
	PriceSliderFullMobile.$on('change', function (e) {
		CurrencyFirstFullMobile.value = e.detail.values[0];
		CurrencyLastFullMobile.value = e.detail.values[1];
	});

	//змінює значення в інпутах
	CurrencyFirstFullMobile.addEventListener("change", (e) => {
		PriceSliderFullMobile.$set({ values: [CurrencyFirstFullMobile.value, CurrencyLastFullMobile.value] });
	});

	CurrencyLastFullMobile.addEventListener("change", (e) => {
		PriceSliderFullMobile.$set({ values: [CurrencyFirstFullMobile.value, CurrencyLastFullMobile.value] });
	});

}
