//To get the output display elements 
const screenDisplay = document.querySelector('.output') //result

//Create an array for the operators
const allOperators = ['+', '-', 'X', '÷', '%', 'C', '=']
// const add = document.getElementById('addition').innerText


// To get all elements in the cal-inputs div
const numberButtons = document.querySelector('.cal-inputs').children// console.log(numberButtons)

const clearButton = document.getElementById('backspace')
// console.log(clearButton)


//declare empty variables for the inputs/output
let screenResult = '';
let userValue1 = '';
let userValue2 = '';
let symbol = '';



function calculate () {

    // To convert the string back to a number and also a decimal point
    userValue1 = parseFloat(userValue1);
    userValue2 = parseFloat(userValue2);

    // Calculate 
    if (symbol === '+')  {
       return screenResult = userValue1 + userValue2;
    }
    else if (symbol === '-')  {
        return screenResult = userValue1 - userValue2;
    }
    else if (symbol === 'X') {
        return screenResult = userValue1 * userValue2;
    }
    else if (symbol === '%') {
        return screenResult = userValue1 % userValue2;
    }
    else if (symbol === '÷') {
        return screenResult = userValue1 / userValue2;
    }
    
    screenDisplay.innerText = screenResult;
  

}

function backspace(){
    let len=document.getElementById('backspace');
    let inner=len.innerHTML;
    len="";
    inner=inner.split("");
    inner=inner.splice(inner.length-1,1)
    inner=inner.join("");
    len.value=inner;
}


// To allow all buttons to be clicked (loop through all buttons)
for (let button of numberButtons) {
    button.addEventListener('click', () => {
        // const buttonValue = button.innerText
        const { innerText: buttonValue } = button
        //To check if the symbols are operator or not
        const symbolIsOperator = allOperators.toString().includes(buttonValue)

        // if there is a value1 and operator with value2, then calculate
        if (userValue1 && symbolIsOperator ) {
            if (userValue2 && calculate()) {
            }
            symbol = buttonValue
        }
        // if there is no operator before the first value
        else if (!symbol) {
             userValue1 += buttonValue
        }
        // if there is the users click on the symbol the next value is the second value
        else if (symbol) {
            userValue2 += buttonValue
        }

        // Not to display the equal sign
        if (buttonValue !== '=') {
            screenDisplay.innerText += buttonValue
        }

        //To clear the screen display 
        if (buttonValue === 'C') {
            userValue1 = '' 
            userValue2 = ''
            symbol = ''
            return screenDisplay.innerText = ''
        }

        //To delete user value one at a time 
        if (buttonValue === clearButton.value) {
            screenDisplay.innerText = screenDisplay.innerText.slice(0, -1)
            // console.log('hi')
        }

     
    });
}
  
// += allows two numbers to be clicked not one
// concatenate strings


// function clearScreen() {
//     document.getElementById("display").value = "";
// }
// clearScreen();

