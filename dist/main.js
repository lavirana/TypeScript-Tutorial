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
export {};
