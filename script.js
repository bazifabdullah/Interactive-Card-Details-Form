const cardElements = {
    cardNumber: document.getElementById("cardNumber"),
    cardName: document.getElementById("cardName"),
    cardMonth: document.getElementById("month"),
    cardYear: document.getElementById("year"),
    cardCVC: document.getElementById("cvc"),
};

const inputElements = {
    cardNumberInput: document.getElementById("cardNumberInput"),
    cardNameInput: document.getElementById("cardNameInput"),
    cardMonthInput: document.getElementById("expMonthInput"),
    cardYearInput: document.getElementById("expYearInput"),
    cardCVCInput: document.getElementById("CVCInput"),
};

const submitButton = document.getElementById("submitButton");
const continueButton = document.getElementById("continueButton");
const formSection = document.getElementById('formSection');
const form = document.getElementById('form');
const completeState = document.getElementById('completeState');

function displayValue(e, elementKey) {
    cardElements[elementKey].innerText = format(e.target.value);
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
};

const mapping = {
    cardNumberInput: 'cardNumber',
    cardNameInput: 'cardName',
    cardMonthInput: 'cardMonth',
    cardYearInput: 'cardYear',
    cardCVCInput: 'cardCVC',
}

for (const inputKey in mapping) {
    inputElements[inputKey].addEventListener('keyup', (e) => {displayValue(e, mapping[inputKey])})
}

function handleSubmit(e) {
    e.preventDefault();
    let hasError = false;

    for(const inputKey in inputElements) {
        const inputElement = inputElements[inputKey];

        const existingErrorMessage = inputElement.parentElement.querySelector('.error_msg');
        if (existingErrorMessage) {
            existingErrorMessage.remove();
        }

        if (!inputElement.value) {
            const errorMessage = document.createElement('p');
            errorMessage.innerText = "This field can't be blank";
            errorMessage.classList.add("error_msg");
            inputElement.parentElement.appendChild(errorMessage);
            inputElement.classList.add("error_border");
            hasError = true;
        } else {
            inputElement.classList.remove("error_border");
        }
    }

    if (!hasError) {
        formSection.classList.add('hidden');
        completeState.classList.remove('hidden');
    }
}

function resetfunction() {
    formSection.classList.remove('hidden');
    completeState.classList.add('hidden');
    form.reset();
}

const cardNumberInput = inputElements['cardNumberInput'];
cardNumberInput.addEventListener('keyup', validateCardNumber);

function validateCardNumber() {
    const inputElement = cardNumberInput;
    const existingErrorMessage = inputElement.parentElement.querySelector('.error_msg');
    if (existingErrorMessage) {
        existingErrorMessage.remove();
    }

    if (/[a-zA-Z]/.test(inputElement.value)) {
        const errorMessage = document.createElement('p');
        errorMessage.innerText = "Wrong Input, Numbers Only";
        errorMessage.classList.add("error_msg");
        inputElement.parentElement.appendChild(errorMessage);
        inputElement.classList.add("error_border");
        hasError = true;
    } else {
        inputElement.classList.remove('error_border');
    }
}


submitButton.addEventListener('click', handleSubmit);
continueButton.addEventListener('click', resetfunction);