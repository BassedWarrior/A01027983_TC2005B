// Escribe una función que implemente el algoritmo de bubble sort para ordenar 
// una lista de números.

"use strict";

function bubble_sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = tmp;
            }
        }
    }

    return array;
}


function test_bubble_sort(unordered_arr, ordered_arr) {
    let result_arr = bubble_sort(unordered_arr);

    let correct = true;
    for (let i = 0; i < ordered_arr.length; i++) {
        if (ordered_arr[i] != result_arr[i]) {
            correct = false;
            break;
        }
    }

    if (correct) {
        console.log("Prueba con", unordered_arr, "exitosa!");
    } else {
        console.log("Prueba con", unordered_arr, "fallida!");
    }

    console.log("Expected: ", ordered_arr);
    console.log("Got: ", result_arr);
}



test_bubble_sort([3, 2, 4, 5, 1], [1, 2, 3, 4, 5])
test_bubble_sort([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
test_bubble_sort([2, 1, 1, 5, 5, 4, 3], [1, 1, 2, 3, 4, 5, 5])
test_bubble_sort([9, 8, 6, 7, 2, 1, 1, 5, 5, 4, 3], [1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9])
