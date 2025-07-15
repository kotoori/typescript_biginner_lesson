type User = {id:number, name:string} | null;

function normalize<T>(value:T):NonNullable<T>{
	if(value == null){//引数の値がnullかどうか判別
		throw new Error('null or undefined');
	}
	return value;
}

const user:User = {id:1, name:'kotoori'};
const validUser = normalize<User>(user);
console.log(validUser.name);

const noUser:User = null;
const validNoUser = normalize<User>(noUser);
console.log(validNoUser.name);
