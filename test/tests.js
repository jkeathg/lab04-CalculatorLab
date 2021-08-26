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


// divide

import {divide} from '../calculator.js';

test('divide two numbers', (expect) =>{
    const e = 8;
    const f = 2;
    const expected4 = 4;

    const actual4 = divide(e, f);

    expect.equal(actual4, expected4);
});


// test remainder function


import {remainder} from '../calculator.js';

test('get remainder of', (expect) => {
    const g = 10;
    const h = 3;
    const expected5 = 1;

    const actual5 = remainder(g, h);

    expect.equal(actual5, expected5);
})

// test interger function


import {integer} from '../calculator.js';

test('get integer of', (expect) => {
    const i = 10;
    const j = 3;
    const expected6 = 3;

    const actual6 = integer(i, j);

    expect.equal(actual6, expected6);
})


// test pythagorean theorem function


import {pythag} from '../calculator.js';

test('get pythagorean therom of', (expect) => {
    const k = 3;
    const l = 4;
    const expected7 = 25;

    const actual7 = pythag(k, l);

    expect.equal(actual7, expected7);
})