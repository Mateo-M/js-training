'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

/*function jadenCase(params) {
    params.toLowerCase().split(' ').map(function (params) {
        return (params.charAt(0).toUpperCase())
    }).join(' ')
}*/
function jadenCase(params) {
    let words = params.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1, words[i].length - 1);
    }
    return words.join(" ");
}
    //* Begin of tests
    const assert = require('assert')

    assert.strictEqual(jadenCase('Salut tout le monde'), 'Salut Tout Le Monde')

/*assert.fail('You must write your own tests')*/
// End of tests */
