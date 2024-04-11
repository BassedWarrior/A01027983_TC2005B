// Escribe una función que reciba una cadena de texto y regrese una nueva con 
// la primer letra de cada palabra en mayúscula.

"use strict";


function all_german_nouns(str) {
    if (!str) {
        return str;
    } 

    let german_nouns_str = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] == " ") {
            german_nouns_str = german_nouns_str.slice(0) 
                + str[i].toUpperCase();
        } else {
            german_nouns_str = german_nouns_str.slice(0) + str[i];
        }
    }

    return german_nouns_str;
}


function test_german_nouns_str(test_str, expected_str) {
    let result_str = all_german_nouns(test_str);

    if (result_str == expected_str) {
        console.log("Prueba con", test_str, "exitosa!");
    } else {
        console.log("Prueba con", test_str, "fallida!");
    }

    console.log("Expected: ", expected_str);
    console.log("Got: ", result_str);
}


test_german_nouns_str(" ", " ");
test_german_nouns_str(". a", ". A");
test_german_nouns_str("abece", "Abece");
test_german_nouns_str("Lorem ipsum sirid amet.uhetoanss", "Lorem Ipsum Sirid Amet.uhetoanss");
test_german_nouns_str("", "");
