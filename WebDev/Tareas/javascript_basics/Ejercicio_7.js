// Escribe una función que reciba un número, y regrese una lista con todos sus 
// factores. 
// Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].
//
// Nota: Lo que se está haciendo realmente es generar una lista con los 
// divisores, no los factores de un número.

"use strict";


// Generate a list of primes from 1 to n
function generate_primes(n) {
    if (n < 2) {
        return [];
    }

    let primes = [2];
    let test_number = primes[0] + 1;
    let test_number_is_prime = true;
    while (test_number <= n) {
        test_number_is_prime = true;
        for (let prime of primes) {
            if (test_number % prime == 0) {
                test_number_is_prime = false;
                break;
            }
        }

        if (test_number_is_prime) {
            primes.push(test_number)
        }
        
        ++test_number;
    }

    return primes;
}


// This is an actual foctorization. Returns the unique list of primes whose 
// product is equal to x. The list can have repeated items.
// For example: factorize(12) = [2, 2, 3].
function factorize_recursive(x, primes, factors) {
    if (x == 1) {
        return factors;
    }

    for (let prime of primes) {
        if (x % prime == 0) {
            x /= prime;
            primes = primes.filter((p) => p <= x ** (1 / 2));
            factors.push(prime);
            return factorize_recursive(x, primes, factors); 
        }
    }

    factors.push(x);
    return factors;
}


// Wrapper function for the recursive implementation.
function factorize(x) {
    return factorize_recursive(
        x, generate_primes(Math.floor(x ** (1 / 2))), []
    );
}


// Actually get the divisors, which is what was asked (unknowingly).
function get_divisors(x) {
    if (x == 1) {
        return [1];
    }

    let factors = factorize(x);
    let divisors = [1, x];

    // An overtly complicated way of getting the divisors. A dictionary should 
    // have been used for the factors in order to simplify this.
    // But the kid wanted to do it using only arrays.
    //
    // 23:48 update: Next time...don't do this. It's not worth it.
    // Don't try to sort the divisors straight away. Just sort them afterwards.
    for (let l = 1; l <= factors.length / 2; l++) {
        for (let i = 0; i < factors.length; i++) {
            let divisor;
            let wrapped = false;
            if (i + l > factors.length) {
                let wrapped = true;
                divisor = factors.slice(i).reduce((p, f) => p * f)
                    * factors.slice(0, i + l - factors.length).reduce(
                        (p, f) => p * f, 1
                    );
            } else {
                divisor = factors.slice(i, i + l).reduce(
                    (p, f) => p * f, 1
                );
            }
            if (!divisors.includes(divisor)) {
                let complementary_divisor;
                if (wrapped) {
                    complementary_divisor = factors.slice(
                            i + l - factors.length, i
                        ).reduce((p, f) => p * f, 1);
                } else {
                    complementary_divisor = factors.slice(0, i).reduce(
                            (p, f) => p * f, 1
                        ) * factors.slice(i + l).reduce((p, f) => p * f, 1);
                }
                if (!divisors.includes(complementary_divisor)
                    && divisor != complementary_divisor
                ) {
                    if (divisor < complementary_divisor) {
                        divisors.splice(
                            divisors.length / 2, 0, 
                            divisor, complementary_divisor
                        );
                    } else {
                        divisors.splice(
                            divisors.length / 2, 0, 
                            complementary_divisor, divisor
                        );
                    }
                } else {
                    divisors.splice(divisors.length / 2, 0, divisor);
                }
            }
        }
    }

    return divisors;
}


function test_factorize(n, factors) {
    let result_factors = factorize(n);

    let correct = true;
    for (let i = 0; i < factors.length; i++) {
        if (factors[i] != result_factors[i]) {
            correct = false;
            break;
        }
    }

    if (correct) {
        console.log("Prueba con", n, "exitosa!");
    } else {
        console.log("Prueba con", n, "fallida!");
    }

    console.log("Expected: ", factors);
    console.log("Got: ", result_factors);
}


// This also tests for order, but honestly...I'm done. So just...assume they 
// are ordered. Plz and thank you. The instructions don't require the divisors 
// to be ordered.
function test_get_divisors(n, divisors) {
    let result_divisors = get_divisors(n);

    let correct = true;
    for (let i = 0; i < divisors.length; i++) {
        if (divisors[i] != result_divisors[i]) {
            correct = false;
            break;
        }
    }

    if (correct) {
        console.log("Prueba con", n, "exitosa!");
    } else {
        console.log("Prueba con", n, "fallida!");
    }

    console.log("Expected: ", divisors);
    console.log("Got: ", result_divisors);
}


test_factorize(12, [2, 2, 3]);
test_factorize(73, [73]);
test_factorize(56, [2, 2, 2, 7]);
test_factorize(225, [3, 3, 5, 5]);


test_get_divisors(12, [1, 2, 3, 4, 6, 12]);
test_get_divisors(73, [1, 73]);
test_get_divisors(56, [1, 2, 4, 7, 8, 14, 28, 56]);
test_get_divisors(225, [1, 3, 5, 9, 15, 25, 45, 75, 225]);
