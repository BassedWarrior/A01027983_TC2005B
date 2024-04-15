// Escribe una función que tome una lista de cadena de textos y devuelva una 
// nueva lista con todas las cadenas en orden alfabético


function ordena_cadenas(arr) {
    ordered_arr = arr.map(str => str.toLowerCase()).sort();
    for (let i = 0; i < arr.length; i++) {
        ordered_arr[ordered_arr.indexOf(arr[i].toLowerCase())] = arr[i];
    }

    return ordered_arr;
}


function test_ordena_cadenas(arr, expected_arr) {
    let result_arr = ordena_cadenas(arr);

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


test_ordena_cadenas(["Hola", "adios", "hola", "adios", "hola", "adios"], ["adios", "adios", "adios", "Hola", "hola", "hola"]);
test_ordena_cadenas(["uehtoas", "abc", "a"], ["a", "abc", "uehtoas"]);
test_ordena_cadenas(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e"]);
