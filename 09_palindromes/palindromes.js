// word needs to read the same front and back
// remove punctuation
// make word consistently lowercase

const palindromes = function (string) {
    let str = string.toLowerCase();
    str = str.replace(/[^a-zA-Z0-9]/g, '');

    let reverseStr = str.split('').reverse().join('');

    console.log(str);
    console.log(reverseStr);

    if (reverseStr === str) {
        return true;
    }

    return false;
};

console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
