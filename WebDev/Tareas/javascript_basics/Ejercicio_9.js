// Escribe una función que reciba como parámetro una lista de cadenas de 
// texto, y regrese la longitud de la cadena más corta.

function longitud_cadena_mas_corta(arr) {
    let min = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < min) {
            min = arr[i].length;
        }
    }
    return min;
}

function test_longitud_cadena_mas_corta(arr, expected) {
    let result = longitud_cadena_mas_corta(arr);

    if (result == expected) {
        console.log("Prueba con", arr, "exitosa!");
    } else {
        console.log("Prueba con", arr, "fallida!");
    }

    console.log("Expected: ", expected);
    console.log("Got: ", result);
}

test_longitud_cadena_mas_corta(["hola", "adios", "hola", "adios", "hola", "adios"], 4);
test_longitud_cadena_mas_corta(["uehtoas", "abc", "a"], 1);
test_longitud_cadena_mas_corta(["a", "b", "c", "d", "e"], 1);
