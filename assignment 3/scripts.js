// ES6+ Import and Modules with aliases
import { add as funcAdd, sub as funcSub, mul as funcMul, div as funcDiv } from './calculator.js';

// using Jquery
$(document).ready(function() {
    
    // Selecting Elements using JQuery
    const $num1 = $('#num1');
    const $num2 = $('#num2');
    const $operator = $('#symbol');
    const $result = $('#result');

    // Button Event Listeners for Operations
    $('#btn_add').on('click', () => $operator.val('+'));
    $('#btn_sub').on('click', () => $operator.val('-'));
    $('#btn_mul').on('click', () => $operator.val('*'));
    $('#btn_div').on('click', () => $operator.val('/'));

    // Result Button Logic
    $('#btn_res').on('click', function() {
        // Parse inputs to Integers
        let x = parseInt($num1.val());
        let y = parseInt($num2.val());
        let opValue = $operator.val();

        // Validation Logic from guidelines (adapted for jQuery variables)
        // Checks if x is invalid (NaN) AND x is not exactly number 0
        if (!x && x !== 0) {
            alert("Plz enter num1");
            return;
        }

        if (!y && y !== 0) {
            alert("Plz enter num2");
            return;
        }

        if (!opValue) {
            alert("Please select operation");
            return;
        }

        // Switch Algorithm
        let finalResult;
        switch (opValue) {
            case '+':
                finalResult = funcAdd(x, y);
                break;
            case '-':
                finalResult = funcSub(x, y);
                break;
            case '*':
                finalResult = funcMul(x, y);
                break;
            case '/':
                finalResult = funcDiv(x, y);
                break;
        }

        // Display Result
        $result.val(finalResult);
    });
});