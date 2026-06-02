import CanvasJS from '@canvasjs/charts';

// Функція для створення кругової діаграми
function createDoughnutChart() {
	const chartContainer = document.getElementById("DoughnutChart");
	if (!chartContainer) {
		console.warn("DoughnutChart не знайдено в DOM!");
		return;
	}

	var doughnutChart = new CanvasJS.Chart("DoughnutChart", {
		animationEnabled: true,
		backgroundColor: "transparent",
		toolTip: { enabled: false },
		data: [{
			type: "doughnut",
			startAngle: 180,
			indexLabelFontSize: 22,
			indexLabel: "#percent%",
			indexLabelFontColor: "#5B75FF",
			showInLegend: false,
			dataPoints: [
				{ y: 34.9, label: "ОСЦПВ", color: "#3751D8", exploded: false },
				{ y: 21.1, label: "КАСКО", color: "#5B75FF", exploded: false },
				{ y: 19.8, label: "Зелена картка", color: "#A8B6FF", exploded: false },
				{ y: 10.9, label: "ДМС", color: "#D3DAFF", exploded: false },
				{ y: 13.3, label: "Інші види страхування", color: "#DCE2FF", exploded: false }
			],
			dataPointMouseOver: function (e) {
				let index = e.dataPointIndex;
				doughnutChart.options.data[0].dataPoints[index].exploded = true;
				doughnutChart.render();
			},
			dataPointMouseOut: function (e) {
				let index = e.dataPointIndex;
				doughnutChart.options.data[0].dataPoints[index].exploded = false;
				doughnutChart.render();
			}
		}]
	});

	doughnutChart.render();

	// Створення легенди
	const legendContainer = document.getElementById("chartLegend");
	if (!legendContainer) {
		console.warn("chartLegend не знайдено в DOM!");
		return;
	}

	function createLegend() {
		const dataPoints = doughnutChart.options.data[0].dataPoints;
		legendContainer.innerHTML = ""; // Очищення перед додаванням

		dataPoints.forEach(point => {
			const li = document.createElement("li");
			const chartLine = document.createElement("span");
			chartLine.className = "chart-line";
			chartLine.style.backgroundColor = point.color;

			const chartName = document.createElement("span");
			chartName.className = "chart-name";
			chartName.textContent = point.label;

			li.appendChild(chartLine);
			li.appendChild(chartName);
			legendContainer.appendChild(li);
		});
	}

	createLegend();
}

