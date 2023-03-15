// DATA TYPES

// Number

console.log("Arkatama" + 1);
console.log("Multi SOlusindo" + (2 * 5));
console.log(NaN * 3);

// Bigint
const bigInt = 123456789012345678901234567890n;
console.log(bigInt);

// String
const nama1 = "Arkatama;";
const nama2 = 'Arkatama;';
const nama3 = `Arkatama;`;
console.log(nama1);
console.log(nama2);
console.log(nama3);

// Boolean
let isLoggedIn = true;
let isAdmin = false;
let isGreater = 10 > 5;
let isLess = 10 < 5;
console.log(isLoggedIn);
console.log(isAdmin);
console.log(isGreater);
console.log(isLess);

// Null
let girlfriend = null;
console.log(girlfriend);

// Undefined
let name;
console.log('name');

// Symbol
let employee = Symbol('Joko');
console.log(employee);
console.log(employee.description);

// Object
let employeee = {
    name: "john",
    age: 30,
    job: "Web Developer",
    isMarried: false,
    hobbies: ["Sports", "Cooking"],
};
console.log(`His name is ${employeee.name} and he is ${employeee.age} years old.`);

