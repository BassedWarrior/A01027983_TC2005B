// Escribe una función que tome una lista de números y devuelva una nueva 
// lista con todos los números en orden descendente.


// Using the bubble_sort function from Ejercicio_2.js...but reversed hehe
function rock_sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                let tmp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = tmp;
            }
        }
    }

    return array;
}


function test_rock_sort(arr, expected_arr) {
    let result_arr = rock_sort(arr);

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


test_rock_sort([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
test_rock_sort([1, 1, 1, 2, 2], [2, 2, 1, 1, 1]);
test_rock_sort([1, 2, 3, 4, 6, 6], [6, 6, 4, 3, 2, 1]);
