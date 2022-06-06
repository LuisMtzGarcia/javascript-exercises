const palindromes = function (string) {
    string = string.toLowerCase();
    let reversedString = '';
    let cleanString = '';

    for (let i = (string.length - 1); i >= 0; i--) {
        if (isLetter(string[i])) {
            reversedString += string[i];
        }
    }

    for (let i = 0; i < string.length; i++) {
        if (isLetter(string[i])) {
            cleanString += string[i];
        }
    }

    return cleanString == reversedString;
};

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

// Do not edit below this line
module.exports = palindromes;
