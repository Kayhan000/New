let textbox = document.getElementById('textbox');
let expression = '';

function appendTotextbox(value) {
    expression += value;
    textbox.value = expression;
}

function clearDisplay() {
    expression = '';
    textbox.value = '';
}

function calculate() {
    try {
        let result = eval(expression);
        textbox.value = result;
        expression = result.toString();
    } catch (error) {
        textbox.value = 'Error';
        expression = '';
    }
}

