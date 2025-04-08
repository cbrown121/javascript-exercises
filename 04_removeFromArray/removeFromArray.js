// loop through the array
// compare numbers in the array to the specified number
// if specified number matches the number in the array, remove it

// Dealing with an unknown amount of arguments
const removeFromArray = function(arr, ...args) {
    // filter the array
    // if the object at the current index pass the filter, add it to the new filter
    const newArray = arr.filter(item => !args.includes(item));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
