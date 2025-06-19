let computer = {cpu: 12}
let lenovo = {
    screen: "HD",
    __proto__: computer
}
let tomHardware = {};

// console.log(`computer `,lenovo.__proto__);
// console.log(`computer `,computer.__proto__);

let genericCars = {
    tyres: 4,
}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCars);
console.log(`tesla `,tesla);
console.log(`tesla `,Object.getPrototypeOf(tesla));