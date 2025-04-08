const sumAll = function(num1, num2) {
    
    let smallerNum = 0;
    let biggerNum = 0;
    let finalsum = 0;

    if (!Number.isInteger(num1)|| !Number.isInteger(num2)) {
        return "ERROR";
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (num1 > num2) {
        biggerNum = num1;
        smallerNum = num2;
    } else {
        smallerNum = num1;
        biggerNum = num2;
    }

    // continue looping until reaching the bigger number
    for (let index = smallerNum; index < biggerNum; index++) {
        finalsum += smallerNum;
        smallerNum++;
    }
    finalsum += biggerNum;
    return finalsum;
};

console.log(sumAll(2, 4));

// Do not edit below this line
module.exports = sumAll;




// sumAll(1, 4) returns the sum of 1 + 2 + 3 + 4 which is 10
