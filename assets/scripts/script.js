const form = document.getElementById("registrationForm");
const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit_button");
const errorName = document.querySelector(".error_msgFirstName");
const errorLastName = document.querySelector(".error_msgLastName");
const errorEmail = document.querySelector(".error_msgEmail");
const errorPassword = document.querySelector(".error_msgPassword");

const validateInput = (input, validateFn, errorEl) => {
	input.addEventListener("focus", validateFn);
	input.addEventListener("input", () => {
		if (validateFn()) {
			errorEl.innerHTML = "";
		}
	});
};

const validateFirstName = () => {
	const firstName = firstNameInput.value.trim();
	if (!firstName || firstName.length < 4 || !/^[A-Z]/.test(firstName)) {
		errorName.innerHTML = `First name is required`;
		return false;
	}
	return true;
};

const validateLastName = () => {
	const lastName = lastNameInput.value.trim();
	if (!lastName || lastName.length < 4 || !/^[A-Z]/.test(lastName)) {
		errorLastName.innerHTML = "Last name is required";
		return false;
	}
	return true;
};

const validateEmail = () => {
	const email = emailInput.value.trim();
	const pattern_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const isValidEmail = pattern_email.test(email);
	if (!isValidEmail) {
		errorEmail.innerHTML = "Provide a valid email";
		return false;
	}
	return true;
};

const validatePassword = () => {
	const password = passwordInput.value.trim();
	const pattern_password = /^(?=.*\d)(?=.*[A-Z])(.{4,50})$/;
	const isValidPassword = pattern_password.test(password);
	if (!isValidPassword) {
		errorPassword.innerHTML = "Password is not valid";
		return false;
	}
	return true;
};

const clearInputFields = () => {
	firstNameInput.value = "";
	lastNameInput.value = "";
	emailInput.value = "";
	passwordInput.value = "";
};

const logCollectedInformation = () => {
	console.log({
		firstName: firstNameInput.value,
		lastName: lastNameInput.value,
		email: emailInput.value,
		password: passwordInput.value,
	});
};

const handleFormSubmit = (event) => {
	event.preventDefault();

	if (
		validateFirstName() &&
		validateLastName() &&
		validateEmail() &&
		validatePassword()
	) {
		logCollectedInformation();
		clearInputFields();
	}
};

validateInput(firstNameInput, validateFirstName, errorName);
validateInput(lastNameInput, validateLastName, errorLastName);
validateInput(emailInput, validateEmail, errorEmail);
validateInput(passwordInput, validatePassword, errorPassword);
submitButton.addEventListener("click", handleFormSubmit);
