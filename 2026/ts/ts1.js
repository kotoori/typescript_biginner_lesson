"use strict";
let message = "Hello, World!";
console.log(message);
let userName = "Taro";
let userAge = 40;
let isMember = true;
const numbers = [1, 2, 3, 4, 5];
const names = ["Tanaka", "Sato", "Suzuki"];
const fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
function add(a, b) {
    return a + b;
}
const addResult = add(3, 7);
console.log(addResult);
function getTupleUser() {
    return ["Alice", 30]; // タプルで返す
}
const [tupleUserName, tupleUserAge] = getTupleUser();
console.log(`${tupleUserName}は${tupleUserAge}歳です`);
// ...（スプレッド構文）は、配列やオブジェクトの要素を展開するための構文です。
// この場合、[string, ...number[]]は「最初にstring型が1つ、その後に0個以上のnumber型が続くタプル」を表します。
const scores = ["得点", 90, 85, 95];
console.log(scores);
