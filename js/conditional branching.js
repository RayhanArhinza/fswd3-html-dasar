// Conditional: If Else
let response4 = prompt("1+1 =");
if (response4 == 2) {
    alert("Correct!");
} else {
    alert("Wrong!");
};

// Conditional: Else If
let response5 = prompt("1+1 = ");
if (response5 == 2) {
    alert("correct!");
} else if (response5 < 2) {
    alert("Too low!");
} else {
    alert("Too high!");
};

//Conditional: Switch
let color = "red";
switch (color) {
    case "red":
        alert("I lover red!");
        break;
    case "blue":
        alert("I lover blue!");
        break;
    default:
        alert("I don't know what color it is!");
        break;
};
