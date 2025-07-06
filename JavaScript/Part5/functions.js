/*
1. Write a function named `makeTea` that takes one parameter, `TypeofTea`, and returns a string like `"Naking green tea"` ehwn called with variable named teaOrder.
*/

function makeTea(TypeofTea) {
    return `Making ${TypeofTea} tea`;
}
let teaOrder = makeTea("green");
console.log(teaOrder);

let sum = (a, b) => {
    return a + b;
}

console.log(sum(5, 10));