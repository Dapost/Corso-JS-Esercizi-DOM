//==== SHOW PASSWORD
const showPasswordCheckbox = document.querySelector('#showPassword');

showPasswordCheckbox.addEventListener('change', (event) => {
    const checked = event.target.checked;
    toggleShowPassword(checked)
})

function toggleShowPassword(checked) {
    const inputPassword = document.querySelector('#password');

    checked ?
        inputPassword.type = 'text' :
        inputPassword.type = 'password'
}

//=============


//==== SIDENAV

const sidenav = document.querySelector('#sidenav');
const backdrop = document.querySelector('#backdrop');
const sidenavOpenButton = document.querySelector('#sidenavOpenButton');
const sidenavCloseButton = document.querySelector('#sidenavCloseButton');


sidenavOpenButton.addEventListener('click', () => {
    sidenav.classList.add('open');
    backdrop.classList.add('open');
})

sidenavCloseButton.addEventListener('click', () => {
    sidenav.classList.remove('open');
    backdrop.classList.remove('open');
})

backdrop.addEventListener('click', () => {
    sidenav.classList.remove('open');
    backdrop.classList.remove('open');
})


//=====


//==== MODAL

function openModal(message) {
    const modal = document.querySelector('#modal');
    const backdrop = document.querySelector('#backdrop');

    backdrop.classList.add('open');
    modal.style.display = 'block';
    const modalMessage = modal.querySelector('#modalMessage')
    modalMessage.innerText = message;

    const closeModalButton = document.querySelector('#closeModalButton')
    closeModalButton.addEventListener('click', closeModal)
    backdrop.addEventListener('click', closeModal)
}

function closeModal() {
    const modal = document.querySelector('#modal');
    const backdrop = document.querySelector('#backdrop');

    backdrop.classList.remove('open')
    modal.style.display = 'none';

    closeModalButton.removeEventListener('click', closeModal)
    backdrop.removeEventListener('click', closeModal)
}

//=======



//===== FORM VALIDATION

const form = {
    inputEmail: document.querySelector('#email'),
    inputPassword: document.querySelector('#password')
}
const submitButton = document.querySelector('#signin');


form.inputEmail.addEventListener('keyup', (event) => validateInput(event.target));
form.inputPassword.addEventListener('keyup', (event) => validateInput(event.target));

submitButton.addEventListener('click', () => {
    const isEmailValid = validateInput(form.inputEmail)
    const isPasswordValid = validateInput(form.inputPassword)
    const isValidForm = isEmailValid && isPasswordValid;

    if (isValidForm) {
        openModal('Autenticazione avvenuta con successo')
    } else {
        openModal("Errore durante l'autenticazione. Compilare tutti i campi richiesti ")
    }

})


function validateInput(input) {
    const isValid = !!input.value;
    const feedback = input.parentNode.querySelector('.invalid-feedback')

    feedback.classList.toggle('d-block', !isValid);

    return isValid
}

//=============