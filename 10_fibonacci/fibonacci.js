const fibonacci = function(num) {
    num = parseInt(num);
    let result = 0;
    if (num < 0) {
        return "OOPS";
    } else if (num <= 1) {
        return num;
    } else {
        result = fibonacci(num-1) + fibonacci(num-2);
        return result;
    }


};

// Do not edit below this line
module.exports = fibonacci;
