function adaptiveSizePageScaleInit(definedStartWidth) {
	const page = document.documentElement;
	const body = document.body;
	let startWidth = definedStartWidth;

	if (!(startWidth / 1)) {
		const bodyMinWidthStr = getComputedStyle(body).minWidth;
		const bodyMinWidthNumber = Number(bodyMinWidthStr.replace(/[^0-9]/g, ""));
		startWidth = bodyMinWidthNumber;
	}

	function scalePage(startWidth) {
		const clientWidth = page.clientWidth;

		if (startWidth / 1 && clientWidth <= startWidth) {
			const pageComputedWidth = parseInt(getComputedStyle(page).width);
			const resizeCoef = clientWidth / pageComputedWidth;
			const resizeCoefPercents = 100 * resizeCoef;

			// Перевірка, чи елемент Fancybox активний і вимкнення масштабування для інших елементів
			if (!isFancyboxActive()) {
				page.style.transformOrigin = "top left";
				page.style.transform = `scale(${resizeCoef})`;
				page.style.width = `${resizeCoefPercents}%`;
				page.style.height = `${resizeCoefPercents}%`;
			}
		} else {
			page.style.transform = "";
			page.style.transformOrigin = "";
			page.style.width = "";
			page.style.height = "";
		}
	}

	function isFancyboxActive() {
		// Додайте код для перевірки активності Fancybox тут, якщо потрібно
		// Поверніть true, якщо Fancybox активний, інакше false
		return false;
	}

	window.addEventListener("resize", function () {
		scalePage(startWidth);
	});

	scalePage(startWidth);
}

function startOnSpecificBrowserInit(minWidth) {
	const userAgent = window.navigator.userAgent.toLowerCase();
	let browser;

	switch (true) {
		case userAgent.indexOf("edge") > -1:
			browser = "msEdge";
			break;
		case userAgent.indexOf("edg/") > -1:
			browser = "chrEdge";
			break;
		case userAgent.indexOf("opr") > -1 && !!window.opr:
			browser = "opera";
			break;
		case userAgent.indexOf("chrome") > -1 && !!window.chrome:
			browser = "сhrome";
			break;
		case userAgent.indexOf("trident") > -1:
			browser = "ie";
			break;
		case userAgent.indexOf("firefox") > -1:
			browser = "firefox";
			break;
		case userAgent.indexOf("safari") > -1:
			browser = "safari";
			break;
		default:
			browser = "other";
	}

	if (browser == "safari" || browser == "firefox") {
		adaptiveSizePageScaleInit(minWidth);
	}
}

startOnSpecificBrowserInit(440);