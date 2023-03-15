// String
var value;
value = String(value); //now value is a string  "true"
alert(typeof value); // string

// Numeric
alert("6" / "2"); // 3, strings are converted to numbers
let str = "123";
alert(typeof str);  // string
let num = Number(str); // becomes a number 123
alert(typeof num); // Number

// Boolean
alert(Boolean(1)); // true
alert(Boolean(0)); //false

alert(Boolean("Hello")); // true
alert(Boolean("")); // false