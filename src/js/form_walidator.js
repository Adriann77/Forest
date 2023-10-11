const imie = document.querySelector('#name');
const email = document.querySelector('#email');
const formBtn = document.querySelector('.form__btn');
const message = document.querySelector('#message');
const error = document.querySelectorAll('.error');
const popup = document.querySelector('.popup');

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
		input.nextElementSibling.style.color = 'red';
		input.nextElementSibling.textContent = 'brak wiadomosci';
        errorCount++
	} else {
		if (input.value.length < 30) {
			input.nextElementSibling.textContent = 'Twoja wiadomosc jest za krotka!';
            errorCount++
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

const showPopup = () => {
	if (errorCount === 0) {
		popup.classList.add('show-popup');
		setTimeout(() => {
			popup.classList.remove('show-popup');
		}, 2000);
		clearInputs();
	}
};

const deleteError = input => {
	input.nextElementSibling.style.color = 'transparent';
};

const clearInputs = () => {
	[imie, email, message].forEach(el => (el.value = ''));
};

formBtn.addEventListener('click', () => {
	errorCount = 0;
	checkName(imie);
	validateEmail(email);
	checkMessage(message);
	showPopup();
});
