// import functions
import { add } from "./calculator.js";
// reference needed DOM elements
const addNumber1 = document.getElementById('val1');
const addNumber2 = document.getElementById('val2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

// set event listeners 
addButton.addEventListener('click',() => {


    // get user input(s)
    const num1 = Number(addNumber1.value);
    const num2 = Number(addNumber2.value);
    // do any needed work with the value(s)
    const sum = add(num1, num2);
    // update DOM to reflect new value(s)
    addAnswer.textContent = sum;
})



// for multiplication

// import function
import {multiply} from './calculator.js';


const multiplyNumber1 = document.getElementById('val3');
const multiplyNumber2 = document.getElementById('val4');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

multiplyButton.addEventListener('click', () => {


    const num3 = multiplyNumber1.value;
    const num4 = multiplyNumber2.value;

    const product = multiply(num3, num4);

    multiplyAnswer.textContent = product;
});


// for subtract

import {subtract} from './calculator.js';

const subtractNumber1 = document.getElementById('val5');
const subtractNumber2 = document.getElementById('val6');
const subtractButton = document.getElementById('subtract-button');
const subtractAnswer = document.getElementById('subtract-answer');


subtractButton.addEventListener('click', () => {
    const num5 = subtractNumber1.value;
    const num6 = subtractNumber2.value;

    const subtracted = subtract(num5, num6);

    subtractAnswer.textContent = subtracted;
})

// start of divide

import {divide} from './calculator.js';

const divideNumber1 = document.getElementById('val7');
const divideNumber2 = document.getElementById('val8');
const divideButton = document.getElementById('divide-button');
const divideAnswer = document.getElementById('divide-answer');


divideButton.addEventListener('click', () => {
    const num7 = divideNumber1.value;
    const num8 = divideNumber2.value;

    const divided = divide(num7, num8);

    divideAnswer.textContent = divided;
})