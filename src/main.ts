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