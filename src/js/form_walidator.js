const imie = document.querySelector('#name');
const email = document.querySelector('#email');
const formBtn = document.querySelector('.form__btn');
const message = document.querySelector('#message');
const error = document.querySelectorAll('.error');

let errorCount = 0;

const checkName = input => {
	if (input.value === '') {
		showError(input);
	} else {
		clearError(input);
	}
};

const showError = input => {
	input.nextElementSibling.style.color = 'red';
	errorCount++;
};

const clearError = input => {
	input.nextElementSibling.style.color = 'transparent';
};

const checkMessage = input => {
	if (input.value === '') {
		showError(input);
	} else {
		if (input.value.length < 30) {
			input.nextElementSibling.textContent = 'Twoja wiadomosc jest za krotka!';
		} else {
			clearError(input);
		}
	}
};

function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	if (re.test(email.value)) {
		email.nextElementSibling.style.color = 'transparent';
	} else {
		showError(email);
		if (email.value !== '') {
			email.nextElementSibling.textContent = 'Email jest nieprawidlowy';
		}
	}
}

const deleteError = input => {
	input.nextElementSibling.style.color = 'transparent';
};

formBtn.addEventListener('click', () => {
	errorCount = 0;
	checkName(imie);
	validateEmail(email);
	checkMessage(message);
});
