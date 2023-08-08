import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const key = 'feedback-form-state';

form.addEventListener('input', throttle(inputValue, 500));
form.addEventListener('submit', formSubmit);

let dataForm = JSON.parse(localStorage.getItem(key)) || {};
const { email, message } = form.elements;
reload();

function inputValue(evt) {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(key, JSON.stringify(dataForm));
    }

function formSubmit(evt) {
    evt.preventDefault();
    console.log({ email: email.value, message: message.value });

    if (email.value === '' || message.value === '') {
        return alert(`All fields must be filled!`);
    }

    localStorage.removeItem(key);
    dataForm = {};
    evt.currentTarget.reset();
}

function reload() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}