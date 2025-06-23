const person = {
    name:"GENIUS",
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

person.greet(); // Hello, my name is GENIUS
const greetFunction = person.greet;
greetFunction(); // Hello, my name is undefined

const boundGreet =person.greet.bind({name:"John"});
console.log(boundGreet); // [Function: bound greet]
boundGreet(); // Hello, my name is John
