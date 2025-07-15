
const isNonEmptyString = (x:unknown):x is string =>{
	return typeof x === "string" && x.trim() !== "";
	//trim() 制御文字や両端の半角スペースを削る
	//xがstring型であり、かつ中身があれば、trueが返る
}

const validateName = (input:unknown):string => {
	if(isNonEmptyString(input)){
		return input;
	}
	throw new Error("名前を入力してください");
}

try{
	// const raw:unknown = 'kotoori'; //これはOK
	const raw:unknown = 200; //これはエラーになる
	const name = validateName(raw);
	console.log(`名前は${name}です`);
}
catch(e){
	//エラーがthrowされたらここが実行される
	console.error(e);
}