"use strict";
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(4, 3));
function greetOptional(name) {
    // nameは任意になる
    console.log(`${name ? name : "Guest"}`);
}
greetOptional();
greetOptional("Taro");
function greetDefault(name = "Guest") {
    console.log(`${name}`);
}
greetDefault();
greetDefault("Hanako");