// Функція для створення стовпчикової діаграми
function createBarChart1() {
	const chartContainer = document.getElementById("barChart1");
	if (!chartContainer) {
		console.warn("barChart1 не знайдено в DOM!");
		return;
	}

	// Визначаємо viewportMinimum і viewportMaximum в залежності від ширини екрану
	let viewportMin = 2012.5;
	let viewportMax = 2024.5;

	if (window.innerWidth < 768) {
		viewportMin = 2012.5;
		viewportMax = 2018.5;
	} else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
		viewportMin = 2012.5;
		viewportMax = 2024.5;
	} else if (window.innerWidth >= 1024 && window.innerWidth < 1200) {
		viewportMin = 2012.5;
		viewportMax = 2018.5;
	} else {
		viewportMin = 2012.5;
		viewportMax = 2024.5;
	}

	var barChart1 = new CanvasJS.Chart("barChart1", {
		backgroundColor: "transparent",
		toolTip: {
			enabled: true, // Включаємо тултіп
			shared: true,  // Включаємо спільний тултіп для всіх елементів
			contentFormatter: function (e) {
				// Форматуємо вміст тултіпу
				var mainDataPoint = e.entries[0].dataPoint;  // Дані основного стовпчика
				var year = mainDataPoint.x;
				var premium = mainDataPoint.y;

				// Повертаємо кастомізований тултіп
				return `
					 <div>
					 	<div class="chart-item">
							<div class="chart-name">Рік:</div> <div class="chart-val">${year}</div>
						</div>
						<div class="chart-item">
							<div class="chart-name">Страхова премія:</div> <div class="chart-val">${premium.toLocaleString()}</div>
						</div>
					</div>
				 `;
			}
		},
		exportEnabled: false, // Вимикає toolbar
		animationEnabled: true,
		theme: "light1",
		zoomEnabled: true,
		panEnabled: true, // дозволяє прокрутку
		title: {
			text: "Страхові премії",
			fontFamily: "Arial", // Встановлює звичайний шрифт
			fontWeight: "lighter", // Змінює заголовок на звичайний, без жирного шрифту
			fontSize: 40, // За бажанням можна змінити розмір шрифту
			fontColor: "#878787"
		},
		axisY: {
			interval: 1000, // Крок осі Y
			minimum: 0, // Мінімальне значення
			maximum: 5500, // Максимальне значення (за потреби)
			labelFormatter: function (e) {
				return e.value.toLocaleString(); // Додає роздільники тисяч
			},
			labelFontColor: "#5b75ff",
			gridThickness: 0, // Прибирає горизонтальні лінії
			lineThickness: 0, // Прибирає вісь Y
			tickLength: 0 // Прибирає засічки
		},
		axisX: {
			interval: 1, // Відображати кожен рік
			valueFormatString: "####", // Відображати тільки число (рік)
			minimum: 2012.5,
			maximum: 2024.5,
			viewportMinimum: viewportMin,
			viewportMaximum: viewportMax,
			labelFontColor: "#5b75ff",
			gridThickness: 0, // Прибирає горизонтальні лінії
			lineThickness: 0, // Прибирає вісь Y
			tickLength: 0 // Прибирає засічки
		},
		data: [{
			type: "column",
			color: "#5b75ff", // Встановлення кольору для всіх стовпців
			indexLabelFontColor: "#0c5395",
			indexLabelFontSize: 14,
			indexLabelPlacement: "outside",
			dataPoints: [
				{ x: 2013, y: 396.5, indexLabel: "396,5" },
				{ x: 2014, y: 426.1, indexLabel: "426,1" },
				{ x: 2015, y: 607.4, indexLabel: "607,4" },
				{ x: 2016, y: 763.2, indexLabel: "763,2" },
				{ x: 2017, y: 1023.9, indexLabel: "1023,9" },
				{ x: 2018, y: 1387.7, indexLabel: "1387,7" },
				{ x: 2019, y: 1815.1, indexLabel: "1815,1" },
				{ x: 2020, y: 2026.9, indexLabel: "2026,9" },
				{ x: 2021, y: 2449.5, indexLabel: "2449,5" },
				{ x: 2022, y: 2432.6, indexLabel: "2432,6" },
				{ x: 2023, y: 3539.9, indexLabel: "3539,9" },
				{ x: 2024, y: 4881.3, indexLabel: "4881,3" }
			]

			// , click: function (e) {
			// 	// Якщо екран менший за 768px, при натисканні на стовпчик змінюємо розмір шрифту
			// 	if (window.innerWidth < 768) {
			// 		// Отримуємо поточну точку даних
			// 		var dataPoint = e.dataPoint;

			// 		// Зменшуємо шрифт для всіх точок
			// 		barChart1.options.data[0].dataPoints.forEach(function (point) {
			// 			point.indexLabelFontSize = 0; // Встановлюємо стандартний розмір шрифта
			// 		});

			// 		// Збільшуємо розмір шрифта для натиснутого стовпця
			// 		dataPoint.indexLabelFontSize = 14; // Збільшуємо розмір шрифта для поточної точки

			// 		// Оновлюємо графік
			// 		barChart1.render();
			// 	}
			// }
		},
		//фонові стовчики
		{
			type: "stackedColumn",
			color: "rgba(91, 117, 255, 0.3)", // Прозорий синій колір
			dataPoints: [
				{ x: 2013, y: 5500 },
				{ x: 2014, y: 5500 },
				{ x: 2015, y: 5500 },
				{ x: 2016, y: 5500 },
				{ x: 2017, y: 5500 },
				{ x: 2018, y: 5500 },
				{ x: 2019, y: 5500 },
				{ x: 2020, y: 5500 },
				{ x: 2021, y: 5500 },
				{ x: 2022, y: 5500 },
				{ x: 2023, y: 5500 },
				{ x: 2024, y: 5500 }
			],
			toolTip: {
				enabled: false // Вимикаємо тултіп для цього графіка
			}
		},
		// Додаємо лінію
		{
			type: "line",
			// name: "Страхові премії лінія",
			// showInLegend: true,
			color: "red", // Червоний колір лінії
			lineThickness: 3, // Товщина лінії
			markerType: "none", // Прибираємо маркери на лінії
			dataPoints: [
				{ x: 2013, y: 396.5 },
				{ x: 2014, y: 426.1 },
				{ x: 2015, y: 607.4 },
				{ x: 2016, y: 763.2 },
				{ x: 2017, y: 1023.9 },
				{ x: 2018, y: 1387.7 },
				{ x: 2019, y: 1815.1 },
				{ x: 2020, y: 2026.9 },
				{ x: 2021, y: 2449.5 },
				{ x: 2022, y: 2432.6 },
				{ x: 2023, y: 3539.9 },
				{ x: 2024, y: 4881.3 }
			]
		},
		{
			type: "scatter", // або "line" без лінії
			markerType: "none", // не показувати точку
			indexLabelFontColor: "#0c5395",
			indexLabelFontSize: 14,
			indexLabelPlacement: "outside",
			dataPoints: [
				{ x: 2019, y: 1215.1, indexLabel: "1815,1" } // <- реальне значення у підписі
			]
		}
		]
	});

	// // Оскільки на початку потрібно приховати всі indexLabel, крім останнього
	// if (window.innerWidth < 768) {
	// 	barChart1.options.data[0].dataPoints.forEach(function (point, index, array) {
	// 		if (index !== array.length - 1) {
	// 			point.indexLabelFontSize = 0; // Зменшуємо шрифт для всіх точок
	// 		}
	// 	});
	// }

	barChart1.render();

	if (document.querySelector('button[state="pan"]')) {
		document.querySelector('button[state="pan"]').click();
	}

}

