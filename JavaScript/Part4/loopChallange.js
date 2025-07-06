/*
Write  a while loop that calculate the sum if all number from 1 to 5 and store result in a variable called sum.
*/

let sum = 0,n=5;

while (n!=0) {
    sum += n;
    n--;
}
console.log(sum);

/*
Write  a while loop that count from 5 to 1 and store number in array named CountDown.
*/

let CountDown = [];
let i = 5; 
while (i > 0) {
    CountDown.push(i);
    i--;
}
console.log(CountDown);

/*
Write  a while loop that prompts a user to enter their favorite tea until they enter "Stop". Store in array teaCollection.
*/

let teaCollection = [];
let tea=undefined;
do {
    tea = prompt("Enter your favorite tea or type 'Stop' to finish:");
    if (tea !== "Stop") {
        teaCollection.push(tea);
    }
} while (tea !== "Stop");

/*
Write a do while loop that add number from 1 to 3 and store the result in a variable called total.
*/
let total = 0;
let k = 1;
do {
    total += k;
    k++;
} while (k <= 3);