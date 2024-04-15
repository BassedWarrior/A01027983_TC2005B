// Escribe una función que revise si una cadena de texto es un palíndromo o no.

function es_palindromo(str) {
    let reversed_str = str.split("").reverse().join("");
    return str == reversed_str;
}


function test_es_palindromo(str, expected) {
    let result = es_palindromo(str);

    if (result == expected) {
        console.log("Prueba con", str, "exitosa!");
    } else {
        console.log("Prueba con", str, "fallida!");
    }

    console.log("Expected: ", expected);
    console.log("Got: ", result);
}


test_es_palindromo("hola", false);
test_es_palindromo("oso", true);
test_es_palindromo("anita lava la tina", false);  // Hehe
