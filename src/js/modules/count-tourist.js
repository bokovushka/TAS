// let isDisabled = false
// document.getElementById("myForm").addEventListener("submit", function (e) {
// 	e.preventDefault()
// 	const formData = new FormData(e.target);
// 	const formProps = Object.fromEntries(formData);
// 	const total = Object.values(formProps).reduce((result, item) => result += Number(item), 0)
// 	document.getElementById('people_amount').innerHTML = total || 0
// 	document.getElementById('people_attribute').innerHTML = getPeopleAattribute(total)
// 	if (total >= 4 && !isDisabled) {
// 		isDisabled = true
// 		Array.prototype.forEach.call(document.getElementsByClassName('increase'), (el) => {
// 			el.disabled = true
// 		})
// 	}
// 	if (total < 4 && isDisabled) {
// 		isDisabled = false
// 		Array.prototype.forEach.call(document.getElementsByClassName('increase'), (el) => {
// 			el.disabled = false
// 		})
// 	}
// });

// let total = 0
// function increase(id) {
// 	document.getElementById(id).value++
// }

// function decrease(id) {
// 	if (document.getElementById(id).value <= 0) {
// 		return
// 	}
// 	document.getElementById(id).value--
// }

// function handleInput(e) {
// 	if (total >= 4) {
// 		return
// 	}
// 	const inputValue = document.getElementById(e).value
// 	if (inputValue > 4) {
// 		document.getElementById(e).value = 4
// 	}
// 	if (inputValue <= 0) {
// 		document.getElementById(e).value = 0
// 	}
// 	total = collectValues()

// 	document.getElementById('people_amount').innerHTML = total
// 	document.getElementById('people_attribute').innerHTML = getPeopleAattribute(total)
// }

// function getPeopleAattribute(value) {

// 	if (value === 1) {
// 		return 'Людина'
// 	}
// 	if (value >= 2 && value <= 4) {
// 		return 'Людини'
// 	}
// 	if (value >= 5 && value <= 20) {
// 		return 'Людей'
// 	}
// 	if (value > 20) {
// 		const _value = String(value).split('').slice(1)
// 		return getPeopleAattribute(Number(_value.join('')))
// 	}
// 	return 'Людей'
// }

// function collectValues() {
// 	return ['upTo1', 'upTo3', 'upTo18', 'upTo69', 'upTo80'].map(id => document.getElementById(id).value).reduce((res, item) => res += Number(item), 0)
// }


function getPeopleAttribute(value) {

	if (value === 1) {
		return 'Людина'
	}
	if (value >= 2 && value <= 4) {
		return 'Людини'
	}
	if (value >= 5 && value <= 20) {
		return 'Людей'
	}
	if (value > 20) {
		const _value = String(value).split('').slice(1)
		return getPeopleAttribute(Number(_value.join('')))
	}
	return 'Людей'
}

function setAmountOfPeople(value) {
	$('#people_amount').html(value)
}

function updateEndOfTheWord(text) {
	$('#people_attribute').html(text)
}

function switchUpButtonDisabling(value = false) {
	$('.btn-count-up').prop('disabled', value)
}

$(document).ready(function () {
	let total = 0
	let isUpButtonDisabled = false

	$('.btn-count-down').on('click', function (e) {
		const inputId = $(this).attr('inputId');
		const prevVal = Number($(`#${inputId}`).val())
		if (total <= 0 || prevVal <= 0) {
			return
		}
		if (isUpButtonDisabled) {
			switchUpButtonDisabling(false)
			isUpButtonDisabled = false
		}
		$(`#${inputId}`).val(prevVal - 1)
		total--
		setAmountOfPeople(total)

		// перший спосіб оновити закінчення
		updateEndOfTheWord(getPeopleAttribute(total))
	})

	$('.btn-count-up').on('click', function (e) {
		const inputId = $(this).attr('inputId');
		const prevVal = Number($(`#${inputId}`).val())


		$(`#${inputId}`).val(prevVal + 1)
		total++
		setAmountOfPeople(total)

		// перший спосіб оновити закінчення
		updateEndOfTheWord(getPeopleAttribute(total))

		if (total >= 4 && !isUpButtonDisabled) {
			isUpButtonDisabled = true
			switchUpButtonDisabling(true)
			return
		}
	})

	// другий спосіб оновити закінчення
	// $('#people_amount').on('DOMSubtreeModified', function(e){
	// 	updateEndOfTheWord(getPeopleAttribute(Number($('#people_amount').text())))
	// });
});