// Функція для створення стовпчикової діаграми
function createBarChart2() {
	const chartContainer = document.getElementById("barChart2");
	if (!chartContainer) {
		console.warn("barChart2 не знайдено в DOM!");
		return;
	}

	var barChart2 = new CanvasJS.Chart("barChart2", {
		backgroundColor: "transparent",
		toolTip: { enabled: false },
		exportEnabled: false, // Вимикає toolbar
		animationEnabled: true,
		theme: "light1",
		title: {
			text: "Страхові виплати",
			fontFamily: "Arial", // Встановлює звичайний шрифт
			fontWeight: "lighter", // Змінює заголовок на звичайний, без жирного шрифту
			fontSize: 40, // За бажанням можна змінити розмір шрифту
			fontColor: "#878787"
		},
		axisY: {
			// title: "Значення",
			interval: 500, // Крок осі Y
			minimum: 0, // Мінімальне значення
			maximum: 2250, // Максимальне значення (за потреби)
			labelFormatter: function (e) {
				return e.value.toLocaleString(); // Додає роздільники тисяч
			}
		},
		axisX: {
			// title: "Роки",
			interval: 1, // Відображати кожен рік
			valueFormatString: "####", // Відображати тільки число (рік)
			minimum: 2012,
			maximum: 2025
		},
		data: [{
			type: "column",
			color: "#5b75ff", // Встановлення кольору для всіх стовпців
			indexLabelFontColor: "#0c5395",
			indexLabelFontSize: 14,
			indexLabelPlacement: "outside",
			dataPoints: [
				{ x: 2013, y: 174.9, indexLabel: "174,9" },
				{ x: 2014, y: 176.6, indexLabel: "176,6" },
				{ x: 2015, y: 212.4, indexLabel: "212,4" },
				{ x: 2016, y: 262.2, indexLabel: "262,2" },
				{ x: 2017, y: 371.3, indexLabel: "371,3" },
				{ x: 2018, y: 545.4, indexLabel: "545,4" },
				{ x: 2019, y: 726.9, indexLabel: "726,9" },
				{ x: 2020, y: 887.5, indexLabel: "887,5" },
				{ x: 2021, y: 1142.8, indexLabel: "1142,8" },
				{ x: 2022, y: 904.3, indexLabel: "904,3" },
				{ x: 2023, y: 1341.24, indexLabel: "1341,24" },
				{ x: 2024, y: 1975.3, indexLabel: "1975,3" }
			],
			click: function (e) {
				// Якщо екран менший за 768px, при натисканні на стовпчик змінюємо розмір шрифту
				if (window.innerWidth < 768) {
					// Отримуємо поточну точку даних
					var dataPoint = e.dataPoint;

					// Зменшуємо шрифт для всіх точок
					barChart2.options.data[0].dataPoints.forEach(function (point) {
						point.indexLabelFontSize = 0; // Встановлюємо стандартний розмір шрифта
					});

					// Збільшуємо розмір шрифта для натиснутого стовпця
					dataPoint.indexLabelFontSize = 14; // Збільшуємо розмір шрифта для поточної точки

					// Оновлюємо графік
					barChart2.render();
				}
			}
		}]
	});

	// Оскільки на початку потрібно приховати всі indexLabel, крім останнього
	if (window.innerWidth < 768) {
		barChart2.options.data[0].dataPoints.forEach(function (point, index, array) {
			if (index !== array.length - 1) {
				point.indexLabelFontSize = 0; // Зменшуємо шрифт для всіх точок
			}
		});
	}

	barChart2.render();
}

