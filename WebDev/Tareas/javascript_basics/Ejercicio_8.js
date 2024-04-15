// Escribe una función que quite los elementos duplicados de un arreglo y 
// regrese una lista con los elementos que quedan. Por ejemplo: 
// quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]

function quita_duplicados(arr) {
    return Array.from(new Set(arr));
}


function test_quita_duplicados(arr, expected_arr) {
    let result_arr = quita_duplicados(arr);

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


test_quita_duplicados([1, 0, 1, 1, 0, 0], [1, 0]);
test_quita_duplicados([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
test_quita_duplicados([1, 1, 1, 1, 1], [1]);
