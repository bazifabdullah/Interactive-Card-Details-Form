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