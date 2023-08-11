import $ from 'jquery';

import flatpickr from "flatpickr";
import { Ukrainian } from "flatpickr/dist/l10n/uk.js"

flatpickr.localize(Ukrainian); //default

flatpickr(".datepicker-birthday, .datepicker-issue-date, .datepicker-policy, .datepicker-start-date", {
	minDate: "today",
	dateFormat: "d/m/Y",
	disableMobile: "true",
	wrap: true,
	"locale": Ukrainian,
	static: true,
});

flatpickr(".datepicker-otk", {
	minDate: "today",
	dateFormat: "d/m/Y",
	disableMobile: "true",
	wrap: true,
	"locale": Ukrainian,
});

flatpickr(".datepicker-period-travel", {
	mode: "range",
	minDate: "today",
	dateFormat: "d/m/Y",
	disableMobile: "true",
	wrap: true,
	"locale": Ukrainian,
});