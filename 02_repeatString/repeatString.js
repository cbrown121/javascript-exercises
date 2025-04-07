const repeatString = function(string, num) {

    let fullString = "";

        // num should never be less than 0
        if (num < 0) {
            return "ERROR";
        }

        for (let index = 0; index < num; index++) {
            // Take a string and repeat it num amount of times
            fullString += string;
        }
        return fullString;
};

// Do not edit below this line
module.exports = repeatString;
