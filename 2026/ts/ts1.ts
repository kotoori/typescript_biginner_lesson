let message:string = "Hello, World!";
console.log(message);

let userName:string = "Taro";
let userAge:number = 40;
let isMember:boolean = true;

const numbers:number[] = [1, 2, 3, 4, 5];
const names:Array<string> = ["Tanaka", "Sato", "Suzuki"];
const fruits:string[] = ["apple", "banana", "cherry"];
fruits.push("orange");

function add(a:number, b:number):number {
	return a + b;
}
const addResult = add(3, 7);
console.log(addResult);

function getTupleUser():[string, number] {
	return ["Alice", 30]; // タプルで返す
}

const [tupleUserName, tupleUserAge] = getTupleUser();
console.log(`${tupleUserName}は${tupleUserAge}歳です`);

const scores:[string,...number[]] = ["得点", 90, 85, 95];
console.log(scores);