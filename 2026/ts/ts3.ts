type Calculate = (
	a:number,
	b:number
) => number;

const multiply:Calculate = (a, b) => {
	return a * b;
};
console.log(multiply(4, 3));

function greetOptional(name?:string):void{
	// nameは任意になる
	console.log(`${name ? name : "Guest"}`)
}
greetOptional();
greetOptional("Taro");

function greetDefault(name:string = "Guest"):void{
	console.log(`${name}`);
}
greetDefault();
greetDefault("Hanako");