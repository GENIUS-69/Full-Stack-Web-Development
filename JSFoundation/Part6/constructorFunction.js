function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model) {
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota", "Supra");
// console.log(myCar);

let myNewCar = new Car("Tata", "Safari")
// console.log(`myNewCar `, myNewCar);

function Tea(type) {
    this.type = type;
    this.describe = function () {
        return `This is a cup of ${this.type} tea.`;
    }
}

let lemonTea = new Tea("Lemon");
console.log(lemonTea.describe());

function Animal(species) {
    this.species = species;

}

Animal.prototype.sound = function () {
    return `The ${this.species} makes a sound.`;
}

let dog = new Animal("Dog");
console.log(dog.sound());

function Drink(name) {
    if (!new.target) {
        throw new Error("Drink must be called with new");
    }
    this.name = name;
}

let tea = new Drink("Tea");
let coffee = Drink("Coffee");// Error: Drink must be called with new