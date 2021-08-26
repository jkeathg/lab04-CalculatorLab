// IMPORT MODULES under test here:
// import { add } from '../calculator.js';

import {add} from '../calculator.js';

const test = QUnit.test;



// name your test by what it is testing
test('add two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 1;
    const y = 3;
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x,y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


import {multiply} from '../calculator.js'

test('multiply two numbers', (expect) => {
    const a = 2;
    const b = 4;
    const expected2 = 8;


    const actual2 = multiply(a,b);

    expect.equal(actual2, expected2);

});


//subtract

import {subtract} from '../calculator.js';

test('subtract two numbers', (expect) => {
    const c = 4;
    const d = 2;
    const expected3 = 2;


    const actual3 = subtract(c,d);

    expect.equal(actual3, expected3);

});
