const sum = function (number1, number2) {
    const squared1 = number1 * number1;
    const squared2 = number2 * number2;
    const add = squared1 + squared2;
    const doubleSquared = add * add;
    return doubleSquared;

};

console.log(sum(2, 4));

function sum1(number1, number2) {
    const squared3 = number1 * number1;
    const squared4 = number2 * number2;
    const add1 = squared3 + squared4;
    const doubleSquared1 = add1 * add1;
    return doubleSquared1;

};

console.log(sum1(2, 4));

const sum3 = (number1, number2) =>
    ((number1 * number1) + (number2 * number2)) ** 2




console.log(sum3(2, 4));