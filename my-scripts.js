const display = document.querySelector(".display");
display.textContent = "0";

function operate (num1, num2, operand) {
    let ans = 0;
    if (operand === '+')
        ans = num1 + num2;
    else if (operand === '-')
        ans = num1 - num2;
    else if (operand === '*')
        ans = num1 * num2;
    else if (operand === '/')
        ans = num1/num2;

    if (ans % 1 !== 0) //meaning a decimal
    ans = ans.toFixed(3);

    display.textContent = ans;
    number1 = Number(ans);
    number2 = 0;
    tempNumber = 0;
    operator = "+";
}

var number1 = 0, number2 = 0;
var tempNumber = 0;
var operator = "+";

//creating the All Clear button
const AC = document.querySelector('#clear');
AC.addEventListener("mousedown", () => {
    number1 = 0;
    number2 = 0;
    tempNumber = 0;
    operator = "+";
    display.textContent = "0";
});

// selecting a number (and displaying it)
const digits = document.querySelectorAll(".non-zero div, .zero div");//it is not an array ||||| for now the decimal is not working
digits.forEach((digit) => {
    digit.addEventListener("mousedown", () =>{
        tempNumber = tempNumber*10 + Number(digit.textContent);
        display.textContent = `${tempNumber}`;
        console.log(tempNumber);
    })
});

//selecting the operand to perform the operation
const operations = document.querySelectorAll(".operands div");
operations.forEach ((operation) => {
    operation.addEventListener("mousedown", () => {
        //first update the number1
        if (number1 === 0) {
            number1 = tempNumber;
            tempNumber = 0;
            operator = operation.textContent;
        } else {
            //since number1 != 0 meaning the variable is added
            number2 = tempNumber;
            tempNumber = 0;
            if (operation.textContent === '=') {
                operate(number1, number2, operator);
            } else {
                operate(number1, number2, operator);
                operator = operation.textContent;
            }
        }

    });
});

// //making a function to call the operator
// function invoke_calculation () {
//     if (isOperatorSelected === false)
//         number1 = number;
//     else {
//         number2 = number;
//     }
//     // calling the operate function
//     let ans = operate (number1, number2, "+");
//     display.textContent = Number(ans);
// }
// invoke_calculation();