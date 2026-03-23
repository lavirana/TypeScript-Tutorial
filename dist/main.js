let firstname = "Ashish";
console.log(firstname);
let someVariable;
someVariable = 12;
someVariable = "hello";
//unknown
let somevar;
somevar = 12;
//normal function
function add(a, b) {
    return a + b;
}
console.log(add(1, 5));
//function expression
const add2 = function (a, b) {
    return a + b;
};
console.log(add2(4, 8));
//arrow function
const add3 = (a, b) => {
    return a + b;
};
console.log(add3(4, 6));
//implicit return in arrow function
const add4 = (a, b) => a + b;
console.log(add4(7, 7));
function great(name) {
    console.log(`Hello ${name}`);
}
great('Ashish Rana');
function great2(name) {
    console.log(`Hello ${name !== null && name !== void 0 ? name : "guest"}`);
}
great2();
//throw error
//infinite loop
function throwError(message) {
    throw new Error(message);
}
try {
    throwError("Something went wrong!");
}
catch (e) {
    console.log("I caught the error: " + e.message);
}
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    else {
        throwError("invalid args");
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
};
console.log(person);
//array tuples
const fruits = ['apple', 'orange'];
const numbers = [3, 55, 77];
fruits.push('mango');
console.log(fruits);
//type inference
const fruits2 = ['app', 'orang'];
const number2 = [3, 6];
const myArray = [1, 2, 3, 'orang', false];
console.log(myArray);
const personsArr = [
    { firstName: "Ashish", lastName: "Rana" }
];
const myCustomTuple2 = ["ashish", "rana", 4];
const myCustomTuple = ["ashish", "rana", 4];
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
function getUserDirection(direction) {
    if (direction === Direction.UP) {
        console.log('Going UP');
    }
    else if (direction === Direction.DOWN) {
        console.log('Going DOWN');
    }
    else if (direction === Direction.LEFT) {
        console.log('Going LEFT');
    }
    else if (direction === Direction.RIGHT) {
        console.log('Going RIGHT');
    }
}
getUserDirection(Direction.LEFT);
export {};
//type casting / assertion
