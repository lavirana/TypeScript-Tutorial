# TypeScript-Tutorial

# TypeScript Tutorial — My Learning Notes

Personal learning notes while studying TypeScript from scratch. Simple explanations + code examples.

# What is TypeScript?

TypeScript is a superset of JavaScript — meaning all valid JavaScript code is also valid TypeScript. TypeScript just adds extra features on top of JavaScript, mainly static typing.

JavaScript  +  Types  +  Extra Features  =  TypeScript
Important: Browsers do not understand TypeScript directly. TypeScript must be transpiled (converted) into JavaScript before running in the browser.

TypeScript (.ts)  →  Transpile  →  JavaScript (.js)  →  Browser runs it
Why TypeScript?

Reason	Explanation
Catches errors early	Finds bugs at compile-time — before your code runs
Better autocomplete	VS Code gives much better suggestions and hints
Interfaces & Generics	Features that plain JavaScript does not have
Team collaboration	Clearly defined types make code easier to understand
How to Install TypeScript?

# Install TypeScript globally
npm install -g typescript

# Check version
tsc --version
Important Commands

# Command	What it does
npm init -y	Start a new project — creates package.json
npx tsc --init	Creates tsconfig.json — TypeScript configuration file
npx tsc --watch	Watches files in src folder and auto-transpiles on save
tsc	Compile TypeScript to JavaScript once
npx	Local package runner — runs packages without installing globally
Basic Types

# String
let name: string = "Ashish Rana";

# Number — covers integers and decimals
let age: number = 25;
let price: number = 99.99;

# Boolean
let isActive: boolean = true;
let isLoggedIn: boolean = false;
Type Inference

TypeScript is smart — it can automatically guess the type without you writing it.

# You do NOT need to write the type explicitly
let name = "Ashish";   // TypeScript knows it's a string
let age  = 25;         // TypeScript knows it's a number

# Now if you try to assign wrong type — TypeScript gives error
name = 100;  // ❌ Error: Type 'number' is not assignable to type 'string'
Union Type

A variable that can hold more than one type.


# age can be a number OR a string
let age: number | string;


age = 25;       // ✅ valid
age = "twenty"; // ✅ valid
age = true;     // ❌ Error — boolean not allowed
Any and Unknown Types

# any — disables type checking — avoid using it
let data: any = "hello";
data = 123;      // ✅ no error
data = true;     // ✅ no error — TypeScript stops checking

# unknown — safer version of any
# You must check the type before using it
let input: unknown = "hello";

if (typeof input === "string") {
    console.log(input.toUpperCase()); // ✅ safe to use now
}
Rule of thumb:

Avoid any — it defeats the purpose of TypeScript
Use unknown when type is not known — it forces you to check before using
Type Alias

Create a custom name for a type — reuse it anywhere.

# Define once
type UserID = number | string;

# Use anywhere
let id1: UserID = 101;
let id2: UserID = "USR-202";
Interface

Defines the shape of an object — what properties and types it should have.

interface User {
    id:      number;
    name:    string;
    email:   string;
    age?:    number;  // ? means optional
}

# Object must follow the interface shape
const user: User = {
    id:    1,
    name:  "Ashish Rana",
    email: "ashish@gmail.com",
};
Objects in TypeScript

# Define object type inline
const product: { name: string; price: number; active: boolean } = {
    name:   "MacBook Air",
    price:  1200,
    active: true,
};

# Better way — use Interface (see above)
Arrays

# Array of strings
let skills: string[] = ["PHP", "Laravel", "Vue"];

# Array of numbers
let scores: number[] = [95, 87, 92];

# Array of mixed types using union
let mixed: (string | number)[] = ["Ashish", 25, "Developer"];
Tuples

A Tuple is an array with a fixed size and fixed types at each position.

# Normal array — any length, same type
let arr: number[] = [1, 2, 3, 4, 5]; // any length

# Tuple — fixed length, each position has specific type
let user: [number, string, boolean] = [1, "Ashish", true];
//          ↑        ↑        ↑
//         id      name    active

user[0]; // 1       — number
user[1]; // "Ashish" — string
user[2]; // true    — boolean

# ❌ Wrong order gives error
let wrong: [number, string] = ["Ashish", 1]; // Error!

# Enums

Enums define a set of named constants — makes code more readable.

# Numeric enum — default starts at 0
enum Direction {
    Up,     // 0
    Down,   // 1
    Left,   // 2
    Right   // 3
}

let move: Direction = Direction.Up;
console.log(move); // 0

# String enum — more readable
enum Status {
    Active   = "ACTIVE",
    Inactive = "INACTIVE",
    Pending  = "PENDING",
}

let userStatus: Status = Status.Active;
console.log(userStatus); // "ACTIVE"
Functions — void and never

# void — function runs but returns nothing
function greet(name: string): void {
    console.log("Hello, " + name);
    // no return statement
}

# never — function NEVER finishes
# Either throws an error or runs forever
function throwError(message: string): never {
    throw new Error(message); // never returns
}

function infiniteLoop(): never {
    while (true) {
        // runs forever — never returns
    }
}
Simple difference:

void = function finishes but returns nothing
never = function never finishes at all

# Type Casting and Type Assertion

Sometimes you know more about a type than TypeScript does — you can tell TypeScript what type something is.

// Method 1 — using as keyword (recommended)
let input = document.getElementById("username") as HTMLInputElement;
input.value; // ✅ TypeScript now knows it is an input element

// Method 2 — using angle brackets (older syntax)
let input2 = <HTMLInputElement>document.getElementById("username");

// Another example
let value: unknown = "Hello TypeScript";
let length: number = (value as string).length;
console.log(length); // 16
tsconfig.json — Important Settings

After running npx tsc --init — key settings to know:

{
    "compilerOptions": {
        "target": "ES6",          // Which JavaScript version to compile to
        "rootDir": "./src",       // Where your TypeScript files are
        "outDir": "./dist",       // Where compiled JavaScript files go
        "strict": true,           // Enable all strict type checks
        "noImplicitAny": true     // Disallow 'any' type implicitly
    }
}
Project Folder Structure

typescript-tutorial/
├── src/
│   └── index.ts        ← Write TypeScript here
├── dist/
│   └── index.js        ← Compiled JavaScript goes here (auto-generated)
├── tsconfig.json       ← TypeScript configuration
└── package.json        ← Project info
Quick Reference Cheatsheet

// Basic Types
let name:    string  = "Ashish";
let age:     number  = 25;
let active:  boolean = true;
let nothing: null    = null;
let empty:   undefined = undefined;

// Union
let id: string | number = 101;

// Any / Unknown
let x: any     = "anything goes";
let y: unknown = "check type first";

// Array
let arr: string[] = ["PHP", "Laravel"];

// Tuple
let tuple: [number, string] = [1, "Ashish"];

// Enum
enum Role { Admin, Member, Guest }

// Interface
interface User { name: string; age: number; }

// Function
function add(a: number, b: number): number { return a + b; }
function log(msg: string): void { console.log(msg); }

// Type Assertion
let el = document.getElementById("app") as HTMLDivElement;
Resources

Official Docs: https://www.typescriptlang.org/docs
TypeScript Playground: https://www.typescriptlang.org/play
VS Code: Best editor for TypeScript — autocomplete works amazingly
