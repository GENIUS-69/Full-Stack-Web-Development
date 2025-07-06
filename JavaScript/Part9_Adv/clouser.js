function outer() {
    let counter = 4;
    return function () {
        counter++;
        return counter;
    }
}

let increment = outer();
console.log(increment()); // 5
console.log(increment()); // 6
console.log(increment()); // 7
console.log(increment()); // 8
