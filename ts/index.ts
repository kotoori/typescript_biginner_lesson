let userName:string = "kotoori";
let age:number = 47;

function getUserInfo(uname:string, uage:number):[string, number]{
	return [uname, uage];
}

const [getUname, getUage] = getUserInfo(userName, age);
console.log(getUname);
