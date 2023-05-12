import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js"

flatpickr.localize(Russian); //default

flatpickr(".datepicker", {
	minDate: "today",
	// enableTime: true,
	// time_24hr: true,
	disableMobile: "true",
	wrap: true,
	dateFormat: "d/m/Y",
	"locale": Russian,
});