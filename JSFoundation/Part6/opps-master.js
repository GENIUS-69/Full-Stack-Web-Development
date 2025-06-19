let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function () {
        return `${this.make} car got started in ${this.year}`;

    }
}
// console.log(car.start());

function person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new person("John", 30);
// console.log('Name:', john.name);

function Animal(type) {
    this.type = type;
}

Animal.prototype.speak = function () {
    return `The ${this.type} makes a sound.`;
}
Array.prototype.hitesh = function () {
    return `Custom method for ${this}`;
}

let myArray = [1, 2, 3, 4, 5];
// console.log(myArray.hitesh());

let myNewArray = [1, 2, 3];
// console.log(myNewArray.hitesh());

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        return `${this.make} ${this.model} is starting.`;
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make} ${this.model} is driving.`;
    }
}

let myCar = new Car("TATA", "Safari")
// console.log(myCar.start());
// console.log(myCar.drive());

let Vehicle1 = new Vehicle("Toyota", "Legender")
// console.log(Vehicle1.make);

//Encapsulation
class BankAccount {
    #balance = 0; //# private field

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
account.deposit(1000);
account.deposit(500);
// console.log(account.getBalance());
// console.log(account.balance);

//Abstraction
class coffeeMachine {
    start() {
        //call DB
        //filter value
        return "Coffee machine started.....";
    }
    brewCoffee() {
        // complex calculation
        return "Brewing coffee...";
    }
    pressStartButton() {
        this.start();
        this.brewCoffee();
    }
}

let myMachine = new coffeeMachine();
// console.log(myMachine.pressStartButton());

//Polymorphism
class Bird {
    fly() {
        return "Bird is flying...";
    }
}

class Penguin extends Bird {
    fly() {
        return "Penguins can't fly!";
    }
}

let bird = new Bird();
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());

//static methods
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

let minicalc = new Calculator();
// console.log(minicalc.add(5, 10)); // This will throw an error
// console.log(Calculator.add(5, 10)); // Correct way to call static method


//Getters and Setters
class Employee {
    constructor(name, salary) {
        this.name = name;
        this._salary = salary; // Using underscore to indicate a private property
    }

    get salary() {
        return this._salary;
    }

    set salary(value){
        if (value < 0) {
            console.error("Invalid salary amount");
        } else {
            this._salary = value;
        }
    }
}

let emp = new Employee("Alice", -50000);
console.log('Name:', emp.name);
console.log('Salary:', emp.salary); // Accessing the getter
emp.salary = 60000; // Using the setter to update salary
console.log('Updated Salary:', emp.salary); // Accessing the updated salary
