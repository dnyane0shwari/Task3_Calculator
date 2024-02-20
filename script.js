let currentInput = '';
let operator = '';
let currentResult = 0;
const displayElement = document.getElementById('display');

// To clear the display
function clearDisplay() 
{
    currentInput = '';
    operator = '';
    currentResult = 0;
    updateDisplay();
}

//Appending The Number
function appendNumber(number)
{
    currentInput += number;
    updateDisplay();
}


function appendDecimal()
{
    if (!currentInput.includes('.'))
    {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperator(op)
 {
    if (currentInput !== '')
    {
        operator = op;
        currentResult = parseFloat(currentInput);
        currentInput = '';
        updateDisplay();
    }
}

//Calculations 
function calculate()
 {
    if (operator !== '' && currentInput !== '')
     {
        switch (operator)
        {
            case '+':
                currentResult += parseFloat(currentInput);
                break;
            case '-':
                currentResult -= parseFloat(currentInput);
                break;
            case '*':
                currentResult *= parseFloat(currentInput);
                break;
            case '/':
                currentResult /= parseFloat(currentInput);
                break;
        }
        currentInput = '';
        operator = '';
        updateDisplay();
    }
}

//Updates the display 
function updateDisplay()
{
    displayElement.textContent = currentInput !== '' ? currentInput : currentResult;
    //Using ternary Operator
}

