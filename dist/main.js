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
//type casting / assertion
function addOrConcat(a, b, c) {
    if (c === "add") {
        return a + b;
    }
    else {
        return "" + a + b;
    }
}
console.log(addOrConcat(2, 5, "concat"));
const value = addOrConcat(2, 2, "concat");
const value2 = addOrConcat(2, 3, "add");
//dom
// select input field
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const form = document.getElementById("user-form");
const output = document.getElementById("output");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameValue = nameInput.value;
    const ageValue = ageInput.value;
    output.innerHTML = `<p> ${nameValue} : ${ageValue} </p>`;
});
//classes
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.isHungry = true; // class fields
        //  this.name = name;
        //this.age = age;
        this.species = species;
    }
    get hungerStatus() {
        return this.isHungry ? `${this.name}` : `${this.name} is full`;
    }
    feed(food) {
        this.isHungry = false;
        console.log(`${this.name} has been fed with ${food}`);
    }
    get info() {
        return `${this.name} is a ${this.age} year old ${this.species}`;
    }
}
class Dog extends Animal {
    constructor(name, age, breed, skills) {
        super(name, age, "Dog");
        this.bread = breed;
        this.skills = skills;
    }
}
class animal2 {
    constructor(name) {
        this.name = name;
    }
}
class Tiger extends animal2 {
    makeSound() {
        return `${this.name} is roaring`;
    }
}
const tom = new Animal("Lion", 9, "Dog");
//console.log(tom);
tom.name = "Cat";
console.log(tom.hungerStatus);
tom.feed("bread");
console.log(tom.hungerStatus);
console.log(tom.info);
const tom2 = new Dog("tom", 6, "greyhound", ["sit", "come"]);
console.log(tom2.hungerStatus);
tom.feed("milk");
console.log(tom.hungerStatus);
const tig = new Tiger('Tiger');
console.log(tig.makeSound());
//generics
//identity function with generics
function identity(data) {
    return data;
}
const val = identity("Ashish");
val.toUpperCase();
const val2 = identity(5);
val2.toString();
const val3 = identity(true);
val3.valueOf();
function identityWithConstraints(data) {
    return data;
}
const valS = identityWithConstraints("Hello there");
const valN = identityWithConstraints(4);
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement(["abcd", "efgh"]));
export {};
