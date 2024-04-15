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
            x %= prime;
            primes = primes.filter((p) => p <= x ** (1 / 2));
            return factorize_recursive(x, primes, factors.push(prime)); 
        }
    }
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


}
