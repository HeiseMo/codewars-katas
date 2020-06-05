//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

const zero = (operation) => !operation ? 0 : operation(0);
const one = (operation) => !operation ? 1 : operation(1);
const two = (operation) => !operation ? 2 : operation(2);
const three = (operation) => !operation ? 3 : operation(3);
const four = (operation) => !operation ? 4 : operation(4);
const five = (operation) => !operation ? 5 : operation(5);
const six = (operation) => !operation ? 6 : operation(6);
const seven = (operation) => !operation ? 7 : operation(7);
const eight = (operation) => !operation ? 8 : operation(8);
const nine = (operation) => !operation ? 9 : operation(9);
const times = (a) => (b) => b * a;
const plus = (a) => (b) => b + a;
const minus = (a) => (b) => b - a;
const dividedBy = (a) => (b) => Math.floor(b / a);