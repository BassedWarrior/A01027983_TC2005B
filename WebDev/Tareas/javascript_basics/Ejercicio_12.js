// Escribe una función que tome una lista de números y devuelva la mediana y 
// la moda.


function mediana_y_moda(arr) {
    let sorted = arr.sort();
    let median = arr.length % 2 == 0 ? (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2 : arr[Math.floor(arr.length / 2)];
    let mode = arr[0];
    let mode_repetitions = 1;

    while (arr.length != 0) {
        let test_mode = arr[0];
        let test_mode_repetitions = arr.filter((x) => x == test_mode).length;
        if (test_mode_repetitions > mode_repetitions) {
            mode = test_mode;
            mode_repetitions = test_mode_repetitions;
        }

        arr = arr.filter((x) => x != test_mode);
    }

    return [median, mode];
}


function test_mediana_y_moda(arr, expected_arr) {
    let result_arr = mediana_y_moda(arr);

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


test_mediana_y_moda([1, 2, 3, 4, 5], [3, 1]);
test_mediana_y_moda([1, 1, 1, 2, 2], [1, 1]);
test_mediana_y_moda([1, 2, 3, 4, 6, 6], [3.5, 6]);