// Функція для створення стовпчикової діаграми
function createBarChart3() {
	const chartContainer = document.getElementById("barChart3");
	if (!chartContainer) {
		console.warn("barChart3 не знайдено в DOM!");
		return;
	}

	var barChart3 = new CanvasJS.Chart("barChart3", {
		backgroundColor: "transparent",
		toolTip: { enabled: false },
		exportEnabled: false, // Вимикає toolbar
		animationEnabled: true,
		theme: "light1",
		title: {
			text: "Страхові резерви",
			fontFamily: "Arial", // Встановлює звичайний шрифт
			fontWeight: "lighter", // Змінює заголовок на звичайний, без жирного шрифту
			fontSize: 40, // За бажанням можна змінити розмір шрифту
			fontColor: "#878787"
		},
		axisY: {
			// title: "Значення",
			interval: 1000, // Крок осі Y
			minimum: 0, // Мінімальне значення
			maximum: 3500, // Максимальне значення (за потреби)
			labelFormatter: function (e) {
				return e.value.toLocaleString(); // Додає роздільники тисяч
			}
		},
		axisX: {
			// title: "Роки",
			interval: 1, // Відображати кожен рік
			valueFormatString: "####", // Відображати тільки число (рік)
			minimum: 2013,
			maximum: 2024
		},
		data: [{
			type: "column",
			color: "#5b75ff", // Встановлення кольору для всіх стовпців
			indexLabelFontColor: "#0c5395",
			indexLabelFontSize: 14,
			indexLabelPlacement: "outside",
			dataPoints: [
				{ x: 2014, y: 228.7, indexLabel: "228,7" },
				{ x: 2015, y: 328.7, indexLabel: "328,7" },
				{ x: 2016, y: 446.9, indexLabel: "446,9" },
				{ x: 2017, y: 661.8, indexLabel: "661,8" },
				{ x: 2018, y: 1088.9, indexLabel: "1088,9" },
				{ x: 2019, y: 1380.6, indexLabel: "1380,6" },
				{ x: 2020, y: 1614.1, indexLabel: "1614,1" },
				{ x: 2021, y: 1786.7, indexLabel: "1786,7" },
				{ x: 2022, y: 1869.4, indexLabel: "1869,4" },
				{ x: 2023, y: 2632.4, indexLabel: "2632,4" }
			],
			click: function (e) {
				// Якщо екран менший за 768px, при натисканні на стовпчик змінюємо розмір шрифту
				if (window.innerWidth < 768) {
					// Отримуємо поточну точку даних
					var dataPoint = e.dataPoint;

					// Зменшуємо шрифт для всіх точок
					barChart3.options.data[0].dataPoints.forEach(function (point) {
						point.indexLabelFontSize = 0; // Встановлюємо стандартний розмір шрифта
					});

					// Збільшуємо розмір шрифта для натиснутого стовпця
					dataPoint.indexLabelFontSize = 14; // Збільшуємо розмір шрифта для поточної точки

					// Оновлюємо графік
					barChart3.render();
				}
			}
		}]
	});

	// Оскільки на початку потрібно приховати всі indexLabel, крім останнього
	if (window.innerWidth < 768) {
		barChart3.options.data[0].dataPoints.forEach(function (point, index, array) {
			if (index !== array.length - 1) {
				point.indexLabelFontSize = 0; // Зменшуємо шрифт для всіх точок
			}
		});
	}

	barChart3.render();
}


// Виконати код після завантаження сторінки
document.addEventListener("DOMContentLoaded", function () {
	createDoughnutChart();
	createBarChart1();
	createBarChart2();
	createBarChart3();
});
