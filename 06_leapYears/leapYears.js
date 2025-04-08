const leapYears = function(year) {
    // Leap years are divisible by 4
    // if the year is year is divisible by 100 then it is not a leap year
    // if the year is divisible by 100 and 400 then it is a leap year

    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else if (year % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;


/*
Leap years are years divisible by four (like 1984 and 2004). 
However, years divisible by 100 are not leap years (such as 1800 and 1900) 
unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years)
*/