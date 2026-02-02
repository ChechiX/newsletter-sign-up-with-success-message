const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const formButton = document.getElementById('formButton');
const errorMessage = document.getElementById('errorMessage');

const emailRules = /^\S+@\S+$/;

const handleSubmit = (e) => {
  e.preventDefault();

  const data = {};
  const field = e.target.querySelector('input');

  data[field.name] = field.value;

  if (!emailRules.test(data.email)) {
    emailInput.classList.add('input__error');
    errorMessage.classList.add('error__message--active');
    return;
  } else {
    emailInput.classList.remove('input__error');
    errorMessage.classList.remove('error__message--active');
  }
};

form.addEventListener('submit', handleSubmit);

emailInput.addEventListener('focus', () => {
  formButton.classList.add('gradient');
});

emailInput.addEventListener('input', () => {
  if (emailRules.test(emailInput.value)) {
    emailInput.classList.remove('input__error');
    errorMessage.classList.remove('error__message--active');
  }
});

document.addEventListener('click', (e) => {
  if (e.target !== emailInput) {
    formButton.classList.remove('gradient');
  }
});
