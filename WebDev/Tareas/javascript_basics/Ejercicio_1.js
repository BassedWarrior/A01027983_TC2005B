// Escribe una función que encuentre el primer caracter de una cadena de texto 
// que no se repite. Prueba tu función con "abacddbec".

"use strict";

function find_unique_chr(str) {
    let unique = "";
    let unique_characters = [];

    for (let character of str) {
        if (unique == character || unique_characters.includes(character)) {
            unique_characters = unique_characters.filter(
                    (chr) => chr != character
                );
            unique = unique_characters[0] ? unique_characters[0] : "";
        } else if (unique == "") {
            unique = character;
            unique_characters.push(character);
        } else if (!unique_characters.includes(character)) {
            unique_characters.push(character);
        }
    }

    return unique;
}


function test_find_unique(test_str, expected_result) {
    let result = find_unique_chr(test_str);

    if (result == expected_result) {
        console.log("Prueba con", test_str, "exitosa!");
    } else {
        console.log("Prueba con", test_str, "fallida!");
    }

    console.log("Expected: ", expected_result);
    console.log("Got: ", result);
}


test_find_unique("abacddbec", "e");
test_find_unique("fabacddbec", "f");
test_find_unique("abacddbeec", "");
