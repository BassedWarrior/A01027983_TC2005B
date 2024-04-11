// Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por 
// ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 
// 'J4v45c1pt 35 d1v3rt1d0'.

"use strict";


function to_hacker_speak(str) {
    let hacker_subs = ["o", "i", "z", "e", "a", "s"];
    let hacker_str = "";
    for (let i = 0; i < str.length; i++) {
        let j = hacker_subs.indexOf(str[i].toLowerCase());
        if (j != -1) {
            hacker_str = hacker_str.slice(0) + j;  // js implicit conversion
        } else {
            hacker_str = hacker_str.slice(0) + str[i];
        }
    }

    return hacker_str;
}


function test_to_hacker_speak(test_str, expected_str) {
    let result_str = to_hacker_speak(test_str);

    if (result_str == expected_str) {
        console.log("Prueba con", test_str, "exitosa!");
    } else {
        console.log("Prueba con", test_str, "fallida!");
    }

    console.log("Expected: ", expected_str);
    console.log("Got: ", result_str);
}


test_to_hacker_speak("Javascript is fun!", "J4v45cr1pt 15 fun!");
test_to_hacker_speak("Javascript es divertido", "J4v45cr1pt 35 d1v3rt1d0");
test_to_hacker_speak("Zootopia tiene una zeta", "200t0p14 t13n3 un4 23t4");
