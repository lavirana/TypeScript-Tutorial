let firstname: string = "Ashish";
console.log(firstname);

let someVariable: any;
someVariable = 12;
someVariable = "hello";

//unknown
let somevar: unknown;
somevar = 12;

//normal function
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 5));

//function expression
const add2 = function(a: number, b: number): number {
    return a + b;
}
console.log(add2(4, 8));

//arrow function
const add3 = (a: number, b: number): number => {
    return a + b;
}
console.log(add3(4, 6));

//implicit return in arrow function
const add4 = (a: number, b: number): number => a + b;
console.log(add4(7, 7));

function great(name: string): void {
    console.log(`Hello ${name}`);
}
great('Ashish Rana');

function great2(name?: string): void {
    console.log(`Hello ${name ?? "guest"}`);
}
great2();

//throw error
//infinite loop

function throwError(message: string): never {
    throw new Error(message)
}
try {
    throwError("Something went wrong!");
} catch (e) {
    console.log("I caught the error: " + e.message);
}

// function overloading
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: number | string, b: number | string): string | number {
    if(typeof a === "number" && typeof b === "number") {
        return a + b;
    }else if(typeof a === "string" && typeof b === "string"){
        return a + " " + b;
    }else{
        throwError("invalid args");
    }
}

//objects in type script

/*
type Person = {
    firstName: string;
    lastName: string;
    age: number;
}
*/
interface Person  {
    firstName: string;
    lastName: string;
    age?: number;
}
interface Person {
    address?: {
        country: string;
        zipcode: string;
        houseNumber: number;
        city: string;
        state: string
    } 
}
const person = {
    firstName: "Ashish",
    lastName: "Rana",
    age: 33,
    address: {
        country: "india",
        zipcode: "145001",
        houseNumber: 's-453',
        city: "pathankot",
        state: "Punjab"
    } 
}

console.log(person);

//array tuples
const fruits: string[] = ['apple', 'orange'];
const numbers: number[] = [3,55,77];
fruits.push('mango');
console.log(fruits);

//type inference
const fruits2 = ['app', 'orang'];
const number2 = [3,6];
const myArray : (string | number | Boolean)[] = [1,2,3,'orang',false];
console.log(myArray);

const personsArr: readonly Person[] = [
    {firstName: "Ashish", lastName: "Rana"}
];

//tuples - array with fixed size and types
type myCustomTuple2 = [string, string, number];
const myCustomTuple2: myCustomTuple2 = ["ashish", "rana", 4];

const myCustomTuple: [string, string, number] = ["ashish", "rana", 4];

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

function getUserDirection(direction: Direction): void {
    if(direction === Direction.UP){
        console.log('Going UP');
    }else if(direction === Direction.DOWN){
        console.log('Going DOWN');
    }else if(direction === Direction.LEFT){
        console.log('Going LEFT');
    }else if(direction === Direction.RIGHT){
        console.log('Going RIGHT');
    }
}

getUserDirection(Direction.LEFT);