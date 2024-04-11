// Escribe una función que calcule el máximo común divisor de dos números.

"use strict";


// Following Wikipedia's Binary GCD algorithm 
// https://en.wikipedia.org/wiki/Greatest_common_divisor#Calculation
function gcd(a, b) {
    let d = 0;
    while (a % 2 == 0 && b % 2 == 0) {
        a /= 2;
        b /= 2;
        d++;
    }
    while (a % 2 == 0) {
        a /= 2;
    }
    while (b % 2 == 0) {
        b /= 2;
    }
    while (a != b) {
        if (a > b) {
            a -= b;
            while (a % 2 == 0) {
                a /= 2;
            }
        } else {
            b -= a;
            while (b % 2 == 0) {
                b /= 2;
            }
        }
    }
    
    return 2 ** d * a;
}


function test_gcd(a, b, expected) {
    let result = gcd(a, b);

    if (result == expected) {
        console.log("Prueba con", a, b, "exitosa!");
    } else {
        console.log("Prueba con", a, b, "fallida!");
    }

    console.log("Expected: ", expected);
    console.log("Got: ", result);
}


test_gcd(48, 18, 6);
test_gcd(17, 13, 1);
test_gcd(49, 140, 7);
