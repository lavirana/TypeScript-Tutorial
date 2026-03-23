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
throwError('Custom Error Message');
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
export {};
