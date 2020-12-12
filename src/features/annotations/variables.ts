//: number - type annotation
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truth: boolean[] = [true, true, false];

//Classes
class Car {
}

let car: Car = new Car();

//Object literal
let points: { x: number, y: number } = {
    x: 10,
    y: 20,
};
//Ebat sho ts tworit
let carArray: Car[] = [new Car(), new Car()];

//Function
const logNumber: (i: number) => void
    = (i: number) => {
    console.log(i)
};

//When to use annotations
//1) Function that return any type
const json = '{"x":10, "y":20}';
const coords: { x: number, y: number } = JSON.parse(json);

//When we declare a var on one line
//and init later
let words = ['red', 'green', 'blue'];
let foundedWord: boolean;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundedWord = true;
    }
}

//3) When we have var type cannot be inferred correctly
let numbers = [-10, 20, 4];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}


