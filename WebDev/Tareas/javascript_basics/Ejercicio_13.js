// Escribe una función que tome una lista de cadenas de texto y devuelva la 
// cadena más frecuente. 


function cadena_mas_frecuente(arr) {
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

    return mode;
}


function test_cadena_mas_frecuente(arr, expected) {
    let result = cadena_mas_frecuente(arr);

    if (result == expected) {
        console.log("Prueba con", arr, "exitosa!");
    } else {
        console.log("Prueba con", arr, "fallida!");
    }

    console.log("Expected: ", expected);
    console.log("Got: ", result);
}


test_cadena_mas_frecuente(["hola", "adios", "hola", "adios", "hola", "adios"], "hola");
test_cadena_mas_frecuente(["uehtoas", "a", "abc", "uehtoas", "uehtoas", "abc", "a"], "uehtoas");
test_cadena_mas_frecuente(["a", "e", "a", "e", "e"], "e");
