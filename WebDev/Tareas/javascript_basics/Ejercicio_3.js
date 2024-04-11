// Escribe dos funciones: la primera que invierta un arreglo de números y 
// regrese un nuevo arreglo con el resultado; la segunda que modifique el 
// mismo arreglo que se pasa como argumento. No se permite usar la función 
// integrada 'reverse'.

"use strict";


function new_reversed(arr) {
    let new_arr = [];
    for (let num of arr) {
        new_arr.unshift(num)
    }

    return new_arr;
}

function same_reversed(arr) {
    const length = arr.length;
    for (let i = 0; i < length / 2; i++) {
        let tmp = arr[i];
        arr[i] = arr[length - i - 1];
        arr[length - i - 1] = tmp;
    }
}


function test_new_reversed(arr, expected_arr) {
    let result_arr = new_reversed(arr);

    let correct = true;
    for (let i = 0; i < expected_arr.length; i++) {
        if (expected_arr[i] != result_arr[i]) {
            correct = false;
            break;
        }
    }

    if (correct) {
        console.log("Prueba con", arr, "exitosa!");
    } else {
        console.log("Prueba con", arr, "fallida!");
    }

    console.log("Expected: ", expected_arr);
    console.log("Got: ", result_arr);
}

function test_same_reversed(arr, expected_arr) {
    same_reversed(arr);

    let correct = true;
    for (let i = 0; i < expected_arr.length; i++) {
        if (expected_arr[i] != arr[i]) {
            correct = false;
            break;
        }
    }

    if (correct) {
        console.log("Prueba con", arr, "exitosa!");
    } else {
        console.log("Prueba con", arr, "fallida!");
    }

    console.log("Expected: ", expected_arr);
    console.log("Got: ", arr);
}


test_new_reversed([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
test_new_reversed([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]);

test_same_reversed([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
test_same_reversed([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]);
