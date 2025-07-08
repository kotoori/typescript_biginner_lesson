enum TodoStatus{
	Todo,
	InProgress,
	Done,
};

type Todo = {
	id:string | number; //ユニオン型
	title:string,
	priority:number;
	status:TodoStatus;
};

//TODOリスト(配列)
let todoList:Todo[] = [];//配列として初期化

function createTodo([title,priority]:[string,number]):Todo{
	const newTodo:Todo = {
		id:Date.now(), //1970年1月1日0時0分からの経過ミリ秒（数字）
		title:title,
		priority:priority,
		status:TodoStatus.Todo,
	}
	return newTodo;
}

function addTodo(todo:Todo):void{
	todoList.push(todo);
	console.log(`Added:${todo.title}`);//表示用
}

const myTodo:Todo = createTodo(["プログラム作成",1]); //オブジェクトを作成してmyTodoに格納する
addTodo(myTodo);
console.log(todoList);
