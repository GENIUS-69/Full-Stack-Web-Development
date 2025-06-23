console.log('Hello World!');

function sayHello() {
    console.log('I would like to say hello!');

}

setTimeout(() => {
    sayHello();
}, 3000);// In 3 seconds written in milliseconds

for (let index = 0; index < 9; index++) {
    const element = index;
    console.log('Index:', index, 'Element:', element);
}