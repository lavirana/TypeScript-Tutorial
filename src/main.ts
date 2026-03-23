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
throwError('Custom Error Message');

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