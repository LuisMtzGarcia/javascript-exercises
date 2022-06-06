const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    currentYear = parseInt(currentYear);

    let oldest = people[0];

    let ages = [];

    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath) {
            let age = parseInt(people[i].yearOfDeath) - parseInt(people[i].yearOfBirth);
            ages.push(age);
        } else {
            let age = currentYear - parseInt(people[i].yearOfBirth);
            ages.push(age);
        }
    }

    let max = 0;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > max) {
            max = ages[i];
            oldest = people[i];
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
