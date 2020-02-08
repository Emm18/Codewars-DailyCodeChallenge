// https://www.codewars.com/kata/52aae14aa7fd03d57400058f

// Write a function that takes an array of values and moves all elements that are zero to the 
//end of the array, otherwise preserving the order of the array. The zero elements must also 
//maintain the order in which they occurred.

// For example, the following array

// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

// is transformed into

// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

// Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

// You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any 
//Array.prototype or Object.prototype methods.

function removeZeros(array) {
    let zeroes = 0;

    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] === "0" || array[i] === 0) {
            zeroes += 1;
        }
    }

    for (let j = 0; j <= zeroes - 1; j++) {
        for (let k = 0; k <= array.length - 1; k++) {
            if (array[k] === "0" || array[k] === 0) {

                for (let l = k; l <= array.length - 2; l++) {

                    let temp1 = array[l];
                    array[l] = array[l + 1];
                    array[l + 1] = temp1;
                }
                break;
            }
        }
    }

    return array;
}
