//型エイリアス
type User = {
	readonly id:number; // 上書き不可
	name:string;
	email?:string; // 省略可能
}

const user1:User = {
	id:1,
	name:"Taro",
}

const user2:User = {
	id:2,
	name:"Hanako",
	email:"hanako@example.com"
}

user1.name = "Jiro";
// user1.id = 3; //これはエラーになる

function showUser(user:User):void {
	console.log(`ID:${user.id}`);
	console.log(`Name:${user.name}`);
	if(user.email !== undefined) {
		console.log(`Email:${user.email}`);
	}
}

showUser(user1);
showUser(user2);
