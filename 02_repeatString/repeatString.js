const repeatString = function(string, num) {
    let endString = '';

    if (num < 0) {
        return "ERROR";
    }

    for (let i = 0; i < num; i++) {
        endString += string;
    }
    return endString;
};

// Do not edit below this line
module.exports = repeatString;
