`use strict`

// Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
const array = [9, 9, 9];
const plusOne = digits => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits.join('');
        }
    }
    digits.unshift(1);
    return digits.join('');
};
console.log(plusOne(array));


const plusOne2 = digitsArray => {
    let i = digitsArray.length - 1
    while (i >= 0) {
        if (digitsArray[i] + 1 < 10) {
            digitsArray[i] += 1
            break
        } else if (!digitsArray[i - 1]) {
            digitsArray[i] = 0
            digitsArray.unshift(1)
            break
        } else {
            digitsArray[i] = 0
            i--
        }
        console.log(`${digitsArray}`)
    }
    return digitsArray.join("")
}
console.log(plusOne2(array));