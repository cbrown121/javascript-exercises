const reverseString = function(string) {
    // store reverse string
    let fullReverse = "";

    for (let index = string.length - 1; index > -1; index--) {
        fullReverse += string[index];
    }
    return fullReverse;
};

// Do not edit below this line
module.exports = reverseString;
