const sumAll = function(num1, num2) {
    let sum = 0;
    let top;
    let bottom;

    if (typeof(num1) !== 'number' || typeof(num2) !== 'number' || 
        num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    if (num1 > num2) {
        top = num1;
        bottom = num2;
    } else {
        top = num2;
        bottom = num1;
    }

    for (let i = bottom; i <= top; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
