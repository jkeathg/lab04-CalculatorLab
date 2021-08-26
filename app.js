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



// start of remainder

import {remainder} from './calculator.js';

const remainderNumber1 = document.getElementById('val9');
const remainderNumber2 = document.getElementById('val10');
const remainderButton = document.getElementById('remainder-button');
const remainderAnswer = document.getElementById('remainder-answer');


remainderButton.addEventListener('click', () => {
    const num1 = remainderNumber1.value;
    const num2 = remainderNumber2.value;
    const remainderVar = remainder(num1, num2);

    remainderAnswer.textContent = remainderVar;
})
// start of integer

import {integer} from './calculator.js';

const integerNumber1 = document.getElementById('val11');
const integerNumber2 = document.getElementById('val12');
const integerButton = document.getElementById('integer-button');
const integerAnswer = document.getElementById('integer-answer');


integerButton.addEventListener('click', () => {
    const num1 = integerNumber1.value;
    const num2 = integerNumber2.value;
    const integerVar = integer(num1, num2);

    integerAnswer.textContent = integerVar;
});


// start of integer

import {pythag} from './calculator.js';

const pythagNumber1 = document.getElementById('val13');
const pythagNumber2 = document.getElementById('val14');
const pythagButton = document.getElementById('pythag-button');
const pythagAnswer = document.getElementById('pythag-answer');


pythagButton.addEventListener('click', () => {
    const num1 = pythagNumber1.value;
    const num2 = pythagNumber2.value;
    const pythagVar = pythag(num1, num2);

    pythagAnswer.textContent = pythagVar;
});
